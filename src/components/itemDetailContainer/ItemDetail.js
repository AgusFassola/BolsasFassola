import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
//7- importamos el hook useContext y el User Context
import CartContext from '../context/CartContext';

function ItemDetail({item}) {

  //8- importamos el value del context
  const{addToCart,cart} = useContext(CartContext)
  console.log(cart);

  const[cantidad,setCantidad]=React.useState(0);

  function handleOnAdd(cant){
    addToCart(item,cant)

    alert("Se agregó "+cant+" productos al carrito")
    console.log("Se compraron ",cant," bolsas");
    setCantidad(cant);
  }

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
        <br></br>
        <br></br>
        <div className='contador text-center' >
        {
          (cantidad===0)
          ? <ItemCount onAdd={handleOnAdd} stock={5} initial={1} />
          : <Link to="/cart">
            <br></br>
              <button className='btnDetalle'>Ver Carrito</button>
              <br></br><br></br>
            </Link>
        }
        
      </div>
    </div>
  )
}

export default ItemDetail