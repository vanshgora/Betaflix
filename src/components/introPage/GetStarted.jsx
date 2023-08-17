import React from 'react'
import {Link} from 'react-router-dom'
import './GetStarted.css'

export default function GetStarted() {
    return (
        <div className="get-started-form">
            <input type='text' placeholder=' Email adderess' />
            <Link className='btn' id='btn-get-started' to='/signup'>Get Started</Link>
        </div>
    )
}
