import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import OrderList from './orderList';
import styles from './order.module.css';

export default function OrderListContainer() {
    const [orders, setOrders] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [authentication, setAuthentication] = useState(false);

    const authenticateUser = () => { ( (username==='admin' && password==='admin') ? setAuthentication(true) : alert('El usuario y/o contraseña ingresados no son válidos.') ) }

    const preventDefault = (i) => { i.preventDefault()}    

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        getDocs(queryCollection)
        .then(res => setOrders(res.docs.map(i => ( { id: i.id, ...i.data() } ))))
        .catch(err => alert("Ha habido un error al buscar las órdenes!"))
        .finally(()=> setLoading(false))
    },[]);
    return (
        <>{authentication ?
            <div className='container'>
                <h1>Órdenes:</h1>
                <div><OrderList loadingState={loading} orders={orders} /></div>
            </div>
        :
            <>
                <h2>Ingrese su usuario y contraseña:</h2>
                <form className={styles.loginForm} onSubmit={preventDefault}>
                    <div className="form-group">
                        <label htmlFor="userName">Usuario</label>
                            <input type="text" autoComplete="username" className="form-control" id="userName" placeholder="Usuario" value={username} onInput={i => setUsername(i.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                            <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Password" value={password} onInput={i => setPassword(i.target.value)} required/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={authenticateUser}>Ingresar</button>
                </form>
            </>
        }
        </>
    )
}
