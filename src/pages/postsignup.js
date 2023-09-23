
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import Image
 from 'next/image';
 import Spinner from './components/Spinner';
 import Head from 'next/head';
//  import { useMyContext } from '../context/Allstate';
 import Alert from './Alert';
const Signup = () => {
 
  const[loading, setLoading]=useState(false);
  const [id,setId]=useState('');
  const [bio,setbio]=useState('');
  const[image,setImage]=useState("");
  const [ url, setUrl ] = useState("");
  const router =useRouter();
  useEffect(()=>{
    if(localStorage.getItem('myprappuser')){
    router.push('/admin');
    }
    setId(router.query.id);
   
  })



  const handleChange=(e)=>{
  if(e.target.name=="bio"){
 setbio(e.target.value);
  }
  else if (e.target.name === "image") {
    setImage(e.target.files[0]);
  }
  }
  const uploadImage = () => {
    setLoading(true)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "dgdea2n8")
    data.append("cloud_name","dawzncoau")
    fetch("https://api.cloudinary.com/v1_1/dawzncoau/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setLoading(false);
      toast.success("Successfully Upload Your Profile Picture", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    setUrl(data.url)
    })
    .catch(err => {
    toast.error("Sorry some error occured please try again after some time", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    })
    }
  
  const handleSubmit=async()=>{
    if(url.length==0){
      toast.error("Please add profile picture !", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else if(bio.length==0){
      toast.error("Please add your bio !", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
    setLoading(true)
        const data ={bio,url,id};
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/postsignup`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response=await res.json();
   console.log(response.success)
   localStorage.setItem('myprappuser',JSON.stringify({token:response.token,email:response.email}));

    if(response.success){
      setLoading(false)
  
      toast.success('Your account has been created successfully.', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(()=>{
          router.push('/admin')
          },2000)
        }
    else if(!response.success){
      setLoading(false)
      toast.error("Something went wrong please try again after some time or an account with this email address already exist please try again  with different email address", {
        position: "top-left",
        autoClose: 2500,
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
    {loading?<Spinner/>:<div>
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
<Head>
      <title> Add your profile - Project Studio </title>
      <meta name="description" content='SignUp to our hotel booking and food delivery website to unlock exclusive deals on accommodations and enjoy the convenience of seamless food delivery. Discover a world of exceptional hospitality and culinary delights with our secure login process!'/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
      <div className="flex flex-col justify-start px-6 py-6 lg:px-8 bg-white min-h-screen bg-[url('/loginbg.jpg')] object-cover">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image alt="logo" src="/prapplogo.png" width={180} height={60} className='m-auto'/>
    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">SetUp Your Profile</h2>
  </div>

  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <div >
      <div className='flex justify-center flex-col items-center'>
   
    </div>
  <label htmlFor='pass-basic1' className='font-bold'>Upload Your Profile Picture </label>
    {/*<input
            onChange={handleChange}
              id="image"
              name="image"
              type="file"
              className='border-2 border-blue-300 p-2 rounded w-full focus:outline-none focus:border-blue-600 bg-gray-100'
            />
           
            <button onClick={uploadImage} className='my-2 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'>
            Upload Now
          </button> */}
           <div className="shrink-0 flex justify-center items-center my-4">
           {<div className=""><h4 className='font-bold'></h4><Image src={`${url==""?"/grey.jpg":url}`} alt="preview" className='w-20 h-20 object-cover border-amber-500 rounded-full' width={20} height={20}/></div>}
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file" name= "image" onChange={handleChange}
    className="block w-full text-sm text-slate-500 
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
  <button onClick={uploadImage} className='my-2 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'>
            Upload Now
          </button> 
          
    </div>
      <div>
        <label htmlFor="name" className="block  font-bold leading-6 text-gray-900">Enter Your Bio </label>
        <div className="mt-2">
          <textarea rows="5" cols="5"  onChange={handleChange} value={bio} id="name" name="bio" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 p-2" placeholder='Forexample:- Who are you ? what is your proffession ? what is your achievement ?'/>
        </div>
      </div>
      <div>
        <button onClick={handleSubmit} className=" my-4 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"> Submit</button>
      </div>
  </div>
</div>
    </div>}

    </>
  )
}

export default Signup

