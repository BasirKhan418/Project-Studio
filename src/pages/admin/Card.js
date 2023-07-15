import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-400"><Image src={"/project.png"} height={46} width={46} alt="project" className='text-white'></Image></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Projects</h3>
            <p className="text-3xl">12,768</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-400">
        <Image src={"/presentation.png"} height={46} width={46} alt="project" className='text-white'></Image> </div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Presentation</h3>
            <p className="text-3xl">39,265</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-indigo-400"><Image src={"/approve.png"} height={46} width={46} alt="project" className='text-white'></Image></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Assignment</h3>
            <p className="text-3xl">142,334</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-red-400"><Image src={"/credit1.png"} height={46} width={46} alt="project" className='text-white object-cover'></Image></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Credit</h3>
            <p className="text-3xl">1000$</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Card
