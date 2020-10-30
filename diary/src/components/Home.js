import React from 'react'
import Diary from '../diary'
import './home.css'


function Home() {
  return (
    <div className='background'>
    <div className='container-fluid d-flex'>
    <div className='txt-container'>
    <h1>Your Personal Diary Online <br/> 
    <a href='/register'>Register Now</a></h1>
    </div>
    <div className='diary-container'>
      <img src = {Diary} alt='Diary'/>
      </div>
    </div>
    </div>
  )
}

export default Home
