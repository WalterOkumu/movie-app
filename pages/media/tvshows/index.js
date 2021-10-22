import React, { useState } from 'react'
import Head from 'next/head'
//import Components
import SideMenu from '../../../components/SideMenu'
import Carousel from '../../../components/Carousel'
import MediaList from '../../../components/MediaList'

//import data
import { getPopularTVShows, getTVShowGenres } from '../../../actions/index'

const TVShows = (props) => {

  const { tvShowGenres, popularTVShows } = props

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
      <Head>
        <title>TV Shows</title>
      </Head>
      <div className = 'home-page'>
        <div className='container'>
          <Carousel media = {popularTVShows}/>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu
                mediaType = ''
                genres = {popularTVShows}
                changeGenre = {changeGenre}
                activeGenre = {filter}
              />
            </div>

            <div className='col-lg-9'>
              <h1>Displaying {filter} TV Shows</h1>
              <div className='row'>
                <MediaList
                  media = { filterMovies(popularTVShows) || [] }
                  genres = {tvShowGenres}
                  parent = 'tvshowsComponent'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TVShows.getInitialProps = async (context) => {

  const tvShowGenres = await getTVShowGenres()

  const popularTVShows = await getPopularTVShows(1)

  let temp = {
    id: 1,
    name: 'All'
  }

  tvShowGenres.unshift(temp)

  return {
    tvShowGenres,
    popularTVShows
  }
}
export default TVShows