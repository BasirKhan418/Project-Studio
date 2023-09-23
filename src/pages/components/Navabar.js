import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    AiFillCloseCircle,
  } from "react-icons/ai";

  import {
    MdAccountCircle,
    MdManageAccounts,
    MdShoppingCart,
    MdNotificationsActive
  } from "react-icons/md";
  import { BiLogInCircle, BiLogOut } from "react-icons/bi";
  import  {HiOutlineCurrencyRupee,HiCurrencyRupee }from "react-icons/hi";
  import  { FaShoppingCart }from "react-icons/fa";
import { useRouter } from 'next/router';
 
const Navbar = ({logout,user}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [mdropdown, msetDropdown] = useState(false);
  useEffect(() => {
  }, []);
  return (

    <div className='font-light sticky top-0 z-50 '>
              
      <nav className=" bg-white dark:bg-white flex justify-center items-center w-full shadow-md z-30 h-20">
    <div className="container px-2 py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <img className="w-24 h-auto lg:w-28 lg:h-auto" src="prapplogo.png" alt=""/>
                </Link>
                <div className="flex lg:hidden">
                    <button type="button" onClick={()=>{setIsOpen(!isOpen)}}className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        {!isOpen?<><svg  className='w-6 h-6' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" fill="#4A5568"/> <path fillRule="evenodd" clipRule="evenodd" d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z" fill="#4A5568"/> <path fillRule="evenodd" clipRule="evenodd" d="M3 15C3 14.4477 3.44772 14 4 14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H4C3.44772 16 3 15.5523 3 15Z" fill="#4A5568"/> </svg>
                       </>
                        :""}
                
                       { isOpen?<svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>:""}
                    </button>
                </div>
            </div>

            <div className={` ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-50 dark:bg-gray-100 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center">
                    <Link href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-black hover:bg-green-100 dark:hover:bg-green-100 font-semibold">Products</Link>
                    <Link href="#"  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-black hover:bg-green-100 dark:hover:bg-green-100 font-semibold">Features</Link>
                    <Link href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-black hover:bg-green-100 dark:hover:bg-green-100 font-semibold">Pricing</Link>
                    <Link href="#"  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-black hover:bg-green-100 dark:hover:bg-green-100 font-semibold">Contact Us</Link>
                    <Link href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-black hover:bg-green-100 dark:hover:bg-green-100 font-semibold">About Us</Link>
                    <Link href={"/login"}>
                    <button className='font-semibold bg-white text-black px-4 py-2 rounded-full border-2 border-grey-600 mx-2 hover:bg-indigo-500 hover:text-white'>
                      Sign in
                    </button></Link>
                    <Link href={"/signup"}><button className='font-semibold text-white px-4 py-2 rounded-full border-2 bg-indigo-600 hover:bg-indigo-700'>
                      Sign up
                    </button></Link>
                    
                    
                </div>
             
                <div className="flex items-center mt-4 lg:mt-0">
              
                  
                   
                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden  border-gray-400 rounded-full">
                        
                        </div>

                        {/* <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3> */}
                    </button>
                </div>
            </div>
        </div>
    </div>
  
</nav>
    </div>
      )
}

export default Navbar
