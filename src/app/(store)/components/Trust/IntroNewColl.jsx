"use client"
import CollectionImage from '../../../assest/Images/Collection Image.jpg'
import CollectionImage1 from '../../../assest/Images/Collection Image (1).jpg'
import DuelImageBanner from '../common/DuelImageBanner'
import ReadyShipStrip from '../common/ReadyShipStrip'
import Link from 'next/link'
import Image from 'next/image'

function IntroNewColl() {
    return (
        <>

            {/* Mobile banner */}
            
            <div className='md:hidden'>
                <Link href="/shop/table-lamps">
                    <Image src={CollectionImage} alt="Table lamps collection" width={500} height={500} className="w-full h-auto" />
                </Link>
                <ReadyShipStrip/>
                <Link href="/shop/vases">
                    <Image src={CollectionImage1} alt="Vases collection" width={500} height={500} className="w-full h-auto" />
                </Link>
            </div>

       
           <div className='hidden md:block'>
                <DuelImageBanner img1={CollectionImage} img2={CollectionImage1}/>
                <ReadyShipStrip/>
           </div>

        </>
    )
}

export default IntroNewColl
