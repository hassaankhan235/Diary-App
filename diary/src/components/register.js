import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector} from 'react-redux'
import RegistrationForm from './RegistrationForm'


function Register() {



  return (
      useSelector((state) => {
        if(state.myReducer.logIn && state.myReducer.registered) {
          return <Redirect to='Congrats Registeration Successful'/>
        }
        else if(!state.myReducer.logIn && !state.myReducer.registered){
          return <RegistrationForm />
        }
        else if(state.myReducer.logIn){
          return (
            <div className = 'container alert alert-success mt-5'>
            <h4 class="alert-heading"> Already Registered !</h4>
            You are Alreasy Registered. Please log out 
            to register with another ID
            </div>)
        }
        else if(state.myReducer.error) {
          return <Redirect to='Unable to Register'/>
        }
      })
  )
}

export default Register
