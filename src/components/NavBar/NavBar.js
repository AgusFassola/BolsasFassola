import "./navBar.css";
import styles from "./navBar.css";
import LogoImg from "../../assets/simples_acciones.png";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';

export default function NavBar(){

    return(
        <nav className="nav-main">
            <NavLink to="/"><img className="nav-img" alt='logo coder' src={LogoImg}></img>
</NavLink>
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
