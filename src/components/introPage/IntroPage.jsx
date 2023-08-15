import React from 'react';
import IntroSecAcorr from './IntroSecAcorr';
import Header from '../common/Header';
import IntroHead from './IntroHead';
import IntroSecVid from './IntroSecVid';
import IntroSecStill from './IntroSecStill';
import Footer from '../common/Footer';

export default function IntroPage() {
  let primaryVidText1 = 'Enjoy on your TV';
  let primaryVidText2 = 'Watch everywhere';
  let primaryImgText1 = 'Download your shows to watch offline';
  let primaryImgText2 = 'Create profiles for kids';
  let secondaryVidText1 = 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.';
  let secondaryVidText2 = 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.';
  let secondaryImgText1 = 'Save your favourites easily and always have something to watch.';
  let secondaryImgText2 = 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.';
  let image1 = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg';
  let image2 = 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d';
  let frame1 = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png';
  let frame2 = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png';
  let video1 = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v';
  let video2 = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v';
  return (
    <div>
      <Header/>
      <IntroHead/>
      <IntroSecVid primaryText = {primaryVidText1} secondaryText = {secondaryVidText1} frame = {frame1} video = {video1}/>
      <IntroSecStill primaryText = {primaryImgText1} secondaryText = {secondaryImgText1} image = {image1}/>
      <IntroSecVid primaryText = {primaryVidText2} secondaryText = {secondaryVidText2} frame = {frame2} video = {video2}/>
      <IntroSecStill primaryText = {primaryImgText2} secondaryText = {secondaryImgText2} image = {image2}/>
      <IntroSecAcorr/>
      <Footer/>
    </div>
  )
}
