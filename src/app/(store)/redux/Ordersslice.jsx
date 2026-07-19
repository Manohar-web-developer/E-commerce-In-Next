import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const getOrderFromCookie = () => {
  const rawOrder = Cookies.get("order")
  try {
    const parsed = JSON.parse(rawOrder)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const saveOrderToCookie = (orders) => {
  Cookies.set("order", JSON.stringify(orders), { expires: 30 }) 
}

const initialState = {
  orderItmes: getOrderFromCookie(),
}

export const Orderslice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),           
        ...action.payload,
        status: "placed"
      }
      state.orderItmes.push(newOrder)
      saveOrderToCookie(state.orderItmes)
    },

    clearOrders: (state) => {
      state.orderItmes = []
      Cookies.remove("order")
    },

    removeOrder: (state, action) => {
      state.orderItmes = state.orderItmes.filter(
        (order) => order.id !== action.payload
      )
      saveOrderToCookie(state.orderItmes)
    },
  },
})

export const { placeOrder, clearOrders, removeOrder } = Orderslice.actions

export default Orderslice.reducer