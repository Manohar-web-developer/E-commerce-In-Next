import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DuelImageBanner({img1, img2}) {
    return (
        
            <div className=' md:grid md:grid-cols-2 md:pt-9'>
                <Link href={'/shop/table-lamps'}>
                    <div className='w-full'>
                        <Image src={img1} alt="Table lamps collection" width={500} height={500} className="w-full h-auto" />
                    </div>
                </Link>
                <Link href={'/shop/vases'}>
                    <div className='w-full'>
                        <Image src={img2} alt="Vases collection" width={500} height={500} className="w-full h-auto" />
                    </div>
                </Link>
            </div>
            
       
    )
}

export default DuelImageBanner