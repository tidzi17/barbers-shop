import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col text-center items-center justify-center'>
        <h1 className='text-9xl font-extrabold text-white'>404</h1>
        <p className='text-white text-2xl'>UPS! Page Not Found</p>
        <Link to="/" className='text-white text-xl flex items-center gap-4'><FaArrowLeftLong  className='hover:scale-105'/>  Home</Link>
      
    </div>
  )
}

export default NotFound
