import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import styles from './cart.module.css';

export default function CartItem(item) {

    const { removeItem } = useCartContext();

    function remove(item){
        removeItem(item)
    }

  return <div className={styles.itemCard}>
            <div className={styles.itemTitle}>
                <span>{item.name}</span><span>Cantidad: {item.quantity}</span>
            </div>

            <div className={styles.itemDetail}>
                <div className={styles.itemPicture}>
                    <img src={item.picture} width='100px' height='100px' alt={`${item.name}`}/> 
                </div>
                <h2>{`Precio: $ ${item.price*item.quantity}`}</h2>
                <div>
                    <Link to={`/detalle/${item.id}`}> 
                        <button type="button" className="btn btn-secondary">
                            Detalle
                        </button>
                    </Link>
                    <button className="btn btn-secondary" onClick={() => remove(item)}>Quitar</button>
                </div>
            </div>
        </div>;
}
