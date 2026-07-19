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
      <div className='w-full max-w-3xl mx-auto space-y-4 rounded-lg border p-4 sm:p-6'>
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
              <Field orientation="horizontal" className='flex w-full items-start sm:items-end justify-between gap-3'>
                <RadioGroupItem value="plus" id="plus-plan" className="mt-1 sm:mt-0 shrink-0" />
                <FieldContent>
                  <FieldTitle>Cash on delivery</FieldTitle>
                  <FieldDescription>
                    Pay with cash when your order is deliverd
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="pro-plan">
              <Field orientation="horizontal" className="items-start sm:items-end gap-3">
                <RadioGroupItem value="pro" id="pro-plan" className="mt-1 sm:mt-0 shrink-0" />
                <FieldContent>
                  <FieldTitle>Bank Transfer</FieldTitle>
                  <FieldDescription>Transfer directly from your bank account.</FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="enterprise-plan">
              <Field orientation="horizontal" className="items-start sm:items-end gap-3">
                <RadioGroupItem value="enterprise" id="enterprise-plan" className="mt-1 sm:mt-0 shrink-0" />
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
        <div className="w-full flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#5c2707] cursor-pointer text-sm" onClick={() => router.push('/cart')}>
            <ChevronLeft size={16} />
            Return to Cart
          </div>
          <div className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5c2707] text-white font-thin font-montserrat px-6 py-3 rounded-lg cursor-pointer"
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