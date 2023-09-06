import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        changed: false,
    },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalPrice = state.totalPrice + newItem.price;
            state.totalQuantity++;
            state.changed = true;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    image: newItem.image,

                })
                
            } else {
                
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            state.totalPrice = state.totalPrice - existingItem.price;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;