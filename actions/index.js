import axios from 'axios'

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const BASE_URL_TRENDING = process.env.NEXT_PUBLIC_BASE_URL_TRENDING
export const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE
export const BASE_URL_MOVIE = process.env.NEXT_PUBLIC_BASE_URL_MOVIE

export const getMedia = () => {
    return axios.get(`${BASE_URL_TRENDING}/all/day?api_key=${API_KEY}`)
                .then(response => response.data)
                .then(response => response.results)
                .catch(error => console.log(error))
}

export const getMovieGenres = () => {
    return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
                .then(response => response.data)
                .then(response => response.genres)
                .catch(error => console.log(error))
}

export const getTVShowGenres = () => {
    return axios.get(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`)
                .then(response => response.data)
                .then(response => response.genres)
                .catch(error => console.log(error))
}

export const getPopularMovies = (pageNumber) => {
    return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&${pageNumber}`)
                .then(response => response.data)
                .then(response => response.results)
                .catch(error => console.log(error))
}

export const getPopularTVShows = (pageNumber) => {
    return axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&${pageNumber}`)
                .then(response => response.data)
                .then(response => response.results)
                .catch(error => console.log(error))
}

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
                .then(response => response.data)
                .then(response => response.results)
                .catch(error => console.log(error))
}

export const getTVShowById = (id) => {
    return axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`)
                .then(response => response.data)
                .then(response => response.results)
                .catch(error => console.log(error))
}