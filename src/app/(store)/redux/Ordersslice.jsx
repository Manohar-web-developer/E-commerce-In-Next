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

const initialState = {
  orderItmes: getOrderFromCookie(),

}

export const Orderslice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {

    
  },
})

export const {  } = Orderslice.actions

export default Orderslice.reducer