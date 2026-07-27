import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
     e.preventDefault()
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md  border-primary/10 border">
        <div className="flex flex-col items-center justify center">
        <div className='w-full py-6 text-center'>
            <h1 className="text-2xl font-bold mb-4"> <span>Admin</span> Login</h1>
            <p className="text-slate-600"> Enter your credential to access the admin panel</p>
        </div>
        <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600' >
        <div clasName='flex flex-col'> 
            <label> Email </label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' required placeholder='your email id' className='border-b-2 bborder-gray-300 p-2 outline-none mb-6'/>
        </div>
        <div clasName='flex flex-col'> 
            <label> Password </label>
            <input 
            onChange={(e)=>setPassword(e.target.value)} value={password}
            type='password' required placeholder='your password' className='border-b-2 bborder-gray-300 p-2 outline-none mb-6'/>
        </div>
        <button type='submit' className='bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90'>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
