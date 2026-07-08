import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'> You awesome come blog some </h1>
      <p className="text-gray-600 md:text-lg pb-8" >Subscribe to get the latest updates</p>
   <form className="flex gap-0 items-center justify-center mt-4 w-full max-w-md">
    <input type="email" placeholder="Enter your email" className="flex-1 border-2 border-primary rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" />
    <button type="submit" className="px-8 py-2 text-white bg-primary hover:bg-primary/90 transition-all cursor-pointer rounded-r-lg font-semibold">Subscribe</button>
   </form>
    </div>
  )
}

export default Newsletter
