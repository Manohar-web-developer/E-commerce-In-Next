import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'


const getWishListData = () => {
    const rowWishList = Cookies.get("wishlist")
    try{
        const parsed = JSON.parse(rowWishList)
        return Array.isArray(parsed) ? parsed : []
    }catch{
        return []
    }
}

const initialState = {
  wishList: getWishListData(),
}

export const WishList = createSlice({
  name: 'WishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
        const data = action.payload;

        const checkWishlist = state.wishList.filter((v) => v.id === data.id)

        if(checkWishlist.length == 0){
            let wishShowData = {
                id: data.id,
                image: data.image,
                price: data.price
            }
            state.wishList = [wishShowData, ...state.wishList]
            Cookies.set("wishlist", JSON.stringify(state.wishList))
        }else{
            const removeWishList = state.wishList.filter((v) => v.id !== data.id)
            state.wishList = [...removeWishList]
            Cookies.set("wishlist", JSON.stringify(state.wishList))
        }
       
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToWishList } = WishList.actions

export default WishList.reducer