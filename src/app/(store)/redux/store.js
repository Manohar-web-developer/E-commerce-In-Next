import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './Cartslice'
import WishList from './WishList'



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    WishList: WishList
  },
})