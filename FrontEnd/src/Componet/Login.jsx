import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import abc from "./style.module.css"
const Login = () => {
  let [email, changeEmail] = useState('')
  let [password, changepassword] = useState('')
  let emailChange = (e) => { changeEmail(e.target.value) }
  let passwordChange = (e) => { changepassword(e.target.value) }

  let navigate=useNavigate()

  let register=(e)=>{
  e.preventDefault()
  let data={email,password}
  axios.post('http://localhost:8000/login', data)

  .then((res)=>{
     if (res.data.status===200) {
      alert(res.data.message)
      navigate('/home')
     } else {
      alert(res.data.message)
     }
  })
}

  return ( 
    <div className={abc.div2}>
      <form action="" onSubmit={register}>
        <table>
          <tr>
            <td><h3><label htmlFor="">Email :</label></h3></td>
            <td><input value={email} placeholder='Enter your emailid' type="email" name="" onChange={emailChange} id="" /></td>
          </tr>
          <tr>
            <td><h3><label htmlFor="">Password :</label></h3></td>
            <td> <input value={password} placeholder='Enter your password' type="text" name="" id="" onChange={passwordChange} /> </td>
          </tr>
          <tr>
            <td>
        <button className={abc.btn2}>Login</button>
            </td>
          </tr>
        </table>
      </form>
      <Link className={abc.link2} to="/register">Click Here to Register</Link>
    </div>
  )
}

export default Login
