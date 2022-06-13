import "./navBar.css";
import LogoImg from '../assets/simples_acciones.png';
import NavLink from "./NavLink/NavLink";
import NavLinkChild from "./NavLink/NavLinkChild";
import CartWidget from "./CartWidget";


export default function NavBar(){
    function handleClick(){
        console.log("click");
    }
    return(
        <nav className="nav-main">
            <img className="nav-img" alt='logo coder' src={LogoImg}></img>
            <ul className="barra ">
                
                <a href=""> <NavLink onClick={ handleClick} title="Inicio" /></a>
                <a href=""><NavLink onClick={ handleClick} title="Productos" /></a>
                
                    <ul>
                    <a href=""><NavLinkChild onClick={ handleClick} >Bolsas compostables</NavLinkChild></a>
                    <a href=""><NavLinkChild onClick={ handleClick} >Descartables compostables</NavLinkChild></a>
                    </ul> 
                <a href=""><NavLink onClick={ handleClick} title="Contacto" /></a>
            </ul>
            <CartWidget/>
        </nav>
    );
}