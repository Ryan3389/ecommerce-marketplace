// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     items: [],
// }

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem(state, action) {
//             const isExists = state.items.find(item => item.product_id == action.payload.product_id)
//             const price = Number(action.payload.product_price)
//             if (isExists) {
//                 isExists.sum += price
//                 isExists.quantity += 1
//             } else {
//                 state.items.push({
//                     ...action.payload,
//                     sum: price,
//                     quantity: 1
//                 })
//             }
//         },
//         removeItem(state, action) {
//             const isExists = state.items.find(item => item.product_id == action.payload.product_id)
//             const price = Number(action.payload.product_price)

//             if (isExists) {
//                 isExists.quantity -= 1
//                 isExists.sum -= price
//             } else {
//                 state.items = state.items.filter(item => item.product_id !== action.payload.product_id)

//             }
//         }

//     }
// })

// export const { addItem, removeItem } = cartSlice.actions

// export default cartSlice.reducer


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
            if (state.items[productId].quantity > 1) {
                state.items[productId].quantity -= 1
                state.items[productId].sum -= state.items[productId].product_price
            } else {
                delete state.items[productId]
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer