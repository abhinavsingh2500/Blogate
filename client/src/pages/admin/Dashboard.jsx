import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const { axios } = useAppContext();

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard');
      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => { fetchDashboardData() }, [])

  return (
    <div className='flex-1 bg-[#fcfaf5] p-5 md:p-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-primary-700'>Overview</p>
            <h1 className='mt-1 text-3xl font-semibold text-slate-800'>Your publishing desk</h1>
          </div>
          <p className='text-sm text-slate-500'>A quick look at your blog activity.</p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
       <div className='flex items-center gap-4 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm'>
        <img src={assets.dashboard_icon_1 } alt="" className='w-16 h-16' />
        <div>
          <p className='text-2xl font-bold'>{dashboardData.blogs}</p>
          <p className='text-gray-500'>Blogs</p>
        </div>
       </div>
       <div className='flex items-center gap-4 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm'>
        <img src={assets.dashboard_icon_2 } alt="" className='w-16 h-16' />
        <div>
          <p className='text-2xl font-bold'>{dashboardData.comments}</p>
          <p className='text-gray-500'>Comments</p>

        </div>
       </div>

       <div className='flex items-center gap-4 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm'>
        <img src={assets.dashboard_icon_3 } alt="" className='w-16 h-16' />
        <div>
          <p className='text-2xl font-bold'>{dashboardData.drafts}</p>
          <p className='text-gray-500'>Drafts</p>
        </div>
       </div>
        </div>
      <div className='mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm'>
        <div className='flex items-center gap-3 border-b border-slate-100 px-5 py-4'>
          <div className='rounded-xl bg-primary/10 p-2'>
            <img src={assets.dashboard_icon_4 } alt="" className='h-7 w-7' />
          </div>
          <div>
            <h2 className='font-semibold text-slate-800'>Recent blogs</h2>
            <p className='text-xs text-slate-500'>Your latest published content</p>
          </div>
        </div>
        <div className='relative overflow-x-auto scrollbar-hide'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='bg-slate-800 text-xs uppercase tracking-wider text-slate-200'>
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
