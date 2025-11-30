import './Skills.css';

const Skills = () => {
    return (
        <section id="expert" className="skills">
            <h2 className="section__title center">Nuestra <span>Experticia</span></h2>
            
            <div className="skills__container">
                {/* Categoría 1: Frontend */}
                <div className="skill__category">
                    <h3><i className="fas fa-desktop"></i> Frontend</h3>
                    <div className="tech__list">
                        <span className="tech__tag">HTML5</span>
                        <span className="tech__tag">CSS3</span>
                        <span className="tech__tag">React</span>
                        <span className="tech__tag">Bootstrap</span>
                    </div>
                </div>

                {/* Categoría 2: Backend */}
                <div className="skill__category">
                    <h3><i className="fas fa-server"></i> Backend</h3>
                    <div className="tech__list">
                        <span className="tech__tag">Node.js</span>
                        <span className="tech__tag">Java</span>
                        <span className="tech__tag">MySQL</span>
                    </div>
                </div>

                {/* Categoría 3: Herramientas */}
                <div className="skill__category">
                    <h3><i className="fas fa-tools"></i> Herramientas</h3>
                    <div className="tech__list">
                        <span className="tech__tag">Git / Github</span>
                        <span className="tech__tag">VS Code</span>
                        <span className="tech__tag">Figma</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;