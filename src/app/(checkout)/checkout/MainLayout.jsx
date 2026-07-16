'use client'
import React, { useState } from 'react'
import { Provider } from 'react-redux';
import { store } from '@/app/(store)/redux/store';
import Information from './components/Information';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Review from './components/Review';
import Header from './components/Header';
import OrderSummary from './components/OrderSummary';
function MainLayout({ children }) {
  const [step, setStep] = useState(1)
  return (
    <>
      <Provider store={store}>
        <Header />
        <main className="grid md:grid-cols-[1fr_400px] w-5/6 mx-auto mt-5">
          <section>
            {step == 1 && <Information setStep={setStep} />}
            {step == 2 && <Shipping setStep={setStep} />}
            {step == 3 && <Payment setStep={setStep} />}
            {step == 4 && <Review setStep={setStep} />}
          </section>
          <aside>
            <OrderSummary/>
          </aside>
        </main>
      </Provider>

    </>
  )
}

export default MainLayout