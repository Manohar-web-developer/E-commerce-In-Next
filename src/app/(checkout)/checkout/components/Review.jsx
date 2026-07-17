import { ArrowRight, ChevronLeft, Pencil, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

function Review({data, setStep}) {
  const { info, shipping, paymentMode } = data;

  
  
  const paymentLabels = {
    plus: "Cash on Delivery",
    pro: "Bank Transfer",
    enterprise: "UPI"
  }

  const router = useRouter()

  return (
    <>
      <div className='w-full max-w-3xl mx-auto pb-3 flex justify-between px-3 items-center font-semibold' >
        <h4>Review Your Order</h4>
        <div className='flex items-center gap-2 px-5 py-1 rounded-lg cursor-pointer border' onClick={()=> setStep(1)}>
          <Pencil size={12} className='text-[#582501]'/>
          <p className='font-montserrat text-[#582501]'>Edit</p>
        </div>
      </div>
      <div className='w-full max-w-3xl mx-auto space-y-4 rounded-lg border p-6'>
        <div className='pb-4 border-b flex flex-col gap-1'>
          <p className='text-lg font-medium pb-2'>Contact Inforamtion</p>
          <p>{info?.email}</p>
          <p>{info?.phone}</p>
        </div>
        <div className='pb-4 border-b flex flex-col gap-1'>
          <p className='text-lg font-medium pb-2'>Shipping Adress</p>
          <p>{shipping?.fullName}</p>
          <p>{shipping?.address}</p>
          <p>{shipping?.apartment}</p>
          <p>{shipping?.city}, {shipping?.state},{shipping?.pin} </p>
          <p>{shipping?.country}</p>
        </div>
        <div className='pb-4 border-b flex flex-col gap-1'>
          <p className='text-lg font-medium pb-2'>Payment Method</p>
          <p>{paymentLabels[paymentMode] || paymentMode}</p>
          

        </div>

      </div>
      <div className="w-full flex items-center justify-between pt-5 px-8">
          <div className="flex items-center gap-2 text-[#5c2707] cursor-pointer" onClick={() => router.push('/cart')}>
            <ChevronLeft size={16} />
            Return to Cart
          </div>
          <div>
            <button
              className="flex items-center gap-2  bg-[#5c2707] text-white font-thin font-montserrat px-9 py-3 rounded-lg cursor-pointer"
              type="submit"
              onClick={() => setStep(5)}
            >
              <ShoppingBag size={16}/> Place Order <ArrowRight size={16}/> 
            </button>
          </div>
        </div>
    </>
  )
}

export default Review