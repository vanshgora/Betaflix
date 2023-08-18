import React from 'react'
import './SgStep2.css'
import { sgPageActions } from '../../store/sg-page-slice';
import { useDispatch } from 'react-redux';

export default function SgStep2() {
  const dispatch = useDispatch();
    const goNext = () => {
      dispatch(sgPageActions.stepincrement());
    }
  return (
    <div className='sg-step2'>
      <h5>STEP 2 OF 3</h5>
      <h1>Create a password to start your membership</h1>
      <p>Just a few more steps and you're done!
          We hate paperwork, too.</p>
      <input type="email" placeholder='Email' />
      <input type="password" name="" id=""  placeholder='Enter new password'/>
      <button onClick={goNext} className='btn btn-primary'>Next</button>
    </div>
  )
}
