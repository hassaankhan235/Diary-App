import React from "react";
import { useSelector } from "react-redux";
import LoginForm from './LoginForm' 
import { Redirect } from 'react-router-dom'

function Login() {

  return (
      useSelector((state) => {
        console.log('fetch',state,state.myReducer.user.id)
        if(state.myReducer.user.id){
          const id = state.myReducer.user.id
          return <Redirect to= {`/${id}`}  />
        }
        else if(state.myReducer.error){
          return <Redirect to={'User not found'} />
        }
        else{
          return <LoginForm />
        }
      })
  );
}

export default Login;
