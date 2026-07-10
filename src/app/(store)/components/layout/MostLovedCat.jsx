
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function MostLovedCat() {

    const mostLove = [
        {
            Catbanner: "https://livingshapes.in/cdn/shop/files/Rectangle_24_copy.webp?v=1779964013&width=540",
            CatTitle: "Dining Furniture",
            path: "/dining-tables"
        },
        {
            Catbanner: "https://livingshapes.in/cdn/shop/files/Rectangle_24_copy_2.webp?v=1779964103&width=540",
            CatTitle: "Living Furniture",
            path: "/living-room-furniture"
        },
        {
            Catbanner: "https://livingshapes.in/cdn/shop/files/Rectangle_24_copy_3.webp?v=1779964176&width=540",
            CatTitle: "Accent Table",
            path: "/accent-tables"
        }
    ]


    return (
        <>

            <div className='w-full bg-[#FFF1EC] md:px-8 md:py-[60px] py-3'>

                <div className='md:w-[90%] mx-auto flex flex-col gap-5'>
                    <div >
                        <h2 className="font-montserrat text-[20px] font-thin text-center pb-6" >Most Loved Categories</h2>
                    </div>
                    <div className='grid md:grid-cols-3 gap-3'>
                        {
                            mostLove.map((v, i) => {
                              return (
                                <Link key={i} href={v.path}>
                                <div className='w-full flex flex-col items-center gap-5'>
                                    <div className='w-full'>
                                        <Image src={v.Catbanner} alt={v.CatTitle} width={540} height={540} className='w-full' />
                                    </div>
                                    <div>
                                        <div>
                                            {v.CatTitle}
                                        </div>
                                        <div className='text-center'>
                                            <p className='font-montserrat font-extralight underline text-center'>Shop Now</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                              )
                            })
                        }

                    </div>
                </div>

            </div>

        </>
    )
}
