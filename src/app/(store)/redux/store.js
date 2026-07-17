import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './Cartslice'
import WishList from './WishList'
import  orderReducer from './Ordersslice'



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    WishList: WishList,
    orderData: orderReducer,
  },
})