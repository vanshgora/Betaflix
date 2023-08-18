import React from 'react'
import {Link} from 'react-router-dom'
import './GetStarted.css'
import { useDispatch } from 'react-redux';
import { sgPageActions } from '../../store/sg-page-slice';

export default function GetStarted() {
    const dispatch = useDispatch();
    const goNext = () => {
      dispatch(sgPageActions.setStep1());
    }
    return (
        <div className="get-started-form">
            <input type='text' placeholder=' Email adderess' />
            <Link onClick={goNext} className='btn' id='btn-get-started' to='/signup'>Get Started</Link>
        </div>
    )
}
