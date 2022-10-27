import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import authSlice from '../redux/authSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        authSlice
    },
});

export default store;