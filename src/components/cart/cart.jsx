import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import styles from './cart.module.css';

export default function Cart() {

  const { cartList, clearCart, removeItem } = useCartContext();

  let priceSum = 0;

  function buy(){
    console.log(cartList)
  }

  function clear(){
    clearCart()
  }

  function remove(item){
    removeItem(item)
  }

  for (let index = 0; index < cartList.length; index++) {
    priceSum = priceSum + (cartList[index].quantity*cartList[index].price);
  }

  return  <div>
            <h2>Su carro de compras:</h2>
            <div className={styles.cartContainer}>
              {cartList.map( i  => 
              <div key={i.id} className={styles.itemCard}>
                <div className={styles.itemTitle}>
                  <span>{i.name}</span><span>Cantidad: {i.quantity}</span>
                </div>

                <div className={styles.itemDetail}>
                  <div className={styles.itemPicture}>
                    <img src={i.picture} width='100px' height='100px' alt={`${i.name}`}/> 
                  </div>
                  <h2>{`Precio: $ ${i.price*i.quantity}`}</h2>
                  <div>
                    <Link to={`/detalle/${i.id}`}> 
                      <button type="button" className="btn btn-secondary">
                        Detalle
                      </button>
                    </Link>
                    <button className="btn btn-secondary" onClick={() => remove(i)}>Quitar</button>
                  </div>
                </div>
              </div>)}    
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
