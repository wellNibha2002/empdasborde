import React, { useEffect } from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'


const Layout = () => {

    const Navigate = useNavigate()

    useEffect(() => {
        const logindata = JSON.parse(localStorage.getItem('loginkey'))
        if (logindata) {
            Navigate('/home/Employees')
        } else {
            Navigate('/')
        }

    }, [])

    return (
        <>
            <div className="layout" >
                <Sidebar />

                <div className="main">
                    <Header />

                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout