import React from 'react'
import { blogCategories } from '../assets/assets'
import { useState } from 'react'
import { motion } from "motion/react"
const Bloglist = () => {
  const [menu, setMenu] = useState('All')
  return (
    <div>
    <div className='flex justify-center gap-5 sm:gap-8 my-10 relative'>
        {blogCategories.map((item)=>(
          <div key={item} className=' relative px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-300 text-sm sm:text-base cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300'>
         <button onClick={() => setMenu(item)} className={`cursor-pointer text-black hover:text-white ${menu === item && "bg-primary text-white"}`}>
            {item}
            {menu === item && (
              <motion.div
                layoutId='underline' transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            </button>   
          </div>
        ))}
    </div>
      <div>{/*blog card*/}</div> 
   
    </div>
  )
}

export default Bloglist
