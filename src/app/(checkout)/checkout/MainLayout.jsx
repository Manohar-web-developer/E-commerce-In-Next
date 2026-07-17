'use client'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Information from './components/Information'
import Shipping from './components/Shipping'
import Payment from './components/Payment'
import Review from './components/Review'
import OrderSummary from './components/OrderSummary'
import CheckoutSteps from './components/CheckoutSteps'
import OrderConfirmation from './components/OrderConfirmation'
// import { clearCart } from '@/app/(store)/redux/cartSlice'   

function MainLayout() {
  const order = useSelector((state) => state.orderData.orderItmes)
  const [step, setStep] = useState(1)
  const [data, setdata] = useState({})
  const dispatch = useDispatch()
  const router = useRouter()

  const resetOrder = () => {
    dispatch(clearCart())     // redux cart empty
    setdata({})                // local form data reset
    setStep(1)                  // wapas step 1
    router.push('/')            // home/shop pe bhej do
  }

  return (
    <>
      <main className="grid md:grid-cols-[1fr_400px] w-5/6 mx-auto mt-5">
        <section>
          {step <= 4 && <CheckoutSteps currentStep={step} setStep={setStep} />}
          {step == 1 && <Information setStep={setStep} setdata={setdata} data={data} />}
          {step == 2 && <Shipping setStep={setStep} setdata={setdata} data={data} />}
          {step == 3 && <Payment setStep={setStep} setdata={setdata} data={data} />}
          {step == 4 && <Review setStep={setStep} data={data} />}
          {step == 5 && <OrderConfirmation resetOrder={resetOrder} />}
        </section>
        {step <= 4 && (
          <aside>
            <OrderSummary />
          </aside>
        )}
      </main>
    </>
  )
}

export default MainLayout