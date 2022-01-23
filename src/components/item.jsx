import React from 'react';
import ItemCount from './itemCount';

export default function Item(item) {
  return <div className='itemCard'>
          <div className='itemTitle'>
            {`${item.name} - ${item.category}`}
          </div>
          <div className='itemPicture'>
            <img src={item.picture} />
          </div>
          <div className='itemDetail'>
            {`$ ${item.price}`}
            <button type="button" className="btn btn-primary">
              Detalle
            </button>
          </div>
          <div className='itemCounter'>
            <ItemCount stock='10' initial='1'/>
          </div>
        </div>;
}
