import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
  const contexto=useContext(CartContext);
  console.log(contexto);
  return (
    <div>Cart
      <div>
        <button>limpiar carrito</button>
      </div>
    </div>
  )
}
