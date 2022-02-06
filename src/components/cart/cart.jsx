import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import styles from './cart.module.css';
import CartItem from './cartItem';

export default function Cart() {

  const { cartList, clearCart, removeItem } = useCartContext();

  let priceSum = 0;

  function buy(){
    console.log(cartList)
  }

  function clear(){
    clearCart()
  }

  for (let index = 0; index < cartList.length; index++) {
    priceSum = priceSum + (cartList[index].quantity*cartList[index].price);
  }

  return  <div>
            <h2>Su carro de compras:</h2>
            <div className={styles.cartContainer}>
              {cartList.map( i  => 
              <CartItem {...i} key={i.id} />)}    
            </div>
            <h2>Total: {`$ ${priceSum}`}</h2>
            <button type="button" className="btn btn-primary" onClick={buy}>
                Efectuar Compra
            </button>
            <button type="button" className="btn btn-secondary" onClick={clear}>
                Vaciar carro
            </button> 
                
          </div>;
}
