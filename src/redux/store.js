// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileReducer from "./profileSlice"
import productReducer from './productSlice';
import shoppingCardReducer from "./shoppingCardSlice"


const store = configureStore({
  reducer: {
    auth: authReducer,
    profile:profileReducer,
    product:productReducer,
    card:shoppingCardReducer,
  },
});

export default store;
