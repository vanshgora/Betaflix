import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import './SgPage1.css'
import SgStep1 from './SgStep1';
import SgStep2 from './SgStep2';
import SgStep3 from './SgStep3';
import { useSelector } from 'react-redux';
let linksArr = [['FAQ', 'Cookie Prefrences'], ['Help Center', 'Corporate Information'], ['Term of Use'], ['Privacy']];
let style = {
  backgroundColor: '#000b',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  position: 'absolute',
  bottom: '-30vh',
  width: '100%'
}

export default function SgPage1() {
  const step = useSelector(state => state.sgPage.step);
  console.log(step);
  const data = useSelector(state => state.main.data);
  console.log(data);
  return (
    <div className="get-startedPage">
      <Header />
      <div className='get-started-page-con'>
        {(step === 1) && <SgStep1/>}
        {(step === 2) && <SgStep2/>}
        {(step === 3) && <SgStep3/>}
        <Footer linksArr={linksArr} style={style} />
      </div>
    </div>
  )
}

