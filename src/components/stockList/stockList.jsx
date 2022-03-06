import { updateDoc, getFirestore, doc } from 'firebase/firestore';
import React from 'react'
import styles from '../order/order.module.css';
import StockCount from './stockCount';

export default function StockList(props) {
    const db = getFirestore();

    const changeStock = async (newStock, id) => {
        //Stock update
        const itemRef = doc(db, 'items', id);

        await updateDoc(itemRef, {
            stock: newStock
        })
        .then(alert('Stock actualizado!'))
        .catch(err => alert('Hubo un error al actualizar el stock'))
    }

    return (
    <div className={styles.orderList}>
        {props.items.map(i =>
        <div className={styles.orderCard}>
            <div className={styles.orderTitle}>
                <h2>{i.name}</h2>
            </div>
            <StockCount initial={i.stock} stock='1000000' id={i.id} onAdd={changeStock}/>
        </div>
        )}
    </div>
    )
}
