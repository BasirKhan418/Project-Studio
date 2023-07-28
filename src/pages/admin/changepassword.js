import React, { useEffect, useState } from 'react'
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from "@mui/material/styles";
import Spinner from '../components/Spinner';
import { useRouter } from 'next/router';

const Changepassword = () => {
    const router =useRouter();
    const[password,setPassword]=useState('');
    const[cpassword,setCpassword]=useState('');
    const[npassword,setNpassword]=useState('');
    const[user,setUser]=useState({});
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
const user = JSON.parse(localStorage.getItem("myprappuser"));
setUser(user);
    },[])
    const handleChange=(e)=>{
        if(e.target.name=='password'){
            setPassword(e.target.value);
        }
        else if(e.target.name=='cpassword'){
            setCpassword(e.target.value);
        }
        else if(e.target.name=='npassword'){
            setNpassword(e.target.value);
        }
    }
    const handleChangePassword=async()=>{
        if(npassword!=cpassword){
            toast.error("New password and confirm password doesnot matched", {
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
        setLoading(true)
        const data ={token:user.token,password,cpassword,npassword};
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
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
            setCpassword('');
       setNpassword('');
       setPassword('');
       router.push("/login")
        }
        else{
          toast.error("Invalid Current Password", {
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
      <ThemeProvider theme={theme}>
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
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
       {loading?<Spinner/>:<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
          </h2>
          <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Current Password</label>
                  <input type="password" name="password" onChange={handleChange} value={password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your current password" required=""/>
              </div>
              <div>
                  <label for="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" name="cpassword" id="cpassword" value={cpassword} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
                  <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="confirm-password" name="npassword" value={npassword} onChange={handleChange} id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
             
              <button onClick={handleChangePassword}className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Change Password</button>
             
          
          <span className=' text-blue-600 font-light text-sm text-center'>After changing your password you are redirected to login page and you want to login with your new credentials.</span>
      </div>
      
      
  </div>
  </div>

</section>}
       </FullLayout>
      </ThemeProvider> 
 
  )
}

export default Changepassword