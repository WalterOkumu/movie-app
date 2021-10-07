import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []

const CATEGORY_DATA = [
    {
        id: '0',
        name: 'All'
    },
    
    {
        id: '1',
        name: 'Drama'
    },

    {
        id: '2',
        name: 'Action'
    },

    {
        id: '3',
        name: 'Adventure'
    },

    {
        id: '4',
        name: 'Historical'
    },
]

export const getMovies = () => {

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(MOVIE_DATA)
    //         reject('Cannot fetch movie data!')
    //     }, 50)
    // })

    return axios.get(`${BASE_URL}/api/movies`)
        .then((res) => {
            return res.data
        })
}

export const getMovieById = (id) => {

    return axios.get(`${BASE_URL}/api/movies/${id}`)
        .then(res => res.data)
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)

    return axios.post(`${BASE_URL}/api/movies`, movie)
        .then(res => res.data)
}

export const updateMovie = (movie) => {

    return axios.patch(`${BASE_URL}/api/movies/${movie.id}`, movie)
        .then(res => res.data)
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
            reject('Cannot fetch movie data!')
        }, 50)
    })
}

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/movies/${id}`)
        .then(res => res.data)
}

export const getPosts = () => {
    return axios.get(`${BASE_URL}/api/posts`)
        .then((res) => {
            return res.data
        })
}