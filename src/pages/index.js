import React from 'react'
import Head from 'next/head'
import Hero from './components/Hero'
import Features from './components/Features'
import Features2 from './components/Features2'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
const index = () => {
  return (
    <>
      <Head>
        <title>Project-Management-App</title>
      </Head>
      <div>
      <Hero/>
      <Features/>
      <Features2/>
      <Services/>
      <Pricing/>
      <Team/>
      </div>
    </>
  )
}

export default index
