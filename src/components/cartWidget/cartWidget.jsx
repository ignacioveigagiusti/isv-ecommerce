import React from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import styles from './cartWidget.module.css'

export default function CartWidget() {
    
    return (  
        <button className={`btn btn-outline-secondary ${styles.cartWidget}`} href='#'>
            <img src={cartIcon} className="cartIcon"/>
        </button>
    );
};