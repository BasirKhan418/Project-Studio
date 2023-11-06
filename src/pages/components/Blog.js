import React from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
const Blog = () => {
  return (
    <AnimatePresence mode='wait'  initial={false}>
    <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1 ,y:0}} transition={{duration:1}}>
    
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tigh bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 text-transparent bg-clip-text ">How to Use ?</h2>
    <p className="mt-1 text-gray-400">See how game-changing companies are making the most of every engagement with Project Studio.</p>
  </div>
  
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-300 dark:group-hover:text-gray-200">
          Announcing a free plan for small teams
        </h3>
        <p className="mt-5 text-gray-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 className="text-sm text-gray-200">By Smrutirupa Parida</h5>
        </div>
      </div>
    </a>
   
    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl h-60" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699280375/s1_wt4qsn.jpg" alt="Image Description"/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-300 dark:group-hover:text-white">
          How to use Project Studio for your business ?
        </h3>
        <p className="mt-5 text-gray-400">
          Project Studio is a powerful tool for your business.
        </p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699280375/s1_wt4qsn.jpg" alt="Image Description"/>
        <div>
          <h5 className="text-sm text-gray-200">By Nayaybrata Das</h5>
        </div>
      </div>
    </a>
 
    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699277227/teamwork_uvajg8.jpg" alt="Image Description"/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-300 dark:group-hover:text-white">
          How to use Project Studio for your Study Projects ?
        </h3>
        <p className="mt-5 text-gray-400">
          Project Studio is a powerful tool for your Study Projects. 
        </p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 className="text-sm text-gray-200">By Rudra Prasad Baral</h5>
        </div>
      </div>
    </a>

  </div>

  <div className="mt-12 text-center">
    <a className="inline-flex justify-center items-center gap-x-2 text-center bg-indigo-800 border hover:border-indigo-900 text-sm  hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 text-white " href="#">
      Read more
      <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </a>
  </div>

</div>

    </motion.div>
    </AnimatePresence>
  )
}

export default Blog
