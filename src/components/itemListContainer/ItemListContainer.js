import '../itemListContainer/itemListCont.css';
import React,{useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';
import {productos} from './Products';
import {useParams} from 'react-router-dom';

//ASYNC MOCK DE DATOS
function getDataFromDB(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(productos);
    },7000);
  });
}

export default function ItemListContainer({greeting}) {


  const[products,SetProduct]=useState([]);

  const {categoryId}=useParams();

  useEffect(()=>{
    const traerProductos= new Promise((res,rej)=>{
      setTimeout(()=>{
        if(categoryId===undefined)
          res(productos);
          else{
            const itemsFound=productos.filter(detalle=>{
              return detalle.category===categoryId;
            })
            res(itemsFound);
          }
      },500);
    });
    traerProductos.then((res)=>{
      SetProduct(res);
    });
    
  },[categoryId])

  return (
    
    <div className='itemListCont'>
      <h1>{greeting}</h1>
      <ItemList className="itemList" articulos={products} />
      <div className='contador text-center' >
        <h3>Suma bolsas a tu compra</h3>
        <ItemCount stock={5} initial={1} />
      </div>
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