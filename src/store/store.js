import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        ui: uiSlice.reducer,
    }
})

export default store;