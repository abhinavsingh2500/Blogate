import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
  const {navigate,token}=useContext(AppContext)

  return (
    <div className='relative z-50 px-4 py-4'>
      <div className='mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6'>
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt='logo'
          className='w-28 cursor-pointer rounded-full ring-2 ring-primary/20 sm:w-36'
        />
        <button
          onClick={() => navigate('/admin')}
          className='flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#e4bf67] px-5 py-2.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-6'
        >
          {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} className='w-3' alt='arrow' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
