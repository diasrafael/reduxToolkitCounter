import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: false,
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: state => {
            state.showCart = !state.showCart;
        },
        addItem: (state, action) => {
            const existentItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (existentItemIndex >= 0) {
                state.cart[existentItemIndex].quantity += 1;
                state.cart[existentItemIndex].total += state.cart[existentItemIndex].price;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    total: action.payload.price,
                    price: action.payload.price
                })
            }
        },
        removeItem: (state, action) => {

            const itemIdx = state.cart.findIndex(item => item.id === action.payload.id);

            if (state.cart[itemIdx].quantity === 1) {
                state.cart.splice(itemIdx, 1);
            } else {
                state.cart[itemIdx].quantity--;
            }

        },
        replaceEntireCart: (state, action) => {state.cart = action.payload}
    }
});

export const addItem = (item) => {
    return async (dispatch, getState) => {
        dispatch(cartSlice.actions.addItem(item));
        fetch('https://redux-toolkit-example-63dda-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(getState().cart.cart)
        });
    }

}

export default cartSlice.reducer;

export const { toggleCart, removeItem, replaceEntireCart } = cartSlice.actions;
