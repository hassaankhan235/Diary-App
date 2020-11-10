import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const post = createAsyncThunk(
    'send/post',
    async(data, thunkAPI)=> {
        const resp = axios.post('http://localhost:3001/',{
        email: data.email,
        topic:data.topic,  
        date:data.date,
        post: data.post
      })
        .then((response) => {
            return response.data
        })
        return resp
    }
  )

export const getPosts = createAsyncThunk(
    'get/post',
    async(data, thunkAPI) => {
        const resp = axios.post('http://localhost:3001/',{
            email: data,
            getpost: true
        })
        .then((response) => {
            return response.data
        })
        return resp
    }
)

  export const postslice = createSlice({
      name: 'posts',
      initialState: {
        posts: [{}],
        postCount: 0
      },
      extraReducers : {
        [post.fulfilled] : (action) => {

          },
        [getPosts.fulfilled] : (state, action) => {
            return {...state, posts: action.payload}
        }
      }
  })

  export default postslice.reducer