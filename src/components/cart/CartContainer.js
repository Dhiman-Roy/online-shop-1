import React from 'react';
import  ReactDOM  from 'react-dom';
import Cart from './Cart'
import styles from './CartContainer.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

export default function CartContainer() {
  const products = useSelector(state => state.product.items);
  const totalProductPrice = useSelector(state => state.product.totalPrice)
  console.log(products)
  const dispatch = useDispatch();
  const cartButtonToggleHandler = () => {
    dispatch(uiActions.toggle());
  }
  return ReactDOM.createPortal(
    <>
    <div className={styles.backdrop} onClick={cartButtonToggleHandler}></div>
        <div className={styles.modal}>
            <button className={styles.toggleButton} onClick={cartButtonToggleHandler}>X</button>
            <h2>Your Shopping Cart</h2>
            <div className={styles.cartAllProduct}>
            <div className={styles.cartContentContainer}>
            {products.map(item => {
              return <Cart
               key={item.id}
               id={item.id}
               title={item.title} 
               image={item.image} 
               price={item.price}
               totalPrice={item.totalPrice}
               quantity={item.quantity}
               />
            })}
            </div>

            </div>
            <div className={styles.orderContainer}>
              <div>
                <div className={styles.netAmount}>Net Amount</div>
                <div className={styles.totalProductPrice}>{totalProductPrice}$</div>
              </div>
              
              <div className={styles.orderButtonContainer}>
                <button>cancel</button>
                <button>order</button>
              </div>
            </div>
           
            
            
        
    </div>
    </>
 ,document.getElementById('portal') )
}
