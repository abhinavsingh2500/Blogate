import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-b border-gray-300'>
        <div className='flex flex-col items-center md:items-start'>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44 rounded-full cursor-pointer' />
          <p className="text-center md:text-left text-gray-600 mt-3">Connect with us</p>
        </div>
        
        <div className='flex flex-wrap justify-between w-full md:w-[60%] gap-8'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-gray-900 mb-3'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* hehe */}
      </div>
      
      <p className="text-center text-gray-600 py-6">Copyright 2026 @ BLOGATE. All Rights Reserved</p>
    </div>
  )
}

export default Footer

