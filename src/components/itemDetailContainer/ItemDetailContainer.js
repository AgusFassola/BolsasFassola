import './itemDetailCont.css';
import React,{useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { traerUnProducto } from '../firebase/firestore';


export default function ItemDetailContainer({greeting}) {

  const[product,SetProduct]=useState({});
  const { itemId }=useParams();
  
  useEffect(()=>{
    
    traerUnProducto(itemId)
    .then((res)=>{
      console.log("traer peoducto", res)
      SetProduct(res);
    })    
  },[])

  return (
    
    <div className='itemListCont'>
      <ItemDetail item={product} />
    </div>
    
  )
}