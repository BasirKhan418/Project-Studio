import '@/styles/globals.css'
import Navabar from './components/Navabar'
import Footer from './components/Footer'

export default function App({ Component, pageProps }) {
  return <><Navabar/><Component {...pageProps} /><Footer/></>
}
