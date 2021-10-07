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
                <CreateMovieForm handleFormSubmit = {handleCreateMovie} />
            </Modal>
            <h1 className='my-4'>{props.appName}</h1>
            <ul className='list-group'>
                {
                    categories.map((category, index) => 
                        <a
                            onClick = {() => props.changeCategory(category.name)}
                            key = {index}
                            href = '#'
                            className = {`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}
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