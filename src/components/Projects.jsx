import { projects } from '../content.js';

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container projects">
                <div className="section__header">
                    <h2>Selected Work</h2>
                </div>
                <ul className="projects__list">
                    {projects.map((project) => (
                        <li key={project.title}>
                            <a href={project.href} className="projects__item">
                                <span className="projects__tag">{project.tag}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.preview && (
                                    <div className="projects__item-media">
                                        <img src={project.preview} alt={project.title} />
                                    </div>
                                )}
                                <span className="projects__cta">{project.linkText}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
