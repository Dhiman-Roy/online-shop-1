import style from './ProductContainer.module.css';
import ProductList from './ProductList';

const ProductContainer = () => {
    return (
        <div className={style.container}>
            <h2>Products</h2>
            <ProductList/>

        </div>
    )
}
export default ProductContainer;