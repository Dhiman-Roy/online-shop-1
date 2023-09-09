import React from 'react';
import ReactDom from 'react-dom';
import styles from './OrderContainer.module.css';
import Order from './Order';

export default function OrderContainer() {
  return ReactDom.createPortal (
    <>
        <div className={styles.overlay}></div>
        <div className={styles.modal}>
            <div className={styles.modalCancel}>X</div>
            <header className={styles.header}>Orders</header>
            <Order/>
        </div>
    </>, document.getElementById('portal')
  )
}
