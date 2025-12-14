import { Main } from '../main/Main';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar__container">
                <p className="navbar__logo">Poli<span>Parking</span></p>
                
                <ul className="navbar__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#expertice">Habilidades</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    
                    <li><Link to="/login" className="nav-btn">Ingresar</Link></li>
                    <li><Link to="/register" className="nav-btn highlight">Registrarse</Link></li>
                </ul>
            </nav>
            <Main />
        </header>
    )
}

export default Header