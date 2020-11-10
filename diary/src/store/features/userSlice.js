import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const registerUser = createAsyncThunk(
    'user/authenticate',
    async(data, thunkAPI)=> {
        const resp = axios.post('http://localhost:3001/register', {
            username: data.username,
            email: data.email,
            password: data.password
        })
        .then((response) => {
          console.log("REG RES",response.data,response.statusText)
            return response
        })
        return resp
    }
)

export const login = createAsyncThunk(
    'user/login',
    async(data, thunkAPI)=> {
        const resp = axios.post('http://localhost:3001/login',{
        email:data.email,  
        password:data.password})
        .then((respose) => {
            return respose.data
        })
        return resp
    }
)

export const user = createSlice({
  name: 'users',
  initialState: {
    user: {},
    registered: false, 
    error: false,
    logIn: false
  },
  reducers: {
    registerStateChange: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.registered = false
      state.error = false
    },
    logOut: state => {
      return {...state,
        user: {},
        registered: false, 
        error: false,
        logIn: false
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },


  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      return {...state, 
        user: action.payload.data, 
        registered: true,
        logIn: true}
    },
    [registerUser.rejected]: (state, action) => {
      return {...state, 
              registered: false ,
              error: true, 
              logIn: false }
    },
    [login.fulfilled]: (state, action) => {
      return {...state, 
        user: action.payload, 
        logIn: true}
    },
    [login.rejected]: (state) => {
      return { ...state,
        error: true,
        logIn: false
      }
    },
  },
});

export const {registerStateChange, logOut} = user.actions;
export default user.reducer