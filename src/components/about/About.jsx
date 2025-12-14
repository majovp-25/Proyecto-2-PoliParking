import './About.css';
import desarrolladores from '../../assets/desarrolladores.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__overlay"></div> 
            <div className="about__container">
                <div className="about__content">
                    <h2 className="section__title">Sobre <span>Nosotros</span></h2>
                    
                    <p className="about__paragraph">
                        Somos un equipo de desarrolladores de software de la EPN, unidos por la pasión de crear aplicaciones web intuitivas y eficientes.
                    </p>
                    <p className="about__paragraph">
                        Nos especializamos en metodologías ágiles y tecnologías modernas, buscando siempre resolver problemas reales de nuestra comunidad universitaria a través del código.
                    </p>
                    
                    <a href="#contact" className="btn btn__primary">Contáctanos</a>
                </div>

                <figure className="about__figure">
                    <img src={desarrolladores} className="about__picture" alt="Equipo de Desarrollo"/>
                </figure>
            </div>
        </section>
    )
}

export default About