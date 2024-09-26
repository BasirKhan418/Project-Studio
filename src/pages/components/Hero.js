import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { set } from "mongoose";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const Hero = () => {
  const [console,setConsole]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem("myprappuser")){
      setConsole(true);
        }
        else{
          setConsole(false);
        }
  })
  return (
    <div className="overflow-hidden">
        
        <img
        className="absolute top-0 left-0"
        style={{}}
        src="grid.svg"
        alt="helo"
      />
      <div
        style={{
          animationDuration: "5s",
        }}
        className="absolute lg:w-[600px] lg:h-[700px] lg:-top-60 md:w-[350px] md:h-[400px] md:animate-spin rounded-full -top-1/2 md:top-0 left-0 md:left-72 bg-gradient-to-r from-slate-900 via-purple-900/60 to-slate-900 -z-50 blur-3xl"
      ></div>
      <div className="overflow-hidden bg-none relative">
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

          .hero-text {
            font-family: "Dela Gothic One", cursive;
            font-family: "Lato", sans-serif;
            font-family: "Martel Sans", sans-serif;
            font-family: "Poppins", sans-serif;
            font-family: "Ubuntu", sans-serif;
          }
        `}</style>

        <section className="pt-12 bg-none sm:pt-16 pl-10 pr-10 w-[100%]">
      
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center ">
             
              <motion.h1 className="px-6 lg:text-lg text-gray-200 sm:text-sm text-sm" initial={{opacity:0,y:-500}} animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
              >
                Welcome to Project Studio 🧑‍💻
              </motion.h1>
              <motion.p className="mt-5  hero-text font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-normal text-2xl" initial={{opacity:0,y:-500}} animate={{opacity:1,y:0}}
              transition={{duration:0.5}}>
                One Stop Solution For
                {/* <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span> */}
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                  {" "}
                  Project Mangement{" "}
                </span>
              </motion.p>

              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <motion.div whileHover={{scale:1.05 }} whileTap={{scale:0.95}} transition={{duration:0.2}}><Link
                  href="/docs/Alldocs"
                  title=""
                  className="inline-flex  items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-purple-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Explore More
                </Link>
                </motion.div>
                 {!console&&<Link 
                  href="/signup"
                  title=""
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-200 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                 
                  Get Started
                  <Image src="/getstarted.png" alt="getstarted png" width={20} height={20} className="mx-2"/>
                </Link>} 
                {console&&<motion.div whileHover={{scale:1.05 }} whileTap={{scale:0.95}} transition={{duration:0.2}}><Link 
                  href="/admin"
                  title=""
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-200 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                 
                  Go to Console
                  <Image src="/getstarted.png" alt="getstarted png" width={20} height={20} className="mx-2"/>
                </Link></motion.div>}
              </div>
            </div>
          </div>

          <div className="lg:max-w-6xl mx-auto my-10 sm:max-w-xl md:max-w-4xl max-w-4xl flex justify-center items-center flex-col">
    <div className="w-full h-11 relative rounded-t-lg bg-blue-900 flex overflow-hidden justify-start items-center space-x-1.5 px-2">
        <div className="absolute w-full h-full inset-0 bg-black opacity-50"></div>
        <span className="relative w-3 h-3 border-2 rounded-full border-red-400"></span>
        <span className="relative w-3 h-3 border-2 rounded-full border-yellow-400"></span>
        <span className="relative w-3 h-3 border-2 rounded-full border-green-400"></span>
       
    </div>
    <motion.div className="relative bg-blue-600 border-t-0 w-full h-auto border-blue-900" initial={{x:-200,opacity:0}} animate={{opacity:1,x:0}}
    duration={{duration:2}}
    >
        <img src="https://res.cloudinary.com/dawzncoau/image/upload/v1699282604/dashboard_z7bik7.png" alt=""  className=""/>
    </motion.div>

</div>
        </section>
      </div>
    
    </div>
  );
};

export default Hero;
