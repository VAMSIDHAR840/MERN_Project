import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import abc from "./style.module.css"
const Register = () => {
    let [name, changeName] = useState('')
    let [email, changeEmail] = useState('')
    let [phoneNo, changePhoneNo] = useState('')
    let [password, changepassword] = useState('')
    let nameChange = (e) => { changeName(e.target.value) }
    let emailChange = (e) => { changeEmail(e.target.value) }
    let phoneNoChange = (e) => { changePhoneNo(e.target.value) }
    let passwordChange = (e) => { changepassword(e.target.value) }

    let navi=useNavigate()
    let register = (e) => {
        e.preventDefault()
        let data = { name, email, phoneNo, password }
        axios.post('http://localhost:8000/register', data)
            .then((x) => {
                alert(x.data.message)
            })
            .catch(() => {
                alert("Invalid credentials")
            })
    }
    return (
        <div className={abc.div1}>
            <form action="" onSubmit={register}>
                <table>
                    <tr>
                        <td>
                        <h2> <label htmlFor="">Name :</label></h2>   
                        </td>
                        <td>
                        <input placeholder='Enter your name' value={name} onChange={nameChange} type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <h2> <label htmlFor="">Email :</label></h2>
                        </td>
                        <td>
                        <input value={email} placeholder='Enter your emailid' type="email" name="" onChange={emailChange} id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <h2> <label htmlFor="">PhoneNo : </label></h2>
                        </td>
                        <td>
                        <input value={phoneNo} placeholder='Enter your phoneNo' type="tel" name="" id="" onChange={phoneNoChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <h2><label htmlFor="">Password :</label></h2>
                        </td>
                        <td>
                        <input value={password} placeholder='Enter your password' type="text" name="" id="" onChange={passwordChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                <button  className={abc.btn1}>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
            <Link className={abc.link1} to='/login'>Click here to Login page</Link>
        </div>
    )
}

export default Register
