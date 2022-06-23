import './itemDetailCont.css';
import React,{useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {productos} from '../itemListContainer/Products';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer({greeting}) {

  const[product,SetProduct]=useState({});
  const { itemId }=useParams();//recibo un objeto, de ese objeto guardo el id
  console.log("parametros: ",itemId);
  useEffect(()=>{
    const traerProducto= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        //let itemNumber= parseInt(itemId);
        const itemFound= productos.find(detalle =>{
          return detalle.id===itemId;
        })
        if(itemFound===undefined)
          reject("Item no encontrado")
        else{
          resolve(itemFound);
        }
        //resolve(productos[itemNumber-1]);
      },600);
    });
    traerProducto.then((res)=>{
      SetProduct(res);
    })    
  },[])

  return (
    
    <div className='itemListCont'>
      <br></br>
      <h3>Suma bolsas a tu compra</h3>
      <ItemDetail item={product} />
    </div>
    
  )
}