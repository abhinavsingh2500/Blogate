import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem';
import { blog_data } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'


const Listblogs = () => {

   const[blogs,setBlogs]=useState([]);
   const {axios}=useAppContext();
   const fetchBlogs=async()=>{
      try{
        const{data}=await axios.get('/api/admin/blogs')
        data.success ? setBlogs(data.blogs) : toast.error(data.message);
      }
      catch(error){
        toast.error(error.message)
      }
   }

   useEffect(()=>{fetchBlogs()},[])
  return (
    <div className='flex-1 bg-[#fcfaf5] p-5 md:p-10' >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 flex items-end justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-primary-700'>Library</p>
            <h1 className='mt-1 text-3xl font-semibold text-slate-800'>All blogs</h1>
          </div>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-700'>{blogs.length} entries</span>
        </div>
   <div className='relative overflow-x-auto rounded-2xl border border-primary/15 bg-white shadow-sm scrollbar-hide'>
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
              {blogs.map((blog, index) => {
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} /> 
              })}
            </tbody>
          </table>
        </div>

    </div>
    </div>
  )
}

export default Listblogs
