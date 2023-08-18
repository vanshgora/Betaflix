import React from 'react'
import './SgStep3.css'
import { Link } from 'react-router-dom'

export default function SgStep3() {
  return (
    <div className='sgstep3'>
      <h5>Step 3 of 3</h5>
      <h1>Choose Your Plan</h1>
      <section className='plans'>
        <Link to='/home' className="plan-card">
            <h2 className="plan-name">Mobile Version</h2>
            <span className="plan-price">149Rs/Mon.</span>
            <ul className="plan-benefit-list">
                <li className="plan-benefit">Only for mobile</li>
                <li className="plan-benefit">480p and 720p are avilable</li>
                <li className="plan-benefit">Upto 2 devices per plan</li>
                <li className="plan-benefit">For 30 days</li>
            </ul>
        </Link>
        <Link to='/home' className="plan-card">
            <h2 className="plan-name">Pro version</h2>
            <span className="plan-price">199Rs/Mon.</span>
            <ul className="plan-benefit-list">
                <li className="plan-benefit">For all devices</li>
                <li className="plan-benefit">480p and 720p are avilable</li>
                <li className="plan-benefit">1 device per plan</li>
                <li className="plan-benefit">For 28 days</li>
            </ul>
        </Link>
        <Link to='/home' className="plan-card">
            <h2 className="plan-name">Premium version</h2>
            <span className="plan-price">299Rs/Mon.</span>
            <ul className="plan-benefit-list">
                <li className="plan-benefit">For all devices</li>
                <li className="plan-benefit">Upto 1080p are avilable</li>
                <li className="plan-benefit">Upto 3 devices per plan</li>
                <li className="plan-benefit">For 28 days</li>
            </ul>
        </Link>
        <Link to='/home' className="plan-card">
            <h2 className="plan-name">Gold version</h2>
            <span className="plan-price">499Rs/Mon.</span>
            <ul className="plan-benefit-list">
                <li className="plan-benefit">For all devices</li>
                <li className="plan-benefit">All qualities are avilable</li>
                <li className="plan-benefit">Upto 6 devices per plan</li>
                <li className="plan-benefit">For 30 days</li>
            </ul>
        </Link>
      </section>
    </div>
  )
}
