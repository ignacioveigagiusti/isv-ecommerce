import React from 'react';
import styles from './order.module.css';

export default function Order(order) {
  return (
    <div className={styles.orderCard}>
        <div className={styles.orderTitle}>
            <h2>{order.id}</h2>
        </div>
        <div className={styles.buyerDetail}>
            <h2>Comprador:</h2>
            <div>Nombre: {order.buyer.name}</div>
            <div>Teléfono: {order.buyer.phone}</div>
            <div>Email: {order.buyer.email}</div>
        </div>
        <div className={styles.items}>
            <h2>Productos/Servicios:</h2>
            {order.items.map(i => 
            <>
            <div className={styles.orderCard}>{i.name}</div>
            <div>Cantidad: {i.quantity}</div>
            <div>Precio Unitario: ${i.price}</div>
            </>)}
        </div>
        <div className={styles.orderDetail}>
            <h2>{`Total: $ ${order.total}`}</h2>
        </div>
    </div>
  )
}
