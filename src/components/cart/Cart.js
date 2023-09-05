import React from 'react';
import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product-slice';

export default function Cart(props) {
  const {id, title, price, totalPrice, quantity,image} = props;
  const dispatch = useDispatch();
  const cancelButtonHandler = () => {
    dispatch(productActions.removeItemFromCart(id));
  };
  const addButtonHandler = () => {
    dispatch(productActions.addItemToCart({
            id,
            title,
            price,
            quantity,
            image
    }))
  }

  return (
    <div className={styles.cart}>
        <div className={styles.imgContainer}>
            <img
             src={image}
              alt='image'
            className={styles.img}
              />
        </div>
        <div className={styles.titleSection}>
            <div>{title}</div>
            <div className={styles.quantityContainer}>
                <div>x</div>
                <div className={styles.quantity}>{quantity}</div>
            </div>
            
        </div>
        <div className={styles.amountSection} >
                <div className={styles.amountContainer}>
                    <div className={styles.amount}>${totalPrice}</div>
                    <div>(${price}/item)</div>
                </div>
                <div  className={styles.button}>
                    <div><button onClick={cancelButtonHandler}>-</button></div>
                    <div><button onClick={addButtonHandler}>+</button></div>
                </div>
            </div>
    </div>
  )
}
