"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeCart, toggleCartSideBar } from '../redux/Cartslice';
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import Link from 'next/link';

const CartSlide = () => {
    const cartSlider = useSelector((state) => state.cart.cartSideBar);
    const CartItem = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [shouldRender, setShouldRender] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const [apiData, SetapiData] = useState([]);

    useEffect(() => {
        if (cartSlider) {
            setShouldRender(true)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setAnimateIn(true))
            })
        } else {
            setAnimateIn(false)

            const timer = setTimeout(() => setShouldRender(false), 300)
            return () => clearTimeout(timer)
        }
    }, [cartSlider])


    if (!shouldRender) return null



    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-[#ffffffa4] backdrop-blur-[6px] z-[90] transition-opacity duration-300 ${animateIn ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={() => dispatch(toggleCartSideBar())}
            />

            {/* Cart Panel */}
            <div
                className={`fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-white z-[999] flex flex-col transition-transform duration-300 ease-in-out ${animateIn ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="p-5 flex justify-between border-b shrink-0">
                    <h5>Cart</h5>
                    <X className="cursor-pointer" onClick={() => dispatch(toggleCartSideBar())} />
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-5">
                    {
                        CartItem.length == 0 ?
                            (
                                <div className='pt-10 flex flex-col gap-10 justify-center items-center'>
                                    <div className='font-thin font-montserrat text-3xl'>Your cart is empty.</div>

                                    <div className='flex justify-center items-center shadow-lg rounded-full border-2 h-[200px] w-[200px]'>
                                        <ShoppingCart size={73} />
                                    </div>

                                    <Link
                                        href={'/shop/all'}
                                        className="relative inline-block text-[14px] font-montserrat font-thin group"
                                        onClick={() => dispatch(toggleCartSideBar())}
                                    >
                                        Continue Browsing
                                        <span className="absolute right-0 -bottom-1 w-full h-[2px] bg-[#3B1D03] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-right" ></span>
                                    </Link>
                                </div>
                            )
                            :

                            (
                                CartItem.map((item) => {

                                    return (
                                        <div className="flex gap-4 p-4 border-b" key={item.id}>
                                            {/* Image */}
                                            <div className="w-[110px] h-[110px] shrink-0 rounded-md overflow-hidden bg-gray-100">
                                                <Link href={`/products/}${item.handle}`}>
                                                    <img
                                                        src={item.image?.src}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    /></Link>
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 flex flex-col gap-2">
                                                {/* Title + Delete */}
                                                <div className="flex justify-between items-start gap-3">
                                                    <h3 className="font-medium text-[17px] leading-snug">
                                                        {item.title}
                                                    </h3>
                                                    <button className="shrink-0 hover:opacity-70 transition cursor-pointer" onClick={() => dispatch(removeCart(item.id))}>
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <div className="flex items-center gap-3">
                                                    <span className="text-gray-400 line-through text-[15px]">
                                                        Rs. {Number(item.compare_at_price).toLocaleString('en-IN')}
                                                    </span>
                                                    <span className="text-[#c07a3e] font-medium text-[15px]">
                                                        Rs. {Number(item.price).toLocaleString('en-IN')}
                                                    </span>
                                                </div>

                                                {/* Discount text */}
                                                <p className="text-gray-500 text-sm">
                                                    You are getting Rs. {Number(item.compare_at_price - item.price).toLocaleString('en-IN')} off per item
                                                </p>

                                                {/* Quantity Stepper */}
                                                <div className="flex items-center border rounded-md w-fit mt-1">
                                                    <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition cursor-pointer" onClick={() => dispatch(decreaseQuantity(item.id))}>
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-10 text-center text-[15px]">{item.Quantity}</span>
                                                    <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition cursor-pointer" onClick={() => dispatch(increaseQuantity(item.id))}>
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })

                            )
                    }
                    <div className='border p-7 h-[300px]'>

                    </div>
                </div>

                {/* Footer */}
                {
                    CartItem.length == 0 ? ""
                        :
                        <div className="p-5 border-t shrink-0 bg-[#3C1D04] text-center text-white uppercase text-[13px] font-thin font-montserrat tracking-widest">
                            Check out . RS. {Number(CartItem.reduce((acc, curr) => {
                                return acc + (curr.Quantity * curr.price)
                            }, 0)).toLocaleString('en-IN')} INR
                        </div>
                }
            </div>
        </>
    )
}

export default CartSlide