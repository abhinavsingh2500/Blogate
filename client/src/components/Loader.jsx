import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[rgba(255,250,242,0.72)] backdrop-blur-sm'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/20 border-t-primary shadow-lg'>
        <div className='h-8 w-8 animate-spin rounded-full border-4 border-transparent border-t-slate-900'></div>
      </div>
    </div>
  )
}

export default Loader
