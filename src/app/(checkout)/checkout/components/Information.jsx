
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldGroup, FieldLabel, } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, } from "@/components/ui/input-group"
import { ArrowRight, ChevronLeft, Mail, Phone } from "lucide-react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Information({setStep}) {
  const router = useRouter()

  const [error, setError] = useState([])

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: ''

  })
  const submitForm = (e) => {
    const newError = [];
    if (formData.email.trim() == '') {
      newError.push('mail')
    } if (formData.firstName.trim() == '') {
      newError.push('FirstName')
    } if (formData.lastName .trim()== '') {
      newError.push('LastName')
    }
    if (formData.phone.trim() == '') {
      newError.push('PhoneNumber')
    }
    setError(newError)
    if(newError.length > 0){
      return
    }
    setStep(2)
  }
  const removeError = (field, value) => {

    if (value.trim() === "") {

      if (!error.includes(field)) {
        setError([...error, field])
      }

    } else {

      setError(
        error.filter((v) => v !== field)
      )

    }
  }
  return (
    <>
      <div className=" w-full max-w-3xl mx-auto px-4 py-6 border">
        <div className='flex items-center justify-between '>
          <h3>Contact Information </h3>
          <p className='pe-3 text-gray-400 text-sm'>Already Have an account? <span className='text-[#5C2707] cursor-pointer'>Log in</span></p>
        </div>
        <div className="flex flex-col gap-5">
          <Field className="w-full pt-5">
            <FieldLabel htmlFor="inline-start-input">Email Address</FieldLabel>
            <InputGroup>
              <InputGroupInput id="inline-start-input" placeholder="your@example.com" name={'mail'} value={formData.email} onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value
                })
                removeError("mail", e.target.value)
              }} />
              <InputGroupAddon align="inline-start">
                <Mail className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
            {
              error.includes("mail") ? <FieldDescription className='text-red-500'>Email Required</FieldDescription> : ''
            }
          </Field>
          <FieldGroup className="grid md:grid-cols-2 gap-5">
            <Field className="w-full">
              <FieldLabel htmlFor="inline-start-input">First Name</FieldLabel>
              <InputGroup>
                <InputGroupInput id="inline-start-input" placeholder="your@example.com" name={'FirstName'} value={formData.firstName} onChange={(e) => {
                  setFormData({
                    ...formData,
                    firstName: e.target.value
                  })
                  removeError("FirstName", e.target.value)
                }} />
                <InputGroupAddon align="inline-start">
                  <Mail className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
              {
                error.includes("FirstName") ? <FieldDescription className='text-red-500'>First Name Required</FieldDescription> : ''
              }
            </Field>
            <Field className="w-full">
              <FieldLabel htmlFor="inline-start-input">Last Name</FieldLabel>
              <InputGroup>
                <InputGroupInput id="inline-start-input" placeholder="your@example.com" name={'LastName'} value={formData.lastName} onChange={(e) => {
                  setFormData({
                    ...formData,
                    lastName: e.target.value
                  })
                  removeError("LastName", e.target.value)
                }} />
                <InputGroupAddon align="inline-start">
                  <Mail className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
              {
                error.includes("LastName") ? <FieldDescription className='text-red-500'>Last Name Required</FieldDescription> : ''
              }
            </Field>
          </FieldGroup>
          <Field className="w-full">
            <FieldLabel htmlFor="inline-start-input">Phone Number</FieldLabel>
            <InputGroup>
              <InputGroupInput id="inline-start-input" placeholder="Enter Mobile Number" name={'PhoneNumber'} value={formData.phone} onChange={(e) => {
                setFormData({
                  ...formData,
                  phone: e.target.value
                })
                removeError("PhoneNumber", e.target.value)
              }} />
              <InputGroupAddon align="inline-start">
                <Phone className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
            {
              error.includes("PhoneNumber") ? <FieldDescription className='text-red-500'>Phone Number Required</FieldDescription> : ''
            }
          </Field>
          <FieldGroup className="w-full">
            <Field orientation="horizontal">
              <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
              <FieldLabel htmlFor="terms-checkbox-basic">
                Keep me up to date on news and exclusive offers
              </FieldLabel>
            </Field>
          </FieldGroup>
        </div>
        <div className="w-full flex items-center justify-between pt-5">
          <div className="flex items-center gap-2 text-[#5c2707] cursor-pointer" onClick={() => router.push('/cart')}>
            <ChevronLeft size={16} />
            Return to Cart
          </div>
          <div>
            <button className="flex items-center gap-2 bg-[#5c2707] text-white font-thin font-montserrat px-6 py-3 rounded-lg cursor-pointer" type="submit" onClick={() => submitForm()}>
              Continue to Shipping <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Information