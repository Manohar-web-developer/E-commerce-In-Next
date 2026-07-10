import React from 'react'
import deskTopBanner from '../../../assest/Images/WC-Homepage-D_1_2.webp'
import mobileTopBanner from '../../../assest/Images/WC-Homepage-M_1.jpeg'
import Image from 'next/image'
function Banner() {
  return (
    <>
    
    <div className='relative w-full h-screen'>
        <Image src={deskTopBanner} alt="Home_banner" fill className='h-full w-full hidden md:block object-cover'/>
        <Image src={mobileTopBanner} alt="Home_banner" fill className='h-full w-full block md:hidden object-cover'/>
    </div>
    
    </>
  )
}

export default Banner