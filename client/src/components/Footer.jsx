import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-32 bg-primary/3'>
     <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-10 border-b border-gray-600 text-black' >
    </div> 
    <div>
        <img src={assets.logo} alt="logo" className='w-32 sm:w-44 rounded-full cursor-pointer' />
        <p className="text-center text-gray-600">Connect with us</p>

    </div>
    <p className="text-center text-gray-600"> Copyright 2026 @ BLOGATE.All Rights Reserved </p>
    </div>
  )
}

export default Footer

