import React, { useState } from 'react'

//import Components
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MovieList from '../components/movieList'

//import data
import { getMovies, getCategories } from '../actions'

const Home = (props) => {

  const [filter, setFilter] = useState('All')
  
  const changeCategory = (category) => {
    setFilter(category)
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
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu 
                appName = {'Movie DB'} 
                categories = {props.categories}
                changeCategory = {changeCategory}
                activeCategory = {filter}
              />
            </div>

            <div className='col-lg-9'>
              <Carousel images = {props.images}/>

              <h1>Diplaying {filter} Movies</h1>

              <div className='row'>
                <MovieList movies = { filterMovies(props.movies) || [] } />
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

  const categories = await getCategories()

  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    title: movie.title
    })
  )

  return {
    movies,
    images,
    categories
  }
}

export default Home