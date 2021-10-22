import Image from 'next/image'
import Head from 'next/head'
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import MediaList from '../../../../components/MediaList'
import { getMovieById, getMovieGenres, getSimilarMovieById } from '../../../../actions'
import { BASE_URL_IMAGE, BASE_URL_TRAILER, BASE_URL_MOVIE } from '../../../../actions'

const MovieDetails = (props) => {

  const { id, movie, genreList, similarMovies } = props

  const showGenre = (movieGenres) => {
    let temp = []
    let genre = ''

    for(let i = 0; i <= movieGenres.length - 1; i++) {
        temp[i] = genreList.find( ({ id }) => id === movieGenres[i].id)
    }

    temp = temp.filter(function( element ) {
        return element !== undefined;
    })

    temp.map((t, index) => {
      if (index === 0) {
        genre = t.name
      } else {
        genre = genre + ', ' + t.name
      }
    })

    return genre
  }

  const formatDate = (movieDate, dateFormat) => {
    return format(new Date(movieDate), dateFormat)
  }

  const formatTime = (num) => {
    let hours = Math.floor(num / 60)
    let minutes = num % 60

    return (hours + 'h ' + minutes + 'min')
  }

  const pieChartProgress = (value) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
            variant = 'determinate'
            value = {value}
            color = 'success'
            size = '5rem'
        />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant='h6' component='div' color='amber'>
                <strong>{`${Math.round(value)}%`}</strong>
            </Typography>
        </Box>
    </Box>
    )
  }

  const manageTrailer = (media) => {
    if (media.videos.results.length === 0) {
      return 'https://www.youtube.com/watch?v=O9ejXv5Er6M'
    } else {
      return `${BASE_URL_TRAILER}${media.videos.results[0].key}`
    }
  }

  return (
    <div className = 'container'>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className = 'row align-items-start '>
        <div className = 'row'>
          <div className='col-lg-3'>
            <Image
              src = {`${BASE_URL_IMAGE}/${movie.poster_path}`}
              alt = {movie.title}
              width = '400px'
              height = '550px'
              className = 'media-poster'
            />
          </div>
          <div className='col-lg-9'>
            <h2>{movie.title} ({formatDate(movie.release_date, 'y')})</h2>
            <h4>&#8226; {formatDate(movie.release_date, 'PPP')} &#8226; { formatTime(movie.runtime) }</h4>
            <h6>
              <i>
                {showGenre(movie.genres)}
              </i>
            </h6>
            <div className = 'container'>
              { pieChartProgress(movie.vote_average * 10)}
            </div>
            <div className = ''>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <hr></hr>
              <button type='button' className = 'btn btn-success'>
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
                  url = {manageTrailer(movie)}
                  width = '100%'
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 1,
                        origin: 'http://localhost:3000'
                      }
                    }

                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>

          <div className='row'>
            <div className='col-lg-3'>

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