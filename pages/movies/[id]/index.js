import { useRouter } from 'next/router'
import Link from 'next/link'
import { getMovieById, deleteMovie } from '../../../actions'

const Movie = (props) => {
    const router = useRouter()

    const { id } = router.query

    const { movie } = props

    const handleDeleteMovie = () => {
        deleteMovie(id)
            .then(() => {
            //finish later
                router.push('/')
            })
    }

    return (
        <div className = 'container'>
            <div className='p-5 mb-4 bg-light rounded-3'>
                <div className='container-fluid py-5'>
                    <h1 className='display-5 fw-bold'>{ movie.title }</h1>
                    <img src = {movie.cover} alt = {movie.title} width = '900px' height = '350px' />
                    <p className='lead'>{ movie.description }</p>
                    <hr className = 'my-4' />
                    <p>{ movie.genre }</p>
                    
                    <button className='btn btn-primary btn-lg me-1' href = '#' role = 'button'>Learn More</button>
                    
                    <Link href = '/movies/[id]/edit' as = {`/movies/${id}/edit`}>
                        <button 
                            onClick = {() => router.push(`/movies/${id}/edit`)} 
                            className='btn btn-warning btn-lg me-1'
                            role = 'button'>
                            Edit
                        </button>
                    </Link>
                    
                    <button onClick = {() => handleDeleteMovie(id)} className='btn btn-danger btn-lg' href = '#' role = 'button'>Delete</button>
                    
                </div>
            </div>
            <p className = 'desc-text'>{ movie.longDesc }</p>
            <style jsx>{`
                .desc-text {
                    font-size: 21px;
                }
                `}
            </style>
        </div>
    )
}

Movie.getInitialProps = async (context) => {
    const { id } = context.query
    const movie = await getMovieById(id)

    return { movie }
}

export default Movie