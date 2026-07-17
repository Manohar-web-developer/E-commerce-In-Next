import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Payment({ setStep, setdata , data }) {
  const [paymentMethod, setPaymentMethod] = useState('plus')
  const handleChange = (value) => {
    setPaymentMethod(value)
    setdata(prev => ({...prev, paymentMode: paymentMethod}))
    console.log(data)

    
   
  }
  const router = useRouter()


  return (
    <>
      <div className='w-full max-w-3xl mx-auto space-y-4 rounded-lg border p-6'>
        <div>
          <h2 className='font-bold'>Payment Method </h2>
          <p className='text-[13px] font-montserrat text-gray-400 pt-2'>All Transactions are secure and encrypted.</p>
        </div>
        <div>
          <RadioGroup
            value={paymentMethod}
            onValueChange={handleChange}
            className="w-full"
            defultvalue={'plus'}
          >
            <FieldLabel htmlFor="plus-plan">
              <Field orientation="horizontal" className='flex w-full items-end justify-between'>
                <RadioGroupItem value="plus" id="plus-plan" />
                <FieldContent>
                  <FieldTitle>Cash on delivery</FieldTitle>
                  <FieldDescription>
                    Pay with cash when your order is deliverd
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="pro-plan">
              <Field orientation="horizontal">
                <RadioGroupItem value="pro" id="pro-plan" />
                <FieldContent>
                  <FieldTitle>Bank Transfer</FieldTitle>
                  <FieldDescription>Transfer directly from your bank account.</FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="enterprise-plan">
              <Field orientation="horizontal">
                <RadioGroupItem value="enterprise" id="enterprise-plan" />
                <FieldContent>
                  <FieldTitle>UPI</FieldTitle>
                  <FieldDescription>
                    Pay securely using UPI app.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          </RadioGroup>
        </div>
        <div className="w-full flex items-center justify-between pt-5">
          <div className="flex items-center gap-2 text-[#5c2707] cursor-pointer" onClick={() => router.push('/cart')}>
            <ChevronLeft size={16} />
            Return to Cart
          </div>
          <div>
            <button
              className="flex items-center gap-2 bg-[#5c2707] text-white font-thin font-montserrat px-6 py-3 rounded-lg cursor-pointer"
              type="submit"
              onClick={() => setStep(4)}
            >
              Continue to Review <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment