import React from 'react';
import  ReactDOM  from 'react-dom';
import Cart from './Cart'
import styles from './CartContainer.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

export default function CartContainer() {
  
  const dispatch = useDispatch();
  const cartButtonToggleHandler = () => {
    dispatch(uiActions.toggle());
  }
  return ReactDOM.createPortal(
    <>
    <div className={styles.backdrop}></div>
        <div className={styles.modal}>
            <button className={styles.toggleButton} onClick={cartButtonToggleHandler}>X</button>
            <h2>Your Shopping Cart</h2>
            <Cart/>
        
    </div>
    </>
 ,document.getElementById('portal') )
}
