import React from 'react'
import { Link } from 'react-router-dom';

function ItemDetail({item}) {
  return (
    <div>
        <h1>ITEM DETAIL</h1>
        <div>
            <h2>{item.name}</h2>
            <img src={item.img} width="200"/>
        </div>
        <h4>{item.description}</h4>
        <h3>${item.price}</h3>
        <Link to="/">
          <button>Volver</button>
        </Link>
    </div>
  )
}

export default ItemDetail