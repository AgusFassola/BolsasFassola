import "./navBar.css";
import styles from "./navBar.css";
import LogoImg from "../../assets/simples_acciones.png";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';

export default function NavBar(){

    return(
        <nav className="nav-main">
            <img className="nav-img" alt='logo coder' src={LogoImg}></img>
            <ul className="barra ">
                <li>
                    <NavLink className={styles.NavLink} to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/category/camisetas">Camisetas</NavLink>
                    <NavLink to="/category/arranque">Arranque</NavLink>
                    <NavLink to="/category/descartables">Descartables</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contactos</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    );
}
/**
 * 
import NavLinkChild from "../NavLink/NavLinkChild";
 * import NavLinkiado from "../NavLink/NavLinkiado";

    function handleClick(){
        console.log("click");
    }
 *                 <a href=""> <NavLinkiado onClick={ handleClick} title="Inicio" /></a>
  
<a href=""><NavLinkiado onClick={ handleClick} title="Productos" /></a>
                    <ul>
                    <a href=""><NavLinkChild onClick={ handleClick} >Bolsas compostables</NavLinkChild></a>
                    <a href=""><NavLinkChild onClick={ handleClick} >Descartables compostables</NavLinkChild></a>
                    </ul> 
                <a href=""><NavLink onClick={ handleClick} title="Contacto" /></a>
 */