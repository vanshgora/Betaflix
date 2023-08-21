import React from 'react'
import MainHead from './MainHead'
import './MainPage.css'
import HorzSlide from '../common/HorzSlide'
import Footer from '../common/Footer'

let linksArr = [['FAQ', 'Media Center', 'way to Watch', 'Cookies Prefrence'],
                  ['Speed Test', 'Help Center', 'Investor Relation', 'Term of Use'],
                  ['Coorporate Information', 'Legal Notices', 'Accounts', 'Jobs'], 
                  ['Privacy', 'Contact Us', 'Only on Netflix']];

export default function MainPage() {
  return (
    <div className='main-page'>
      <MainHead/>
      <HorzSlide title = 'Betaflix Orignals' dataSec = {0}/>
      <HorzSlide title = 'Popular Movies' dataSec = {1}/>
      <HorzSlide title = 'Action Movies' dataSec = {2}/>
      <HorzSlide title = 'Romantic Movies' dataSec = {3}/>
      <HorzSlide title = 'Adventure Movies' dataSec = {4}/>
      <HorzSlide title = 'Horror Movies' dataSec = {5}/>
      <HorzSlide title = 'Animes' dataSec = {6}/>
      <Footer linksArr = {linksArr} style = {{backgroundColor: 'grey'}}/>
    </div>
  )
}
