const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const moviesData = require(filePath)

app.prepare().then(() => {

    const server = express()

    server.use(express.json())

    server.get('/api/movies', (req, res) => {
        return res.json(moviesData)
    })

    server.get('/api/movies/:id', (req, res) => {
        const { id } = req.params

        const movie = moviesData.find(movie => movie.id === id)

        return res.json(movie)
    })

    server.post('/api/movies', (req, res) => {
        const movie = req.body
        
        moviesData.push(movie)

        const pathToFile = path.join(__dirname, filePath)

        const stringifiedData = JSON.stringify(moviesData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if(err) {
                return res.status(422).send(err)
            }

            return res.json('Movie has been successfully added!')
        })
    })

    server.patch('/api/movies/:id', (req, res) => {
        const { id } = req.params

        const movie = req.body

        const movieIndex = moviesData.findIndex(movie => movie.id === id)

        moviesData[movieIndex] = movie
        
        const pathToFile = path.join(__dirname, filePath)

        const stringifiedData = JSON.stringify(moviesData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if(err) {
                return res.status(422).send(err)
            }

            return res.json('Movie has been successfully updated!')
        }) 
    })

    server.delete('/api/movies/:id', (req, res) => {
        const { id } = req.params

        const movieIndex = moviesData.findIndex(movie => movie.id === id)

        moviesData.splice(movieIndex, 1)
        
        const pathToFile = path.join(__dirname, filePath)

        const stringifiedData = JSON.stringify(moviesData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if(err) {
                return res.status(422).send(err)
            }

            return res.json('Movie has been successfully added!')
        })
    })


    // server.get('*', (req, res) => {
    //     return handle(req, res)
    // })

    // server.post('*', (req, res) => {
    //     return handle(req, res)
    // })

    const PORT = process.env.PORT || 3000

    server.use(handle).listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on port ' + PORT)
    })
})