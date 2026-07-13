import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './Cartslice'


export const store = configureStore({
  reducer: {
    cartItems: CartSlice,
  },
})