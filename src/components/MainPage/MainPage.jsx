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
      <HorzSlide title = 'Betaflix Orignals' genre = {18}/>
      <HorzSlide title = 'Thriller Movies' genre = {53}/>
      <HorzSlide title = 'Action Movies'genre = {28}/>
      <HorzSlide title = 'Romantic Movies' genre = {10749}/>
      <HorzSlide title = 'Adventure Movies' genre = {12}/>
      <HorzSlide title = 'comedy' genre = {35}/>
      <HorzSlide title = 'Horror Movies' genre = {27}/>
      <HorzSlide title = 'Animations' genre = {16}/>
      <HorzSlide title = 'Sci-Fi' genre = {878}/>
      <HorzSlide title = 'Fantasy' genre = {14}/>
      <HorzSlide title = 'Mystrey' genre = {9648}/>
      <Footer linksArr = {linksArr} style = {{backgroundColor: 'grey'}}/>
    </div>
  )
}
