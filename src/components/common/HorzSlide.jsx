import React from 'react'
import MovieCard from './MovieCard'
import './HorzSlide.css'

export default function HorzSlide(props) {
  return (
    <div className='horz-slide'>
      <h2>{props.title}</h2>
      <ul>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      </ul>
    </div>
  )
}
