import { useEffect, useState } from 'react';
import Industry from './components/Experience.jsx';
import Publications from './components/Publications.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Photography from './components/Photography.jsx';
import Playground from './components/Playground.jsx';

function getRoute() {
    return window.location.hash === '#playground' ? 'playground' : 'home';
}

function App() {
    const [route, setRoute] = useState(getRoute);

    useEffect(() => {
        const onHash = () => setRoute(getRoute());
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, []);

    if (route === 'playground') {
        return <Playground />;
    }

    return (
        <>
            <Header />
            <main id="top">
                <Hero />
                <Publications />
                <Industry />
                <Projects />
                <Photography />
            </main>
            <Footer />
        </>
    );
}

export default App;
