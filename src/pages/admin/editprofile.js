import React, { useEffect, useState } from 'react'
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../components/Spinner';
import { set } from 'mongoose';

const Editprofile = () => {
  const [url,setUrl]=useState('');
  const router =useRouter();
  const[loading,setLoading]=useState(false);
  const[email,setEmail]=useState('');
  const[username,setUsername]=useState('');
  const[bio,setBio]=useState('');
  const[image,setImage]=useState('');
  const[name,setName]=useState('');
  const[number,setNumber]=useState('');
  const[country,setCountry]=useState('');
  const[college,setCollege]=useState('');
  const[phone,setPhone]=useState('');
  useEffect(()=>{
 const user = JSON.parse(localStorage.getItem("myprappuser"));
 fetchdata(user.token);
setEmail(user.email);

  },[])
 

  const handleChange=(e)=>{ 
    if(e.target.name=="image"){
      setImage(e.target.files[0]);
    }
    else if(e.target.name=="email"){
      setEmail(e.target.value);
    }
    else if(e.target.name=="name"){
      setName(e.target.value);
    }
    else if(e.target.name=="username"){
      setUsername(e.target.value);
    }
    else if(e.target.name=="bio"){
      setBio(e.target.value);
    }
    else if(e.target.name=="country"){
      setCountry(e.target.value);
    }
    else if(e.target.name=="college"){
      setCollege(e.target.value);
    }
    else if(e.target.name=="number"){
      setNumber(e.target.value);
    }
  }
  const fetchdata=async(token)=>{
    setLoading(true)
    const data ={token:token};
    const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res=await pr.json();
    setLoading(false)
    setName(res.name);
    setBio(res.bio);
    setCollege(res.college);
    setCountry(res.country);
    setUsername(res.username);
    setNumber(res.phone);
    setUrl(res.img);

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
      setLoading(true)
      const data ={name,email,phone,bio,img:url,college,country,username,number};
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const response=await res.json();
      setLoading(false)
      if(response.success){
        toast.success("Successfully updated your details", {
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
      else{
        toast.error(response.error, {
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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
       <FullLayout>
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
  {loading?<Spinner/>:<><div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Your Profile</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.Except email and phone number.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">ProjectStudio.com/</span>
              <input onChange={handleChange} value={username} type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 p-2" placeholder="Enter Your User Name"/>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Bio (Write about yourself)</label>
          <div className="mt-2">
            <textarea id="about" onChange={handleChange} value={bio} name="bio" rows="3" className="p-2 m-2 font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>

        <div className="col-span-full">
      
        {<div className="m-2"><h4 className='font-bold'></h4><img src={`${url==""?"/grey.jpg":url}`} alt="preview" className='w-20 h-20 object-cover border-amber-500 rounded-full' width={20} height={20}/></div>}
        <label className="block text-blue-600 m-2 font-extralight" htmlFor=''>Choose profile photo(if you want to change please choose your profile photo and hit the upload now button)
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

        </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Your Name</label>
          <div className="mt-2">
            <input type="text" onChange={handleChange} value={name} name="name" id="name" autoComplete="name" className="font-semibold p-2 m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address (cannot be changed)</label>
          <div className="mt-2">
            <input id="email" onChange={handleChange} value={email} name="email" type="email" autoComplete="email" className=" font-semibold p-2 m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" readOnly/>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div className="mt-2">
            <input id="number" name="number" onChange={handleChange} value={number} type="number" autoComplete="number" className=" font-semibold p-2 m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">College/University</label>
          <div className="mt-2">
            <select value={college} onChange={handleChange} id="country" name="college" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Select</option>
              <option>CUTM</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div className="mt-2">
            <select value={country} onChange={handleChange} id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Select</option>
              <option>India</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-start gap-x-6 mb-12">
    <button onClick={handleSubmit} className="w-40 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div></>}

       </FullLayout>
      </ThemeProvider> 
    </div>
  )
}

export default Editprofile
