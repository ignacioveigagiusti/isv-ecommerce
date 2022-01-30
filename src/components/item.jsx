import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './itemCount';
import styles from './item.module.css';

export default function Item(item) {
  return <div className={styles.itemCard}>
          <div className={styles.itemTitle}>
            <span>{item.name}</span><span>{item.category}</span>
          </div>
          <div className={styles.itemPicture}>
            <img src={item.picture} width='200px' height='200px'/>
          </div>
          <div className={styles.itemDetail}>
            <h2>{`$ ${item.price}`}</h2>
            <Link to={`/detalle/${item.id}`}> 
              <button type="button" className="btn btn-secondary">
                Detalle
              </button>
            </Link>
          </div>
          <div className={styles.itemCounter}>
            <ItemCount stock='10' initial='1'/>
          </div>
        </div>;
}