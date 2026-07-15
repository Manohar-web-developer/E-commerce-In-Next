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
  popup: false,
  wishList: getWishListData(),
}

export const WishList = createSlice({
  name: 'WishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
        const product = action.payload;

        const checkWishlist = state.wishList.filter((v) => v.id === product.id)

        if(checkWishlist.length == 0){
            let wishShowData = {
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
            state.wishList = [wishShowData, ...state.wishList]
            Cookies.set("wishlist", JSON.stringify(state.wishList))
        }else{
            const removeWishList = state.wishList.filter((v) => v.id !== product.id)
            state.wishList = [...removeWishList]
            Cookies.set("wishlist", JSON.stringify(state.wishList))
        }
       
    },
    togglePopup: (state) => {
        state.popup = !state.popup
      }
  },
})
export const { addToWishList, togglePopup } = WishList.actions

export default WishList.reducer