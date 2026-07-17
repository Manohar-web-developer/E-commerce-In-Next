import React, { useEffect, useState } from 'react'
import { Truck, CheckCircle2 } from 'lucide-react'

function OrderConfirmation({ resetOrder }) {
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThankYou(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!showThankYou) {
    return (
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-24">
        <div className="relative w-full max-w-md h-24 overflow-hidden">
          <Truck 
            size={48} 
            className="text-[#5c2707] absolute animate-[drive_2.5s_linear_forwards]" 
          />
        </div>
        <p className="mt-6 text-gray-500 font-montserrat">Placing your order...</p>

        <style>{`
          @keyframes drive {
            0% { left: -60px; }
            100% { left: 100%; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-20 text-center rounded-lg border p-6">
      <CheckCircle2 size={64} className="text-green-600 mb-4" />
      <h2 className="text-2xl font-bold text-[#5c2707]">Thank You for Your Order!</h2>
      <p className="text-gray-500 mt-2 font-montserrat">
        Your order has been placed successfully. A confirmation email is on its way.
      </p>
      <button
        className="mt-8 bg-[#5c2707] text-white font-montserrat px-6 py-3 rounded-lg cursor-pointer"
        onClick={resetOrder}
      >
        Continue Shopping
      </button>
    </div>
  )
}

export default OrderConfirmation