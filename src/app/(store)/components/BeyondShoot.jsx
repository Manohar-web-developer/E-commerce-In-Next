"use client"
import Link from 'next/link'
import React from 'react'

export default function BeyondShoot() {
    const data = [
        {
            videoUrl: "https://cdn.shopify.com/videos/c/o/v/932ba484a4fb476e81b665c2f43eb940.mp4",
            productTitle: 'Verona Green Marble Console Table',
            ProductPrice: 'Rs. 25,599',
            ProductMrp: "Rs. 31,999",
            productOff: "( 20% Off)",
            pathSlug: 'verona-green-marble-console-table-ls-1202'
        },
        {
            videoUrl: "https://cdn.shopify.com/videos/c/o/v/a36272d2c8164dfb81a7833b3ff19fbd.mp4",
            productTitle: 'Resty Accent Table',
            ProductPrice: 'Rs. 18,285 ',
            ProductMrp: "Rs. 22,856",
            productOff: "( 20% Off)",
            pathSlug: 'resty-accent-table'
        },
        {
            videoUrl: "https://cdn.shopify.com/videos/c/o/v/3f392d7ec1df43f58d3509e24d29a0a0.mp4",
            productTitle: 'Banach Butterscotch Marble Accent Table',
            ProductPrice: 'Rs. 14,285',
            ProductMrp: "Rs. 17,856",
            productOff: "( 20% Off)",
            pathSlug: 'banach-butterscotch-marble-accent-table-ls-1013'
        },
        {
            videoUrl: "https://cdn.shopify.com/videos/c/o/v/0d7fdef0327e4f4e9bde1e92d674be28.mp4",
            productTitle: 'Cupidon Marble Accent Table - Sawar Marble',
            ProductPrice: 'Rs. 15,999',
            ProductMrp: "Rs. 19,999",
            productOff: "( 20% Off)",
            pathSlug: 'cupidon-marble-accent-table-sawar-marble'
        },
    ]
    return (
        <>
            <div className='w-full py-8 px-4 md:px-8 pb-10'>
                <div className='pt-8 pb-5'>
                    <h3 className='font-montserrat font-extralight text-2xl md:text-[25px] text-center'>
                        Beyond the Product
                    </h3>
                </div>

                {/* Mobile: Vertical Stack */}
                <div className='flex overflow-x-auto flex-nowrap gap-4 md:hidden'>
                    {data.map((v, i) => (
                        <Link key={i} href={`/product/${v.pathSlug}`}>
                            <div className='flex flex-col gap-4 shrink-0 w-[70vw]'>
                                <div className='w-full aspect-9/16 overflow-hidden rounded-lg'>
                                    <video
                                        src={v.videoUrl}
                                        className='w-full h-full object-cover'
                                        playsInline
                                        muted
                                        loop
                                        autoPlay
                                    />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-3 text-center'>
                                    <h5 className='font-montserrat font-thin text-base'>{v.productTitle}</h5>
                                    <div className='flex items-center justify-center gap-1 flex-wrap'>
                                        <p className='text-sm font-bold'>{v.ProductPrice}</p>
                                        <p className='line-through font-medium text-xs'>{v.ProductMrp}</p>
                                        <p className='font-semibold text-xs'>{v.productOff}</p>
                                    </div>
                                    <button className='text-[#b5522b] underline font-medium'>Shop Now</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Desktop: 4 Column Grid */}
                <div className='hidden md:grid md:grid-cols-4 gap-4'>
                    {data.map((v, i) => (
                        <Link key={i} href={`/product/${v.pathSlug}`}>
                            <div className='flex flex-col gap-3'>
                                <div className='w-full aspect-9/16 overflow-hidden'>
                                    <video
                                        src={v.videoUrl}
                                        className='w-full h-full object-cover'
                                        playsInline
                                        muted
                                        loop
                                        autoPlay
                                    />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                                    <h5 className='font-montserrat font-thin text-sm'>{v.productTitle}</h5>
                                    <div className='flex items-center justify-center gap-1 flex-wrap text-xs'>
                                        <p className='font-bold'>{v.ProductPrice}</p>
                                        <p className='line-through'>{v.ProductMrp}</p>
                                        <p className='font-semibold'>{v.productOff}</p>
                                    </div>
                                    <button className='text-[#b5522b] underline font-medium text-sm'>Shop Now</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
