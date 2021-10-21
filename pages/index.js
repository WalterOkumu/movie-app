import React, { useState } from 'react'

//import Components
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MediaList from '../components/MediaList'

//import data
import { getGenres, getMedia } from '../actions'

const Home = (props) => {

  const {combinedMedia, genres} = props

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
          <Carousel media = {combinedMedia}/>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu
                genres = {genres}
                changeGenre = {changeGenre}
                activeGenre = {filter}
              />
            </div>

            <div className='col-lg-9'>
              <h1>Displaying {filter} Movies and TV Shows</h1>
              <div className='row'>
                <MediaList media = { filterMovies(combinedMedia) || [] } />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {

  // const movies = await getMovies()

  // const categories = await getCategories()

  // const images = movies.map(movie => ({
  //   id: `image-${movie.id}`,
  //   url: movie.cover,
  //   title: movie.title
  //   })
  // )

  // return {
  //   movies,
  //   images,
  //   categories
  // }

  const combinedMedia = await getMedia()

  const genres = await getGenres()

  let temp = {
    id: 1,
    name: 'All'
  }

  genres.unshift(temp)

  return {
    combinedMedia,
    genres
  }
}

export default Home