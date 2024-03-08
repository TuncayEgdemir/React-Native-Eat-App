import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice
  }
})