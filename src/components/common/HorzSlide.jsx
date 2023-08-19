import React from 'react'
import MovieCard from './MovieCard'
import './HorzSlide.css'
import { useSelector } from 'react-redux'

export default function HorzSlide(props) {
  const data = useSelector(state => state.main.data[0].results);
  console.log(data);
  return (
    <div className='horz-slide'>
      <h2>{props.title}</h2>
      <ul>
       {
        data.map((item) => {
          return(
          <MovieCard poster={item.poster_path}/>)
        })
       }
      </ul>
    </div>
  )
}
