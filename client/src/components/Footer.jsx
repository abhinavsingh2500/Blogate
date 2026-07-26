import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='mt-8 border-t border-white/60 bg-slate-900/95 text-slate-300'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16'>
        <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
          <div className='flex flex-col items-center text-center md:items-start md:text-left'>
            <img src={assets.logo} alt='logo' className='w-28 rounded-full ring-2 ring-primary/20 sm:w-36' />
            <p className='mt-4 max-w-sm text-sm leading-7 text-slate-400'>Connect with us and discover stories crafted for modern readers and creators.</p>
          </div>

          <div className='grid w-full gap-8 md:w-[65%] md:grid-cols-3'>
            {footer_data.map((section, index) => (
              <div key={index}>
                <h3 className='mb-3 font-semibold text-white'>{section.title}</h3>
                <ul className='space-y-2'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href='#' className='text-sm text-slate-400 transition-colors hover:text-primary'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className='border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500'>Copyright 2026 @ BLOGATE. All Rights Reserved</p>
    </footer>
  )
}

export default Footer

