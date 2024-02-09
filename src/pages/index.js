import React, { useEffect } from 'react'
import Head from 'next/head'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Cta from './components/Cta'
import NewsLater from './components/NewsLater'
import Analytics from './components/Analytics'
import Services2 from './components/Services2'
import Blog from './components/Blog'
const Index = () => {

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Project-Management-App</title>
      </Head>
      {/* adding overflow x hidden for small devices so the content don't overflow out of the screen. */}

      <div className='sm:overflow-x-hidden md:overflow-x-auto overflow-auto'>
      <Hero/>
      <Analytics/>
  
      <Services/>
      <Services2/>
      <Features/>
      <Blog/>
     
      <Pricing/>
      <Cta/>
      
      <Team/>
      <div className=''>
        <h1 className='text-center text-4xl font-bold text-white '>Contact <span className='text-blue-600'>Us</span></h1>
        <div className='w-40 h-2 bg-indigo-600 rounded-full'>

        </div>
      <NewsLater/>
      </div>
      </div>
    </div>
  )
}

export default Index
