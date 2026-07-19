import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './Cartslice'
import WishList from './WishList'
import  orderReducer from './Ordersslice'
import SearchReducer from './SearchSlice'



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    WishList: WishList,
    orderData: orderReducer,
    SerchValue: SearchReducer,
  },
})