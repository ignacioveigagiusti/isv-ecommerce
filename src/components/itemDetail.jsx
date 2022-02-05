import { useCartContext } from "../context/cartContext";
import React from 'react';
import ItemCount from './itemCount';
import styles from './item.module.css';
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function ItemDetail(item) {

  const [hasAdded, setHasAdded] = useState(0);
  const { cartList, addToCart } = useCartContext();

  function onAdd(item, quantity){
    addToCart( {...item, cantidad: quantity} );
    setHasAdded(quantity);
  }

  return <div className={styles.itemDetailCard}>
          <div className={styles.itemDetailTitle}>
            <h2>{item.name}</h2><span className={styles.itemCategory}>{item.category}</span>
          </div>
          <div className={styles.itemPictureDescription}>
            <div>
              <img src={item.picture} width='200px' height='200px'/>
            </div>
            <div className={styles.itemDescription}>
              <h3>Descripción</h3>
              <p>{item.description}</p>
            </div>
          </div>
          <div>
            <h2>Precio: {`$ ${item.price}`}</h2>
          </div>
          <div className={styles.itemCounter}>
            { hasAdded === 0 ?
                <ItemCount stock='10' initial='1' onAdd={onAdd}/>
              :
              <>
                <Link to='/cart'>
                  <button type="button" className="btn btn-primary">
                    Finalizar compra
                  </button>
                </Link>
                <Link to='/'>
                <button type="button" className="btn btn-secondary">
                  Seguir comprando
                </button>
                </Link>
              </>
            }
            
            
          </div>
        </div>;
}
