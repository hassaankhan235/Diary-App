import React from 'react'


const LoggedIn = ({match}) => {
    return(
        <div>{match.params.loggedIN}</div>
    )
  }

export default LoggedIn
