import React from 'react'
import './DetailImg.css'
import { useSelector } from 'react-redux'

export default function DetailImg() {
  const backImg = useSelector(state => state.movie.movieObj.backdrop_path);
  const poster = useSelector(state => state.movie.movieObj.poster_path);
  return (
    <div className='detail-img' style={{
      background: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(https://image.tmdb.org/t/p/original${backImg}) `,
      backgroundSize: 'cover'
    }}>
      <div className="poster">
        <img className='poster-img' src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
      </div>
    </div>
  )
}
