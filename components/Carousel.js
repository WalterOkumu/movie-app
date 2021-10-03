/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const Carousel = (props) => {
  const { images } = props

  return (
    <div id='carouselHomepage' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        {
          images.map((image, index) => (
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
          images.map((image, index) => (
            <div key = {index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img 
                src= {image.url} 
                className='d-block w-100' 
                alt = {image.name}
              />
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
            max-height: 400px;
            }
        `}
      </style>
    </div>
  )
}

export default Carousel