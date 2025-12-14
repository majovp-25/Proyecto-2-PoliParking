import './Projects.css';
import poliImg from '../../assets/poliparking_demo.jpg'; 

const Projects = () => {
    return (
        <section id="portfolio" className="projects">
            <h2 className="section__title center">Nuestros <span>Proyectos</span></h2>
            
            <div className="projects__container">
                <article className="project__card">
                    <div className="project__image">
                        <img src={poliImg} alt="Sistema PoliParking" />
                    </div>
                    <div className="project__info">
                        <h3>Sistema PoliParking EPN</h3>
                        <p>Plataforma web oficial para la gestión y reserva de estacionamientos de la Escuela Politécnica Nacional. Desarrollada con tecnologías web modernas.</p>
                        
                        <a 
                            href="https://poliparking1.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn__primary"
                        >
                            Ver Demostración
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects;