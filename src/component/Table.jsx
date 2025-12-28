import React, { useEffect, useState } from 'react'
import '../style/Table.css'
import { EmployeesTableHeading } from '../util/Common'

const Table = (props) => {

    const [tabledata, settabledata] = useState([])
    //    console.log(tabledata);




    useEffect(() => {
        settabledata(props.data)

    }, [props.data])


    return (
        <>


            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            {/* <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Salary</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Designation</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Profile Pic</th>
                            <th>Action</th> */}


                            {EmployeesTableHeading.map((x) => {
                                // console.log(x);
                                return (
                                    <th>{x}</th>
                                )

                            })}

                        </tr>
                    </thead>


                    <tbody>
                        {
                            tabledata.map((item) => {
                                console.log(item);

                                return (
                                    <tr>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.address}</td>
                                        <td>{item.description}</td>
                                        <td><div className="profile-pic">{item.profilePic}</div></td>
                                        <td className="action-buttons">
                                            <button onClick={()=>props.handleedit(item)} className="btn btn-edit">Edit</button>
                                            <button onClick={()=>props.handledelete(item.id)} className="btn btn-delete">Delete</button>
                                            {/* <button className="btn btn-view">View</button> */}
                                        </td>

                                    </tr>
                                )
                            })

                        }

                    </tbody>


                </table>
            </div>

        </>
    )
}

export default Table