/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL_IMAGE } from '../actions'

const MediaList = (props) => {

    const { media, genres, parent } = props

    const shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        return text
    }

    const showGenre = (movieGenres) => {
        let temp = []
        let genre = ''

        for(let i = 0; i <= movieGenres.length; i++) {
            temp[i] = genres.find( ({ id }) => id === movieGenres[i])
        }

        temp = temp.filter(function( element ) {
            return element !== undefined;
        })

        temp.map((t, index) => {
            if (index === 0) {
              genre = t.name
            } else {
              genre = genre + ', ' + t.name
            }
          })

        return genre.trim()
    }

    const identifyMedia = (parent) => {
        if (parent === 'homeComponent') {
            return '/media/movies'
        } else if (parent === 'moviesComponent' || parent === 'movieDetailsComponent') {
            return '/media/movies'
        } else if (parent === 'tvshowsComponent') {
            return '/media/tvshows'
        }
    }

    const renderMovies = (media) => {
        return media.map(mediaItem => (
            <div key = {mediaItem.id} className='col-lg-4 col-md-6 mb-4'>
                <div className='card h-100'>
                    <a href = {`${identifyMedia(parent)}/${mediaItem.id}`} >
                        <img
                            className='card-img-top'
                            src={`${BASE_URL_IMAGE}/${mediaItem.poster_path}`}
                            alt={mediaItem.title || mediaItem.name}
                        />
                    </a>
                    <div className='card-body'>
                        <a href = {`${identifyMedia(parent)}/${mediaItem.id}`} >
                        <h4 className='card-title'>
                            {mediaItem.title || mediaItem.name}
                        </h4>
                        </a>
                        <br></br>
                        <h6>
                            Released on: {mediaItem.release_date || mediaItem.first_air_date}
                        </h6>
                        <h6>
                            <i>
                                {showGenre(mediaItem.genre_ids)}
                            </i>
                        </h6>
                        <p className='card-text'>{shorten(mediaItem.overview, 100)}</p>
                    </div>
                    <div className='card-footer'>
                        {mediaItem.vote_average}
                    </div>

                </div>
            </div>
        ))
    }

    return(
        <React.Fragment>
            {renderMovies(media)}
        </React.Fragment>
    )
}

MediaList.getInitialProps = context => {
    return context
}

export default MediaList