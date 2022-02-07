import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from './itemCatalogue';
import ItemList from './itemList';
import './itemListContainer.module.css'
import styles from './itemListContainer.module.css'

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listTitle, setListTitle] = useState('Productos y Servicios'); 

    const { itemCategory } = useParams();
    const { itemSubcategory } = useParams();

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
        // Cambiar título
        if (itemCategory === 'productos') {
            setListTitle('Productos');
        }
        else if (itemCategory === 'servicios') {
            setListTitle('Servicios');
        }
        else {
            setListTitle('Productos y Servicios');
        }
    }, [itemCategory, itemSubcategory]);

    return (  
        <div className='container'>
            <h1>Bienvenido a ISV Shop!</h1>
            <h2>{listTitle}</h2>
            <div className={styles.itemDetailContainer}>
                <div><ItemList loadingState={loading} items={items}/></div>
            </div>
        </div>
    );
};