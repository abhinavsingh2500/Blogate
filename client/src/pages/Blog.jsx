import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { blog_data, assets, comments_data } from '../assets/assets'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const[name, setName] = useState('')
  const[content, setContent] = useState('')

  const fetchBlogData = () => {
    const foundBlog = blog_data.find((item) => item._id === id)
    setData(foundBlog)
  }

  const fetchComments = async(e) => {
    setComments(comments_data)
  }

  const addComment = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const content = e.target[1].value
   
  }

  useEffect(() => {
    fetchBlogData()
    fetchComments()
  }, [id])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return data ? (
    <>
      <div className='relative min-h-screen'>
        <img src={assets.gradientBackground} alt='' className='absolute inset-0 w-full h-full object-cover -z-10 opacity-50 pointer-events-none' />
        <Navbar />
        <div className='text-center mt-20 text-gray-800'>
          <p className='text-primary-700 font-semibold'>Published on {formatDate(data.createdAt)}</p>
          <h1 className='text-3xl sm:text-5xl font-semibold max-w-3xl mx-auto text-gray-800'>{data.title}</h1>
          <h2 className='my-5 max-w-lg truncate mx-auto text-gray-600'>{data.subTitle}</h2>
          <p className='inline-block bg-primary-100 text-primary-700 py-2 px-4 rounded-full'>By Abhinav Singh</p>
        </div>
        <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
          <img src={data.image} alt='' className='rounded-3xl mb-5' />
          <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        <div className='mt-14 mb-10 max-w-5xl mx-auto text-center'>
          <p className='text-lg font-semibold'>Comments {comments.length}</p>
          <div className='flex flex-col gap-4 mt-4'>
            {comments.map((item, index) => (
              <div key={index} className='bg-gray-100 p-4 rounded-lg'>
                <p className='text-gray-700'>{item.content}</p>
                <p className='text-sm text-gray-500'>By {item.name} on {formatDate(item.createdAt)}</p>
                <div className='flex items-center gap-2 mt-2'>
                  <img src={assets.user_icon} alt='' className='w-10 h-10 rounded-full' />
                  <p className='font-semibold'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-5xl mx-auto mb-10'>
          <p className='text-lg font-semibold'>Add a comment...</p>
          <form onSubmit={addComment} className='flex flex-col gap-4 mt-4'>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Your name' className='p-2 border rounded-lg' required />
            <textarea onChange={(e) => setContent(e.target.value)} value={content} placeholder='Your comment' className='p-2 border rounded-lg' required></textarea>
            <button type='submit' className='bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-800 transition-colors'>Submit</button>
          </form>
          <div className='mt-10 text-center'>
            <p className='font-semibold my-4'>Share it if you align with us</p>
            <div className='flex justify-center gap-4'>
              <img src={assets.facebook_icon} alt='' />
              <img src={assets.twitter_icon} alt='' />
              <img src={assets.googleplus_icon} alt='' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loader />
  )
}

export default Blog
