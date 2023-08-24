import React from "react";
import Header from "./components/Header/Header";
import BannerContainer from "./components/banner/BannerContainer";
import ProductContainer from "./components/product/ProductContainer";
import AddItemForm from "./components/addItemForm/AddItemForm";

function App() {
  return (
    <React.Fragment>
     <Header/>
     <BannerContainer/>
     <ProductContainer/>
     <AddItemForm/>
    </React.Fragment>
  );
}

export default App;
