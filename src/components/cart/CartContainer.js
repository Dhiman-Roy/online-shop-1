import React from 'react'
import Cart from './Cart'
import styles from './CartContainer.module.css';

export default function CartContainer() {
  return (
    <div className={styles.backdrop}>
        <div className={styles.modal}>
            <h2>Your Shopping Cart</h2>
            <Cart/>
        </div>
    </div>
  )
}
