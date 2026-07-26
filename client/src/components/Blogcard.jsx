import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcard = ({ blog }) => {
  const navigate = useNavigate()
  const { title, description, category, image, _id } = blog

  const plainText = description.replace(/<[^>]*>/g, '')

  const handleCardClick = useCallback(() => {
    if (_id) {
      navigate(`/blog/${_id}`)
    }
  }, [_id, navigate])

  return (
    <article
      className='group cursor-pointer overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]'
      onClick={handleCardClick}
    >
      <div className='relative overflow-hidden'>
        <img src={image} alt={title} className='aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]' />
        <span className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-sm'>
          {category}
        </span>
      </div>
      <div className='p-6'>
        <h5 className='mb-3 text-lg font-semibold text-slate-900'>{title}</h5>
        <p className='mb-4 text-sm leading-6 text-slate-600'>{plainText.slice(0, 100)}...</p>
        <div className='inline-flex items-center gap-2 text-sm font-semibold text-primary-700'>
          Read story <span className='text-base'>→</span>
        </div>
      </div>
    </article>
  )
}

export default Blogcard
