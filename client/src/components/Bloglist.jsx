import React from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from './Blogcard'

const Bloglist = () => {
  const [menu, setMenu] = useState('All')
  const navigate = useNavigate()

  const filteredBlogs = blog_data.filter((blog) => (menu === 'All' ? true : blog.category === menu))
  const featuredBlog = filteredBlogs[0]
  const restBlogs = filteredBlogs.slice(1)

  return (
    <section className='mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-0'>
      <div className='mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary-700'>Explore stories</p>
          <h2 className='text-3xl font-semibold text-slate-900'>Fresh reads for curious minds</h2>
        </div>
        <div className='flex flex-wrap gap-3'>
          {blogCategories.map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 sm:px-5 ${menu === item ? 'border-primary bg-primary text-slate-900 shadow-sm' : 'border-slate-200 bg-white/80 text-slate-600 hover:border-primary hover:text-primary-700'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {featuredBlog && (
        <div
          onClick={() => navigate(`/blog/${featuredBlog._id}`)}
          className='group mb-8 cursor-pointer overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-primary/10 to-slate-50 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 sm:p-6'
        >
          <div className='grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
            <div className='order-2 lg:order-1'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary-700'>Featured story</p>
              <h3 className='mt-3 text-2xl font-semibold text-slate-900'>{featuredBlog.title}</h3>
              <p className='mt-3 text-sm leading-7 text-slate-600'>{featuredBlog.description.replace(/<[^>]*>/g, '').slice(0, 180)}...</p>
              <span className='mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition duration-300 group-hover:bg-primary group-hover:text-white'>
                Read now
              </span>
            </div>
            <img src={featuredBlog.image} alt={featuredBlog.title} className='order-1 h-64 w-full rounded-[1.5rem] object-cover lg:order-2' />
          </div>
        </div>
      )}

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {restBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default Bloglist
