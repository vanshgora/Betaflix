import React from 'react'
import './SgStep1.css'
import { useDispatch } from 'react-redux'
import { sgPageActions } from '../../store/sg-page-slice';

export default function SgStep1() {
  const dispatch = useDispatch();
  const goNext = () => {
    dispatch(sgPageActions.stepincrement());
  }
  return (
    <div className='sg-step1'> 
      <section className="icons">
      <i class="fa-solid fa-mobile"></i>
      <i class="fa-solid fa-desktop"></i>
      <i class="fa-solid fa-tablet-screen-button"></i>
      </section>
      <h5>STEP 1 OF 3</h5>
      <h1>Finish setting up your account </h1>
      <p> Netflix is personalised for you. Create a password to watch on any device at any time.</p>
      <button onClick={goNext} className='btn btn-primary'>Next</button>
    </div>
  )
}
