import React from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { useState } from 'react'
import { motion } from "motion/react"
import BlogCard from './Blogcard'
const Bloglist = () => {
  const [menu, setMenu] = useState('All')
  return (
    <div>
    <div className='flex justify-center gap-5 sm:gap-8 my-10 relative'>
        {blogCategories.map((item)=>(
          <div key={item} onClick={() => setMenu(item)} className={`relative px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-300 text-sm sm:text-base cursor-pointer transition-colors duration-300 ${menu === item ? 'bg-primary text-white border-primary' : 'hover:bg-primary hover:text-white'}`}>
            {item}
          </div>
        ))}
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 cursor-pointer'>
        {blog_data.filter((blog)=>menu === 'All' ? true: blog.category === menu).map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </div>
  )
}

export default Bloglist
