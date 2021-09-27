const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 4.8,
        genre: 'drama',
        image: '/shawshank.jpeg'
    },
  
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: '/dark_knight.jpeg'
    },
  
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        rating: 4.9,
        genre: 'adventure,drama, fantasy',
        image: '/lotr.jpeg'
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