import React from 'react'

const Item = ({item}) => {
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
      </div>
    </div>
  );
};
export default Item;
