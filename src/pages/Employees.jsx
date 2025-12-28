import React, { useEffect, useState } from 'react'
import Table from '../component/Table'
import axios from 'axios'
import Form from '../component/Form'
import Edit from '../component/Edit'

const Employees = () => {
  const [employeesdata, setemployeesdata] = useState([])
  const [isForm, setisForm] = useState(false)
  const [isTable, setisTable] = useState(false)
  const [isedit, setisedit] = useState(false)
  const [editstoredata, seteditstoredata] = useState({})


  const getdata = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/employees')
      //  console.log(response.data);
      setemployeesdata(response.data)

    } catch (error) {
      console.log(error);

    }
  }

  const handlecreate = () => {

    setisTable(false)
    setisForm(true)
    setisedit(false)
  }

  const handletable = () => {

    setisTable(true)
    setisForm(false)
    setisedit(false)
  }

  const handledelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/employees/${id}`)
      console.log(response);

      getdata()

    } catch (error) {
      console.log(error);

    }

  }

  const handleedit = (item) => {
    // alert(iiii)
    // console.log(item);
    setisTable(false)
    setisForm(false)
    setisedit(true)
    seteditstoredata(item)

  }


  useEffect(() => {

    getdata()
    setisTable(true)

  }, [])

  return (
    <>
      {
        isForm &&

        <Form handletable={handletable} getdata={getdata}  />
      }

      {
        isTable &&

        <>
          <div className="top-bar">

            <button onClick={handlecreate} className="btn btn-create">Create</button>
            <input type="text" placeholder="Search to hear " className="search-box" />

          </div>

          <Table data={employeesdata} handledelete={handledelete} handleedit={handleedit} />
        </>

      }

      {
        isedit &&
        <Edit item={editstoredata} handletable={handletable}  getdata={getdata}/>
      }

    </>
  )
}

export default Employees