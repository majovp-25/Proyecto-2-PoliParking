import './Main.css';

export const Main = () => {
    return (
        <main className='principal main-animate'>
            <div className="principal__overlay"></div>
            <div className="principal__content">
                <h1 className='principal__title'>
                    Innovación y <br/>
                    <span>Desarrollo Web</span>
                </h1>
                <p className='principal__description'>
                    Somos el equipo detrás de <strong>PoliParking</strong>. Transformamos problemas complejos en soluciones digitales eficientes para la EPN.
                </p>
                <div className="principal__buttons">
                    <a href="#about" className="btn btn__primary">Conoce al Equipo</a>
                    <a href="#projects" className="btn btn__outline">Ver Proyectos</a>
                </div>
            </div>
        </main>
    )
}