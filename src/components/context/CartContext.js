import React, {useState, createContext} from 'react';

//1-importamos e inicializamos nuestro createContext
const CartContext = createContext();

//2- Definimos nuestro Provider
export function CartContextProvider(props) {

    const[cart, setCart] = useState([]);
  
    function addToCart(item, cant){
        if(isInCart(item.id))
        {
            const idToAdd = item.id;
            let itemToAdd = cart.find((cadaItem)=> cadaItem.id===idToAdd);
            itemToAdd.cantidad+=cant;
            let newCart = cart.filter((cadaItem)=> cadaItem.id!== item.id);
            setCart([...newCart, {...itemToAdd}]);
            console.log("ya esta en el carrito");
        }else{
            setCart([...cart,{...item,//toma todas las propiedades y ademas agrega cant
            cantidad:cant}]);
        }
        
        console.log("cantidad: ",cant)

    }

    function removeItemFromCart(){

    }
    function qntyInCart(){
        let total=0;
        cart.forEach((item)=>(total=total+item.cantidad));
        return total;
    }

    const isInCart=(id)=>{
        return cart.some((prod)=> prod.id===id);
    };

    const clearCart=()=>{
        setCart([]);
    }


  //3- Pasamos al provider el value para los compjnentes que consuman el context
  //4- retornamos el context provideer con el value
  return <CartContext.Provider value={ { cart, otrovalor:"hola",addToCart,qntyInCart,clearCart,removeItemFromCart } }>
    {props.children}
  </CartContext.Provider>
}
//5- exportamos el provider y el context
export default CartContext