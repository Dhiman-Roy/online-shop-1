import React from "react";
import Header from "./components/Header/Header";
import BannerContainer from "./components/banner/BannerContainer";
import ProductContainer from "./components/product/ProductContainer";
import AddItemForm from "./components/addItemForm/AddItemForm";
import CartContainer from "./components/cart/CartContainer";
import { useSelector } from "react-redux";

function App() {
  const cartToggler = useSelector(state => state.ui.cartIsVisible);
  return (
    <React.Fragment>
     <Header/>
     <BannerContainer/>
     {cartToggler && <CartContainer/> }
     <ProductContainer/>
     <AddItemForm/>
    </React.Fragment>
  );
}

export default App;
