import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem';
import { blog_data } from '../../assets/assets'

const Listblogs = () => {

   const[blogs,setBlogs]=useState([]);

   const fetchBlogs=async()=>{setBlogs(blog_data)}

   useEffect(()=>{fetchBlogs()},[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50' >
      <h1>All Blogs</h1>
   
   <div className='relative h-4/5 max-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
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
              {blogs.map((blog, index) => {
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} /> 
              })}
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default Listblogs
