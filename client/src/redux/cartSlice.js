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
            const price = Number(action.payload.product_price)
            if (state.items[item.product_id]) {
                state.items[item.product_id].quantity += 1
                state.items[item.product_id].sum += price
            } else {
                state.items[item.product_id] = { ...item, quantity: 1, sum: price }
            }
        },
        removeItem(state, action) {
            const productId = action.payload
            const price = state.items[productId].product_price
            if (state.items[productId].quantity > 1) {
                state.items[productId].quantity -= 1
                state.items[productId].sum -= price
            } else {
                delete state.items[productId]
            }
        },
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer