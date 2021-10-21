import React, { useState } from 'react'
//import Components
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MediaList from '../components/MediaList'

//import data
import { getMovieGenres, getPopularMovies } from '../actions'

const Movies = (props) => {

  const { movieGenres, popularMovies } = props

  const [filter, setFilter] = useState('All')

  const changeGenre = (genre) => {
    setFilter(genre)
  }

  const filterMovies = (movies) => {

    if(filter === 'All') {
      return movies
    }

    return movies.filter((movie) => {
      return movie.genre && movie.genre.includes(filter)
    })
  }

  return (
    <div>
      <div className = 'home-page'>
        <div className='container'>
          <Carousel media = {popularMovies}/>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu
                mediaType = ''
                genres = {movieGenres}
                changeGenre = {changeGenre}
                activeGenre = {filter}
              />
            </div>

            <div className='col-lg-9'>
              <h1>Displaying {filter} Movies</h1>
              <div className='row'>
                <MediaList
                  media = { filterMovies(popularMovies) || [] }
                  genres = {movieGenres}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Movies.getInitialProps = async () => {

  const movieGenres = await getMovieGenres()

  const popularMovies = await getPopularMovies(1)

  let temp = {
    id: 1,
    name: 'All'
  }

  movieGenres.unshift(temp)

  return {
    movieGenres,
    popularMovies
  }
}
export default Movies