

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {},
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload
            if (state.items[item.product_id]) {
                state.items[item.product_id].quantity += 1
                state.items[item.product_id].product_price += item.product_price
            } else {
                state.items[item.product_id] = { ...item, quantity: 1 }
            }
        },
        removeItem(state, action) {
            const product_id = action.payload
            if (state.items[product_id].quantity > 1) {
                state.items[product_id].quantity -= 1
            } else {
                delete state.items[product_id]
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer