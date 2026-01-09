import { useState, useEffect, useCallback } from 'react';
import { photography } from '../photography-data.js';

function Photography() {
    const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, location: '' });

    const openLightbox = (place, startIndex = 0) => {
        setLightbox({
            open: true,
            images: place.images,
            index: startIndex,
            location: place.location,
        });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightbox({ open: false, images: [], index: 0, location: '' });
        document.body.style.overflow = '';
    };

    const goToNext = useCallback(() => {
        setLightbox((prev) => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length,
        }));
    }, []);

    const goToPrev = useCallback(() => {
        setLightbox((prev) => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
        }));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightbox.open) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox.open, goToNext, goToPrev]);

    return (
        <section id="photography" className="section section--tinted">
            <div className="container">
                <div className="section__header">
                    <h2>Photography</h2>
                    <p>Places I've traveled and moments I've captured.</p>
                </div>

                <div className="photo-timeline">
                    {photography.map((yearGroup) => (
                        <div key={yearGroup.year} className="photo-timeline__year">
                            <div className="photo-timeline__year-marker">
                                <span className="photo-timeline__year-label">{yearGroup.year}</span>
                            </div>
                            <div className="photo-grid">
                                {yearGroup.places.map((place) => (
                                    <div
                                        key={place.location + place.date}
                                        className="photo-card"
                                        onClick={() => openLightbox(place)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(place)}
                                    >
                                        <div className="photo-card__stack">
                                            {place.images.slice(0, 3).map((img, idx) => (
                                                <div
                                                    key={img}
                                                    className={`photo-card__stack-item photo-card__stack-item--${idx}`}
                                                    style={{ zIndex: 3 - idx }}
                                                >
                                                    <img src={img} alt={`${place.location} ${idx + 1}`} />
                                                </div>
                                            ))}
                                            {place.images.length > 1 && (
                                                <span className="photo-card__count">
                                                    {place.images.length} photos
                                                </span>
                                            )}
                                        </div>
                                        <div className="photo-card__info">
                                            <h3 className="photo-card__title">{place.location}</h3>
                                            <p className="photo-card__description">{place.description}</p>
                                            <span className="photo-card__date">{place.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightbox.open && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="lightbox__header">
                            <h3>{lightbox.location}</h3>
                            <span>{lightbox.index + 1} / {lightbox.images.length}</span>
                        </div>

                        <div className="lightbox__main">
                            {lightbox.images.length > 1 && (
                                <button className="lightbox__nav lightbox__nav--prev" onClick={goToPrev} aria-label="Previous">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                            )}

                            <div className="lightbox__image-wrapper">
                                <img
                                    src={lightbox.images[lightbox.index]}
                                    alt={`${lightbox.location} ${lightbox.index + 1}`}
                                    className="lightbox__image"
                                />
                            </div>

                            {lightbox.images.length > 1 && (
                                <button className="lightbox__nav lightbox__nav--next" onClick={goToNext} aria-label="Next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {lightbox.images.length > 1 && (
                            <div className="lightbox__thumbnails">
                                {lightbox.images.map((img, idx) => (
                                    <button
                                        key={img}
                                        className={`lightbox__thumb ${idx === lightbox.index ? 'lightbox__thumb--active' : ''}`}
                                        onClick={() => setLightbox((prev) => ({ ...prev, index: idx }))}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Photography;
