import React from 'react'
import Order from './order'

export default function OrderList(props) {
  return (
    <div>
        { props.loadingState ? <h2>Cargando ...</h2> :
        props.orders.map( i  => <Order {...i} key={i.id}/> )}
    </div>
  )
}
