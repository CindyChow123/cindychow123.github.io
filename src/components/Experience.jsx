import { industry } from '../content.js';

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
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Industry;
