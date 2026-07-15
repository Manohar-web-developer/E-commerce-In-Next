import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglePopup } from '../redux/WishList'
import { Heart, Trash2, X } from 'lucide-react'
import { addToCart } from '../redux/Cartslice'

function WishListPopup() {
    const popup = useSelector((state) => state.WishList.popup)
    const dispatch = useDispatch()
    const wishList = useSelector((state) => state.WishList.wishList)

    if (!popup) return null

    return (
        <div className='h-screen w-full absolute top-0 z-9998' onClick={() => dispatch(togglePopup())}>
            <div className='w-[1000px] bg-white shadow-lg border-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9999 rounded-lg' onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='px-8 py-5 w-full h-full'>
                    <div className='w-full flex items-center justify-between pb-3 border-b'>
                        <div className='flex items-center gap-2'>
                            <Heart className=' text-[#A45B38] fill-[#A45B38]' size={42} />
                            <h3 className='font-thin font-montserrat text-3xl'>My Wishlist</h3>
                        </div>
                        <div>
                            <X className='cursor-pointer transition-transform duration-300 hover:rotate-180 text-[#A45B38]' size={25} onClick={() => dispatch(togglePopup())} />
                        </div>

                    </div>
                    {
                        wishList.length == 0 ?
                            (
                                <div className='border h-full flex items-center justify-center min-h-[350px]'>
                                    <p className='text-gray-500 font-montserrat'>there are no items in this wishlist</p>
                                </div>
                            )
                            :
                            (

                                <div className="grid gap-6 md:grid-cols-3">
                                    {wishList.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                                        >
                                            <div className="px-6 pt-6 pb-4 group relative">
                                                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 cursor-default">
                                                    {item.title}
                                                </h2>
                                                <div className="pointer-events-none absolute left-4 top-2 z-10 hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md whitespace-nowrap">
                                                    {item.title}
                                                </div>
                                            </div>

                                            <div className="w-full h-72 bg-gray-50 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={item.image.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="px-6 pt-6 pb-4 text-center">
                                                <span className="text-lg font-bold text-gray-900">
                                                    ₹{Number(item.price).toLocaleString("en-IN")}
                                                </span>
                                            </div>

                                            <div className="px-6 pb-6 flex items-center gap-4">
                                                <button
                                                    className="flex-1 bg-[#a56b47] hover:bg-[#8f5c3c] active:scale-[0.98] transition text-white text-[12px] px-2 font-semibold tracking-wide py-4 rounded-lg"
                                                    onClick={() => dispatch(addToCart(item))}
                                                >
                                                    ADD TO CART
                                                </button>
                                                <button
                                                    aria-label="Delete item"
                                                    className="text-gray-400 hover:text-gray-600 transition p-2"
                                                >
                                                    <Trash2 size={26} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )

                    }
                </div>
            </div>
        </div>
    )
}

export default WishListPopup