import '../styles/globals.css'
import Navabar from './components/Navabar'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import storedata from '../store/Storedata';
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
  return <> <Provider store={storedata}><LoadingBar
  color='blue'
  waitingTime={400}
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
/><Navabar/><Component {...pageProps} /> <Footer/> </Provider></>
}
