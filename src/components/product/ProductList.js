import style from './ProductList.module.css';


import Products from './Products';
import { useEffect, useState } from 'react';

const ProductList = () => {

const [productList, setProductList] = useState([])
    

    const getProductData = async () => {
        const response = await fetch('https://reactshopone-default-rtdb.firebaseio.com/product.json');
        const data =await response.json();
        const loadedData = [];
        for(const key in data){
            loadedData.push({
                id: data[key].id,
                title: data[key].name,
                description: data[key].description,
                image: data[key].imageLink,
                price: data[key].price,
                quantity: 1
            })
        }
        setProductList(loadedData);
    }
    
    useEffect(() => {
        getProductData();
    },[])
   
    const productsData = productList.map(item => {
        return <Products
        key={item.id}
        id={item.id}
         title={item.title}
         description={item.description}
         quantity={1}
         price={item.price}
         image={item.image}
         />
    })
  
    return (
        <div className={style.listContainer}>
            {productsData}
        </div>
    )
}
export default ProductList;