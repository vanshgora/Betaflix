import React from 'react'
import MovieCard from './MovieCard'
import './HorzSlide.css'
import { useSelector } from 'react-redux'

export default function HorzSlide(props) {
  let data = useSelector(state => state.main.data);
  const filteredData = data.filter((item) => {
    return item.genre_ids.find(genre => {
      return genre === props.genre;
    })
  });

  return (
    <div className='horz-slide'>
      <h2>{props.title}</h2>
      <ul>
          {
          filteredData.map((item) => {
            return (
              <MovieCard poster={item.poster_path} movieObj = {item}/>)
          })
        }
      </ul>
    </div>
  )
}
