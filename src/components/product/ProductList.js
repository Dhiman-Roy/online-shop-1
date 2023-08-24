import style from './ProductList.module.css';
import image1 from '../images/sideImage1.jpg';
import image2 from '../images/sideImage2.jpg';

import Products from './Products';
import { useEffect } from 'react';

// const DUMMY_DATA = [
//     {
//         id:'e1',
//         title: 'Huawei watch',
//         description: 'good watch',
//         quantity: 1,
//         price: 10,
//         image: image1
        
//     },
//     {
//         id:'e2',
//         title: 'soundcore earphone',
//         description: 'good earphone',
//         quantity: 1,
//         price: 15,
//         image: image2
        
//     },
//     {
//         id:'e3',
//         title: 'Huawei watch',
//         description: 'good watch',
//         quantity: 1,
//         price: 10,
//         image: image1
        
//     },
//     {
//         id:'e4',
//     title: 'soundcore earphone',
//     description: 'good earphone',
//     quantity: 1,
//     price: 15,
//     image: image2
    
//     }
// ]




const ProductList = () => {


    const loadedData = [];

    const getProductData = async () => {
        const response = await fetch('https://reactshopone-default-rtdb.firebaseio.com/product.json');
        const data =await response.json();
        console.log(data)
       await loadedData.push(data);
       console.dir(loadedData[0]);
    }
    
    useEffect(() => {
        getProductData();
    },[])
    
    const productsData = loadedData.map(item => {
        return <Products
        key={item.id}
         title={item.title}
         description={item.description}
         quantity={1}
         price={item.price}
         image={item.imageLink}
         />
    })
  
    return (
        <div className={style.listContainer}>
            {productsData}
        </div>
    )
}
export default ProductList;