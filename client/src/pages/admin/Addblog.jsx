import { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill';
const Addblog = () => {
    const editorRef = useRef(null);
     const quillRef = useRef(null);
    const[image,setImage]=useState(false);
     const[title,setTitle]=useState('');
     const[subTitle,setSubTitle]=useState('');
      const[category,setCategory]=useState('Startup');
       const[isPublished,setIsPublished]=useState(false);
    
       const generateContent=async()=>{

       }

    const onSubmithandler=async(e)=>{e.preventDefault();}

    useEffect(() => {
      if (!quillRef.current && editorRef.current) {
        quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
      }
    }, [])
  return (
    <form onSubmit={onSubmithandler} className='flex-1 bg-[#fcfaf5] text-gray-600'>
      <div className='mx-auto max-w-5xl p-5 md:p-10'>
        <div className='mb-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-primary-700'>Create</p>
          <h1 className='mt-1 text-3xl font-semibold text-slate-800'>Write a new story</h1>
          <p className='mt-2 text-sm text-slate-500'>Add the details, shape the content, then choose when to publish.</p>
        </div>
      <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]'>
      <div className='rounded-2xl border border-primary/15 bg-white p-5 shadow-sm md:p-7'>

        <p className='font-medium text-slate-700'>Upload thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-3 h-24 w-36 rounded-xl border border-dashed border-primary/30 object-cover p-2 cursor-pointer hover:bg-primary/5'/>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </label>

        <p className='mt-7 font-medium text-slate-700'>Blog title</p>
        <input type="text" placeholder='Enter your blog title' required className='mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20' onChange={(e)=>setTitle(e.target.value)} value={title} />
      

      <p className='mt-5 font-medium text-slate-700'>Sub title</p>
        <input type="text" placeholder='Type here' required className='mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20' onChange={(e)=>setSubTitle(e.target.value)} value={subTitle} />

        <p className='mt-7 font-medium text-slate-700'>Blog description</p>
        <div className='mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white p-2'>
          <div ref={editorRef}></div>
          <button type='button' onClick={generateContent} className='mt-4 rounded-lg bg-primary/15 px-4 py-2 text-sm font-medium text-primary-700 cursor-pointer hover:bg-primary/25 transition'>Generate with AI</button>

        </div>

      </div>
      <aside className='h-fit rounded-2xl border border-primary/15 bg-white p-5 shadow-sm'>
        <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>Publishing settings</p>
        <p className='mt-5 font-medium text-slate-700'>Blog category</p>
        <select value={category} onChange={(e)=>setCategory(e.target.value)} name="category" className='mt-2 w-full px-3 py-2.5 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/40'>
          <option value="">Select category</option>
          {blogCategories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <label className='mt-6 flex cursor-pointer items-center justify-between rounded-xl bg-primary/10 px-4 py-3'>
          <span className='text-sm font-medium text-slate-700'>Publish now</span>
          <input type="checkbox" checked={isPublished} className='h-4 w-4 accent-primary cursor-pointer' onChange={(e)=>setIsPublished(e.target.checked)} />
        </label>
        <p className='mt-3 text-xs leading-5 text-slate-500'>Leave this off to keep the blog as a draft.</p>
        <button type='submit' className='mt-6 w-full rounded-xl bg-primary py-3 font-medium text-slate-900 cursor-pointer hover:bg-primary/80 transition'>Save blog</button>
      </aside>
      </div>
      </div>
    </form>
  )
}

export default Addblog
