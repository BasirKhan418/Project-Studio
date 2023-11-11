import '../styles/globals.css'
import Navabar from './components/Navabar'
import { usePathname } from 'next/navigation'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Router, { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import Storedetails from '../store/Storedetails';
import { AnimatePresence } from 'framer-motion'
export default function App({ Component, pageProps }) {
  const pathname = usePathname()
  const router=useRouter();
 
  const [progress, setProgress] = useState(0)
  const [key , setKey] = useState(0)
  const [user,setUser]=useState(false);
  useEffect(() => {
    import("preline");
  }, []);
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    const myUser = JSON.parse(localStorage.getItem('e-reviveUser'));
    if(myUser){
    setUser(true)
    setKey(Math.random());
  }
 
  },[router.query])
  const logout=()=>{
    localStorage.removeItem('e-reviveUser');
    setKey(Math.random());
    toast.success("Logged out successfully", {
      position: "top-right",
    });
    setTimeout(()=>{
      router.push("/");
    },1000);
    setUser(false);
  }
  return <>      <AnimatePresence
  mode="wait"
  initial={false}
  onExitComplete={() => window.scrollTo(0, 0)}
>  <Provider store={Storedetails}><LoadingBar
  color='blue'
  waitingTime={400}
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
/><Navabar key={key} logout={logout} user={user} /><Component {...pageProps} /> <Footer/> </Provider> </AnimatePresence></>
}
