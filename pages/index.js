import React, { useState } from 'react'
import Head from 'next/head'
//import Components
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MediaList from '../components/MediaList'

//import data
import { getMovieGenres, getTVShowGenres, getMedia, getPopularMovies, getPopularTVShows } from '../actions'

const Home = (props) => {

  const {combinedMedia, movieGenres, tvShowGenres, popularMovies, popularTVShows } = props

  const [filter, setFilter] = useState(1)

  let filterHeader = 'All'

  const getGenreName = (genreId) => {
    let genreName = ''

    movieGenres.forEach((genreItem, key) => {
      if(genreItem.id === genreId) {
        genreName = genreItem.name
      }
    })
    return genreName
  }

  const changeGenre = (genre) => {
    setFilter(genre)
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
        <title>McStreamy</title>
      </Head>
      <div className = 'home-page'>
        <div className='container'>
          <Carousel media = {combinedMedia}/>
          <div className='row lower-container'>
            <div className='col-lg-3'>
              <SideMenu
                mediaType = ''
                genres = {movieGenres}
                changeGenre = {changeGenre}
                activeGenre = {filter}
              />
            </div>

            <div className='col-lg-9'>
              <h1>Displaying {getGenreName(filter)} Movies &amp; TV Shows</h1>
              <div className='row'>
                <MediaList
                  media = { filterMedia(combinedMedia) || [] }
                  genres = {movieGenres}
                  parent = 'homeComponent'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async (context) => {

  const combinedMedia = await getMedia()

  const movieGenres = await getMovieGenres()

  const tvShowGenres = await getTVShowGenres()

  const popularMovies = await getPopularMovies(1)

  const popularTVShows = await getPopularTVShows(1)

  let temp = {
    id: 1,
    name: 'All'
  }

  movieGenres.unshift(temp)
  tvShowGenres.unshift(temp)

  return {
    combinedMedia,
    movieGenres,
    popularMovies,
    popularTVShows,
    tvShowGenres
  }
}

export default Home