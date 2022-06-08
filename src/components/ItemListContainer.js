import React from 'react';
import '../components/itemListCont.css';

export default function ItemListContainer(props) {
  return (
    <div className='itemListCont'><h2>{props.greeting}</h2></div>
  )
}
