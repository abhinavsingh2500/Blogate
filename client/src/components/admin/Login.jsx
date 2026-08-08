import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { axios, setToken, navigate } = useAppContext();
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post('/api/admin/register', { name, email, password });
        if (data.success) {
          setToken(data.token);
          localStorage.setItem('token', data.token);
          axios.defaults.headers.common['Authorization'] = data.token;
          toast.success(data.message || "Account created successfully");
          navigate('/admin');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post('/api/admin/login', { email, password });
        if (data.success) {
          setToken(data.token);
          localStorage.setItem('token', data.token);
          axios.defaults.headers.common['Authorization'] = data.token;
          toast.success("Logged in successfully");
          navigate('/admin');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border-primary/10 border">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-2xl font-bold mb-4"><span>Admin</span> {state}</h1>
            <p className="text-slate-600">
              {state === 'Sign Up' ? 'Create an account to access the admin panel' : 'Enter your credentials to access the admin panel'}
            </p>
          </div>
          <form onSubmit={handleSubmit} className='mt-4 w-full sm:max-w-md text-gray-600'>
            {state === 'Sign Up' && (
              <div className='flex flex-col'>
                <label className='text-sm font-medium'>Full Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type='text'
                  required
                  placeholder='your full name'
                  className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                />
              </div>
            )}
            <div className='flex flex-col'>
              <label className='text-sm font-medium'>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                required
                placeholder='your email id'
                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm font-medium'>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                required
                placeholder='your password'
                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
              />
            </div>
            <button type='submit' className='w-full bg-primary text-slate-900 py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition'>
              {state}
            </button>
            <div className='mt-4 text-center text-sm text-slate-600'>
              {state === 'Sign Up' ? (
                <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary-700 font-semibold cursor-pointer underline'>Login</span></p>
              ) : (
                <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary-700 font-semibold cursor-pointer underline'>Sign Up</span></p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


