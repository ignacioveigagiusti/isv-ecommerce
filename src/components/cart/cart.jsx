import React from 'react';

export default function Cart() {
  return <div>
        <h2>Su carro de compras:</h2>
        <button type="button" className="btn btn-primary">
            Efectuar Compra
        </button>
        <button type="button" className="btn btn-secondary">
            Vaciar carro
        </button> 
  </div>;
}
