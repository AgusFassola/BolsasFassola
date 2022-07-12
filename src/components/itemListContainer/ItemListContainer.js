import '../itemListContainer/itemListCont.css';
import React,{useState, useEffect} from 'react';
import ItemList from './ItemList';

import {useParams} from 'react-router-dom';
import {getItems} from '../firebase/firestore';



export default function ItemListContainer({greeting}) {

  //getItems().then(respuesta=>console.log(respuesta));
  const[products,SetProduct]=useState([]);

  const {categoryId}=useParams();


  useEffect(()=>{
    
    getItems()//tiene parentesis porque es una funcion
    .then((res)=>{
      SetProduct(res);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[categoryId])

  return (
    
    <div className='itemListCont'>
      <h1>{greeting}</h1>
      <ItemList className="itemList" articulos={products} />
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