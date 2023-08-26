import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Spinner from './components/Spinner';
const Forgot = () => {
  const[loading,setLoading]=useState(false)
  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const[cpassword,setcPassword]=useState('');
  const handleChange=async(e)=>{
    if(e.target.name=='password'){
      setPassword(e.target.value);
    }
    else if(e.target.name=='cpassword'){
      setcPassword(e.target.value)
    }
    else if(e.target.name=='email'){
      setEmail(e.target.value)
    };
  }
  const router=useRouter();
  useEffect(()=>{
if(localStorage.getItem('token')){
  router.push('/');
}
  },[])
  const sendEmailf=async()=>{
    setLoading(true)
    if(email.length>4){

    const data = {email,sendMail:true};
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/forgot`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
   
      const r = await response.json();
        setEmail("");
        setLoading(false)
        router.push(`/forgot?token=${r.forgot.token}`);
      if(r.success){
        toast.success("Successfully email sent. Please check the email for reset password related instructions ", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
          toast.error("Some error occured", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          }

  }
  else{
    toast.error("Please enter the valid email", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

}
  const resetPassword=async()=>{
    setLoading(true)
    if(password==cpassword){
 const token =router.query.token;
    const data = {password,cpassword,token,sendMail:false};
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/forgot`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
   
      const r = await response.json();
      setPassword('');
      setcPassword('')
      setLoading(false)
      if(r.success){
        toast.success("Successfully your password is reset please login with your new password.", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        toast.error("Some error occured", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
            
    }

  }
  return (
    <>
    {loading?<Spinner/>:<div className=" min-h-screen object-cover">
      
      <ToastContainer
position="bottom-center"
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
<Head>
      <title>pr app</title>
      <meta name="description" content='Forgot your Password for thehoteldcrescent.com'/>
      
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
  {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image alt="logo" src="/cresentlogo.png" width={180} height={60} className='m-auto'/>
    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot your account</h2>
  </div>

  {!router.query.token && <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email}
          onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2"/>
        </div>
      </div>
      <div>
        <button onClick={sendEmailf} type="submit" className="mt-4 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Continue</button>
      </div>
    <p className="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"> Login</Link>
    </p>
  </div>}
  {router.query.token && <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
        <div className="mt-2">
          <input onChange={handleChange} value={password} id="password" name="password" type="password" autoComplete="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2"/>
        </div>
        <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
        <div className="mt-2">
          <input onChange={handleChange} value={cpassword}id="cpassword" name="cpassword" type="password" autoComplete="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2"/>
        </div>
      </div>
      <div>
        <button onClick={resetPassword} disabled={cpassword!==password} type="submit" className=" disabled:bg-pink-300 flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 mt-4">Continue</button>
      </div> */}
      {/* {cpassword!==password && <span className='text-red-600 mt-2 font-bold'>Password doesnot match</span>} */}
    {/* <p className="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link href="/Login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"> Login</Link>
    </p>
    
  </div>} */}
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-6">

<div className="mx-auto max-w-lg">
  <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
    Forgot Your Password
  </h1>
  <form
 method="POST"
    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
  >
    <p className="text-center text-lg font-medium">
     Forgot Your Password
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
    {/* <div className="text-sm flex justify-end my-2">
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
      </div> */}
     
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
  Remember ?
  <Link href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"> Login to your account !</Link>
</p>
  </form>
</div>
</div>
    </div>}
    </>
  )
}

export default Forgot

