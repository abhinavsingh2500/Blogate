import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500'></div>
    </div>
  )
}

export default Loader
