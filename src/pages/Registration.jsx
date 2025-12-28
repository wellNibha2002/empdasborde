import React, { useState } from 'react'
import '../component/Registration.css'
import axios from 'axios'
import { Form, useNavigate } from 'react-router-dom'

const Registration = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // console.log(Name,Email,Password);
    

    const Nevigate = useNavigate()

    const handleregister = async (e) => {
        e.preventDefault()
        // console.log('Form submitted');
        
        try {
            const newuser ={
                name:Name,
                email: Email,
                password: Password
            }
            console.log(newuser);
          const response = await axios.post('http://localhost:8000/api/auth/register',newuser) 
          console.log(response.data.message);
          alert(response.data.message)
           Nevigate('/')
            
        } catch (error) {
           console.log(error.response.data.message);
           alert(error.response.data.message)
        
        }
    }



    return (
        <>
            <div className='box1'>
                <div className="container">
                    <h2>Create Account</h2>
                    <p className="subtitle">Please fill in the details</p>

                    <form>
                        <label>Name</label>
                        <input onChange={(e) => { setName(e.target.value) }} value={Name} type="text" placeholder="Enter name" />

                        <label>Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} value={Email} type="email" placeholder="Enter email" />

                        <label>Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} value={Password} type="password" placeholder="Enter password" />

                        <button onClick={(e)=>{handleregister(e)}} type="submit">Register</button>
                    </form>

                    <p className="login-text">
                        Already have an account?
                        <a href="#">Login</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Registration