import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Shipping({ setStep, setdata, data }) {
  const [formData, setFormData] = useState({
    fullName: data?.shipping?.fullName || '',
    address: data?.shipping?.address || '',
    apartment: data?.shipping?.apartment || '',
    city: data?.shipping?.city || '',
    pin: data?.shipping?.pin || '',
    phone: data?.shipping?.phone || '',
    state: data?.shipping?.state || '',
    country: data?.shipping?.country || ''
  })
  const [errors, setErrors] = useState({})
  const router = useRouter()
  const submitForm = (e) => {
    e.preventDefault()
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name Required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address Required"
    }
    if (!formData.state) {
      newErrors.state = "Please Select State"
    }
    if (!formData.city.trim()) {
      newErrors.city = "City Required"
    }

    if (!formData.pin.trim()) {
      newErrors.pin = "PIN Code Required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number Required"
    }

    if (!formData.country) {
      newErrors.country = "Please Select Country"
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setdata(prev => ({ ...prev, shipping: formData }))
      setStep(3)
    }
  }

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value


    })
    const newErrors = { ...errors }
    delete newErrors[field]
    setErrors(newErrors)

  }
  return (
    <form className="w-full max-w-3xl mx-auto space-y-4 rounded-lg border p-4 sm:p-6" onSubmit={submitForm}>
      {/* Country / Region */}
      <div className="space-y-1.5 w-full">
        <Label htmlFor="country">Country / Region</Label>
        <Select defaultValue="India" value={formData.country} onValueChange={(value) => {
          setFormData({
            ...formData,
            country: value
          })
          const newErrors = { ...errors }
          delete newErrors.country
          setErrors(newErrors)
        }
        }>
          <SelectTrigger id="country" className="w-full font-medium"
            aria-invalid={!!errors.country}
          >
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="India">India</SelectItem>
            <SelectItem value="United States">United States</SelectItem>
            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
        {
          errors.country && (
            <p className="text-sm text-red-600">{errors.country}</p>
          )
        }
      </div>

      {/* Full name */}
      <div className="space-y-1.5 w-full">
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" placeholder="Enter full name" className="w-full"
          value={formData.fullName}
          onChange={handleChange('fullName')}
          aria-invalid={!!errors.fullName}
        />
        {
          errors.fullName && (
            <p className="text-sm text-red-600">{errors.fullName}</p>
          )
        }
      </div>

      {/* Address */}
      <div className="space-y-1.5 w-full">
        <Label htmlFor="address">Shipping Address</Label>
        <Input
          id="address"
          placeholder="House no., Building, Street, Area"
          className="w-full"
          value={formData.address}
          onChange={handleChange('address')}
          aria-invalid={!!errors.address}
        />
        {
          errors.address && (
            <p className="text-sm text-red-600">{errors.address}</p>
          )
        }
      </div>

      {/* Apartment */}
      <div className="space-y-1.5 w-full">
        <Input
          id="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full"
          value={formData.apartment}
          onChange={handleChange('apartment')}
        />
      </div>

      {/* State / City / PIN */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
        <div className="space-y-1.5 w-full">
          <Label htmlFor="state">State</Label>
          <Select value={formData.state} onValueChange={(value) => {
            setFormData({
              ...formData,
              state: value
            })
            const newErrors = { ...errors }
            delete newErrors.state
            setErrors(newErrors)
          }
          }>
            <SelectTrigger id="state" className="w-full" aria-invalid={!!errors.state}>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Rajasthan">Rajasthan</SelectItem>
              <SelectItem value="Maharashtra">Maharashtra</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Gujarat">Gujarat</SelectItem>
              <SelectItem value="Karnataka">Karnataka</SelectItem>
              <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
            </SelectContent>
          </Select>
          {
            errors.state &&
            <p className="text-sm text-red-600">
              {errors.state}
            </p>
          }
        </div>

        <div className="space-y-1.5 w-full">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter city" className="w-full" value={formData.city} onChange={handleChange('city')}
            aria-invalid={!!errors.city}
          />
          {
            errors.city && (
              <p className="text-sm text-red-600">{errors.city}</p>
            )
          }
        </div>

        <div className="space-y-1.5 w-full">
          <Label htmlFor="pin">PIN code</Label>
          <Input id="pin" placeholder="Enter PIN code" className="w-full" value={formData.pin} onChange={handleChange('pin')}
            aria-invalid={!!errors.pin}
          />
          {
            errors.pin && (
              <p className="text-sm text-red-600">{errors.pin}</p>
            )
          }
        </div>
      </div>

      {/* Phone number */}
      <div className="space-y-1.5 w-full">
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter mobile number"
          className="w-full"
          value={formData.phone}
          onChange={handleChange('phone')}
          aria-invalid={!!errors.phone}

        />
        {
          errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )
        }
      </div>

      {/* Footer actions */}
      <div className="w-full flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-[#5c2707] cursor-pointer text-sm" onClick={()=> router.push('/cart')}>
          <ChevronLeft size={16} />
          Return to Cart
        </div>
        <div className="w-full sm:w-auto">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5c2707] text-white font-thin font-montserrat px-6 py-3 rounded-lg cursor-pointer"
            type="submit"
          >
            Continue to Payment
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </form>
  );
}