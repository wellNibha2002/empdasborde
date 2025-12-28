import React from 'react'
import '../style/Form.css'
import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [DateofBirth, setDateofBirth] = useState('')
    const [Salary, setSalary] = useState('')
    const [Age, setAge] = useState('')
    const [Gender, setGender] = useState('')
    const [Designation, setDesignation] = useState('')
    const [Address, setAddress] = useState('')
    const [Description, setDescription] = useState('')
    const [ProfilePicture, setProfilePicture] = useState('')
    // console.log(Name, Email, DateofBirth, Salary, Age, Gender, Designation, Address, Description, ProfilePicture);

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const newuser = {
                name: Name,
                email: Email,
                dob: DateofBirth,
                salary: Salary,
                age: Age,
                gender: Gender,
                designation: Designation,
                address: Address,
                description: Description,
                profilePic: ProfilePicture
            }

            const response = await axios.post('http://localhost:8000/api/employees', newuser)
            console.log(response.data.message);
            alert(response.data.message)
            props.handletable()
            props.getdata()


        } catch (error) {
            console.log(error);
            alert(error.response.data.message)


        }
    }

    return (
        <>
            <div className="form-container">
                <h2>User Information Form</h2>

                <form className="form-grid">

                    <div>
                        <label>Name</label>
                        <input onChange={(e) => { setName(e.target.value) }} value={Name} type="text" placeholder="Enter your name" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} value={Email} type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label>Date of Birth</label>
                        <input onChange={(e) => { setDateofBirth(e.target.value) }} value={DateofBirth} type="date" />
                    </div>

                    <div>
                        <label>Salary</label>
                        <input onChange={(e) => { setSalary(e.target.value) }} value={Salary} type="number" placeholder="Enter salary" />
                    </div>

                    <div>
                        <label>Age</label>
                        <input onChange={(e) => { setAge(e.target.value) }} value={Age} type="number" placeholder="Enter age" />
                    </div>

                    <div>
                        <label>Gender</label>
                        <select onChange={(e) => { setGender(e.target.value) }}>
                            <option value="">Select gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label>Designation</label>
                        <input onChange={(e) => { setDesignation(e.target.value) }} value={Designation} type="text" placeholder="Software Developer" />
                    </div>

                    <div>
                        <label>Address</label>
                        <input onChange={(e) => { setAddress(e.target.value) }} value={Address} type="text" placeholder="Enter address" />
                    </div>

                    {/* <!-- Full width fields --> */}
                    <div className="full-width">
                        <label>Description</label>
                        <textarea onChange={(e) => { setDescription(e.target.value) }} value={Description} placeholder="Write something about yourself"></textarea>
                    </div>

                    <div className="full-width">
                        <label>Profile Picture</label>
                        <input onChange={(e) => { setProfilePicture(e.target.value) }} value={ProfilePicture} type="file" />
                    </div>

                    <div className="full-width">
                        <button onClick={(e) => { handlesubmit(e) }} type="submit">Submit</button>
                    </div>

                    <div className="full-width1">
                        <button onClick={() => { props.handletable() }} type="submit">Back</button>
                    </div>

                </form >
            </div >
        </>
    )
}

export default Form