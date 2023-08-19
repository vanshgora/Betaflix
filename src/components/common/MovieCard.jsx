import React from 'react'
import './MovieCard.css'
import Header from './Header'

export default function MovieCard(props) {
  return (
    <div className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="" />
    </div>
  )
}
