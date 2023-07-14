import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = ({
}) => {
    const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [mdropdown, msetDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [sidebarham, setSidebarham] = useState(false);
  const ref = useRef();
  const toggleCart = () => {
    setSidebar(!sidebar);
    // if(ref.current.classList.contains("translate-x-full")){
    //   ref.current.classList.remove('translate-x-full')
    //   ref.current.classList.add("translate-x-0")
    // }
    // else if(!ref.current.classList.contains("translate-x-full")){
    //   ref.current.classList.remove('translate-x-0')
    //   ref.current.classList.add("translate-x-full")
    // }
  };
  const toggleCartham = () => {
    setSidebarham(!sidebarham);
  };
 
  return (
    <>
      <div
        className={` Navbar flex flex-col lg:flex-row  justify-start md:justify-start items-center py-2 shadow-md bg-white dark:bg-black dark:text-white text-black sticky top-0 z-20 dark:sticky dark:top:0 ${!sidebarham?"h-20":""} w-full ${
          !sidebar && "overflow-hidden"
        }`}
      >
        <div className="lg:hidden mx-4 absolute right-0 top-8" onClick={toggleCartham}>
          <div className="space-y-2" >
            <span
              className={`block w-8 h-0.5 bg-blue-600 ${
                sidebarham
                  ? "rotate-45 translate-y-3 absolute top-1"
                  : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-black dark:bg-white ${sidebarham? "-rotate-45 translate-y-3 absolute bottom-1" : ""}`}
            ></span>
            <span className={`block w-8 h-0.5 bg-blue-600 ${
                sidebarham
                  ? "opacity-0"
                  : ""
              } `}></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center xl:flex-row">
          <Link href={"/"}>
            <div className="logo ml-auto flex flex-col md:justify-center justify-center items-center">
              <Image
                alt="logo"
                src="/pr1.jpg"
                width={150}
                height={60}
              />
            </div>
          </Link>
        </div>
        <div className="nav right hidden lg:flex dark:text-white dark:bg-black ">
          <ul className="flex justify-center mx-4 items-center overflow-hidden whitespace-nowrap space-x-4">
            <hr className="h-2 w-full" />
            <Link href={"/"}>
              {" "}
              <li className="text-lg my-2 font-semibold hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in ">
                Home
              </li>
            </Link>
            <Link href={"/rooms"}>
              {" "}
              <li className="text-lg my-2 font-semibold hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in">
                Features
              </li>
            </Link>
            <Link href={"/foods"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in">
                Pricing
              </li>
            </Link>
            <Link href={"/gallery"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in">
                About
              </li>
            </Link>
            <Link href={"/contactus"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in">
               Contact Us
              </li>
            </Link>
            {/* <Link href={"/"}> <a><li>Tshirts</li></a></Link> */}
          </ul>
        </div>

        {/* <AiOutlineShoppingCart className="text-3xl md:text-xl"/> */}
        <div className="cart absolute right-4 top-6 mx-5 ">
          
          <Link href={"/login"}><button className=" border-solid border-2 border-blue-600 px-2 p-2 bg-blue-600 text-white font-semibold rounded-3xl h-10 w-40 hover:bg-white hover:text-black hidden lg:block text-center">Log in </button></Link>
          
            </div>
        {!sidebar&&<div
          className={`bg-white h-[60vh]  py-10 px-8 transition-all dark:bg-black dark:text-white
          }`}
        >
          <ul className="flex justify-center mx-4 items-center overflow-hidden whitespace-nowrap space-x-4 flex-col ">
            <hr className="h-2 w-full" />
            <Link href={"/"}>
              {" "}
              <li onClick={()=>{setSidebarham(false)}} className="text-lg my-2 font-semibold hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in dark:text-white" >
                Home
              </li>
            </Link>
            <Link href={"/rooms"}>
              {" "}
              <li onClick={()=>{setSidebarham(false)}} className=" dark:text-white text-lg my-2 font-semibold hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
                Features
              </li>
            </Link>
            <Link href={"/foods"}>
              {" "}
              <li onClick={()=>{setSidebarham(false)}} className=" dark:text-white text-lg my-2 font-semibold  hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
                Pricing
              </li>
            </Link>
            <Link href={"/contactus"}>
              {" "}
              <li onClick={()=>{setSidebarham(false)}} className="dark:text-white text-lg my-2 font-semibold  hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
               About
              </li>
            </Link>
            <Link onClick={()=>{setSidebarham(false)}} href={"/contactus"}>
              {" "}
              <li className="dark:text-white text-lg my-2 font-semibold  hover:bg-blue-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden" >
               Contact Us
              </li>
            </Link>
            <div className="cart mx-5 flex justify-center">
          <Link href={"/login"}><button className="text-white px-2 p-2 font-semibold mx-2 bg-blue-600 rounded-3xl h-10 w-40 hover:bg-white hover:text-black border-solid border-2 border-blue-600" onClick={()=>{setSidebarham(false)}}>Log in</button></Link>
            </div>
            {/* <Link href={"/"}> <a><li>Tshirts</li></a></Link> */}
          </ul>
        </div>}
        
        
          </div>
          
    </>
  );
};

export default Navbar;
