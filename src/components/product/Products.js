import style from './Products.module.css';

const Products = (props) => {
    const {title, description, image, quantity, price} = props;
    return (
        <div className={style.card}>
            <img src={image} alt='image'/>
            <div className={style.content}>
                <div>{title}</div>
                <div>{price}$</div>
                <button>Add to cart</button>
            </div>
            
        </div>
    )
}
export default Products;