import React from 'react'
import Welcome from './Welcome'
import Post from './Post'
import DiaryPostsLogic from './Diary Posts/DiaryPostsLogic'
import './RegisteredUser.css'

function RegisteredUser() {

  return (
    <div className='diary-background'>
    <Welcome />
    <Post />
    <DiaryPostsLogic />
    </div>
    )
}

export default RegisteredUser
