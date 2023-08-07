import { createSlice } from "@reduxjs/toolkit"
const initialState: any = {
    carts: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const checkCart = state.carts.findIndex((item: any) => item.id === action.payload.id)
            if (checkCart < 0) {
                state.carts.push(action.payload)

            } else {
                state.carts[checkCart].quanlity++;
                const into = state.carts[checkCart].price * state.carts[checkCart].quanlity
                state.carts[checkCart].intoMoney = into
            }
        }, inCrement: (state, action) => {
            const incrementCart = state.carts.findIndex((item: any) => item.id === action.payload.id)
            state.carts[incrementCart].quanlity++;
            const intoInCrement = state.carts[incrementCart].price * state.carts[incrementCart].quanlity
            state.carts[incrementCart].intoMoney = intoInCrement

        }, deCrement: (state, action) => {
            const incrementCart = state.carts.findIndex((item: any) => item.id === action.payload.id)
            state.carts[incrementCart].quanlity--;
            const intoInCrement = state.carts[incrementCart].price * state.carts[incrementCart].quanlity
            state.carts[incrementCart].intoMoney = intoInCrement
            if (state.carts[incrementCart].quanlity === 0) {
                state.carts = state.carts.filter((item: any) => item.id !== action.payload.id)
            }
        }, deleteCarts: (state, action) => {
            state.carts = state.carts.filter((item: any) => item.id !== action.payload.id)
        }

    }
})

export const { addToCart, inCrement, deCrement, deleteCarts } = cartSlice.actions
export const cartsReducer = cartSlice.reducer