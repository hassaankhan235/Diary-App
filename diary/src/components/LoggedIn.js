import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { registerStateChange } from '../store/features/userSlice'


const LoggedIn = ({match, history}) => {
  const dispatch = useDispatch()
    return(
        <div className='container'>
        <div className='alert alert-success mt-5'>
        <h4 className='alert-heading'> STATUS </h4>
        {useSelector((state) => {
          if(state.myReducer.error){
            return "Username or Password is wrong"
          }
          // console.log("FETCH ST", state, state.myReducer.registered)
          else{
            return state.myReducer.registered ? "You are Registered":
          state.myReducer.logIn? "You are logged in" : "Logged Out" 
          }
        })}
        </div>

        <button onClick={() => {
          dispatch(registerStateChange())
          history.push('/')
        }}>
        Go to Home Screen
        </button>
          {console.log('HISTORY', history)}
        </div>
    )
  }

export default LoggedIn
