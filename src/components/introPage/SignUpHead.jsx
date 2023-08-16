import React from 'react'
import './SignUpHead.css'
import { Link } from 'react-router-dom'
import IntroPage from './IntroPage'

export default function SignUpHead() {
  return (
    <div className='signup-head'>
      <form action="" className="signup-form">
        <input type="email" />
        <input type="password" />
        <input type='submit' className='btn btn-primary' />
        <div className="checkNHelp">
          <input type="checkbox" />
          <a><u>Need Help?</u></a>
          <p className="signup-tnl">New to Netflix?
            <Link style={{color:'#fff'}} to='/'>Sign up</Link>
          </p>
          <p className="catchpapara">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </div>
      </form>
    </div>
  )
}
