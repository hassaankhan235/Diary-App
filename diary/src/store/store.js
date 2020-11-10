import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './features/userSlice'
import postReducer from './features/postSlice'

const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
    reducer:{
        myReducer: userReducer,
        postReducer: postReducer
    },
    middleware
})
