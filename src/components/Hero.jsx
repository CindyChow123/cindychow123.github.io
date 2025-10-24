import { hero } from '../content.js';

function Hero() {
    const icons = {
        linkedin: {
            src: '/icons/linkedin.svg',
            alt: 'LinkedIn',
        },
        scholar: {
            src: '/icons/scholar.svg',
            alt: 'Google Scholar',
        },
        email: {
            src: '/icons/email.svg',
            alt: 'Email',
        },
    };

    const parseSummary = (text) => {
        if (!text) {
            return [];
        }
        const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
        const segments = [];
        let lastIndex = 0;
        let match;
        const pushText = (slice) => {
            if (!slice) {
                return;
            }
            const parts = slice.split('\n');
            parts.forEach((part, index) => {
                if (part) {
                    segments.push({ type: 'text', content: part });
                }
                if (index < parts.length - 1) {
                    segments.push({ type: 'break' });
                }
            });
        };
        while ((match = pattern.exec(text)) !== null) {
            if (match.index > lastIndex) {
                pushText(text.slice(lastIndex, match.index));
            }
            segments.push({ type: 'link', content: match[1], href: match[2] });
            lastIndex = pattern.lastIndex;
        }
        if (lastIndex < text.length) {
            pushText(text.slice(lastIndex));
        }
        return segments;
    };

    const summarySegments = parseSummary(hero.summary);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <p className="hero__eyebrow">{hero.eyebrow}</p>
                    <h1>{hero.title}</h1>
                    <p className="hero__summary">
                        {summarySegments.map((segment, index) => {
                            if (segment.type === 'link') {
                                const external = segment.href.startsWith('http');
                                return (
                                    <a
                                        key={`summary-link-${index}`}
                                        href={segment.href}
                                        target={external ? '_blank' : undefined}
                                        rel={external ? 'noopener noreferrer' : undefined}
                                    >
                                        {segment.content}
                                    </a>
                                );
                            }
                            if (segment.type === 'break') {
                                return <br key={`summary-break-${index}`} />;
                            }
                            return (
                                <span key={`summary-text-${index}`}>
                                    {segment.content}
                                </span>
                            );
                        })}
                    </p>
                    <div className="hero__actions hero__actions--icons">
                        {hero.actions.map((action) => (
                            <a
                                key={action.label}
                                className="btn btn--icon"
                                href={action.href}
                                target={action.href.startsWith('http') ? '_blank' : undefined}
                                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                aria-label={action.label}
                            >
                                {action.icon && icons[action.icon] && (
                                    <img
                                        className="btn__icon-img"
                                        src={icons[action.icon].src}
                                        alt=""
                                        role="presentation"
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hero__media">
                    <span className="hero__media-glow" aria-hidden="true" />
                    <img src="/images/avatar.jpg" alt="Portrait of Xinyi Zhou" loading="lazy" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
