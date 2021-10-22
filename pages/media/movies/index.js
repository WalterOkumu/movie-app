import React, { useState } from 'react'
import Head from 'next/head'
//import Components
import SideMenu from '../../../components/SideMenu'
import Carousel from '../../../components/Carousel'
import MediaList from '../../../components/MediaList'

//import data
import { getMovieGenres, getPopularMovies } from '../../../actions/index'

const Movies = (props) => {

  const { movieGenres, popularMovies } = props

  const [filter, setFilter] = useState(1)

  const changeGenre = (genre) => {
    setFilter(genre)
  }

  const getGenreName = (genreId) => {
    let genreName = ''

    movieGenres.forEach((genreItem, key) => {
      if(genreItem.id === genreId) {
        genreName = genreItem.name
      }
    })
    return genreName
  }

  const filterMedia = (mediaList) => {
    let dataList = []

    if(filter === 1) {
      return mediaList
    } else {
      mediaList.forEach(mediaItem => {
        if (mediaItem.genre_ids.includes(filter)) {
          dataList.push(mediaItem)
        }
      });
    }
    return dataList
  }

  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
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
              <h1>Displaying {getGenreName(filter)} Movies</h1>
              <div className='row'>
                <MediaList
                  media = { filterMedia(popularMovies) || [] }
                  genres = {movieGenres}
                  parent = 'moviesComponent'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Movies.getInitialProps = async (context) => {

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