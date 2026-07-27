import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="bg-white border-r border-slate-200 p-6 min-h-[calc(100vh-96px)] w-72">
      <NavLink
        end={true}
        to='/admin'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 min-w-64 cursor-pointer ${
            isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700 hover:bg-slate-100'
          } rounded-full`
        }
      >
        <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
        <p className="text-sm font-medium">Dashboard</p>
      </NavLink>

      <NavLink
    
        to='/admin/Addblog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 min-w-64 cursor-pointer ${
            isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700 hover:bg-slate-100'
          } rounded-full`
        }
      >
        <img src={assets.add_icon} alt="" className='min-w-4 w-5' />
        <p className=''>Add Blog</p>
      </NavLink>

      <NavLink
    
        to='/admin/Listblog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 min-w-64 cursor-pointer ${
            isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700 hover:bg-slate-100'
          } rounded-full`
        }
      >
        <img src={assets.list_icon} alt="" className='min-w-4 w-5' />
        <p className=''>List Blogs</p>
      </NavLink>

      <NavLink
    
        to='/admin/Comments'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 min-w-64 cursor-pointer ${
            isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700 hover:bg-slate-100'
          } rounded-full`
        }
      >
        <img src={assets.comment_icon} alt="" className='min-w-4 w-5' />
        <p className=''>Comments</p>
      </NavLink>
     
   
    </div>
  )
}

export default Sidebar
