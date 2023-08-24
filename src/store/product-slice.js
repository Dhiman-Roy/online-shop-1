import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addProducts(state, action){

        },
        removeProducts(state, action){

        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;