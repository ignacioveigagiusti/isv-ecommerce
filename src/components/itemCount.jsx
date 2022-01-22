import React from 'react';
import './itemListContainer.module.css'

function ItemCount() {
    return (  
        <div>
            <p>Cantidad</p>
            <div className="input-group">
                <span className="input-group-btn">
                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                    <span className="glyphicon glyphicon-minus"></span>
                </button>
                </span>
                <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1"/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
            <button type="button" className="btn btn-primary">
                Añadir
            </button>
        </div>
            
    );
}

export default ItemCount;