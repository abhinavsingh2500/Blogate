import React from 'react'
import {assets} from '../../assets/assets'
import { useNavigate, Outlet } from 'react-router-dom'
const Layout = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="p-6 border-b border-slate-200">
        <img
          src={assets.logo}
          alt="Blogate logo"
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
