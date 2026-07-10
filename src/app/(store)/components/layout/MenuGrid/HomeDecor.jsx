

import Link from 'next/link';
import { menuData } from '../../Data/menuData'
import Lastmenu from '../../common/Lastmenu';

let homeDecor = menuData.find((item) => item.handle === "home-decor")

let Vases = homeDecor.categories.find((item) => item.handle === 'vases')
let TableDecor = homeDecor.categories.find((item) => item.handle === 'table-decor')
let gardenAccessories = homeDecor.categories.find((item) => item.handle === 'garden-accessories')
let Pillow = homeDecor.categories.find((item) => item.handle === 'pillows-throws')
let Basket = homeDecor.categories.find((item) => item.handle === 'baskets')
let Bath = homeDecor.categories.find((item) => item.handle === 'bath')
let WallDecore = homeDecor.categories.find((item) => item.handle === 'wall-decor')
let Mirrors = homeDecor.categories.find((item) => item.handle === 'mirrors')
let clocks = homeDecor.categories.find((item) => item.handle === 'clocks')





function HomeDecor() {
    return (
        <>
            <div className='w-full bg-white text-black pb-9 mt-5'>
                <div className='w-[90%] mx-auto min-h-[550px] grid grid-cols-4 border border-[#d6d6d6]'>
                    <div className='px-5 flex flex-col gap-4 h-full pt-7 border-s border-[#d6d6d6]'>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${Vases.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{Vases.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Vases.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${gardenAccessories.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{gardenAccessories.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    gardenAccessories.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${Basket.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{Basket.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Basket.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='px-5 flex flex-col gap-4 h-full pt-7 border-s border-[#d6d6d6]'>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${TableDecor.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{TableDecor.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    TableDecor.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${Pillow.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{Pillow.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Pillow.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${Bath.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{Bath.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Bath.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='px-5 flex flex-col gap-4 h-full pt-7 border-s border-[#d6d6d6]'>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${WallDecore.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{WallDecore.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    WallDecore.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${Mirrors.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{Mirrors.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Mirrors.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[200px]'>
                            <div>
                                <Link href={`/shop/${clocks.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                    <h3 className=' pb-2'>{clocks.title}</h3>
                                </Link>
                            </div>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    clocks.items.map((item, idx) => {
                                        return (
                                            <Link key={idx} href={`/shop/${item.handle}`} className="
                                        relative
                                        w-fit
                                        text-[13px]
                                        text-gray-500
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-px
                                        after:w-full
                                        after:bg-[#3B1E03]
                                        after:origin-right
                                        after:scale-x-0
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:origin-left
                                        hover:after:scale-x-100
                                      ">
                                                {item.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='h-full '>
                        <h3 className='py-3'>Why You'll us</h3>
                        <div className='bg-[#FFF8F5] px-5 flex flex-col items-center justify-evenly gap-5'>
                                <Lastmenu/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDecor