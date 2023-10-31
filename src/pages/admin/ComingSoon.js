import React from 'react'

const ComingSoon = () => {
  return (
    <div>
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
<section className="bg-white py-20">
    <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">We are launching soon</h1>
            <p className="text-gray-600 mb-12">Enter your email to be the first to know when we launch.</p>
            <form className="max-w-md mx-auto">
                <div className="flex items-center">
                    <input type="email" className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white" placeholder="Enter your email"/>
                    <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
</section>

<section className="bg-gray-200 py-20">
    <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What to expect</h2>
            <p className="text-gray-600 mb-12">In the new year 2024 we will be launching a new product. Here is what you can expect from the new product. We shall be working hard to make sure that we deliver the best product to you.Thanks For your support
            </p>
        </div>
        <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                    <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                    <p className="text-gray-600 mb-4">Detail list will be coming soon ! for more read home page feature section...</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-4">02</div>
                    <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
                    <p className="text-gray-600 mb-4">Detail list will be coming soon ! for more read home page feature section...</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-4">03</div>
                    <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
                    <p className="text-gray-600 mb-4">Detail list will be coming soon ! for more read home page feature section...</p>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
    </div>
  )
}

export default ComingSoon
