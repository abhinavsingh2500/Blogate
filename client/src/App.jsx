import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Addblog from './pages/admin/Addblog'
import Listblogs from './pages/admin/Listblog'
import Comments from './pages/admin/Comments'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={<Layout />}>
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
