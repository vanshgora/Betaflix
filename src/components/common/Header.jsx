import React from 'react'
import { Button } from 'react-bootstrap'
import logo from './Betaflix-logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-cont">
        <img className='logo' src={logo} alt="Betaflix-logo" />
        <div className="lanNsign">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            language
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item text-white" href="#">English</a></li>
            <li><a className="dropdown-item text-white" href="#">Hindi</a></li>
          </ul>
          <Link className="btn btn-primary sign-in" to = '/signin'>Sign in</Link>
        </div>
      </div>
    </header>
  )
}
