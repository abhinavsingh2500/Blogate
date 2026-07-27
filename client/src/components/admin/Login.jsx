import React from 'react'

const Login = () => {
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
        <form onSubmit={handleSubmit}></form>
        <div> 
            <label> Email </label>
            <input type='email' required placeholder='your email id' className='border-b-2 bborder-gray-300 p-2 outline-none mb-6'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
