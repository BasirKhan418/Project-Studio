import React from 'react'
import AnaDetail from './AnaDetail'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
const Analytics = () => {
  return (
    <div>
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

          .font {
            font-family: "Dela Gothic One", cursive;
            font-family: "Lato", sans-serif;
            font-family: "Martel Sans", sans-serif;
            font-family: "Poppins", sans-serif;
            font-family: "Ubuntu", sans-serif;
          }
        `}</style>
       <section className='inset-0 font' >
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait" initial={false}>
          <motion.div className="max-w-xl mb-6" initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-600">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Elevate Your Project Management Game with Our 
              <br className="hidden md:block" />
              {' '}
              <span className="inline-block text-purple-700">
              Dashboard Delight!
              </span>
            </h2>
            <p>
              
            </p>
            <p className="text-base text-white md:text-lg">
            Hey there, folks! we are diving into the world of project management where we provide how to showcase your projects using a dashboard.

            </p>
          </motion.div>
          </AnimatePresence>
          <Link href={"/components/AnaDetail"}><button
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400
            hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </button>
          </Link>
        </div>
<AnimatePresence mode="wait" initial={false}>
        <motion.div className="relative" initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
          <svg
            className="absolute w-full text-green-600"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8" />
            <rect x="525" y="260" width="75" height="132" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="315" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg
            className="relative w-full text-purple-700"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="311" width="75" height="81" rx="8" />
            <rect x="525" y="351" width="75" height="41" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="315" y="83" width="75" height="309" rx="8" />
          </svg>
        </motion.div>
        </AnimatePresence>
      </div>
    </div>
                </section>
    </div>
  )
}

export default Analytics
