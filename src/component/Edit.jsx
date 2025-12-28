import React, { useEffect, useState } from 'react'
import '../style/Edit.css'
import axios from 'axios';

const Edit = (props) => {

  console.log(props.item);

  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Dob, setDob] = useState()
  const [Salary, setSalary] = useState()
  const [Age, setAge] = useState()
  const [Gender, setGender] = useState()
  const [Designation, setDesignation] = useState()
  const [Address, setAddress] = useState()
  const [Description, setDescription] = useState()
  const [ProfilePicture, setProfilePicture] = useState()
  const [Id, setId] = useState()

  // console.log(Name,Email,Dob,Salary,Age,Gender,Designation,Address,Description,ProfilePicture);

  const formatDate = (date) => {
    if (!date) return ""
    const [dd, mm, yyyy] = date.split("-")
    return `${yyyy}-${mm}-${dd}`
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const userdata = {
        "name": Name,
        "email": Email,
        "dob": Dob,
        "salary": Salary,
        "age": Age,
        "gender": Gender,
        "designation": Designation,
        "address": Address,
        "description": Description,
        "profilePic ": ProfilePicture
      }
      const response = await axios.put(`http://localhost:8000/api/employees/${Id}`, userdata)
      props.handletable()
      props.getdata()
      console.log(response);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {

    setName(props.item.name)
    setEmail(props.item.email)
    setDob(formatDate(props.item.dob))
    setSalary(props.item.salary)
    setAge(props.item.age)
    setGender(
      props.item.gender
        ? props.item.gender.charAt(0).toUpperCase() + props.item.gender.slice(1)
        : ""
    )
    setDesignation(props.item.designation)
    setAddress(props.item.address)
    setDescription(props.item.description)
    setProfilePicture(props.item.profilePic)
    setId(props.item.id)

  }, [])

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
            <input onChange={(e) => { setDob(e.target.value) }} value={Dob} type="date" />
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
            <select onChange={(e) => { setGender(e.target.value) }} value={Gender}>
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

        </form>
      </div>

    </>
  )
}

export default Edit