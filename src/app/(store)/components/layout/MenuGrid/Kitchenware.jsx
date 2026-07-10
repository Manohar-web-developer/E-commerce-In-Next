

import Link from 'next/link';
import { menuData } from '../../Data/menuData'
import { LastMegamenu } from '../../Data/menuData'
import Image from 'next/image';

let kitchenware = menuData.find((item) => item.handle === "kitchenware")

let drinkware = kitchenware.categories.find((item) => item.handle === 'drinkware')
let KitchenAccessories = kitchenware.categories.find((item) => item.handle === 'kitchen-accessories')





function Kitchenware() {
  return (
    <>
      <div className='w-full bg-white text-black pb-9 mt-5'>
        <div className='w-[90%] mx-auto grid grid-cols-3 border border-[#d6d6d6]'>
          <div className='px-5 flex flex-col gap-4 h-full pt-7 border-s border-[#d6d6d6]'>
            <div className='h-[200px]'>
              <div>
                <Link href={`/shop/${drinkware.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                  <h3 className=' pb-2'>{drinkware.title}</h3>
                </Link>
              </div>
              <div className='pt-5 flex flex-col gap-4'>
                {
                  drinkware.items.map((item, idx) => {
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
                <Link href={`/shop/${KitchenAccessories.handle}`} className=" relative block pb-2 border-b border-gray-300 after:absolute after:left-0 after:bottom-px 
                             after:h-px  after:w-full after:bg-[#9F1D27] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left
                             hover:after:scale-x-100 hover:text-[#9F1D27]">
                  <h3 className=' pb-2'>{KitchenAccessories.title}</h3>
                </Link>
              </div>
              <div className='pt-5 flex flex-col gap-4'>
                {
                  KitchenAccessories.items.map((item, idx) => {
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
          <div className='h-full overflow-hidden'>
            <h3 className='py-3 text-center font-bold'>Why You'll us</h3>
            <div className='bg-[#FFF8F5] px-5 grid grid-cols-3 h-5/6 items-center justify-evenly gap-x-5'>
              {
                LastMegamenu.map((item, idx) => {
                  return (
                    <div key={idx} className='flex  items-center gap-5 '>
                      <div>
                        <Image src={item.Image} alt={item.content} width={32} height={32} className='w-8' />
                      </div>
                      <div>
                        <p className='text-[14px] font-semibold text-[#A45B38]'>{item.content}</p>
                      </div>

                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kitchenware