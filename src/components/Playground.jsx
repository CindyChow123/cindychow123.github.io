import { useEffect, useMemo, useState } from 'react';
import { cards, playgroundMeta } from '../playground-data.js';

const LANGUAGES = ['All', 'Python', 'C#'];

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildCategoryIndex() {
    const index = { Python: [], 'C#': [] };
    const seen = { Python: new Set(), 'C#': new Set() };
    for (const card of cards) {
        if (!seen[card.language].has(card.category)) {
            seen[card.language].add(card.category);
            index[card.language].push(card.category);
        }
    }
    return index;
}

function FlashcardsView() {
    const [language, setLanguage] = useState('All');
    const [order, setOrder] = useState(() => cards.map((_, i) => i));
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const filtered = useMemo(() => {
        return language === 'All'
            ? order
            : order.filter((i) => cards[i].language === language);
    }, [language, order]);

    useEffect(() => {
        setIndex(0);
        setFlipped(false);
    }, [language]);

    const total = filtered.length;
    const safeIndex = total === 0 ? 0 : Math.min(index, total - 1);
    const card = total === 0 ? null : cards[filtered[safeIndex]];

    const next = () => {
        if (total === 0) return;
        setFlipped(false);
        setIndex((i) => (i + 1) % total);
    };
    const prev = () => {
        if (total === 0) return;
        setFlipped(false);
        setIndex((i) => (i - 1 + total) % total);
    };
    const handleShuffle = () => {
        setOrder(shuffle(cards.map((_, i) => i)));
        setIndex(0);
        setFlipped(false);
    };

    useEffect(() => {
        const onKey = (e) => {
            if (e.target.tagName === 'BUTTON') return;
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                setFlipped((f) => !f);
            } else if (e.key === 'ArrowRight') {
                next();
            } else if (e.key === 'ArrowLeft') {
                prev();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [total]);

    return (
        <>
            <div className="playground__controls">
                <div className="playground__tabs" role="tablist">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang}
                            role="tab"
                            aria-selected={language === lang}
                            className={`playground__tab ${language === lang ? 'is-active' : ''}`}
                            onClick={() => setLanguage(lang)}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
                <button className="playground__shuffle" onClick={handleShuffle}>
                    ⇄ Shuffle
                </button>
            </div>

            {card ? (
                <>
                    <div className="playground__counter">
                        {safeIndex + 1} / {total} <span>· {card.category}</span>
                    </div>
                    <div
                        className={`flashcard ${flipped ? 'is-flipped' : ''}`}
                        onClick={() => setFlipped((f) => !f)}
                        role="button"
                        tabIndex={0}
                        aria-label="Flip card"
                    >
                        <div className="flashcard__inner">
                            <div className="flashcard__face flashcard__face--front">
                                <span className="flashcard__lang">{card.language}</span>
                                <p className="flashcard__question">{card.front}</p>
                                <span className="flashcard__hint">click / space to flip</span>
                            </div>
                            <div className="flashcard__face flashcard__face--back">
                                <span className="flashcard__lang">{card.language}</span>
                                <p className="flashcard__answer">{card.back}</p>
                                {card.code && (
                                    <pre className="flashcard__code"><code>{card.code}</code></pre>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="playground__nav">
                        <button onClick={prev} aria-label="Previous card">← Prev</button>
                        <button onClick={() => setFlipped((f) => !f)}>Flip</button>
                        <button onClick={next} aria-label="Next card">Next →</button>
                    </div>

                    <p className="playground__keys">
                        Keys: ← / → to navigate, space / enter to flip.
                    </p>
                </>
            ) : (
                <p>No cards for this filter.</p>
            )}
        </>
    );
}

function LearnView() {
    const categoryIndex = useMemo(buildCategoryIndex, []);

    const initial = useMemo(() => {
        const lang = categoryIndex.Python.length ? 'Python' : 'C#';
        return { language: lang, category: categoryIndex[lang][0] };
    }, [categoryIndex]);

    const [selected, setSelected] = useState(initial);

    const concepts = useMemo(
        () => cards.filter(
            (c) => c.language === selected.language && c.category === selected.category,
        ),
        [selected],
    );

    return (
        <div className="learn">
            <aside className="learn__nav">
                {['Python', 'C#'].map((lang) => (
                    <div key={lang} className="learn__group">
                        <h3>{lang}</h3>
                        <ul>
                            {categoryIndex[lang].map((cat) => {
                                const count = cards.filter(
                                    (c) => c.language === lang && c.category === cat,
                                ).length;
                                const active = selected.language === lang && selected.category === cat;
                                return (
                                    <li key={`${lang}-${cat}`}>
                                        <button
                                            className={`learn__nav-item ${active ? 'is-active' : ''}`}
                                            onClick={() => setSelected({ language: lang, category: cat })}
                                        >
                                            <span>{cat}</span>
                                            <span className="learn__count">{count}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </aside>

            <div className="learn__content">
                <div className="learn__breadcrumb">
                    {selected.language} · {selected.category}
                </div>
                <h2 className="learn__category">{selected.category}</h2>

                {concepts.map((card) => (
                    <article key={card.id} className="learn__concept">
                        <h3 className="learn__concept-title">{card.front}</h3>
                        {(card.learn || [{ heading: 'TL;DR', body: card.back }]).map((section, idx) => (
                            <div key={idx} className="learn__section">
                                <span className="learn__section-label">{section.heading}</span>
                                <p className="learn__section-body">{section.body}</p>
                            </div>
                        ))}
                    </article>
                ))}
            </div>
        </div>
    );
}

function Playground() {
    const [mode, setMode] = useState('learn');

    return (
        <main className="playground">
            <div className="container playground__container">
                <header className="playground__header">
                    <a className="playground__back" href="#" onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '';
                    }}>
                        ← Back to portfolio
                    </a>
                    <h1>{playgroundMeta.title}</h1>
                    <p className="playground__subtitle">{playgroundMeta.subtitle}</p>

                    <div className="playground__mode" role="tablist">
                        <button
                            role="tab"
                            aria-selected={mode === 'learn'}
                            className={`playground__mode-btn ${mode === 'learn' ? 'is-active' : ''}`}
                            onClick={() => setMode('learn')}
                        >
                            Learn
                        </button>
                        <button
                            role="tab"
                            aria-selected={mode === 'flashcards'}
                            className={`playground__mode-btn ${mode === 'flashcards' ? 'is-active' : ''}`}
                            onClick={() => setMode('flashcards')}
                        >
                            Flashcards
                        </button>
                    </div>
                </header>

                {mode === 'learn' ? <LearnView /> : <FlashcardsView />}
            </div>
        </main>
    );
}

export default Playground;
