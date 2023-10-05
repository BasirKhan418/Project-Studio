import React from 'react'
import Link from 'next/link'
const Cta = () => {
  return (
    <div>
      <section className="py-2">
     
<div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
  
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-left">
        <p className="text-xs text-white/[.8] uppercase tracking-wider">
          Preview of Project Studio
        </p>
        <p className="mt-1 text-white font-medium">
          Sign up to get unlimited updates. No credit card required.
        </p>
      </div>
     

      <div className="mt-3 text-center md:text-left md:flex md:justify-end md:items-center">
        <Link href="/signup" className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
          Sign up free
        </Link>
      </div>
    
    </div>
 
  </div>
</div>

      </section>
    </div>
  )
}

export default Cta
