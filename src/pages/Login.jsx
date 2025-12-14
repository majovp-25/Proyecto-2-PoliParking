import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="content-wrapper" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                
                <div className="auth-card">
                    <h2 className="auth-title">Iniciar Sesión</h2>
                    
                    <form className="auth-form">
                        <div className="form-group">
                            <label>Correo Electrónico</label>
                            <input type="email" placeholder="ejemplo@epn.edu.ec" className="form-input" />
                        </div>
                        
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" placeholder="********" className="form-input" />
                        </div>

                        <button type="submit" className="auth-btn">Ingresar</button>
                    </form>

                    <p className="auth-links">
                        ¿No tienes cuenta? 
                        <Link to="/register">Regístrate aquí</Link>
                    </p>
                </div>

                <Link to="/" className="back-link">← Volver al Inicio</Link>
            </div>
        </div>
    )
}

export default Login;