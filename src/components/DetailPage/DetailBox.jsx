import React from 'react'
import './DetailBox.css'

export default function DetailBox() {
    return (
        <section className='detail-box'>
            <div className="lan-n-date">
                <span className="language">language: English</span>
                <span className="release-date">23-jan-2023</span>
            </div>
            <h1 className="movie-title">Title</h1>
            <p className="genre">action, adventure, romantic, anime</p>
            <p className="movie-about">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, perspiciatis,
                quo corporis quod maiores nihil nostrum eveniet porro
                quis commodi officia ratione ea. Ex soluta eius veniam
                debitis magni dignissimos quam obcaecati? Tempore deserunt
                saepe iste! Laborum maxime officiis magnam? Dolor quasi rem
                vel est enim repellendus veritatis. Voluptate molestias quisquam
                officia? Doloremque architecto quae ut ex impedit ipsum illum,
                iure autem! Quibusdam ea in quo eum nemo, nostrum laudantium?
            </p>
        </section>
    )
}
