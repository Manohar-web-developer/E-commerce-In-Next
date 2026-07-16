"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { decreaseQuantity, increaseQuantity, removeCart } from '../redux/Cartslice';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter()

    const CartItem = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    const subtotal = CartItem.reduce((acc, curr) => acc + curr.Quantity * curr.price, 0)
    const compareTotal = CartItem.reduce((acc, curr) => acc + curr.Quantity * curr.compare_at_price, 0)
    const youSaved = compareTotal - subtotal

    if (CartItem.length === 0) {
        return (
            <div className='min-h-[70vh] flex flex-col gap-10 justify-center items-center px-5 text-center'>
                <div className='font-thin font-montserrat text-3xl md:text-4xl text-[#3B1D03]'>
                    Your cart is empty.
                </div>
                <p className='text-gray-500 font-montserrat font-light max-w-sm'>
                    Nothing here yet. Explore the collection and find something worth carrying home.
                </p>
                <div className='flex justify-center items-center shadow-lg rounded-full border-2 h-[160px] w-[160px] md:h-[200px] md:w-[200px]'>
                    <ShoppingCart size={64} strokeWidth={1.2} />
                </div>
                <Link
                    href={'/shop/all'}
                    className="relative inline-block text-[14px] font-montserrat font-thin group"
                >
                    Continue Browsing
                    <span className="absolute right-0 -bottom-1 w-full h-[2px] bg-[#3B1D03] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-right" />
                </Link>
            </div>
        )
    }

    return (
        <div className='max-w-[1200px] mx-auto px-5 md:px-8 py-10 md:py-14'>

            {/* Page header */}
            <div className='flex items-end justify-between border-b border-[#3B1D03]/15 pb-5 mb-8'>
                <div>
                    <p className='text-[12px] font-montserrat tracking-widest uppercase text-gray-400 mb-1'>
                        Shopping Bag
                    </p>
                    <h1 className='text-2xl md:text-3xl font-montserrat font-thin text-[#3B1D03]'>
                        Your Cart
                    </h1>
                </div>
                <span className='text-[13px] font-montserrat text-gray-400'>
                    {CartItem.length} {CartItem.length === 1 ? 'item' : 'items'}
                </span>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start'>

                {/* Item list */}
                <div className='flex flex-col divide-y divide-[#3B1D03]/10'>
                    {CartItem.map((item) => (
                        <div className="flex gap-5 py-6 first:pt-0" key={item.id}>

                            {/* Image */}
                            <Link
                                href={`/products/${item.handle}`}
                                className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] shrink-0 rounded-md overflow-hidden bg-gray-100"
                            >
                                <img
                                    src={item.image?.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </Link>

                            {/* Details */}
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="flex justify-between items-start gap-3">
                                    <Link href={`/products/${item.handle}`}>
                                        <h3 className="font-medium text-[16px] md:text-[17px] leading-snug hover:text-[#c07a3e] transition-colors">
                                            {item.title}
                                        </h3>
                                    </Link>
                                    <button
                                        className="shrink-0 hover:opacity-70 transition cursor-pointer"
                                        onClick={() => dispatch(removeCart(item.id))}
                                        aria-label="Remove item"
                                    >
                                        <Trash2 size={19} />
                                    </button>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-gray-400 line-through text-[14px]">
                                        Rs. {Number(item.compare_at_price).toLocaleString('en-IN')}
                                    </span>
                                    <span className="text-[#c07a3e] font-medium text-[15px]">
                                        Rs. {Number(item.price).toLocaleString('en-IN')}
                                    </span>
                                </div>

                                <p className="text-gray-500 text-[13px]">
                                    You save Rs. {Number(item.compare_at_price - item.price).toLocaleString('en-IN')} per item
                                </p>

                                <div className='flex items-center justify-between mt-1'>
                                    {/* Quantity Stepper */}
                                    <div className="flex items-center border rounded-md w-fit">
                                        <button
                                            className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                        >
                                            <Minus size={15} />
                                        </button>
                                        <span className="w-9 text-center text-[14px]">{item.Quantity}</span>
                                        <button
                                            className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                        >
                                            <Plus size={15} />
                                        </button>
                                    </div>

                                    <span className='text-[14px] font-medium text-[#3B1D03]'>
                                        Rs. {Number(item.Quantity * item.price).toLocaleString('en-IN')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link
                        href={'/shop/all'}
                        className="relative inline-block w-fit text-[13px] font-montserrat font-thin group mt-6"
                    >
                        Continue Browsing
                        <span className="absolute right-0 -bottom-1 w-full h-[2px] bg-[#3B1D03] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-right" />
                    </Link>
                </div>

                {/* Order Summary */}
                <div className='lg:sticky lg:top-24 border border-[#3B1D03]/15 rounded-md p-6 flex flex-col gap-4'>
                    <h2 className='text-[13px] font-montserrat tracking-widest uppercase text-[#3B1D03] pb-4 border-b border-[#3B1D03]/10'>
                        Order Summary
                    </h2>

                    <div className='flex justify-between text-[14px] text-gray-600'>
                        <span>Subtotal (MRP)</span>
                        <span>Rs. {Number(compareTotal).toLocaleString('en-IN')}</span>
                    </div>

                    {youSaved > 0 && (
                        <div className='flex justify-between text-[14px] text-[#c07a3e]'>
                            <span>You saved</span>
                            <span>− Rs. {Number(youSaved).toLocaleString('en-IN')}</span>
                        </div>
                    )}

                    <div className='flex justify-between text-[14px] text-gray-600'>
                        <span>Shipping</span>
                        <span className='text-gray-400'>Calculated at checkout</span>
                    </div>

                    <div className='flex justify-between text-[16px] font-medium text-[#3B1D03] pt-4 border-t border-[#3B1D03]/10'>
                        <span>Total</span>
                        <span>Rs. {Number(subtotal).toLocaleString('en-IN')}</span>
                    </div>

                    <button className="mt-2 w-full py-4 bg-[#3C1D04] text-white uppercase text-[13px] font-thin font-montserrat tracking-widest hover:bg-[#2c1503] transition-colors cursor-pointer" onClick={()=> router.push('/checkout')}>
                        Checkout
                    </button>

                    <p className='text-[12px] text-gray-400 text-center'>
                        Taxes included. Shipping calculated at checkout.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cart