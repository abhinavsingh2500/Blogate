import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { blog_data, assets, comments_data } from '../assets/assets'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Blog = () => {
  const { id } = useParams();
  const { axios, navigate } = useAppContext();

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      if (data.success) {
        setData(data.blog);
      } else {
        toast.error(data.message || "Blog not published or not found");
        if (navigate) navigate('/');
      }
    } catch (error) {
      toast.error(error.message);
      if (navigate) navigate('/');
    }
  }


  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id });
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content });
      if (data.success) {
        toast.success(data.message);
        setName('');
        setContent('');
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
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
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.16),_transparent_35%)]'>
      <div className='mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8'>
        <Navbar />
        <main className='mt-4 overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl'>
          <section className='px-6 py-10 text-center sm:px-10 lg:px-16'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary-700'>Published on {formatDate(data.createdAt)}</p>
            <h1 className='mx-auto mt-4 max-w-3xl text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl'>{data.title}</h1>
            <h2 className='mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg'>{data.subTitle}</h2>
            <p className='mt-5 inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary-700'>By Abhinav Singh</p>
          </section>

          <section className='px-6 pb-8 sm:px-10 lg:px-16'>
            <div className='rounded-[1.5rem] border border-slate-200/80 bg-slate-900 p-6 text-white shadow-sm'>
              <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
                <div>
                  <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary'>Story overview</p>
                  <h3 className='mt-2 text-xl font-semibold'>{data.title}</h3>
                  <p className='mt-2 max-w-2xl text-sm leading-7 text-slate-300'>{data.subTitle}</p>
                </div>
                <div className='rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200'>{data.category}</div>
              </div>
            </div>
          </section>

          <section className='grid gap-8 px-6 pb-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16'>
            <article className='rounded-[1.5rem] border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6'>
              <img src={data.image} alt='' className='mb-6 w-full rounded-[1.25rem] object-cover' />
              <div className='rich-text mx-auto max-w-3xl' dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </article>

            <aside className='flex flex-col gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm sm:p-6'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary-700'>Comments</p>
                <p className='mt-2 text-2xl font-semibold text-slate-900'>{comments.length}</p>
              </div>

              <div className='flex flex-col gap-3'>
                {comments.map((item, index) => (
                  <div key={index} className='rounded-[1rem] border border-slate-200 bg-white p-4 shadow-sm'>
                    <div className='flex items-center gap-3'>
                      <img src={assets.user_icon} alt='' className='h-10 w-10 rounded-full' />
                      <div>
                        <p className='font-semibold text-slate-900'>{item.name}</p>
                        <p className='text-xs text-slate-500'>{formatDate(item.createdAt)}</p>
                      </div>
                    </div>
                    <p className='mt-3 text-sm leading-6 text-slate-600'>{item.content}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={addComment} className='mt-2 flex flex-col gap-3 rounded-[1rem] border border-slate-200 bg-white p-4 shadow-sm'>
                <p className='text-sm font-semibold text-slate-900'>Add a comment</p>
                <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Your name' className='rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20' required />
                <textarea onChange={(e) => setContent(e.target.value)} value={content} placeholder='Your comment' className='min-h-24 rounded-[1rem] border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20' required></textarea>
                <button type='submit' className='rounded-full bg-gradient-to-r from-primary to-[#e6c46d] px-4 py-2.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5'>Submit</button>
              </form>

              <div className='rounded-[1rem] border border-slate-200 bg-white p-4 text-center shadow-sm'>
                <p className='text-sm font-semibold text-slate-900'>Share it if you align with us</p>
                <div className='mt-3 flex justify-center gap-3'>
                  <img src={assets.facebook_icon} alt='' className='h-9 w-9 rounded-full bg-slate-50 p-2' />
                  <img src={assets.twitter_icon} alt='' className='h-9 w-9 rounded-full bg-slate-50 p-2' />
                  <img src={assets.googleplus_icon} alt='' className='h-9 w-9 rounded-full bg-slate-50 p-2' />
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  )
}

export default Blog
