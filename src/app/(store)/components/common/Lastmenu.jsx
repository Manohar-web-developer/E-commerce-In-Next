import React from 'react'
import {  LastMegamenu } from '../Data/menuData'
import Image from 'next/image'


function Lastmenu() {
  return (
    <>
        {
                            LastMegamenu.map((item, idx) => {
                                return (
                                    <div key={idx} className='flex flex-col items-center gap-5 '>
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
    </>
  )
}

export default Lastmenu