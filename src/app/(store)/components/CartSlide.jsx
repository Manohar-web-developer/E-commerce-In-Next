"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartSideBar } from '../redux/Cartslice';
import { X } from 'lucide-react';

const CartSlide = () => {
    const cartSlider = useSelector((state) => state.cart.cartSideBar)
    const dispatch = useDispatch()

    if (!cartSlider) return null

    return (
        <>
            {/* Overlay - siblings, not parent of panel */}
            <div
                className="fixed inset-0 bg-[#ffffffa4] backdrop-blur-[6px] z-[90]"
                onClick={() => dispatch(toggleCartSideBar())}
            />

            {/* Cart Panel - highest z-index, independent stacking context */}
            <div className="fixed top-0 right-0 w-[420px] h-screen bg-white z-[999] flex flex-col">
                {/* Header */}
                <div className="p-5 flex justify-between border-b shrink-0">
                    <h5>Cart</h5>
                    <X className="cursor-pointer" onClick={() => dispatch(toggleCartSideBar())} />
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-5">
                    {/* Cart Items */}
                </div>

                {/* Footer */}
                <div className="p-5 border-t shrink-0">
                    Checkout Button
                </div>
            </div>
        </>
    )
}

export default CartSlide