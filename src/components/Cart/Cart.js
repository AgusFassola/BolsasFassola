import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
  const {cart}=useContext(CartContext);
  console.log(cart);
  if(cart.length===0){
    return <h1>nada en el carrito</h1>
  }
  return (
      <div>
        {
            cart.map(item =>(
              <div className='mb-5 py-3 text-center' key={item.id}>
                <h3>
                  {item.name}
                </h3>
                <p>{item.desripcion}</p>
                <p>${item.price}</p>
              </div>
            ))
        }
        
        <button>limpiar carrito</button>
      </div>
  )
}
