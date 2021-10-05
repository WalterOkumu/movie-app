import React from 'react'
import { getMovieById } from '../../../actions'
import CreateMovieForm from '../../../components/CreateMovieForm'

class EditMovie extends React.Component {

    // static getInitialProps({query}) {
    //     return {query}
    // }

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)

        return { movie }
    }

    // state = {
    //     movie: {
    //         title: '',
    //         description: '',
    //         rating: '',
    //         longDesc: '',
    //         cover: '',
    //         image: '',
    //         genre: ''
    //     }
    // }

    // componentDidMount() {
    //     const { id } = this.props.query

    //     getMovieById(id)
    //         .then(movie => {
    //             this.setState({ movie })
    //     })
    // }

    render() {
        const { movie } = this.props
        return (
            <div className = 'container'>
                <h1>Edit Movie</h1>
                <CreateMovieForm initialData = {movie} />
            </div>
        )
    }
}

export default EditMovie
