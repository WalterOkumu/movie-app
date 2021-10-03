const MOVIE_DATA = [
    {
        id: '1',
        title: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        longDesc: 'Aliquip deserunt excepteur culpa enim et sint consectetur. Reprehenderit voluptate ad eu do eiusmod do culpa fugiat et. Eu fugiat occaecat officia sint occaecat incididunt. Aliqua ex laborum aute pariatur veniam velit fugiat. Amet ut exercitation dolor aliqua dolor. Duis incididunt tempor commodo dolor eu amet quis voluptate voluptate nisi incididunt exercitation laboris.',
        rating: 4.8,
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
        cover: 'https://images.unsplash.com/photo-1613264520739-c2eb038e8404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
  
    {
        id: '2',
        title: 'The Dark Knight',
        releaseYear: 2008,
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        longDesc: 'Aliquip deserunt excepteur culpa enim et sint consectetur. Reprehenderit voluptate ad eu do eiusmod do culpa fugiat et. Eu fugiat occaecat officia sint occaecat incididunt. Aliqua ex laborum aute pariatur veniam velit fugiat. Amet ut exercitation dolor aliqua dolor. Duis incididunt tempor commodo dolor eu amet quis voluptate voluptate nisi incididunt exercitation laboris.',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
        cover: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
  
    {
        id: '3',
        title: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        longDesc: 'Aliquip deserunt excepteur culpa enim et sint consectetur. Reprehenderit voluptate ad eu do eiusmod do culpa fugiat et. Eu fugiat occaecat officia sint occaecat incididunt. Aliqua ex laborum aute pariatur veniam velit fugiat. Amet ut exercitation dolor aliqua dolor. Duis incididunt tempor commodo dolor eu amet quis voluptate voluptate nisi incididunt exercitation laboris.',
        rating: 4.9,
        genre: 'adventure,drama, fantasy',
        image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
        cover: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80'
    },
  ]

    export const getMovies = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOVIE_DATA)
                reject('Cannot fetch data!')
            }, 50)
        })
    }

    export const getMovieById = (id) => {

        return new Promise((resolve, reject) => {
            const movieIndex = MOVIE_DATA.findIndex((movie) => {
                return movie.id === id
            })

            const movie = MOVIE_DATA[movieIndex]

            setTimeout(() => {
                resolve(movie)
                reject('Movie not found!')
            }, 50)
        })
    }