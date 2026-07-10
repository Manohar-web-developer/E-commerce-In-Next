
import Link from 'next/link';
import { menuData } from '../../Data/menuData'
import Lastmenu from '../../common/Lastmenu';

let furniture = menuData.find((item) => item.handle === "furniture")

let LivingRoom = furniture.categories[0]
let Dining = furniture.categories[1]
let Bedroom = furniture.categories[2]
let OutDoor = furniture.categories[3]
let Bar = furniture.categories[4]
let Office = furniture.categories[5]
let Restaurant = furniture.categories[6]



function FurnitureMenu() {
    return (
        <>
            <div className='w-full bg-white text-black pb-9 mt-5'>
                <div className='w-[90%] mx-auto min-h-[550px] grid grid-cols-5 border border-[#d6d6d6]'>
                    <div className='px-5  h-full pt-7 border-[#d6d6d6]'>
                        <div>
                            <Link href={`/shop/${LivingRoom.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{LivingRoom.title}</h3>
                            </Link>
                        </div>
                        <div className='pt-5 flex flex-col gap-4'>
                            {
                                LivingRoom.items.map((item, idx) => {
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
                    <div className='px-5 border-s h-full pt-7 border-[#d6d6d6] flex flex-col justify-between '>
                        <div className='h-[300px]'>
                            <Link href={`/shop/${Dining.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{Dining.title}</h3>
                            </Link>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Dining.items.map((item, idx) => {
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
                        <div className='h-[300px]'>
                            <Link href={`/shop/${Bar.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{Bar.title}</h3>
                            </Link>
                            <div className='pt-5 flex flex-col gap-4 '>
                                {
                                    Bar.items.map((item, idx) => {
                                        return (
                                            <Link href={`/shop/${item.handle}`} key={idx} className="
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
                    <div className='px-5 border-s h-full pt-7 border-[#d6d6d6] flex flex-col justify-between '>
                        <div className='h-[300px]'>
                            <Link href={`/shop/${Bedroom.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{Bedroom.title}</h3>
                            </Link>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    Bedroom.items.map((item, idx) => {
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
                        <div className='h-[300px]'>
                            <Link href={`/shop/${Office.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{Office.title}</h3>
                            </Link>
                            <div className='pt-5 flex flex-col gap-4 '>
                                {
                                    Office.items.map((item, idx) => {
                                        return (
                                            <Link href={`/shop/${item.handle}`} key={idx} className="
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
                    <div className='px-5 border-s h-full pt-7 border-[#d6d6d6] flex flex-col justify-between gap-20 '>
                        <div className='h-[300px]'>
                            <Link href={`/shop/${OutDoor.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{OutDoor.title}</h3>
                            </Link>
                            <div className='pt-5 flex flex-col gap-4'>
                                {
                                    OutDoor.items.map((item, idx) => {
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
                        <div className='h-[300px] '>
                            <Link href={`/shop/${Restaurant.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                                <h3 className=' pb-2'>{Restaurant.title}</h3>
                            </Link>
                            <div className='pt-5 flex flex-col gap-4 '>
                                {
                                    Restaurant.items.map((item, idx) => {
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

export default FurnitureMenu