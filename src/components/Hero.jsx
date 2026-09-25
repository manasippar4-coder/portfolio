import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const textIndex = useRef(0);
  const phrases = [
    'Java Developer',
    'Python Developer',
    'Web Developer',
    'Computer Science Student',
    'Future Software Engineer',
  ];
  const phraseIndex = useRef(0);

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[phraseIndex.current];
      if (textIndex.current < currentPhrase.length) {
        setDisplayText((prev) => prev + currentPhrase[textIndex.current]);
        textIndex.current++;
        setTimeout(type, 50);
      } else {
        setTimeout(() => {
          setDisplayText('');
          textIndex.current = 0;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          type();
        }, 2000);
      }
    };

    type();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-neon rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl font-black font-editorial text-text-primary mb-6 tracking-tighter">
            MANAS<br />
            <span className="text-accent-neon glow-text">IPPAR.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary mb-8 font-light tracking-wide">
            BCS Student • Computer Science • Developer
          </p>

          {/* Typing Animation */}
          <div className="h-12 mb-12 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-display text-accent-cyan">
              {displayText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-text-secondary mb-12 text-lg">
            {portfolioData.personal.tagline}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-accent-neon text-dark-900 font-bold rounded-lg hover:shadow-lg hover:shadow-accent-neon transform hover:scale-105 transition-all neon-glow"
          >
            EXPLORE MY WORK
          </button>
          <button
            className="px-8 py-4 border-2 border-accent-neon text-accent-neon font-bold rounded-lg hover:bg-accent-neon hover:text-dark-900 transition-all"
          >
            DOWNLOAD RESUME
          </button>
        </motion.div>

        {/* Connect Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-accent-neon font-medium hover:text-accent-cyan transition-colors"
        >
          LET'S CONNECT →
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-neon rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent-neon rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
