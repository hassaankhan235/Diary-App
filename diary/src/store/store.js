import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './features/userSlice'

const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
    reducer:{
        myReducer: userReducer
    },
    middleware
})
