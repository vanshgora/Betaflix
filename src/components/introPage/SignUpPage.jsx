import React from 'react';
import Header from '../common/Header';
import SignUpHead from './SignUpHead';
import Footer from '../common/Footer';
let linksArr = [['FAQ', 'Cookie Prefrences'], ['Help Center', 'Corporate Information'], ['Term of Use'], ['Privacy']];
let style = {
  backgroundColor: "#000b",
  paddingTop:"2rem",
  paddingBottom:"2rem",
  position:"absolute",
  width: '100%',
  bottom:'-30vh'
}

function SignUpPage() {
  return (
    <div>
        <Header/>
        <SignUpHead/>
        <Footer linksArr = {linksArr} style={style}/>
    </div>
  )
}

export default SignUpPage
