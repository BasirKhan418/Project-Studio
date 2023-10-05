import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast'
import Spinner from './components/Spinner';
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Head from 'next/head';
// import { useMyContext } from '../context/Allstate';
const Login = () => {
  const[loading,setLoading]=useState(false);
  const [alert,setAlert]=useState(false);
  useEffect(()=>{
 if(localStorage.getItem('myprappuser')){
  router.push('/admin');
 }
  },[])
  const router =useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[vpassword,setVpassword]=useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange=(e)=>{
  if(e.target.name=="email"){
    setEmail(e.target.value)
  }
  else if(e.target.name=="password"){
setPassword(e.target.value)
  }
  }
  const handleSubmit=async()=>{
    setLoading(true)
    console.log(email,password)
      if(email.length
        !=0&&password.length!=0){
        const data ={email,password};
        console.log(password);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response=await res.json();
  
   setLoading(false)
    setEmail('');
    setPassword('');
    if(response.success){
      
      toast.success("Logged in successfully", {
        position: "top-right",
    });
     
        localStorage.setItem('myprappuser',JSON.stringify({token:response.token,email:response.email}));
        setTimeout(()=>{
          router.push('/admin')
          },2000)
    }
    else if(!response.success){
      toast.error(`${response.message}`, {
        position: "top-right",
    });

    }
  }
  else{
    setLoading(false)
    toast.error("Something went wrong ! Please try again after some time.", {
      position: "top-right",
      });
  }
         
    // setLoading(false)
    // toast.error("Something went wrong ! Please try again after some time.", {
    //   position: "top-left",
    //   autoClose: 1000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   });
  
  }
  return (
     <>
      <style jsx global>{`
        .animate-img {
          background-image: url("/sphere.webp");
          background-size: cover;
          background-repeat: no-repeat;
          z-index: -1;
          transform: translateY(-50%);
          position: absolute;
          left: -30%;
          bottom: auto;
          right: auto;
          top: 58%;
          animation: rotate360 30s linear infinite; /* Adjust duration as needed */
        }
        @keyframes rotate360 {
          0% {
            transform: translateY(-50%) rotate(0deg);
          }
          100% {
            transform: translateY(-50%) rotate(360deg);
          }
        }
      `}</style>

      <div className="">
        <img src="/sphere.webp" className=" animate-img w-100 h-full" />
        <div>
          <Toaster />
          {loading ? (
            <Spinner />
          ) : (
            <div className="">
              <div className="flex justify-center items-center min-h-screen">
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                  <div className="flex-1">
                    <div className="text-center">
                      <div className="flex justify-center mx-auto">
                        <Image
                          className=""
                          src="/projectstudio.png"
                          alt="Logo"
                          height={120}
                          width={120}
                        />
                      </div>

                      <p className="mt-3 text-gray-200 text-2xl font-semibold dark:text-gray-200">
                        Sign in to access your account
                      </p>
                    </div>

                    <div className="mt-8">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-200 dark:text-gray-200"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={handleChange}
                          placeholder="example@example.com"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-800 dark:focus:border-blue-800 focus:ring-blue-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-6 relative">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="password"
                            className="text-sm text-gray-200 dark:text-gray-200"
                          >
                            Password
                          </label>
                          <Link
                            href={"/Forgot"}
                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                          >
                            Forgot password?
                          </Link>
                        </div>

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          value={password}
                          onChange={handleChange}
                          placeholder="Your Password"
                          className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-800 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                        />
                        {showPassword ? (
                          <AiFillEye
                            className="absolute right-2 text-2xl text-gray-800 bottom-2"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        ) : (
                          <AiFillEyeInvisible
                            className="absolute right-2 text-2xl text-gray-800 bottom-2"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        )}
                      </div>
                      <div className="mt-6 ">
                        <button
                          onClick={handleSubmit}
                          className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-800 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                        >
                          Sign in
                        </button>
                      </div>
                      <div className="">
                        <p className="mt-4 text-center text-gray-200 dark:text-gray-400">
                          or sign in with
                        </p>

                        <a
                          className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-600 -z-20"
                          onClick={() =>   toast.error("Sorry ! the site is in now beta verion this feature is currently unavailable and will be coming soon !", {
                            position: "top-right",
                        })}
                        >
                          <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                            <path
                              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                              fill="#FFC107"
                            />
                            <path
                              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                              fill="#FF3D00"
                            />
                            <path
                              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                              fill="#1976D2"
                            />
                          </svg>

                          <span className="mx-2 text-gray-200">
                            Sign in with Google
                          </span>
                        </a>
                      </div>

                      <p className="mt-6 text-sm text-center text-gray-400">
                        Don&#x27;t have an account yet?{" "}
                        <Link
                          href={"/signup?user=true"}
                          className="text-purple-600 focus:outline-none focus:underline hover:underline"
                        >
                          Sign up
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Login

