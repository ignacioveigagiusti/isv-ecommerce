import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import styles from './cart.module.css';

export default function CartItem(item) {

    const { removeItem, addQuantity, subtractQuantity, priceSum, setTotalPrice, cartList } = useCartContext();
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
        setTotalPrice(priceSum());
        setQuantity(item.quantity);
    },[cartList, quantity, item.quantity, priceSum, setTotalPrice]);

    function subtract(item){
        subtractQuantity(item);
        setQuantity(quantity>1 ? quantity-1 : quantity);
        setTotalPrice(priceSum());
    }

    function add(item){
        addQuantity(item);
        setQuantity(quantity<item.stock ? Number(quantity)+1 : quantity);
        setTotalPrice(priceSum());
    }

    function remove(item){
        removeItem(item)
    }

  return    <> 
                <div className={styles.itemCard}>
                    <div className={styles.itemTitle}>
                        <span>{item.name}</span>
                    </div>
                    
                    <div className={styles.itemDetail}>
                        <div className={styles.itemPicture}>
                            <img src={item.picture} width='100px' height='100px' alt={`${item.name}`}/> 
                        </div>
                        <div>
                            <h2>{`Precio: $ ${item.price*quantity}`}</h2>
                            <span>Cantidad: {item.quantity}</span>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={() => subtract(item)}>
                                        <span className="glyphicon glyphicon-minus"></span>
                                    </button>
                                </span>
                                {/* <input type="number" name="quant[1]" className="form-control input-number quantityDisplay" value={quantity} readOnly/> */}
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={() => add(item)}>
                                        <span className="glyphicon glyphicon-plus"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div>
                            <Link to={`/detalle/${item.id}`}> 
                                <button type="button" className="btn btn-light">
                                    Detalle
                                </button>
                            </Link>
                            <button className="btn btn-primary" onClick={() => remove(item)}>X</button>
                            
                        </div>
                    </div>
                </div>
            </>;
}
