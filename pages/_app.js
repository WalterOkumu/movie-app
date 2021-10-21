import App from 'next/app'
import { useEffect } from "react"
import Head from 'next/head'
import Script from 'next/script'

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
      <Head>
        <title>Home</title>

      </Head>

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