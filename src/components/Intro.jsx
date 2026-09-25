import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Intro = ({ onComplete }) => {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => onComplete(), 800);
      },
    });

    // Particles animation
    timeline.to('.intro-particle', {
      opacity: 1,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
    }, 0);

    // Grid fade
    timeline.to('.intro-grid', {
      opacity: 0.3,
      duration: 1,
    }, 0);

    // Text reveal
    timeline.to('.intro-text', {
      opacity: 1,
      y: 0,
      duration: 1,
    }, 0.3);

    // Subtitle
    timeline.to('.intro-subtitle', {
      opacity: 1,
      duration: 0.8,
    }, 0.8);

    // Closing animation
    timeline.to('.intro-container', {
      opacity: 0,
      duration: 0.8,
    }, 2.5);
  }, [skip, onComplete]);

  return (
    <motion.div
      className="intro-container fixed inset-0 bg-dark-900 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Grid Background */}
      <div className="intro-grid absolute inset-0 opacity-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="intro-particle absolute w-1 h-1 bg-accent-neon rounded-full opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="intro-text opacity-0 translate-y-8">
          <h1 className="text-6xl md:text-8xl font-bold font-display text-accent-neon mb-4">
            MI.
          </h1>
          <p className="intro-subtitle opacity-0 text-xl md:text-2xl font-light text-text-secondary">
            ENTERING MY WORLD...
          </p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => setSkip(true)}
        className="absolute bottom-8 right-8 px-6 py-2 text-sm font-medium text-accent-neon border border-accent-neon rounded hover:bg-accent-neon hover:text-dark-900 transition-all"
        aria-label="Skip intro"
      >
        SKIP
      </button>
    </motion.div>
  );
};

export default Intro;
