import React from 'react'
import './IntroSecStill.css'

export default function IntroSecStill(props) {
  return (
    <div className='img-sec'>
      <div className="text-div">
            <h2>
              {props.primaryText}
            </h2>  
            <p>
              {props.secondaryText}
            </p>
        </div> 
        <img src={props.image} alt="Stranger things image" />
    </div>
  )
}
