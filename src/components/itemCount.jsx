import React, { useState } from 'react';
import styles from './item.module.css';

function ItemCount( { initial, stock, onAdd } ) {
    const [count,setCount] = useState(initial);
    const [loadingAdd, setLoadingAdd] = useState(false);

    const countIncrease = () => {
        setCount(count<stock ? Number(count)+1 : count);
    }

    const countDecrease = () => {
        setCount(count>1 ? count-1 : count);
    }

    // const countInput = () => {
    //     if(count>1 && count<stock) {
    //         setCount(count);
    //     }else{
    //         setCount(1);
    //     }
    // }

    const addCountToCart = () => {
        onAdd(Number(count));
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
                <input type="number" name="quant[1]" className="form-control input-number" value={`${count}`} readOnly/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={countIncrease}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
            <button type="button" className={`btn btn-primary ${styles.addToCartBtn}`} onClick={addCountToCart}>
                {!loadingAdd ? 'Añadir' : 'Añadiendo'}
            </button>
        </div>
            
    );
}

export default ItemCount;