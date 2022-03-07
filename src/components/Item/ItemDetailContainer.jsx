import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import styles from './itemListContainer.module.css'

export default function ItemDetailContainer() {
    const { itemId } = useParams()
    const [items, setItems] = useState({});
    const [loadingDetail, setLoadingDetail] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemQuery = doc(db, 'items', itemId);
        getDoc(itemQuery)
        .then(res => setItems( { id: res.id, ...res.data()} ))
        .catch(err => alert("Ha habido un error al buscar los productos!"))
        .finally(()=> setLoadingDetail(false))
    }, [itemId]);

    return (  
        <div className='container'>
            <div className={styles.itemDetailContainer}>
                { loadingDetail ? <h2>Cargando ...</h2> :
                <div><ItemDetail {...items}/></div>
                }
            </div>
        </div>
    );
};