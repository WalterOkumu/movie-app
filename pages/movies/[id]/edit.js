import React from 'react'
import Router from 'next/router'
import { getMovieById, updateMovie } from '../../../actions'
import CreateMovieForm from '../../../components/CreateMovieForm'

class EditMovie extends React.Component {

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)

        return { movie }
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((movies) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    render() {
        const { movie } = this.props
        return (
            <div className = 'container'>
                <h1>Edit Movie</h1>
                <CreateMovieForm
                    submitButtonText = 'Update Movie'
                    initialData = {movie} 
                    handleFormSubmit = {this.handleUpdateMovie} 
                />
            </div>
        )
    }
}

export default EditMovie
