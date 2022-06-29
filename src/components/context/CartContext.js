import React, {useState, createContext} from 'react';

//1-importamos e inicializamos nuestro createContext
const CartContext = createContext();

//2- Definimos nuestro Provider
export function CartContextProvider(props) {

    const[cart, setCart]=useState([{item:"Item A",cant:2},{item:"Item B",cant:4}]);
  
    function addToCart(item,cant){
        if(isInCart(item.id)){
            console.log("ya esta en el carrito");
        }else{
            setCart([...cart,{...item,//toma todas las propiedades y ademas agrega cant
            cantidad:cant}]);
        }
        
        console.log("cantidad: ",cant)

    }
    const isInCart=(id)=>{
        return cart.some((prod)=> prod.id===id);
    };

    const clearCart=()=>{
        setCart([]);
    }


  //3- Pasamos al provider el value para los compjnentes que consuman el context
  //4- retornamos el context provideer con el value
  return <CartContext.Provider value={ { cart, otrovalor:"hola",addToCart,clearCart } }>
    {props.children}
  </CartContext.Provider>
}
//5- exportamos el provider y el context
export default CartContext