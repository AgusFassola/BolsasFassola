import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

  const urlDetalle= `/detalle/${item.id}`
  console.log(item);
  return (

      <div className="mb-0.5 pb-3 itemlist-card text-center">
        <h2 className='text-3x1 mt-2 mb-4 title-font'>{item.name}</h2>
        <img className='itemlist-card-img' src={item.img} width="200"/>
        <h4>{item.description}</h4>
        <h3>${item.price}</h3>
        <Link to={urlDetalle}>
          <button className='btnDetalle'>Ver Detalle</button>
        </Link>
      </div>

  );
};
export default Item;
