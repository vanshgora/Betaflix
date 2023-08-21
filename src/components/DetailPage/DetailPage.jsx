import React from 'react'
import './DetailPage.css'
import Header from '../common/Header'
import DetailImg from './DetailImg'
import HorzSlide from '../common/HorzSlide'
import Footer from '../common/Footer'
import DetailBox from './DetailBox'
import { useSelector } from 'react-redux'
let linksArr = [['FAQ', 'Media Center', 'way to Watch', 'Cookies Prefrence'],
['Speed Test', 'Help Center', 'Investor Relation', 'Term of Use'],
['Coorporate Information', 'Legal Notices', 'Accounts', 'Jobs'],
['Privacy', 'Contact Us', 'Only on Netflix']];

export default function DetailPage() {
  let movieObj = useSelector(state => state.movie.movieObj);
  console.log(movieObj);
  return (
    <div className='detail-page'>
      <Header />
      <DetailImg/>
      <DetailBox/>
      <HorzSlide title='More like this' dataSec = {7} />
      <Footer linksArr={linksArr} style={{ backgroundColor: 'gray' }} />
    </div>
  )
}