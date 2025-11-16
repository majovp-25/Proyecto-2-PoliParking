import React from "react";
import "./Header.css";

const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Escuela_Polit%C3%A9cnica_Nacional.png";

const Header = () => {
    return (
    <header className="header">
        <div className="header-left">
        <img src={logoUrl} alt="Logo EPN" className="logo" />

        <div className="header-text">
            <h1 className="header-title">PoliParking</h1>
            <p className="header-subtitle">Sistema de parqueaderos EPN</p>
        </div>
        </div>

        <nav className="navbar__container">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Reservas</a></li>
            <li><a href="#">Registro</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        </nav>
    </header>
    );
};

export default Header;
