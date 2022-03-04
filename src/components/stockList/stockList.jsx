import { collection, getFirestore, } from 'firebase/firestore';
import React from 'react'
import styles from '../order/order.module.css';
import StockCount from './stockCount';

export default function StockList(props) {
    const db = getFirestore();

    const changeStock = (newStock) => {
        //Stock update

    }
    
    return (
    <>
    {props.items.map(i =>
        <div className={styles.orderCard}>
            <div className={styles.orderTitle}>
                <h2>{i.name}</h2>
            </div>
            <StockCount initial={i.stock} stock='1000000' onAdd={changeStock}/>
        </div>
    )}
    </>
    )
}
