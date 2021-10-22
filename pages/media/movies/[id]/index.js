import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import MediaList from '../../../../components/MediaList'
import { getMovieById, getMovieGenres, getSimilarMovieById } from '../../../../actions'
import { BASE_URL_IMAGE, BASE_URL_TRAILER, BASE_URL_MOVIE } from '../../../../actions'

const MovieDetails = (props) => {

  const { id, movie, genreList, similarMovies } = props
  console.log(movie)
  const showGenre = (movieGenres) => {
    let temp = []
    let genre = ''

    for(let i = 0; i <= movieGenres.length; i++) {
        temp[i] = genreList.find( ({ id }) => id === movieGenres[i])
    }

    temp = temp.filter(function( element ) {
        return element !== undefined;
    })

    temp.map(t => (
        genre = genre + ' ' + t.name
    ))

    return genre.trim()
  }

  return (
    <div className = 'container'>
      <div className = 'row align-items-start '>
        <div className = 'row'>
          <div className='col-lg-3'>
            <Image
              src = {`${BASE_URL_IMAGE}/${movie.poster_path}`}
              alt = {movie.title}
              width = '400px'
              height = '550px'
              className = 'movie-poster'
            />
          </div>
          <div className='col-lg-9'>
            <h2>{movie.title} ({movie.release_date})</h2>
            <h4>{movie.vote_average} - {movie.release_date} - **Fix Genres** - {movie.runtime}</h4>
            <h6>user score</h6>
            <div className = ''>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <hr></hr>
              <button
                type='button'
                className='btn btn-outline-success btn-lg'
              >
                <a rel = 'noreferrer' target = '_blank' href = {`${BASE_URL_MOVIE}${movie.id}`}>
                  Watch Here
                </a>
              </button>
              <b>
                <i>
                  Make sure to check your pop-up blocker!!
                </i>
              </b>
              <hr></hr>
            </div>
            <div>
              <h3>Trailer</h3>
              <div>
                <ReactPlayer
                  url = {`${BASE_URL_TRAILER}${movie.videos.results[0].key}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
          carousel was here
          <div className='row'>
            <div className='col-lg-3'>
              side menu was here
            </div>
            <div className='col-lg-9'>
              <h1>Similar Movies</h1>
              <div className='row'>
                <MediaList
                  media = {similarMovies}
                  genres = {genreList}
                  parent = 'movieDetailsComponent'
                />
              </div>
            </div>
          </div>
        </div>
    </div>


  )
}

MovieDetails.getInitialProps = async (context) => {

  const { id } = context.query

  const movie = await getMovieById(id)

  const similarMovies = await getSimilarMovieById(id)

  const genreList = await getMovieGenres()

  return { id, movie, genreList, similarMovies }
}

export default MovieDetails