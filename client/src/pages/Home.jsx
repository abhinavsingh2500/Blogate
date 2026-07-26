import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.16),_transparent_35%)]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Navbar />
        <Header />
        <Bloglist />
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}

export default Home
