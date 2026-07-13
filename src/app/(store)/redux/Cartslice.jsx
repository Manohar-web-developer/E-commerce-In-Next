import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cartItems: [1, 2 , 3, 4]
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (stage, actions)=>{
        // console.log(actions.payload);
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions

export default CartSlice.reducer