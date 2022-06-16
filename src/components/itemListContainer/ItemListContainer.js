import '../itemListContainer/itemListCont.css';
import React,{useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';
import {productos} from './Products';

export default function ItemListContainer(props) {


  const[products,SetProduct]=useState([]);

  useEffect(()=>{
    const traerProductos= new Promise((res,rej)=>{
      setTimeout(()=>{
        res(productos);
      },2000);
    });
    traerProductos.then((res)=>{
      SetProduct(res);
    });
    
  },[])

  return (
    
    <div className='itemListCont'>
      <ItemList articulos={products} />
      <br></br>
      <h3>Suma bolsas a tu compra</h3>
      <ItemCount stock={5} initial={1} />
      
    </div>
    
  )
}
/**
 * const[texto,SetTexto]=useState(props.greet);

  function cambiarTexto(){
    SetTexto("Salvemos el mundo!");
  }
function resetTexto(){
  SetTexto(props.greet);
}
 * 
      <h2>{texto}</h2>
      <button onClick={cambiarTexto}>cambiar Texto</button>
      <button onClick={resetTexto}>reset Texto</button>
 */