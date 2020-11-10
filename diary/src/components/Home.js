import React from 'react'
import Guest from './guest'
import { useSelector} from 'react-redux'
import RegisteredUser from './Registered User/RegisteredUser'


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
