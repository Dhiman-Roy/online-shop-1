import React from 'react';
import styles from './Order.module.css';

export default function Order() {
  return (
    <div className={styles.order} >
    <div>
        <img src='#' alt='image'></img>
        <div>title</div>
        <div>Product id:</div>
        <div>quantity</div>
        <div>totalPrice</div>
    </div>
    <div>
        <div>userName</div>
        <div>PhoneNumber</div>
        <div>delivary address</div>
        <div>purchase system</div>
    </div>
    <div>
        <div>Done</div>
        <button>cancel</button>
        <button>Delivary Done</button>
    </div>
    
    </div>
    
  )
}
