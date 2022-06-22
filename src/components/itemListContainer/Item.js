import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  
  const urlDetalle= `/detalle/${item.id}`
  console.log(item);
  return (
    <div>
      <div>
        <h2>{item.name}</h2>
        <img src={item.img} width="200"/>
      </div>
      <div>
        <h4>{item.description}</h4>
        <h3>${item.price}</h3>
        <Link to={urlDetalle}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    </div>
  );
};
export default Item;
