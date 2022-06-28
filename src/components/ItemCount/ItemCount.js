import {useState} from 'react';

export default function ItemCount({stock,initial, onAdd}) {
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

    return (
    <div>
        <h3>Suma bolsas a tu compra</h3>
        <button className='btnSigno' onClick={stockResta}>-</button>
        <span className='cantidad'>{cant}</span>
        <button className='btnSigno' onClick={stockSuma}>+</button>
        <br></br>
        <br></br>
        <button className='btnDetalle' onClick={()=>onAdd(cant)}>Agregar al carrito</button>
        <br></br><br></br>
    </div>
  )
}
