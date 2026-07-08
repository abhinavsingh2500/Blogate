import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcard = ({blog}) => {
    const navigate = useNavigate();
    const {title, description, category, image, _id} = blog;
    
    // Strip HTML tags from description
    const plainText = description.replace(/<[^>]*>/g, '');
    
    const handleCardClick = useCallback(() => {
      if (_id) {
        navigate(`/blog/${_id}`);
      }
    }, [_id, navigate]);
    
  return (
    <div 
      className='bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer' 
      onClick={handleCardClick}
    >
      <img src={image} alt={title} className='aspect-video object-cover rounded-lg w-full' />
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 text-primary rounded-full'>{category}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p className='text-gray-600 mb-3 text-xs'>{plainText.slice(0, 100)}...</p>
      </div>
    </div>
  )
}

export default Blogcard
