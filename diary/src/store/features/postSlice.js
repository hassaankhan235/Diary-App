import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const deletePost = createAsyncThunk(
  'post/delete',
  async(data, thunkAPI) => {
    const resp = axios.post('http://localhost:3001/',{
      delete: true,
      postid: data.postid
    })
    .then((response) => response.data)
    return resp
  }
)

export const updatePost = createAsyncThunk(
  'post/update',
  async(data, thunkAPI) => {
    const resp = axios.post('http://localhost:3001/', {
      update: true,
      postid: data.postid,
      post: data.post
    })
    .then((response) => response.data)
    return resp
  }
)

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

export const getPostCount = createAsyncThunk(
  'get/postCount',
  async(data, thunkAPI) => {
    const resp = axios.post('http://localhost:3001/', {
    email: data,
    getPostCount : true
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
        },
        [getPostCount.fulfilled] : (state, action) => {
          console.log('POST COUNT', action.payload)
          return {...state, postCount: action.payload}
        },
        [deletePost.fulfilled] : (state, action) => {
          console.log('POST DELETED', action.payload)
          return {...state}
        },
        [updatePost.fulfilled] : (state, action) => {
          return {...state}
        }
      }
  })

  export default postslice.reducer