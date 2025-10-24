import { site } from '../content.js';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container">
                <p>
                    &copy; {year} Xinyi Zhou. {site.footerNote}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
