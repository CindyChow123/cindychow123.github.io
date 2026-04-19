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
                        <li key={project.title} className="projects__item">
                            <span className="projects__tag">{project.tag}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.preview && (
                                <div className="projects__item-media">
                                    {project.preview.endsWith('.mp4') ? (
                                        <video
                                            src={project.preview}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <img src={project.preview} alt={project.title} />
                                    )}
                                </div>
                            )}
                            <div className="projects__cta-group">
                                {project.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="projects__cta"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
