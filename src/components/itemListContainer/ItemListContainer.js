import '../itemListContainer/itemListCont.css';
import React,{useState, useEffect} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {getItems} from '../firebase/firestore';



export default function ItemListContainer({greeting}) {

  const[products,SetProduct]=useState([]);

  const {categoryId}=useParams();


  useEffect(()=>{
    
    getItems()
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
