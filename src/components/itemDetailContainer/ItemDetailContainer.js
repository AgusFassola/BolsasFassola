
import React,{useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {productos} from '../itemListContainer/Products';

export default function ItemDetailContainer({itemId}) {


  const[product,SetProduct]=useState({});

  useEffect(()=>{
    const traerProducto= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos[itemId]);
      },600);
    });
    traerProducto.then((res)=>{
      SetProduct(res);
    })
    .catch((error)=>{
        console.log(error);
    });
    
  },[])

  return (
    
    <div className='itemListCont'>
      <br></br>
      <h3>Suma bolsas a tu compra</h3>
      <ItemDetail item={product} />
      
    </div>
    
  )
}