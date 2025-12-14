import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="content-wrapper" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                
                <div className="auth-card">
                    <h2 className="auth-title">Crear Cuenta</h2>
                    
                    <form className="auth-form">
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" placeholder="Juan Pérez" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label>Correo Institucional</label>
                            <input type="email" placeholder="juan@epn.edu.ec" className="form-input" />
                        </div>
                        
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" placeholder="********" className="form-input" />
                        </div>

                        <button type="submit" className="auth-btn">Registrarse</button>
                    </form>

                    <p className="auth-links">
                        ¿Ya tienes cuenta? 
                        <Link to="/login">Ingresa aquí</Link>
                    </p>
                </div>

                <Link to="/" className="back-link">← Volver al Inicio</Link>
            </div>
        </div>
    )
}

export default Register;