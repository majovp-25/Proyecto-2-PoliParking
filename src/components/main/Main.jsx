import './Main.css';

export const Main = () => {
    return (
        <main className='principal'>
            <div className="principal__content">
                <h1 className='principal__title'>Equipo de Desarrollo <span>Full Stack</span></h1>
                <p className='principal__description'>
                    Somos estudiantes apasionados por la tecnología, creadores del sistema <strong>PoliParking</strong>.
                </p>
                <a href="#about" className="btn btn__primary" style={{backgroundColor: 'var(--colorSecundario)', color: 'var(--colorPrincipal)'}}>
                    Conoce al equipo
                </a>
            </div>
        </main>
    )
}