import React from 'react'

import { GiArtificialIntelligence } from 'react-icons/gi';
import { FcCollaboration} from 'react-icons/fc';

const Features = () => {
  return (
    <>
     
<div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="features">

  <div className="mx-auto max-w-4xl mb-8 lg:mb-14 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-200">
      Explore tools
    </h2>
    <p className="mt-3 text-gray-200">
      The powerful and flexible theme for all kinds of businesses.
    </p>
  </div>



  <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
  
    <div className="col-span-6 sm:col-span-4 text-center">
    <GiArtificialIntelligence className='mx-auto h-auto w-7 md:w-9 text-gray-200'/>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-200">
          AI/ML
        </h3>
      </div>
    </div>
   
    <div className="col-span-6 sm:col-span-4 text-center">
      <svg className="mx-auto h-auto w-7 md:w-9 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
      </svg>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-200">
          Customizable
        </h3>
      </div>
    </div>
  
    <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
    <FcCollaboration className='mx-auto h-auto w-7 md:w-9 text-gray-200'/>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-200">
          Collabration
        </h3>
      </div>
    </div>

  </div>
  
  <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
    <div className="hidden md:block col-span-4 md:col-span-3">
      <img className="rounded-xl object-cover " src="https://res.cloudinary.com/dawzncoau/image/upload/v1699280375/s1_wt4qsn.jpg" alt="Image Description"/>
    </div>

    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl " src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80" alt="Image Description"/>
    </div>
    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl h-[70vh] object-cover" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699280387/s2_ziq9xg.jpg" alt="Image Description"/>
    </div>
 

    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl h-[40vh]" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699280373/image_for_how_to_use_jygd1t.jpg" alt="Image Description"/>
    </div>

  </div>
</div>

    </>
  )
}

export default Features
