import React from 'react'
import './MovieCard.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { movieActions } from '../../store/movie-slice'

export default function MovieCard(props) {
  const dispatch = useDispatch();
  const addMovieObj = () => {
    dispatch(movieActions.setMovieObj(props.movieObj))
  }

  return (
    <Link to='/detail_page' className='movie-card' onClick={addMovieObj}>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="poster-img" />
    </Link>
  )
}
