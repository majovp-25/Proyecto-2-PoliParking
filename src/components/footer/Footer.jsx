import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-container">
                
                <div className="footer-col brand-col">
                    <h3 className="footer-logo">Poli<span>Parking</span></h3>
                    <p className="footer-desc">
                        Desarrollando soluciones web con la misma calidad y precisión de un sistema moderno. Tecnología al servicio de la EPN.
                    </p>
                </div>
                <div className="footer-col links-col">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><Link to="/login">Acceso Admin</Link></li>
                        <li><Link to="/register">Registro</Link></li>
                    </ul>
                </div>
                <div className="footer-col social-col">
                    <h4>Conectemos</h4>
                    <div className="social-links">
                        <a href="#" className="social-btn"><i className="fab fa-github"></i> GitHub</a>
                        <a href="#" className="social-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="#" className="social-btn"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Poliparking. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;