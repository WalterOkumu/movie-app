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
                            onClick = {() => props.changeCategory(genre.name)}
                            key = {index}
                            href = '#'
                            className = {`list-group-item ${props.activeGenre === genre.name ? 'active' : ''}`}
                        >
                            {genre.id} - {genre.name}
                        </a>
                    )
                }
            </ul>
        </div>
    )
}

export default SideMenu