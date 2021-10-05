import { useRouter } from 'next/router'
import Modal from '../components/Modal'
import CreateMovieForm from './CreateMovieForm'
import { createMovie } from '../actions'

const SideMenu = (props) => {
    const {categories} = props

    const router = useRouter()

    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies))
            modal.closeModal()
            router.push('/')
        })
    }
    
    return (
        <div>
            <Modal ref = {elem => modal = elem} hasSubmit = {false} >
                <CreateMovieForm handleCreateMovie = {handleCreateMovie} />
            </Modal>
            <h1 className='my-4'>{props.appName}</h1>
            <ul className='list-group'>
                {
                    categories.map((category, index) => 
                        <a
                            key = {index}
                            href = '#'
                            className = 'list-group-item'
                        >
                            {category.name}
                        </a>
                    )
                }
            </ul>
        </div>
    )
}

export default SideMenu