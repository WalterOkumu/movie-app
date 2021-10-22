import App from 'next/app'
import { useEffect } from "react"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'

const MovieApp = ({ Component, pageProps }) => {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])

  return (
    <div>
      <Navbar />
      <div className = 'base-page'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

MovieApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MovieApp