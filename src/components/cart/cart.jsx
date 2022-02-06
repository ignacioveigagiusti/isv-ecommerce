import React from 'react';
import { useCartContext } from '../../context/cartContext';
import styles from './cart.module.css';
import CartItem from './cartItem';

export default function Cart() {

  const { cartList, clearCart, totalPrice, setTotalPrice, priceSum } = useCartContext()

  function buy(){
    console.log(cartList)
  }

  function clear(){
    clearCart()
  }

  return  <div>
            <h2>Su carro de compras:</h2>
            <div className={styles.cartContainer}>
              {cartList.map( i  => 
              <CartItem {...i} totalPrice={totalPrice} setTotalPrice={setTotalPrice} key={i.id} />)}    
            </div>
            <button type="button" className="btn btn-primary" onClick={buy}>
                Efectuar Compra
            </button>
            <button type="button" className="btn btn-secondary" onClick={clear}>
                Vaciar carro
            </button> 
            <h2>Total: $ {totalPrice}</h2>
          </div>;
}
