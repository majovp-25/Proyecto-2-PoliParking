import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__container">
                <div className="about__content">
                    <h2 className="section__title">Sobre <span>Nosotros</span></h2>
                    <p className="about__paragraph">
                        Somos un equipo de desarrolladores de software de la EPN, unidos por la pasión de crear aplicaciones web intuitivas y eficientes.
                    </p>
                    <p className="about__paragraph">
                        Nos especializamos en metodologías ágiles y tecnologías modernas, buscando siempre resolver problemas reales de nuestra comunidad universitaria a través del código.
                    </p>
                    <a href="https://github.com/" target="_blank" className="btn btn__primary">Nuestro Github</a>
                </div>

                <figure className="about__figure">
                    <img src="/src/assets/desarrolladores.jpg" className="about__picture" alt="Equipo de Desarrollo"/>
                </figure>
            </div>
        </section>
    )
}

export default About
