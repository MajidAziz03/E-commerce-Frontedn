import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price
        },
    },
})

export const { addToCart } = counterSlice.actions

export default counterSlice.reducer;