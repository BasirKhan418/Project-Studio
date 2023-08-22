import React, { useEffect } from 'react'
import Head from 'next/head'
import Hero from './components/Hero'
import Features from './components/Features'
import Features2 from './components/Features2'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Cta from './components/Cta'
import NewsLater from './components/NewsLater'
const Index = () => {

  return (
    <>
      <Head>
        <title>Project-Management-App</title>
      </Head>
      <div>
      <Hero/>
      <Features/>
      <Services/>
      <Cta/>
      <Pricing/>
      <Features2/>
      
      <Team/>
      
      <NewsLater/>
      </div>
    </>
  )
}

export default Index
