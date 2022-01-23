import React, { useState } from 'react';
import styles from './item.module.css';

function ItemCount( { initial, stock } ) {
    const [count,setCount] = useState(initial);

    const countIncrease = () => {
        setCount(count<stock ? Number(count)+1 : count);
    }

    const countDecrease = () => {
        setCount(count>0 ? count-1 : count);
    }

    const addToCart = () => {
        console.log('Añadido al carrito');
    }

    return (  
        <div className={styles.itemCount}>
            <p>Cantidad</p>
            <div className="input-group">
                <span className="input-group-btn">
                <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={countDecrease}>
                    <span className="glyphicon glyphicon-minus"></span>
                </button>
                </span>
                <input type="text" name="quant[1]" className="form-control input-number" value={`${count}`}/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={countIncrease}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
            <button type="button" className={`btn btn-primary ${styles.addToCartBtn}`} onClick={addToCart}>
                Añadir
            </button>
        </div>
            
    );
}

export default ItemCount;