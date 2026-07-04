import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative '>
      <div className='text-center mt-20 mb-8'>
       <div className='inline-flex items-center justify-center gap-4 px-6 py-2.5 mb-4 border  border-primary/70 bg-primary/10 rounded-full text-sm text-black-500 font-semibold'>

        <p> Integrated AI features</p>
        <img src={assets.star_icon} className='w-4' alt="" />
       </div>
       <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>Let's try <span className='text-primary'>blogging</span><br/></h1>
      </div>
      <p className='my-6 sm:my-8 max-2-2xl m-auto max-w-3xl text-center text-gray-600 text-sm sm:text-base'>
    “The first thing you need to decide when you build your blog is what you want to accomplish with it, and what it can do if successful.”<br/>
    <span className='font-bold'> Ron Dawson
</span></p>
<form className='flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8'>
  <input type="text" placeholder='Search for blogs' className='px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base w-full max-w-md' />
  <button className='bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-primary-dark transition-colors duration-300'>Search</button>
</form>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50-z-1  opacity-50' />
    </div>
  )
}

export default Header
