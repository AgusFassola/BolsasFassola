import {useState} from 'react';

export default function ItemCount({stock,initial}) {
    const [cant,setCant]=useState(initial);

    function stockSuma(){
        if(cant<stock){
            suma();
        }
    }
    function stockResta(){
        if(cant>initial){
            resta();
        }
    }
    function suma(){
        setCant(cant+1);
    }
    function resta(){
        setCant(cant-1);
    }
    function agregarCarrito(){
        alert("Se agregó "+cant+" bolsa/s al carrito");
    }
    return (
    <div>
        <button className='btnDetalle' onClick={stockResta}>-</button>
        <span>{cant}</span>
        <button className='btnDetalle' onClick={stockSuma}>+</button>
        <br></br>
        <br></br>
        <button className='btnDetalle' onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  )
}
