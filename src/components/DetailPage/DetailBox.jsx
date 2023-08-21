import React from 'react'
import './DetailBox.css'
import { useSelector } from 'react-redux';

export default function DetailBox() {
    const language = useSelector(state => state.movie.movieObj.original_language);
    const releaseDate = useSelector(state => state.movie.movieObj.release_date);
    const title = useSelector(state => state.movie.movieObj.original_title);
    const genre = useSelector(state => state.movie.movieObj.genre_ids);
    const overview = useSelector(state => state.movie.movieObj.overview);
    
    return (
        <section className='detail-box'>
            <div className="lan-n-date">
                <span className="language">language: English</span>
                <span className="release-date">{releaseDate}</span>
            </div>
            <h1 className="movie-title">{title}</h1>
            <p className="genre">action, adventure, romantic, anime</p>
            <p className="movie-about">
                {overview}
            </p>
        </section>
    )
}
