import React, { useState } from 'react'

function CartForm({cart,createBuyOrder,clearCart}) {

    const[buyer,setBuyer]=useState({
        name:"",
        phone:"",
        email:"",
    },
    )

    const handleChange=(evt)=>{
        
        const field= evt.target.name;
        const value= evt.target.value;

        setBuyer({
            ...buyer,
            [field]: value,
        })
    }

    function handleBuyOrder(evt) {
        evt.preventDefault();
        const dataOrder={
          buyer,
          items:cart,
          total: 0//totalPriceCart()
        };

        createBuyOrder(dataOrder).then((orderDataCreated)=>{
          clearCart();
          console.log(orderDataCreated.id);
        })
        
    }
  return (
    <form>
        <label htmlFor='userName'>Usuario</label>
        <input onChange={handleChange} name="userName"></input>
        <label htmlFor='phone'>Telefono</label>
        <input onChange={handleChange} name="phone"></input>
        <label htmlFor='email'>Email</label>
        <input onChange={handleChange} name="email"></input>
        <button>Finalizar compra</button>
    </form>
    
  )
  
}
export default CartForm