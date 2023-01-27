/* eslint-disable no-unused-vars */
import './carousel.css'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'

const CarouselItems = [
  {
    id: 1,
    name: 'Wonder Woman',
    alterEgo: 'Diana Prince',
    alignment: 'hero',
    url: 'https://i.imgur.com/oeRMM9J.jpg'
  },
  {
    id: 2,
    name: 'Poison Ivy',
    alterEgo: 'Pamela Lillian Isley',
    alignment: 'villain',
    url: 'https://i.imgur.com/MefBiul.jpg'
  },
  {
    id: 3,
    name: 'Black Canary',
    alterEgo: 'Dinah Drake',
    alignment: 'hero',
    url: 'https://i.imgur.com/ZehtWnT.jpg'
  },
  {
    id: 4,
    name: 'Catwoman',
    alterEgo: 'Selina Kyle',
    alignment: 'villain',
    url: 'https://i.imgur.com/Tcx1JEV.jpg'
  },
  {
    id: 5,
    name: 'Catwoman',
    alterEgo: 'Selina Kyle',
    alignment: 'villain',
    url: 'https://i.imgur.com/Tcx1JEV.jpg'
  }
]

function Carousel () {
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    autoWidth: true,
    controls: false
  }
  return (
    <div className='carousel-section'>
        <TinySlider settings={settings}>
            {CarouselItems.map(item => {
              return <div key={item.id} className='carousel-box'><img className='carousel-image' src={item.url}></img></div>
            })}
        </TinySlider>
    </div>
  )
}

export default Carousel
