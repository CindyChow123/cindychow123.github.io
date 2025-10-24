import { publications } from '../content.js';

function Publications() {
    return (
        <section id="publications" className="section section--tinted">
            <div className="container">
                <div className="section__header">
                    <h2>Publications</h2>
                </div>
                <ul className="publications">
                    {publications.map((item) => (
                        <li key={item.title} className="publications__entry">
                            <header className="publications__header">
                                <h3>{item.title}</h3>
                                <span>{item.venue}</span>
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
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Publications;
