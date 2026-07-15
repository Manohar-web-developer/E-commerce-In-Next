import React from 'react'
import Banner from '../components/layout/Banner'
import MostLovedCat from '../components/layout/MostLovedCat'
import TrustDataHome from '../components/TrustDataHome'
import BeyondShoot from '../components/BeyondShoot'
import IntroNewColl from '../components/Trust/IntroNewColl'
import SeeinStyled from '../components/SeeInStyled'
import CollectionImage from '../../assest/Images/Collection-Image.jpg'
import CollectionImage1 from '../../assest/Images/Collection Image (3).jpg'
import DuelImageBanner from '../components/common/DuelImageBanner'
import PoufUpYourSpace from '../components/PoufUpYourSpace'
import CustomerLove from '../components/CustomerLove'
import FaqSection from '../components/FaqSection'
import WeDeliverTo from '../components/Wedeliverto'

function Home({poufsData}) {
  return (
    <>
      <Banner />
      <TrustDataHome />
      <MostLovedCat />
      <BeyondShoot />
      <IntroNewColl />
      <SeeinStyled />
      <DuelImageBanner img1={CollectionImage} img2={CollectionImage1} />
      <PoufUpYourSpace poufsData={poufsData}/>
      <div className="grid lg:grid-cols-2">
        <CustomerLove />
        <FaqSection />
      </div>
      <WeDeliverTo/>
    </>
    
  )
}

export default Home