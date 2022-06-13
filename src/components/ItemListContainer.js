import '../components/itemListCont.css';
import React,{useState} from 'react';
import ItemCount from './ItemCount/ItemCount';

export default function ItemListContainer(props) {

  const[texto,SetTexto]=useState(props.greet);

  function cambiarTexto(){
    SetTexto("Salvemos el mundo!");
  }
function resetTexto(){
  SetTexto(props.greet);
}
  return (
    
    <div className='itemListCont'>
      <h2>{texto}</h2>
      <button onClick={cambiarTexto}>cambiar Texto</button>
      <button onClick={resetTexto}>reset Texto</button>
      <h3>Suma bolsas a tu compra</h3>
      <ItemCount stock={5} initial={1} />
    </div>
  )
}
