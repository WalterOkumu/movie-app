import React, { useState, useEffect } from 'react'

//import Components
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MovieList from '../components/movieList'

//import data
import { getMovies } from '../components/actions'

const Home = (props) => {
  return (
    <div className = ''>
      <div className = 'home-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu appName = {'Movie DB'} />
            </div>

            <div className='col-lg-9'>
              <Carousel />

              <div className='row'>
                <MovieList movies = {props.movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )   
}

Home.getInitialProps = async () => {
  const movies = await getMovies()

  return {
    movies
  }
}

export default Home