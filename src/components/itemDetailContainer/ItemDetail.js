import React from 'react'
import { Link } from 'react-router-dom';

function ItemDetail({item}) {
  return (
    <div className="mb-0.5 pb-3 itemlist-card text-center">
        <h1>ITEM DETAIL</h1>
            <h2>{item.name}</h2>
            <img src={item.img} width="200"/>
        <h4>{item.description}</h4>
        <h3>${item.price}</h3>
        <Link to="/">
          <button className='btnDetalle'>Volver</button>
        </Link>
    </div>
  )
}

export default ItemDetail