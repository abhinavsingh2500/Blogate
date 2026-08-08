import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Addblog from './pages/admin/Addblog'
import Listblogs from './pages/admin/Listblog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
const App = () => {
  const {token}=useContext(AppContext);
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={token   ? <Layout />: <Login/ >}>
          <Route index element={<Dashboard />} />
          <Route path='Addblog' element={<Addblog />} />
          <Route path='Listblogs' element={<Listblogs />} />
          <Route path='Comments' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
