import React from 'react'
import {useSelector} from 'react-redux'

function Welcome() {
  return (
    <h3 className="text-light mt-0 bg-primary container-fluid text-center welcome">
    Welcome Home
      {
          useSelector((state) => {
              return ` ` + state.myReducer.user.username
          })
      }
      </h3>
  )
}

export default Welcome
