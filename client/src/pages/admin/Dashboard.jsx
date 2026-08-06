import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
const Dashboard = () => {

  const [dashboardData, setDashboardData]=useState({
    blogs:0,
    comments:0, 
    drafts:0,
    recentBlogs:[]
  })

const fetchDashboardData = async () => { setDashboardData(dashboard_data) }

useEffect(() => {fetchDashboardData()}, [])
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      
      <div className='bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4'>
       
       <div className='flex items-center gap-4 p-4 bg-blue-100 rounded-lg shadow-md'>
        <img src={assets.dashboard_icon_1 } alt="" className='w-16 h-16' />
        <div>
          <p className='text-2xl font-bold'>{dashboardData.blogs}</p>
          <p className='text-gray-500'>Blogs</p>
        </div>
       </div>
       <div className='flex items-center gap-4 p-4 bg-blue-100 rounded-lg shadow-md'>
        <img src={assets.dashboard_icon_2 } alt="" className='w-16 h-16' />
        <div>
          <p className='text-2xl font-bold'>{dashboardData.comments}</p>
          <p className='text-gray-500'>Comments</p>

        </div>
       </div>

       <div className='flex items-center gap-4 p-4 bg-blue-100 rounded-lg shadow-md'>
        <img src={assets.dashboard_icon_3 } alt="" className='w-16 h-16' />
        <div>
          <p className='text-2xl font-bold'>{dashboardData.drafts}</p>
          <p className='text-gray-500'>Drafts</p>
        </div>
       </div>
      <div>
        <img src={assets.dashboard_icon_4 } alt="" className='w-16 h-16' />
        <div>
       <p className='text-gray-500'>Recent Blogs</p>
        </div>
        <div className='relative max-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3 xl:px-6'>
                  #
                </th>
                <th scope='col' className='px-6 py-3'>
                  Blog Title
                </th>
                <th scope='col' className='px-6 py-3 max-sm:hidden'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3 max-sm:hidden'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3 max-sm:hidden'>
                  Actions
                </th>
              </tr>
              </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboardData} index={index + 1} /> 
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
