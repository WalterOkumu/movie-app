import { useRouter } from 'next/router'
import Image from 'next'
import { getMovieById } from '../../components/actions'

const Movie = (props) => {
    const router = useRouter()

    const { id } = router.query

    const { movie } = props

    return (
        <div className = 'container'>
            <div className='p-5 mb-4 bg-light rounded-3'>
                <div className='container-fluid py-5'>
                    <h1 className='display-5 fw-bold'>{ movie.title }</h1>
                    <p className='lead'>{ movie.description }</p>
                    <hr className = 'my-4' />
                    <p>{ movie.genre }</p>
                    <a className='btn btn-primary btn-lg' href = '#' role = 'button'>Learn More</a>
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