import { createSlice } from "@reduxjs/toolkit"
const initialState: any = {
    itemOrder: [],
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToOrder: (state, action) => {
            state.itemOrder = action.payload
        }
    }
})

export const { addToOrder } = orderSlice.actions
export const orderReducer = orderSlice.reducer