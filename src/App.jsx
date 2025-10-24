import Industry from './components/Experience.jsx';
import Publications from './components/Publications.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

function App() {
    return (
        <>
            <Header />
            <main id="top">
                <Hero />
                <Publications />
                <Industry />
                <Projects />
            </main>
            <Footer />
        </>
    );
}

export default App;
