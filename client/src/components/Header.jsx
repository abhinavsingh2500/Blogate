import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <section className='relative mt-4 overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-10 lg:px-14 lg:py-12'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.18),_transparent_45%)]' />
      <div className='relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-center'>
        <div className='text-left'>
          <div className='mb-5 inline-flex items-center gap-3 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-700'>
            <p>Integrated AI features</p>
            <img src={assets.star_icon} className='w-4' alt='' />
          </div>
          <h1 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl'>Let your ideas <span className='text-primary'>come alive</span></h1>
          <p className='my-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base'>
            “The first thing you need to decide when you build your blog is what you want to accomplish with it, and what it can do if successful.”
            <span className='mt-2 block font-semibold text-slate-800'>Ron Dawson</span>
          </p>
          <form className='mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row'>
            <input
              type='text'
              placeholder='Search for blogs'
              className='flex-1 rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:px-6'
            />
            <button className='rounded-full bg-gradient-to-r from-primary to-[#e5c36b] px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md'>Search</button>
          </form>
        </div>

        <div className='rounded-[1.5rem] border border-slate-200/80 bg-slate-900 p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)]'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary'>Featured now</p>
          <h2 className='mt-3 text-2xl font-semibold'>A polished reading space for bold ideas</h2>
          <div className='mt-5 space-y-3 text-sm text-slate-300'>
            <div className='rounded-2xl border border-white/10 bg-white/10 p-3'>Fresh stories curated for modern readers</div>
            <div className='rounded-2xl border border-white/10 bg-white/10 p-3'>Clean layout, strong focus, and effortless browsing</div>
            <div className='rounded-2xl border border-white/10 bg-white/10 p-3'>Built to keep your audience engaged from the first click</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
