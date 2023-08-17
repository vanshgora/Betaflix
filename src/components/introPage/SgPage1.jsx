import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import './SgPage1.css'
import SgStep1 from './SgStep1';
let linksArr = [['FAQ', 'Cookie Prefrences'], ['Help Center', 'Corporate Information'], ['Term of Use'], ['Privacy']];
let style = {
  backgroundColor:'#000b',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  position: 'absolute',
  bottom : '-30vh',
  width: '100%'
}

export default function SgPage1() {
  return (
    <div className="get-startedPage">
      <Header/>
    <div className='get-started-page-con'>
      <SgStep1/>
      <Footer linksArr = {linksArr} style = {style}/>
    </div> 
    </div>
    )
}

