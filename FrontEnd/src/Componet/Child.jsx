import React from 'react'
import { Link } from 'react-router-dom'
import abc from "./style.module.css"
const Child = () => {
  return (
    <div className={abc.div4}>
      <div>
        <Link to='/register'>Register</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/home'>Home Page</Link>
      </div>
    </div>
  )
}

export default Child
