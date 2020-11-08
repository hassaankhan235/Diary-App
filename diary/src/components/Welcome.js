import React from 'react'
import {useSelector} from 'react-redux'

function Welcome() {
  return (
    <div className='jumbotron'>
    <h1 className="display-4 text-dark">
    Welcome Home
      {
          useSelector((state) => {
              return ` ` + state.myReducer.user.username
          })
      }
      </h1>
    </div>
  )
}

export default Welcome
