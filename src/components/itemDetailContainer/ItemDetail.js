import React from 'react'

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
    </div>
  )
}

export default ItemDetail