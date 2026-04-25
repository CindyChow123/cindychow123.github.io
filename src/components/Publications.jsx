import { publications } from '../content.js';

function Publications() {
    return (
        <section id="publications" className="section section--tinted">
            <div className="container">
                <div className="section__header">
                    <h2>Publications</h2>
                </div>
                <ul className="publications">
                    {publications.map((item, index) => (
                        <li key={item.title} className={`publications__entry ${index === 0 ? 'publications__entry--featured' : ''}`}>
                            <div className="publications__main">
                                <header className="publications__header">
                                    <h3>{item.title}</h3>
                                    <span className="publications__venue-row">
                                        {item.venueLink ? (
                                            <a href={item.venueLink} target="_blank" rel="noopener noreferrer">{item.venue}</a>
                                        ) : (
                                            item.venue
                                        )}
                                        {index === 0 && (
                                            <span className="publications__latest" aria-label="Latest publication">🎉 Latest</span>
                                        )}
                                        {item.badge && (
                                            <a href={item.badge.href} target="_blank" rel="noopener noreferrer" className="publications__badge">
                                                {item.badge.label}
                                            </a>
                                        )}
                                    </span>
                                </header>
                                {item.authors && item.authors.length > 0 && (
                                    <p className="publications__authors">
                                        {item.authors.map((author, index) => {
                                            const isSelf = author === 'Xinyi Zhou';
                                            return (
                                                <span key={author} className="publications__author-wrapper">
                                                    <span className={isSelf ? 'publications__author publications__author--self' : 'publications__author'}>{author}</span>
                                                    {index < item.authors.length - 1 && (
                                                        <span className="publications__author-separator">, </span>
                                                    )}
                                                </span>
                                            );
                                        })}
                                    </p>
                                )}
                                <div className="publications__meta">
                                    <span>{item.role}</span>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        Full paper
                                    </a>
                                    {item.details?.resources?.map((resource) => (
                                        <a
                                            key={resource.href}
                                            href={resource.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {resource.label}
                                        </a>
                                    ))}
                                </div>
                                {item.details?.bullets?.length > 0 && (
                                    <details className="publications__details">
                                        <summary>Highlights</summary>
                                        <ul className="publications__details-bullets">
                                            {item.details.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </details>
                                )}
                            </div>
                            {item.details?.video ? (
                                <div className="publications__media">
                                    <video
                                        src={item.details.video}
                                        controls
                                        preload="metadata"
                                    />
                                </div>
                            ) : item.details?.image ? (
                                <a
                                    href={item.details.image.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="publications__media publications__media--link"
                                >
                                    <img
                                        src={item.details.image.src}
                                        alt={item.details.image.alt}
                                    />
                                </a>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Publications;
