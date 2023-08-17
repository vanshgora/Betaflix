import React from 'react'
import './SignUpHead.css'
import { Link } from 'react-router-dom'

export default function SignUpHead() {
  return (
    <div className='signup-head'>
      <form action="" className="signup-form">
        <h2>Sign In</h2>
        <input type='email' placeholder='Enter your Email' className='lg-input' />
        <input type="password" placeholder='Enter your password' className='lg-input' />
        <input type='submit' className='btn btn-primary' />
        <div className="checkNHelp">
          <div className="lg-check">
            <input type="checkbox" id='lgcheck-label' />
            <label htmlFor='lgcheck-label' className='lg-check-text'>Remember Me</label>
          </div>
          <a><u>Need Help?</u></a>
        </div>
        <p className="signup-tnl">New to Netflix?
          <Link style={{ color: '#fff' }} to='/'>Sign up</Link>
        </p>
        <p className="catchpapara">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </form>
    </div>
  )
}
