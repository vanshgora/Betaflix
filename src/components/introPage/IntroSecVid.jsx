import React from 'react'
import './IntroSecVid.css'

export default function IntroSecVid(props) {
  return (
    <div className='vid-sec'>
        <div className="text-div">
            <h2>
              {props.primaryText}
            </h2>  
            <p>
              {props.secondaryText}
            </p>
        </div>    
        <div className="vid-frame">
          <img src={props.frame} alt="frame"/> 
          <video src={props.video} alt="Video" id={props.vid1 && `vid1`} autoPlay loop></video>
        </div>  
    </div>
  )
}
