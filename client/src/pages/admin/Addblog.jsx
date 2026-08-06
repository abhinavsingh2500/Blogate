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
    <form onSubmit={onSubmithandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 rounded-lg shadow-md sm:m-10'>

        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer'/>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </label>

        <p className='mt-4'>Blog Title</p>
        <input type="text" placeholder='Enter your blog title' required className='border-b-2 border-gray-300 p-2 outline-none mb-6' onChange={(e)=>setTitle(e.target.value)} value={title} />
      

      <p className='mt-4'>Sub Title</p>
        <input type="text" placeholder='Type here' required className='border-b-2 border-gray-300 p-2 outline-none mb-6' onChange={(e)=>setSubTitle(e.target.value)} value={subTitle} />

        <p className='mt-4'>Blog Description</p>
        <div className='border-b-2 border-gray-300 p-2 outline-none mb-6'>
          <div ref={editorRef}></div>
          <button type='button' onClick={generateContent} className='text-sm px-8 py-2 bg-primary text-slate-900 rounded-full cursor-pointer hover:bg-primary/80 transition duration-300 mt-5'> Generate with AI</button>

        </div>

        <p className='mt-4'>Blog Category</p>
        <select value={category} onChange={(e)=>setCategory(e.target.value)} name="category" className='mt-2 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/40'>
          <option value="">Select category</option>
          {blogCategories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <p className='mt-4'>Publish It</p>
        <input type="checkbox" checked={isPublished} className='mt-2 mb-6 scale-150 cursor-pointer' onChange={(e)=>setIsPublished(e.target.checked)} />
      </div>
      <button type='submit' className='bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90'>Submit</button>
    </form>
  )
}

export default Addblog
