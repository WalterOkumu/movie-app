import React, {  useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'

//import Components
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MovieList from '../components/movieList'
import Footer from '../components/Footer'

const Home = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

const reduce = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>

      <Navbar />

      <div className = 'home-page'>
        <div className='container'>
          
          <button onClick = {increment} className = 'btn btn-primary'>Increment Number</button>
          <button onClick = {reduce} className = 'btn btn-primary'>Reduce Number</button>

          <div className='row'>

            <div className='col-lg-3'>
              <SideMenu 
                count = {count} 
                appName = {'Movie DB'}
                clickHandler = {() => {console.log('Hello World')}}
              />
            </div>

            <div className='col-lg-9'>
              <Carousel />

              <div className='row'>
                <MovieList count = {count} />
              </div>

            </div>
            
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .home-page {
          padding-top: 80px;
        }
      `}
      </style>

    </div>
  )   
}
export default Home