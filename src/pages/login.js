import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import Spinner from './components/Spinner';
import Image from 'next/image';
import Head from 'next/head';
const Login = () => {
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
 if(localStorage.getItem('mypruser')){
  router.push('/');
 }
  },[])
  const router =useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
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
    if(response.success==true){
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
          },1500)
    }
    else if(response.success==false){
      toast.error("Invalid credentials", {
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
    {loading?<Spinner/>:
      <div className="flexl flex-col justify-center px-6 py-12 lg:px-8 bg-white min-h-screen bg-[url('/loginbg.jpg')] object-cover">
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
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Head>
      <title>Hotel DCrescent -Login to Access Exclusive Hotel Deals and Food Delivery Services</title>
      <meta name="description" content='Login to our hotel booking and food delivery website to unlock exclusive deals on accommodations and enjoy the convenience of seamless food delivery. Discover a world of exceptional hospitality and culinary delights with our secure login process!'/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
  <Image alt="logo" src="/cresentlogo.png" width={180} height={60} className='m-auto'/>
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input onChange={handleChange} value={email} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2"/>
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
  </div>
</div>}
    </>
  )
}

export default Login

