import "./navBar.css";
import LogoImg from '../assets/simples_acciones.png';

export default function NavBar(){
    return(
        <nav className="nav-main">
            <img className="nav-img" alt='logo coder' src={LogoImg}></img>
            <ul className="barra ">
                <li>Inicio</li>
                <li>Productos
                    <ul>
                        <li>Bolsas compostables</li>
                        <li>Descartables compostables</li>
                    </ul> 
                </li>
                <li>Contacto</li>
            </ul>
        </nav>
    );
}