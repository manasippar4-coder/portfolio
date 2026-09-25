import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const textIndex = useRef(0);
  const phraseIndex = useRef(0);
  const phrases = [
    'Java Developer',
    'Python Developer',
    'Web Developer',
    'Computer Science Student',
    'Future Software Engineer',
  ];

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[phraseIndex.current];
      if (textIndex.current < currentPhrase.length) {
        setDisplayText((prev) => prev + currentPhrase[textIndex.current]);
        textIndex.current += 1;
        setTimeout(type, 60);
      } else {
        setTimeout(() => {
          setDisplayText('');
          textIndex.current = 0;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          type();
        }, 1700);
      }
    };

    type();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,136,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(0,217,255,0.14),transparent_30%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent-neon/10 blur-3xl" />
      <div className="absolute right-0 bottom-12 h-96 w-96 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(22)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-neon/50"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-neon/30 bg-dark-700/40 text-xs font-bold tracking-[0.35em] text-accent-neon uppercase mb-8">
            Enter My World
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] font-black font-editorial text-text-primary tracking-[-0.08em]">
            MANAS
            <span className="block text-accent-neon glow-text drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]">IPPAR.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-lg md:text-xl text-text-secondary mb-8 font-light tracking-[0.2em] uppercase"
        >
          BCS Student • Computer Science • Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="h-12 mb-8 flex items-center justify-center"
        >
          <p className="text-xl md:text-3xl font-display text-accent-cyan tracking-wide">
            {displayText}
            <span className="inline-block w-[2px] h-7 ml-1 align-middle bg-accent-neon animate-blink" />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-5 justify-center items-center mb-12"
        >
          <button
            data-magnetic="true"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-lg bg-accent-neon text-dark-900 font-bold tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:scale-105 transition-all"
          >
            Explore My Work
          </button>
          <button
            data-magnetic="true"
            className="px-8 py-4 rounded-lg border border-accent-neon text-accent-neon font-bold tracking-[0.15em] uppercase hover:bg-accent-neon hover:text-dark-900 transition-all"
          >
            Download Resume
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-accent-neon uppercase tracking-[0.2em] text-sm hover:text-accent-cyan transition-colors"
        >
          Let&apos;s Connect →
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="w-7 h-11 border border-accent-neon rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3 bg-accent-neon rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
