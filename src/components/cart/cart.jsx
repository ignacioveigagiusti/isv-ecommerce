import React from 'react';
import { useCartContext } from '../../context/cartContext';

export default function Cart() {

  const { cartList, addToCart } = useCartContext();

  function buy(){
    console.log(cartList)
  }

  return <div>
        <h2>Su carro de compras:</h2>
        <button type="button" className="btn btn-primary" onClick={buy}>
            Efectuar Compra
        </button>
        <button type="button" className="btn btn-secondary">
            Vaciar carro
        </button> 
  </div>;
}
