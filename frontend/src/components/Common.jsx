import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../css/Common.css'

const Common = () => {
    return (
        <div className='common_div'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Common