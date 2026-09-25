import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to determine active section
  useEffect(() => {
    if (showIntro) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  // Easter egg: Konami code detector
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Easter egg triggered
          document.documentElement.style.filter = 'invert(1)';
          setTimeout(() => {
            document.documentElement.style.filter = 'invert(0)';
          }, 100);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-text-primary overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro && <Intro key="intro" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Navbar activeSection={activeSection} />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Terminal />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
