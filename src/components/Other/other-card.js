/* eslint-disable react/prop-types */
import React from 'react'
import './other-card.css'

const OtherItems = [
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
    url: 'https://i.imgur.com/pw8Ei5J.jpg'
  }, {
    id: 6,
    name: 'Wonder Woman',
    alterEgo: 'Diana Prince',
    alignment: 'hero',
    url: 'https://i.imgur.com/oeRMM9J.jpg'
  },
  {
    id: 7,
    name: 'Poison Ivy',
    alterEgo: 'Pamela Lillian Isley',
    alignment: 'villain',
    url: 'https://i.imgur.com/MefBiul.jpg'
  },
  {
    id: 8,
    name: 'Black Canary',
    alterEgo: 'Dinah Drake',
    alignment: 'hero',
    url: 'https://i.imgur.com/ZehtWnT.jpg'
  },
  {
    id: 9,
    name: 'Catwoman',
    alterEgo: 'Selina Kyle',
    alignment: 'villain',
    url: 'https://i.imgur.com/Tcx1JEV.jpg'
  },
  {
    id: 10,
    name: 'Catwoman',
    alterEgo: 'Selina Kyle',
    alignment: 'villain',
    url: 'https://i.imgur.com/pw8Ei5J.jpg'
  }
]

const OtherCardItem = props => {
  return (
    <div className="other-box">
      <div className='image-box'>
          <img className='image' src={props.item.url} ></img>
      </div>
      <div className="other-title">
        <p>name of the meme</p>
      </div>
  </div>
  )
}

const CardList = () => {
  return (
    <div className='other-card-list'>
      {OtherItems.map(item => {
        return <OtherCardItem item={item} key={item.id} />
      })}
    </div>
  )
}

export default function OtherCard () {
  return (
    <div >
      <CardList />
    </div>
  )
}
