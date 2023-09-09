import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import uiSlice from "./ui-slice";
import orderSlice from './order-slice';

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        ui: uiSlice.reducer,
        order: orderSlice.reducer,
    }
})

export default store;