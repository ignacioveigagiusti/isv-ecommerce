import React from 'react';
import ItemCount from './itemCount';
import './itemListContainer.module.css'
import styles from './itemListContainer.module.css'

export default function ItemListContainer() {
    console.log(styles.ItemDetailContainer);
    return (  
        <div className='container'>
            <h1>Bienvenido a ISV Shop!</h1>
            <h2>Productos más populares</h2>
            <div className={styles.itemDetailContainer}>
                <div><ItemCount stock='10' initial='1'/></div>
                <div><ItemCount stock='10' initial='1'/></div>
                <div><ItemCount stock='10' initial='1'/></div>
                <div><ItemCount stock='10' initial='1'/></div>
            </div>
        </div>
    );
};