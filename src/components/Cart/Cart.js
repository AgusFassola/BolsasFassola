import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';



export default function Cart() {

  const {cart,removeItemFromCart,clearCart}=useContext(CartContext);

  if(cart.length===0){
    return <h1>nada en el carrito</h1>
  }
  return (
      <div>
        {
            cart.map(item =>(
              <div className='mb-5 py-3 text-center'>
                <h3>
                  {item.name}
                </h3>
                <p>{item.desripcion}</p>
                <p>${item.price}</p>
                <p>cantidad: {item.cantidad}</p>
                <button onClick={removeItemFromCart}>Eliminar del carrito</button>
                <p>Subtotal:{" "} <span>${item.price * item.cantidad}</span></p>

              </div>
            ))
        }

        <button onClick={clearCart}>limpiar carrito</button>
        
      </div>
      
  )
}
