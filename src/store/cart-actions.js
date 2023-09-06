import { productActions } from "./store/product-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch("https://reactshopone-default-rtdb.firebaseio.com/cart.json",{
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    totalPrice: cart.totalPrice
                })
            })
            if(!response.ok){
                throw new Error("something is wrong here");
            }
            
        }
        try{
            await sendRequest();
        } catch (err){
            console.Error(err);
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const getData = async () => {
            const response = await fetch("https://reactshopone-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok){
            throw new Error("data fetching problem");
            }
            const data = await response.json();
            console.log('data get complete')
            return data;
        }
        try {
            const data = await getData();
            dispatch(productActions.replaceCartData({
                items: data.items,
                totalQuantity: data.totalQuantity,
                totalPrice: data.totalPrice,
            }))

        } catch (err){
            console.error(err);
        }
        
    }
}