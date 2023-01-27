/* eslint-disable react/prop-types */
import React from 'react'
import './tag-card.css'

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
  },
  {
    id: 6,
    name: 'Catwoman',
    alterEgo: 'Selina Kyle',
    alignment: 'villain',
    url: 'https://i.imgur.com/Tcx1JEV.jpg'
  },
  {
    id: 7,
    name: 'Catwoman',
    alterEgo: 'Selina Kyle',
    alignment: 'villain',
    url: 'https://i.imgur.com/Tcx1JEV.jpg'
  }
]

const TagCardItem = props => {
  return (
    <div className="tag">
      <h2>#</h2>
      {props.item.id}
  </div>
  )
}

const CardList = () => {
  return (
    <div className='tags-card-list'>
      {HotItems.map(item => {
        return <TagCardItem item={item} key={item.id} />
      })}
    </div>
  )
}

export default function TagCard () {
  return (
    <div >
      <CardList />
    </div>
  )
}
