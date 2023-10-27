
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../componentSlice/cartSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
