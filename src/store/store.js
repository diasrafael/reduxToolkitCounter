import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: [thunkMiddleware]
});