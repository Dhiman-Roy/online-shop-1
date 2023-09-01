import React from 'react';
import  ReactDOM  from 'react-dom';
import Cart from './Cart'
import styles from './CartContainer.module.css';

export default function CartContainer() {
  return ReactDOM.createPortal(
    <>
    <div className={styles.backdrop}></div>
        <div className={styles.modal}>
            <h2>Your Shopping Cart</h2>
            <Cart/>
        
    </div>
    </>
 ,document.getElementById('portal') )
}
