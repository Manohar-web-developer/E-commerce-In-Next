import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const getCartFromCookie = () => {
  const rawCart = Cookies.get("cart")
  try {
    const parsed = JSON.parse(rawCart)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const initialState = {
  cartSideBar: false,
  cartItems: getCartFromCookie()
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const product = action.payload
      const checkCart = state.cartItems.filter((v) => v.id === product.id)

      if (checkCart.length == 0) {

        let CartShowData = {
          id: product.id,
          image: product.image ||
            product.images?.[0] ||
            null,
          title: product.title,
          handle: product.handle,
          compare_at_price: product.variants[0].compare_at_price,
          price: product.variants[0].price,
          Quantity: 1
        }

        state.cartItems = [CartShowData, ...state.cartItems]
        state.cartSideBar = true

        Cookies.set("cart", JSON.stringify(state.cartItems))
      } else {
        let qtyUpdate = state.cartItems.map((v) => {
          if (v.id == product.id) {
            v.Quantity++
            return v
          } else {
            return v
          }
        })

        state.cartItems = [...qtyUpdate]
        state.cartSideBar = true

        Cookies.set("cart", JSON.stringify(state.cartItems))
      }
    },
    increaseQuantity: (state, action) => {

      const increaseId = action.payload;
      let qtyUpdate = state.cartItems.map((v) => {
        if(increaseId == v.id){
          v.Quantity++;
          return v
        }else{
          return v
        }
      })
      state.cartItems = [...qtyUpdate]
      state.cartSideBar = true

      Cookies.set("cart", JSON.stringify(state.cartItems))

    },
    decreaseQuantity: (state, action) => {
      const decreaseId = action.payload;
      const qtyUpdate = state.cartItems.map((v) => {
        if(decreaseId == v.id){
          
          if(v.Quantity > 1 ){
            v.Quantity--
          }
          return v
        }else{
          return v
        }
      })
      state.cartItems = [...qtyUpdate]
      state.cartSideBar = true

      Cookies.set("cart", JSON.stringify(state.cartItems))

    },
    toggleCartSideBar: (state) => {
      state.cartSideBar = !state.cartSideBar
    },
    removeCart: (state, action) => {
       const removeCartId = action.payload;
        const removeItem = state.cartItems.filter((v) =>  v.id !== removeCartId )
        state.cartItems = [...removeItem]
        state.cartSideBar = true

        Cookies.set("cart", JSON.stringify(state.cartItems))
    }
  },
})

export const { addToCart, toggleCartSideBar, increaseQuantity, decreaseQuantity, removeCart } = CartSlice.actions

export default CartSlice.reducer