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
                <NavLink onClick={ handleClick} title="Inicio" />
                <NavLink onClick={ handleClick} title="Productos" />
                    <ul>
                    <NavLinkChild onClick={ handleClick} >Bolsas compostables</NavLinkChild>
                    <NavLinkChild onClick={ handleClick} >Descartables compostables</NavLinkChild>
                    </ul> 
                <NavLink onClick={ handleClick} title="Contacto" />
            </ul>
            <CartWidget/>
        </nav>
    );
}