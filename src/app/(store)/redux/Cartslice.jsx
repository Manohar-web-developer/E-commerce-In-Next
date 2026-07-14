import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartSideBar: true,
  cartItems: []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (stage, actions)=>{
      stage.cartSideBar = true;
      console.log("hello")

        
    },
    toggleCartSideBar: (state) => {
      state.cartSideBar = !state.cartSideBar;
    }
  },
})

export const { addToCart, toggleCartSideBar } = CartSlice.actions

export default CartSlice.reducer