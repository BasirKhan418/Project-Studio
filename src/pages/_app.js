import '../styles/globals.css'
import Navabar from './components/Navabar'
import { AllstateProvider } from '../context/Allstate'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import Router, { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const router=useRouter();
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  },[])
  return <> <AllstateProvider><LoadingBar
  color='blue'
  waitingTime={400}
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
/><Navabar/><Component {...pageProps} /><Footer/></AllstateProvider></>
}
