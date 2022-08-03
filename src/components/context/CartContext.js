import React, {useState, createContext} from 'react';

const CartContext = createContext();

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
            setCart([...cart,{...item,
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

  return <CartContext.Provider value={ { cart, otrovalor:"hola",addToCart,qntyInCart,clearCart,removeItemFromCart } }>
    {props.children}
  </CartContext.Provider>
}

export default CartContext