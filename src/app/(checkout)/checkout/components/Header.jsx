import { Lock } from 'lucide-react'
import React from 'react'

function Header() {
  return (
   <div className='w-full'>
     <div className='w-5/6 mx-auto p-5 flex items-center justify-between pb-5 border'>
        <div>
            <h2 className='font-montserrat text-[#794F3D]'>LIVING SHAPES</h2>
         </div>
        <div className='flex items-center gap-2 '>
            <Lock size={14}/>
            <h4 className='text-[14px]'>Secure Payment</h4>
        </div>
    </div>
   </div>
  )
}

export default Header