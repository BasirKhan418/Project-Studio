import React from 'react'

const Services = () => {
  return (
    <>
  
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id='services'>
  <div className="relative p-6 md:p-16">

    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-2xl  font-bold sm:text-3x text-gray-200">
          Fully customizable rules to match your unique needs
        </h2>

        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 text-gray-200">Advanced tools</span>
                <span className="block mt-1 text-gray-200 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Unlock your projects full potential with advanced management tools – streamlining tasks, boosting productivity, and ensuring success at every step. Elevate your projects to new heights .</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left  p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 hover:bg-gray-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 text-gray-200">Smart dashboards</span>
                <span className="block mt-1 dark:hs-tab-active:text-gray-200 text-gray-200">Experience project management redefined with our smart dashboard. It is your gateway to streamlined success - efficiency, insights, and control all at your fingertips. Elevate your projects, the smart way!</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 hover:bg-gray-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 text-gray-200">Powerful features</span>
                <span className="block mt-1 dark:hs-tab-active:text-gray-200 text-gray-200">Empower your projects with our dynamic features. Stay organized, collaborate effortlessly, and drive success with ease. Unleash the power of effective project management, now at your fingertips!</span>
              </span>
            </span>
          </button>
        </nav>
      </div>
     

      <div className="lg:col-span-6">
        <div className="relative">
    
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699279431/7007591_wgwp20.jpg" alt="Image Description" alt="Image Description"/>
            </div>

            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://res.cloudinary.com/dawzncoau/image/upload/v1699282604/dashboard_z7bik7.png" alt="Image Description"/>
            </div>

            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description"/>
            </div>
          </div>
    
          <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
     
        </div>
      </div>
 
    </div>
    <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
      <div className="col-span-full lg:col-span-7 lg:col-start-6 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full bg-white/[.075]"></div>
    </div>

  </div>
</div>

   

    </>
  )
}

export default Services
