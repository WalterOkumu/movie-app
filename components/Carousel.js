/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { BASE_URL_IMAGE } from '../actions'

const Carousel = (props) => {
  const { media } = props

  return (
    <div id='carouselHomepage' className='carousel slide ' data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        {
          media.map((mediaItem, index) => (
            <button
              key = {index}
              type='button'
              data-bs-target='#carouselHomepage'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            />
          ))
        }
      </div>

      <div className='carousel-inner'>
        {
          media.map((mediaItem, index) => (
            <div key = {index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src= {`${BASE_URL_IMAGE}/${mediaItem.backdrop_path}`}
                className='d-block w-100'
                alt = {mediaItem.name}
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>{mediaItem.original_title || mediaItem.name}</h3>
                <p>{mediaItem.overview}</p>
              </div>
            </div>
          ))
        }
      </div>

      <button className='carousel-control-prev' type='button' data-bs-target='#carouselHomepage' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>

      <button className='carousel-control-next' type='button' data-bs-target='#carouselHomepage' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>

      <style jsx>{`
          .carousel-item {
            max-height: 700px;
            }
        `}
      </style>
    </div>
  )
}

export default Carousel