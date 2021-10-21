import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL_IMAGE } from '../actions'

const MediaList = (props) => {

    const { media } = props

    const shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        return text
    }

    console.log(media)
    const renderMovies = (media) => {
        return media.map(mediaItem => (
            <div key = {mediaItem.id} className='col-lg-4 col-md-6 mb-4'>
                <div className='card h-100'>
                    <Link to = {`/movie/${mediaItem.id}`} href = {`/movie/${mediaItem.id}`} >
                        <img
                        className='card-img-top'
                        src={`${BASE_URL_IMAGE}/${mediaItem.poster_path}`}
                        alt={mediaItem.title || mediaItem.name}
                        />
                    </Link>
                    <div className='card-body'>
                        <Link to = {`/movie/${mediaItem.id}`} href = {`/movie/${mediaItem.id}`} >
                        <h4 className='card-title'>
                            {mediaItem.title || mediaItem.name}
                        </h4>
                        </Link>
                        <h5>Released on: {mediaItem.release_date || mediaItem.first_air_date}</h5>
                        <h6>
                        <i>
                            {JSON.stringify(mediaItem.genre_ids)}
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

export default MediaList