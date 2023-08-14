import React from 'react'
import './IntroHead.css'

export default function IntroHead() {
  return (
    <div className='intro-head'>
      <h1>
        Unlimited movies, TV shows and more
      </h1>
      <h2>
        Watch anywhere. Cancel anytime.
      </h2>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="get-started-form">
        <input type='text' placeholder=' Email adderess'/>
        <button className='btn' id='btn-get-started'>Get Started</button>
      </div>
    </div>
  )
}
