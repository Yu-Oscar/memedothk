/* eslint-disable react/prop-types */
import React from 'react'
import './hot-card.css'

const HotItems = [
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

const HotCardItem = props => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className='image-box'>
          <img className='image' src={props.item.url} ></img>
      </div>
      <div className="hot-title">
        <p>name of the meme</p>
      </div>
  </div>
  )
}

const CardList = () => {
  return (
    <div className='hot-card-list'>
      {HotItems.map(item => {
        return <HotCardItem item={item} key={item.id} />
      })}
    </div>
  )
}

export default function HotCard () {
  return (
    <div >
      <CardList />
    </div>
  )
}
