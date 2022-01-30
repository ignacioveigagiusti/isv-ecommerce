import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './item';
import { getItems } from './itemCatalogue';
import styles from './itemList.module.css'

export default function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const { itemCategory } = useParams()
    const { itemSubcategory } = useParams()

    useEffect(() => {
        if (itemCategory) {
            if(itemSubcategory){
                getItems
                .then(res => setItems(res.filter(i => i.subcategory === itemSubcategory)))
                .catch(err => alert("Ha habido un error al buscar los productos!"))
                .finally(()=> setLoading(false)) 
            }else{
                getItems
                .then(res => setItems(res.filter(i => i.cat === itemCategory)))
                .catch(err => alert("Ha habido un error al buscar los productos!"))
                .finally(()=> setLoading(false))
            }
        }
        else{
        getItems
        .then(res => setItems(res))
        .catch(err => alert("Ha habido un error al buscar los productos!"))
        .finally(()=> setLoading(false))
        }
    }, [itemCategory, itemSubcategory]);

    return  <div className={styles.itemList}>
                { loading ? <h2>Cargando ...</h2> :
                items.map( i  => <Item {...i} key={i.id}/> )}
            </div>;
}
