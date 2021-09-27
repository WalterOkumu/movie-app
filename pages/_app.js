import App from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class MovieApp extends App {

  //TODO: execute here getInitialProps and pass data to children

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }
  render(){
    const { Component, pageProps } = this.props

    return (
      <div>
        <Head>
          <title>Home</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        </Head>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>

        <Navbar />

        <div className = 'base-page'>
          <Component {...pageProps} />
        </div>
        <Footer />
        <style jsx>{`
          .base-page {
            padding-top: 80px;
            }
        `}
        </style>
      </div>
    )
  }
}

export default MovieApp