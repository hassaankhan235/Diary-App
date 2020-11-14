import React from 'react'
import Welcome from './Welcome'
import Post from './Post'
import DiaryPostsLogic from './Diary Posts/DiaryPostsLogic'
import './RegisteredUser.css'
import { useSelector } from 'react-redux'

function RegisteredUser() {
  const count = useSelector((state) =>{
    console.log("COUNT IS ",state.postReducer.postCount)
    return state.postReducer.postCount.count
  } )
  console.log("COUNT IS ", count)
  return (
    <div className= {`${count >= 2 ? "full-height-bg" : "diary-background"}`}>
    <Welcome />
    <Post />
    <DiaryPostsLogic  style={{backgroundColor:'blueviolet',height:'auto'}} />
    </div>
    )
}

export default RegisteredUser
