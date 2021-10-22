import { useRouter } from 'next/router'
import Modal from '../components/Modal'
import CreateMovieForm from './CreateMovieForm'
import { createMovie } from '../actions'

const SideMenu = (props) => {
    const {genres} = props

    return (
        <div>
            <ul className='list-group'>
                {
                    genres.map((genre, index) =>
                        <a
                            onClick = {() => props.changeGenre(genre.id)}
                            key = {index}

                            className = {`list-group-item ${props.activeGenre === genre.id ? 'active' : ''}`}
                        >
                            {genre.name}
                        </a>
                    )
                }
            </ul>
        </div>
    )
}

export default SideMenu