import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const authenticate = createAsyncThunk(
    'user/authenticate',
    async(data, thunkAPI)=> {
        axios.post('http://localhost:3001/register', {
            name: data.name,
            email: data.email,
            password: data.pwd
        })
        .then((respose) => {
            console.log("RESPONSE RECIEVED",respose.data, data)
        })
    }
)

export const login = createAsyncThunk(
    'user/login',
    async(data, thunkAPI)=> {
        const resp = axios.post('http://localhost:3001/login',{password:data.password})
        .then((respose) => {
            console.log('RESPONSE',respose.data)
            return respose.data
        })
        return resp
    }
)

export const user = createSlice({
  name: "users",
  initialState: {
    user: {}
  },
  reducers: {
    registerUser: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        diaryIds: action.payload.diaryid,
      });
    },
  },
  extraReducers: {
    [authenticate.fulfilled]: (state, action) => {
      console.log("chek", state, action);
    },
    [login.fulfilled]: (state, action) => {
      console.log('done', action, state)
      return {...state, user: action.payload}
    },
  },
});

export const {setUser} = user.actions;
export default user.reducer