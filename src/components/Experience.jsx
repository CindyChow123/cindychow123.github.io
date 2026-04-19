import { industry } from '../content.js';

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderDescription(description, skills) {
    if (!skills?.length) return description;
    const pattern = new RegExp(`(${skills.map(escapeRegex).join('|')})`, 'gi');
    const parts = description.split(pattern);
    const lowerSkills = new Set(skills.map((s) => s.toLowerCase()));
    return parts.map((part, i) =>
        lowerSkills.has(part.toLowerCase()) ? (
            <span key={i} className="skill-tag">{part}</span>
        ) : (
            part
        )
    );
}

function Industry() {
    return (
        <section id="industry" className="section section--tinted">
            <div className="container">
                <div className="section__header">
                    <h2>Industry</h2>
                </div>
                <ul className="timeline">
                    {industry.map((item) => (
                        <li key={item.title} className="timeline__item">
                            <div className="timeline__heading">
                                {item.company?.icon ? (
                                    <a
                                        className="timeline__logo-wrapper"
                                        href={item.company.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${item.company.name} website`}
                                    >
                                        <img
                                            className="timeline__logo"
                                            src={`/icons/${item.company.icon}`}
                                            alt=""
                                            role="presentation"
                                        />
                                    </a>
                                ) : null}
                                <div>
                                    <p className="timeline__meta">
                                        {[item.period, item.location].filter(Boolean).join(' · ')}
                                    </p>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                            <p>{renderDescription(item.description, item.skills)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Industry;
