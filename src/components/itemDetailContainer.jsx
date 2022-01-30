import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import './itemListContainer.module.css'
import styles from './itemListContainer.module.css'
import { getItems } from './itemCatalogue';

export default function ItemDetailContainer() {
    const { itemId } = useParams()
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems
        .then(res => setItems(res.find( ({id}) => id === itemId)))
        .catch(err => alert("Ha habido un error al buscar los productos!"))
        .finally(()=> setLoading(false))
    }, []);
    return (  
        <div className='container'>
            <div className={styles.itemDetailContainer}>
                { loading ? <h2>Cargando ...</h2> :
                <div><ItemDetail {...items}/></div>
                }
            </div>
        </div>
    );
};