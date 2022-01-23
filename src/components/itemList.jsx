import React, { useEffect, useState } from 'react';
import Item from './item';
import { getItems } from './itemCatalogue';
import styles from './itemList.module.css'

export default function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems
        .then(res => setItems(res))
        .catch(err => alert("Ha habido un error al buscar los productos!"))
        .finally(()=> setLoading(false))
    }, []);

    return  <div className={styles.itemList}>
                { loading ? <h2>Cargando ...</h2> :
                items.map( i  => <Item {...i} key={i.id}/> )}
            </div>;
}
