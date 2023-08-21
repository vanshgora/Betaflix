import React from 'react'
import Header from '../common/Header'
import './MainHead.css'
import { useSelector } from 'react-redux';

export default function MainHead() {
  let data;
  data = useSelector(state => state.main.data[0].results);
 
  return (
    <div className='main-head'>
      <Header />
      <div id="carouselExampleIndicators" className="carousel slide maincsl">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item maincsl-item active">
            <img src={`https://image.tmdb.org/t/p/original${data[3].backdrop_path}`} className="d-block w-100 maincsl-img" alt="..." />
          </div>
          <div className="carousel-item maincsl-item">
            <img  src={`https://image.tmdb.org/t/p/original${data[7].backdrop_path}`} className="d-block w-100 maincsl-img" alt="..." />
          </div>
          <div className="carousel-item maincsl-item">
            <img  src={`https://image.tmdb.org/t/p/original${data[19].backdrop_path}`} className="d-block w-100 maincsl-img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
