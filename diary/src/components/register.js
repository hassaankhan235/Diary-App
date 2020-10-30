import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch} from 'react-redux'
import { authenticate } from '../store/features/userSlice'


function Register() {

  // Define dispatch function to send authentication data
  const dispatch = useDispatch()

  // define use form hook constants
  const {register, handleSubmit, errors} = useForm({mode:'onBlur'})

  // Send Name, email, password for storage in database
  const onSubmit = (data) => {
    dispatch(authenticate(data))
  }

  return (
    <div className='container-fluid'>
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group mt-5">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" 
    id="exampleInputEmail1" placeholder="Enter Name"
    ref={register({required: true})} name='name'/>
    <small id="emailHelp" className="form-text text-muted">Type your Full name</small>
    </div>

    <div className="form-group mt-5">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" 
    id="exampleInputEmail1" placeholder="Enter email"
    ref= {register({required: true})} name='email'/>
    <small id="emailHelp" className="form-text text-muted">Type a valid email address</small>
    </div>

    <div className="form-group mt-5">
    <label htmlFor="exampleInputEmail1">Password</label>
    <input type="password" className="form-control" 
    id="exampleInputEmail1" placeholder="Enter Password"
    ref={register({required: true, minLength:6})} name='pwd'/>
    <small id="emailHelp" className="form-text text-muted">Password must have atleast 6 characters</small>
    </div>

    <button type="submit" className="btn btn-primary mt-5">Register</button>
    </form>
    </div>
  )
}

export default Register
