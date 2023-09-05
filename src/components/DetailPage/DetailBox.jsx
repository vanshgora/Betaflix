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
                <span className="language">language: {language === 'en' ? "English" : language === 'ko' ? "Korean" : language === 'ja' ? "Japanese" : language}</span>
                <span className="release-date">{releaseDate}</span>
            </div>
            <h1 className="movie-title">{title}</h1>
            <p className="genre">{genre.map(item => {
                switch (item) {
                    case 28:
                        return "Action";
                        break;
                    case 12:
                        return "Adventure";
                        break;
                    case 18:
                        return "Drama";
                        break;
                    case 53:
                        return "Thriller";
                        break;
                    case 28:
                        return "Adventure";
                        break;
                    case 10749:
                        return "Romantic";
                        break;
                    case 27:
                        return "Horror";
                        break;
                    case 16:
                        return "Animation";
                        break;
                    case 878:
                        return "Sci-fi";
                        break;
                    case 10759:
                        return "Action & Adventure";
                        break;
                    case 35:
                        return "Comedy";
                        break;
                    case 10751:
                        return "Family";
                        break;
                    case 14:
                        return "Fantasy";
                        break;
                    case 10765:
                        return "Sci-fi & Fantasy";
                        break;
                    case 10770:
                        return "TV Movie";
                        break;
                    case 9648:
                        return "Mystery";
                        break;
                    case 80:
                        return "Crime";
                        break;
                    case 10402:
                        return "Music";
                        break;
                    case 37:
                        return "Western";
                        break;
                    default:
                        return item;
                }
            }).join(', ')
            }</p>
            <p className="movie-about">
                {overview}
            </p>
        </section>
    )
}
