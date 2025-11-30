import { Main } from '../main/Main';
import './Header.css';

const Header = () => {
    return (
        <header id="navbar">
            <nav className="navbar__container">
                <p className="navbar__logo">Poli<span>Parking</span></p>
                <ul className="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#expert">Experticia</a></li>
                    <li><a href="#portfolio">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            {}
            <Main />
        </header>
    )
}

export default Header