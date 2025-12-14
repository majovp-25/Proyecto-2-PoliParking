import './Skills.css';

const Skills = () => {
    return (
        <section id="expertice" className="skills">
            <h2 className="section__title center">Habilidades <span>Técnicas</span></h2>
            <p className="section__subtitle">El stack tecnológico detrás de nuestras soluciones</p>
            
            <div className="skills__container">
                <div className="skill__category">
                    <div className="category__header">
                        <i className="fas fa-code icon-box"></i>
                        <h3>Frontend</h3>
                    </div>
                    <div className="tech__list">
                        <span className="tech__tag">HTML5</span>
                        <span className="tech__tag">CSS3 / Flexbox</span>
                        <span className="tech__tag">React.js</span>
                        <span className="tech__tag">Bootstrap</span>
                    </div>
                </div>
                <div className="skill__category">
                    <div className="category__header">
                        <i className="fas fa-server icon-box"></i>
                        <h3>Backend</h3>
                    </div>
                    <div className="tech__list">
                        <span className="tech__tag">Node.js</span>
                        <span className="tech__tag">Java (Spring)</span>
                        <span className="tech__tag">MySQL</span>
                        <span className="tech__tag">API REST</span>
                    </div>
                </div>
                <div className="skill__category">
                    <div className="category__header">
                        <i className="fas fa-layer-group icon-box"></i>
                        <h3>Herramientas</h3>
                    </div>
                    <div className="tech__list">
                        <span className="tech__tag">Git / GitHub</span>
                        <span className="tech__tag">VS Code</span>
                        <span className="tech__tag">Figma</span>
                        <span className="tech__tag">Postman</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;