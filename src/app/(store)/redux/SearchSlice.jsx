import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const getSerchValue = () => {
  const rawSearch = Cookies.get("search")
  try {
    const parsed = JSON.parse(rawSearch)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}


const initialState = {
  SerchValueItems: getSerchValue(),
  serchBoxOpen: true,
}

export const SearchSlice = createSlice({
  name: 'SerchValue',
  initialState,
  reducers: {
    serchBoxPopup: (state) => {
        state.serchBoxOpen = !state.serchBoxOpen;

    }
  },
})

export const { serchBoxPopup } = SearchSlice.actions

export default SearchSlice.reducer