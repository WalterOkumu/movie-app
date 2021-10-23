import Link from 'next/link'
import {SearchBox} from '../components/SearchBox'
import { searchMedia } from '../actions'

const Navbar = () => {
    const placeholder = () => {

    }

    const handleChange = (e) => {
        e.preventDefault()

        searchTMDB(e.target.value)
    }

    const searchTMDB = async (searchQuery) => {
        let pageNumber = 1
        searchQuery = 'Game of Thrones'

        const searchResults = await searchMedia(searchQuery, pageNumber)

        console.log(searchResults)
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link href = '/'>
                    <a className='navbar-brand'>
                        Mc Streamy
                    </a>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='/navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link href = '/'>
                                <a className='nav-link active' aria-current='page'>
                                    Home
                                </a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link href='/media/movies'>
                                <a className='nav-link active' aria-current='page'>
                                    Movies
                                </a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link href='/media/tvshows'>
                                <a className='nav-link active' aria-current='page'>
                                    TV Shows
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <SearchBox
                        placeholder = 'Enter any keyword'
                        onChange = {handleChange}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
