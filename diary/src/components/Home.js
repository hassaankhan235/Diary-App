import React from 'react'
import Guest from './guest'
import { useSelector} from 'react-redux'
import './home.css'
import RegisteredUser from './RegisteredUser'
import { registerUser } from '../store/features/userSlice'


function Home() {
  return(
    <div className=''>
    {
      useSelector((state) => {
        return state.myReducer.logIn ? <RegisteredUser/> : <Guest />
      }) 
    }  
      </div> 
  )
}

export default Home
