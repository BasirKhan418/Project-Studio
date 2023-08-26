import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import Spinner from './components/Spinner';
import Image from 'next/image';
import Head from 'next/head';
import Alert from './Alert';
import { useMyContext } from '../context/Allstate';
const Login = () => {
  const[loading,setLoading]=useState(false);
  const {alert,setAlert}=useMyContext();
  useEffect(()=>{
 if(localStorage.getItem('myprappuser')){
  router.push('/admin');
 }
 setAlert(false);
  },[])
  const router =useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[vpassword,setVpassword]=useState(false);
  const handleChange=(e)=>{
  if(e.target.name=="email"){
    setEmail(e.target.value)
  }
  else if(e.target.name=="password"){
setPassword(e.target.value)
  }
  }
  const handleSubmit=async(e)=>{
    setLoading(true)
    e.preventDefault();
    try{
        const data ={email,password};
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
      setAlert(true);
      toast.success('Logged in Successfully', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        localStorage.setItem('myprappuser',JSON.stringify({token:response.token,email:response.email}));
        setTimeout(()=>{
          router.push('/admin')
          },2000)
    }
    else if(!response.success){
      toast.error(response.message, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
   
         
  }
  catch(error){
    setLoading(false)
    toast.error("Something went wrong ! Please try again after some time.", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  }
  return (
    <>
    {  alert?<Alert message="Logged in Successfully" desc="Welcome back! You've successfully logged in." className="p-2 m-2"/>:""
      }
    {loading?<Spinner/>:<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex-wrap">
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">

  <Head>
      <title>Project Studio - Login Page</title>
      <meta name="description" content='Login to our hotel booking and food delivery website to unlock exclusive deals on accommodations and enjoy the convenience of seamless food delivery. Discover a world of exceptional hospitality and culinary delights with our secure login process!'/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
  <Image alt="logo" src="/prapplogo.png" width={180} height={60} className='m-auto'/>
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input onChange={handleChange} value={email} id="email" name="email" type="email" autoComplete="email" required className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2 peer ..."/>
          {email.length==0?"":<p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm font-bold">
      Please provide a valid email address.
    </p>}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link href={"/forgot"} className="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</Link>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" onChange={handleChange} value={password}  name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Login</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link href="/signup" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"> Create your account</Link>
    </p>
  </div> */}

<>
  {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
  
  <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-6">

    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Login to Project Studio
      </h1>
      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Welcome back to Project Studio! Log in to your account to access personalized features, manage your profile, and engage with our vibrant community.
      </p>
      <form
      onSubmit={handleSubmit} method="POST"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p className="text-center text-lg font-medium">
          Sign in to your account
        </p>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              onChange={handleChange} value={email} id="email" name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-smb border-2"
              placeholder="Enter email"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
       
        <div>
        <div className="text-sm flex justify-end my-2">
            <Link href={"/forgot"} className="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</Link>
          </div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              type={vpassword?"text":"password"}
              className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border-2 `}
              placeholder="Enter password"
              id="password" onChange={handleChange} value={password} name='password'
            />
            <span className={`absolute inset-y-0 end-0 grid place-content-center px-4 `} onClick={()=>{
            setVpassword(!vpassword);
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-gray-400 ${vpassword?"line-through":""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
         
        </div>
        <button
        type='submit'
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
        {/* <p className="text-center text-sm text-gray-500">
          No an account? 
          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </p> */}
        <p className="mt-10 text-center text-sm text-gray-500">
      Not an account?
      <Link href="/signup" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"> Create your account</Link>
    </p>
      </form>
    </div>
  </div>
  <div className='w-[100vw] h-[55vh] lg:h-[90vh] lg:w-[50vw]'>
  <img alt="logo" src="/login2.jpg" className='m-auto w-full h-full object-cover'/>
  </div>
</>

</div>}
    </>
  )
}

export default Login

