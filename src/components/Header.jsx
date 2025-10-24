import { useEffect, useState } from 'react';
import { navLinks, site } from '../content.js';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isNavOpen) {
            return;
        }
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsNavOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isNavOpen]);

    const toggleNav = () => setIsNavOpen((prev) => !prev);

    const handleNavClick = () => {
        if (window.innerWidth < 768) {
            setIsNavOpen(false);
        }
    };

    return (
        <header className="site-header">
            <div className="container">
                <a className="brand" href="#top" aria-label="Go to homepage">
                    {site.brand}
                </a>
                <nav className="main-nav" aria-label="Primary navigation">
                    <button
                        className="menu-toggle"
                        type="button"
                        aria-expanded={isNavOpen}
                        aria-controls="nav-list"
                        onClick={toggleNav}
                    >
                        Menu
                    </button>
                    <ul id="nav-list" data-open={isNavOpen ? '' : undefined} onClick={handleNavClick}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
