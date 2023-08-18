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
      <HorzSlide title = 'Betaflix Orignals'/>
      <HorzSlide title = 'Popular Movies'/>
      <HorzSlide title = 'Action Movies'/>
      <HorzSlide title = 'Romantic Movies'/>
      <HorzSlide title = 'Adventure Movies'/>
      <HorzSlide title = 'Horror Movies'/>
      <HorzSlide title = 'Animes'/>
      <Footer linksArr = {linksArr} style = {{backgroundColor: 'grey'}}/>
    </div>
  )
}
