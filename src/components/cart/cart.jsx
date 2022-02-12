import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import styles from './cart.module.css';
import CartItem from './cartItem';

export default function Cart() {

  const { cartList, clearCart, totalPrice, setTotalPrice } = useCartContext()

  function buy(){
    console.log(cartList)
  }

  function clear(){
    clearCart()
  }

  return  <div>
            {cartList.length === 0 ? 
              <>
                <h2>Su carro de compras se encuentra vacío.</h2>
                <Link to='/'>
                  <button type="button" className="btn btn-primary" onClick={buy}>
                    Seguir comprando
                  </button>
                </Link>
              </>
            :
              <>
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
                    <p className={styles.disclaimer}>Nota: Si adquiere servicios, nos pondremos en contacto con usted a la brevedad para efectuar la consulta necesaria. La tarifa paga sólo cubre el precio de la consulta, el resto del presupuesto se definirá a partir de la misma, dependiendo de los materiales, requerimientos y complejidad de la tarea.</p>
              </>
            }
          </div>;
}
