import style from './Products.module.css';

const Products = (props) => {
    const {title, description, image, quantity, price} = props;
    return (
        <div className={style.card}>
            <img className={style.img} src={image} alt='image'/>
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div>{price}$</div>
                
                <button className={style.addButton}>Add to cart</button>
            </div>
            
        </div>
    )
}
export default Products;