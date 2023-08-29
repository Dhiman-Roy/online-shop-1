import React from 'react';
import styles from './Cart.module.css';

export default function Cart() {
  return (
    <div className={styles.cart}>
        <div className={styles.imgContainer}>
            <img
             src='https://firebasestorage.googleapis.com/v0/b/reactshopone.appspot.com/o/images%2Flenovo.webpe978ed54-6355-4719-951b-5dd75a2d20b7?alt=media&token=77ce9a50-ddaa-4f2e-b462-60d73f224292'
              alt='image'
            className={styles.img}
              />
        </div>
        <div className={styles.titleSection}>
            <div>My first book</div>
            <div className={styles.quantityContainer}>
                <div>x</div>
                <div className={styles.quantity}>3</div>
            </div>
            
        </div>
        <div className={styles.amountSection} >
                <div className={styles.amountContainer}>
                    <div className={styles.amount}>$18.0</div>
                    <div>($6.00/item)</div>
                </div>
                <div  className={styles.button}>
                    <div><button>-</button></div>
                    <div><button>+</button></div>
                </div>
            </div>
    </div>
  )
}
