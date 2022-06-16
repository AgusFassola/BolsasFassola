import React from 'react';
import  Item  from './Item';


const ItemList = ({articulos}) => {
  return (
    <div>
      {
        articulos.map((item)=>(
          <Item key={item.id} item={item}/>
        ))
      }
    </div>
  );
};

export default ItemList