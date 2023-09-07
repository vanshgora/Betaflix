import React from 'react'
import {Link} from 'react-router-dom'
import './GetStarted.css'
import { useDispatch, useSelector } from 'react-redux';
import { sgPageActions } from '../../store/sg-page-slice';
import { signUpNInActions } from '../../store/Signup-n-in-slice';

export default function GetStarted() {
    const dispatch = useDispatch();
    const goNext = () => {
        dispatch(sgPageActions.setStep1());
        if(creType === Number) {
            dispatch();
        }
        if(isVaildcre){
        } else {
            alert("enter valid pno or email Id")
        }
    }
    let credential = useSelector(state => state.signUpNIn.credential);
    let creType = useSelector(state => state.signUpNIn.creType);
    let isVaildcre = useSelector(state => state.signUpNIn.isVaildcre);

    return (
        <div className="get-started-form">
            <input type={creType} placeholder='Email adderess or Phone number' value={credential} onChange={() => {
                console.log(document.querySelector('.get-started-form input').getAttribute('type'));
                dispatch(signUpNInActions.setCredential(document.querySelector('.get-started-form input').value));
                dispatch(signUpNInActions.checkInputType(document.querySelector('.get-started-form input').value));
            }} />
            <Link onClick={goNext} className='btn' id='btn-get-started' to={isVaildcre? '/signup': '/'} disabled={!isVaildcre}>Get Started</Link>
        </div>
    )
}
