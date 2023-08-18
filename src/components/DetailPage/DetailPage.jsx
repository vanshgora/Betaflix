import React from 'react'
import './DetailPage.css'
import Header from '../common/Header'
import DetailImg from './DetailImg'
import HorzSlide from '../common/HorzSlide'
import Footer from '../common/Footer'
let linksArr = [['FAQ', 'Media Center', 'way to Watch', 'Cookies Prefrence'],
['Speed Test', 'Help Center', 'Investor Relation', 'Term of Use'],
['Coorporate Information', 'Legal Notices', 'Accounts', 'Jobs'],
['Privacy', 'Contact Us', 'Only on Netflix']];

export default function DetailPage() {
  return (
    <div className='detail-page'>
      <Header />
      <DetailImg />
      <HorzSlide title='More like this' />
      <Footer linksArr={linksArr} style={{ backgroundColor: 'gray' }} />
    </div>
  )
}