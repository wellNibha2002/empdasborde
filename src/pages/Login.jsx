import React, { useState } from 'react'
import '../component/Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // console.log(Email, Password);

    const Nevigate = useNavigate()

    const handlelogin = async () => {

        try {
            const newuser = {
                email: Email,
                password: Password
            }
            // console.log(newuser);
            const response = await axios.post('http://localhost:8000/api/auth/login', newuser)
            // console.log(response.data.user);
            localStorage.setItem("loginkey", JSON.stringify(response.data.user))
               alert(response.data.message)
              


            Nevigate('/home/Employees')


        } catch (error) {
            console.log(error.response.data.message);
            alert(error.response.data.message)

        }
    }



    return (
        <>
            <div className='box'>
                <div className="login-card">
                    <h2>Login</h2>
                    <p>Welcome back, please login</p>

                    <label>Email</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} value={Email} type="email" placeholder="Enter email" />

                    <label>Password</label>
                    <input onChange={(e) => { setPassword(e.target.value) }} value={Password} type="password" placeholder="Enter password" />

                    <button onClick={handlelogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login