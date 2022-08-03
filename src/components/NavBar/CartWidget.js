import React,{useContext} from 'react';
import '../NavBar/cartWidget.css';
import carting from "../../assets/cartwidget.png";
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

const {qntyInCart}=useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <img width="40" src={carting} />
      </Link>
      <span className='ml-2'>{qntyInCart()}</span>  
    </div>
  )
}



