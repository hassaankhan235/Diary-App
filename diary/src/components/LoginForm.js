import React from 'react'
import { login } from "../store/features/userSlice";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import "./login.css";

function LoginForm() {
// define use form hook constants
const {register, handleSubmit} = useForm({mode:'onBlur'})

// Define dispatch function to send authentication data
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(login(data))
  }

  return (
    <div className='background'>
    <div className="container-fluid halfscreen">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='mt-2 form-head'>
    Please type your email and password to sign in
    </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="text-light mt-3">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          name = 'email'
          ref={register({required: true})}
        />
      </div>

      <div className="form-group">
      <label htmlFor="exampleInputPassword" className="text-light mt-3">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword"
        placeholder="Enter Password"
        name = 'password'
        ref={register({required: true})}
      />
    </div>
    <button type='submit' className='btn btn-outline-primary btn-lg signIN'>
    Sign In
  </button>
    </form>
  </div>
    </div>
  )
}

export default LoginForm
