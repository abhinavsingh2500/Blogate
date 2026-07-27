import React from 'react'
import {assets} from '../../assets/assets'
import { useNavigate, Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
const Layout = () => {
    const navigate = useNavigate()
    const logout = () => {
        navigate('/')
    }
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="px-6 border-b border-slate-200 flex items-center justify-between h-[96px] bg-white shadow-md">
        <img
          src={assets.logo}
          alt="Blogate logo"
          className="w-32 sm:w-40 cursor-pointer rounded-full bg-primary/10 p-1 m-3"
          onClick={() => navigate('/')}
        />
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-slate-900 rounded-full cursor-pointer hover:bg-primary/80 transition duration-300'>Logout</button>
      </div>

      <div className="flex min-h-[calc(100vh-96px)]">
        
        <Sidebar/>
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
