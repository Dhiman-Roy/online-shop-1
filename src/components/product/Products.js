import style from './Products.module.css';
import { productActions } from '../../store/product-slice';
import { useDispatch } from 'react-redux';

const Products = (props) => {
    const {title, description, image, quantity, price} = props;
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(productActions.addItemToCart({
            id,
            title,
            price,
            quantity,
            image
        }))
    }
    return (
        <div className={style.card}>
            <img className={style.img} src={image} alt='image'/>
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div>{price}$</div>
                
                <button onClick={addToCartHandler} className={style.addButton}>Add to cart</button>
            </div>
            
        </div>
    )
}
export default Products;