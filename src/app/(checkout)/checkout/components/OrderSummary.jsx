'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function OrderSummary() {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const subTotal = cartItems.reduce((acc, curr) => acc + (curr.Quantity * curr.price), 0)
    const [showCoupon, setShowCoupon] = useState(false)
    const [codeError, setCodeError] = useState(false)
    const [CodeValue, setCodeValue] = useState("")
    const [discountAmount, setDiscountAmount] = useState(0)
    const [couponApplied, setCouponApplied] = useState(false)


    const discountCodes = [
        {
            code: "WELCOME10",
            type: "percentage",
            value: 10
        },
        {
            code: "FLAT200",
            type: "flat",
            value: 200
        },
        {
            code: "FESTIVE25",
            type: "percentage",
            value: 25
        }
    ];

    const applyCoupan = () => {

        const matchCupon = discountCodes.find(
            (code) => code.code.toLowerCase() === CodeValue.toLowerCase()
        );

        if (!matchCupon) {
            setCodeError(true)
            setDiscountAmount(0)
            return
        }

        setCodeError(false)
        setCouponApplied(true)

        if (matchCupon.type === "flat") {

            setDiscountAmount(matchCupon.value)

        } else if (matchCupon.type === "percentage") {

            setDiscountAmount(
                (subTotal * matchCupon.value) / 100
            )

        }
    }
    return (
        <div className='p-5 bg-[#FBFAFA] border rounded-md'>
            <div>
                <h5 className='font-bold'>Order Summery</h5>
            </div>
            {
                cartItems.map((item) => {
                    return (
                        <div className='pt-5 flex items-center gap-2' key={item.id}>
                            <div className='h-[50px] w-[50px] rounded-lg'>
                                <img src={item.image.src} alt="" className='w-full h-full rounded-lg' />
                            </div>
                            <div className='flex gap-2 w-full justify-between'>
                                <div>
                                    <p className='whitespace-break-spaces text-[14px]'>{item.title}</p>
                                    <p className='whitespace-nowrap text-[14px]'>Quantity: {item.Quantity}</p>
                                </div>
                                <div>
                                    <p className='whitespace-nowrap text-[14px] font-bold'>₹ {Number(item.price * item.Quantity).toLocaleString("en-IN")}</p>
                                    <p className='whitespace-nowrap text-[14px] font-medium line-through'>₹ {Number(item.compare_at_price * item.Quantity).toLocaleString("en-IN")}</p>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            <div className='pt-3 w-full border-t mt-3 flex flex-col gap-2 pb-3 border-b'>
                <div className='w-full flex items-center justify-between'>
                    <p className='font-medium font-montserrat'>Subtotal: </p>
                    <p className='font-bold font-montserrat'>₹ {Number(subTotal).toLocaleString("en-IN")}</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='font-medium font-montserrat'>Shipping </p>
                    <p className='font-bold font-montserrat'>Free</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='font-medium font-montserrat'>Discount</p>

                    {
                        discountAmount > 0 ? (
                            <div className=' items-center'>
                                <p className='text-green-600 font-bold'>
                                    - ₹ {Number(discountAmount).toLocaleString("en-IN")}
                                </p>

                                <button
                                    className='text-red-500 text-[12px] cursor-pointer text-center'
                                    onClick={() => {
                                        setDiscountAmount(0)
                                        setShowCoupon(false)
                                        setCodeValue("")
                                        setCodeError(false)
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        ) : !showCoupon ? (
                            <button
                                className='font-bold text-[#602A0B] text-[13px] cursor-pointer font-montserrat'
                                onClick={() => setShowCoupon(true)}
                            >
                                Apply Coupon
                            </button>
                        ) : (
                            <div className='flex gap-3 items-start'>
                                <div>
                                    <input
                                        type="text"
                                        className='border px-2'
                                        onChange={(e) => setCodeValue(e.target.value)}
                                    />

                                    {
                                        codeError && (
                                            <p className='text-red-400 text-[12px] pt-1'>
                                                Invalid Code
                                            </p>
                                        )
                                    }
                                </div>

                                <button
                                    className='cursor-pointer uppercase border px-3 py-0.5 rounded-lg text-[14px]'
                                    onClick={applyCoupan}
                                >
                                    Apply
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='flex items-center justify-between w-full pt-5'>
                <div>
                    <h4 className='text-2xl font-bold'>Total</h4>
                    <p className='text-[12px] text-gray-400'>Including Taxs</p>
                </div>
                <div>
                    <p className='font-bold text-xl'>₹ {Number(subTotal - discountAmount).toLocaleString("en-IN")}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary