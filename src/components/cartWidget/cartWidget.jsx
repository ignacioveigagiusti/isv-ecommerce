import React from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import styles from './cartWidget.module.css'

export default function CartWidget({quantitySum}) {
    
    return (  
        <button className={`btn btn-outline-secondary ${styles.cartWidget}`} href='#'>
            <img src={cartIcon} className="cartIcon" alt='Cart'/>
            <p className={(quantitySum > 0 ? `${styles.cartQuantity}` : '')}>{quantitySum}</p>
        </button>
    );
};