import React from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import styles from './cartWidget.module.css'

export default function CartWidget({quantitySum}) {
    
    return (  
        <button className={(quantitySum > 0 ? `btn btn-outline-secondary ${styles.cartWidget}` : `${styles.idleCartWidget}`)} href='#'>
            <img src={cartIcon} className="cartIcon"/>
            <p className={(quantitySum > 0 ? `${styles.cartQuantity}` : '')}>{quantitySum}</p>
        </button>
    );
};