import React from 'react';
import ItemList from './itemList';
import './itemListContainer.module.css'
import styles from './itemListContainer.module.css'

export default function ItemListContainer() {
    return (  
        <div className='container'>
            <h1>Bienvenido a ISV Shop!</h1>
            <h2>Productos y Servicios</h2>
            <div className={styles.itemDetailContainer}>
                <div><ItemList/></div>
            </div>
        </div>
    );
};