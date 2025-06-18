import React from 'react'
import {Link} from 'react-router-dom'
const success = () => {
  return (
    <div>
      <p>Payment is sucessful</p>
      <Link to='/home'>
        Go to Home page
      </Link>
    </div>
  )
}

export default success
