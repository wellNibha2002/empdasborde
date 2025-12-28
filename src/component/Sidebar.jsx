import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <h2 className="logo">EMP App</h2>

                <ul>
                    <Link className="Link" to={"Employees"} >👤 Employee</Link>
                </ul>
                <br />
                <ul>
                    <Link className="Link" to={"Abs"} >Attendence</Link>
                </ul>
            </div>
        </>
    )
}

export default Sidebar