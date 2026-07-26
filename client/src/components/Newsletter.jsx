import React from 'react'

const Newsletter = () => {
  return (
    <section className='mx-auto my-16 max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:px-10 lg:px-16'>
      <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary'>Stay inspired</p>
      <h2 className='mt-3 text-2xl font-semibold sm:text-3xl'>You are awesome — now share your voice with the world</h2>
      <p className='mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base'>Subscribe for fresh ideas, thoughtful stories, and the latest updates from the blog.</p>
      <form className='mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row'>
        <input
          type='email'
          placeholder='Enter your email'
          className='flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40'
        />
        <button type='submit' className='rounded-full bg-gradient-to-r from-primary to-[#e6c46d] px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5'>Subscribe</button>
      </form>
    </section>
  )
}

export default Newsletter
