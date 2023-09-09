import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import BannerContainer from "./components/banner/BannerContainer";
import ProductContainer from "./components/product/ProductContainer";
import AddItemForm from "./components/addItemForm/AddItemForm";
import CartContainer from "./components/cart/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import OrderContainer from "./components/order/OrderContainer";

let flag = true;
function App() {
  const dispatch = useDispatch();
  const cartToggler = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.product);
  
  cartToggler && (document.body.style.overflow='hidden');
  !cartToggler && (document.body.style.overflow='auto');
  
  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    if(flag){
      flag = false;
      console.log('hi')
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
      console.log("cart Hit")
    }
    console.log(cart.changed)
  },[cart, dispatch])
  
  return (
    <React.Fragment>
     <Header/>
     <BannerContainer/>
     {cartToggler && <CartContainer/> }
     <ProductContainer/>
     <AddItemForm/>
     <OrderContainer/>
    </React.Fragment>
  );
}

export default App;
