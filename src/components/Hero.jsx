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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),transparent_25%),radial-gradient(circle_at_75%_30%,_rgba(0,255,136,0.13),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(0,217,255,0.1),transparent_35%)]" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
      </div>

      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-accent-neon/10 blur-3xl" />
      <div className="absolute right-0 bottom-12 h-96 w-96 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(26)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-neon/50"
            style={{
              width: `${Math.random() * 7 + 4}px`,
              height: `${Math.random() * 7 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -24, 0],
              opacity: [0.12, 0.9, 0.12],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.18,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[10px] md:text-xs font-bold tracking-[0.32em] uppercase text-[#f8d87a] mb-8">
            ENTER MY WORLD
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.8] font-black font-editorial text-text-primary tracking-[-0.08em]">
            MANAS
            <span className="block text-accent-neon glow-text drop-shadow-[0_0_28px_rgba(0,255,136,0.45)]">IPPAR.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8 }}
          className="text-base md:text-xl text-text-secondary mb-8 font-light tracking-[0.2em] uppercase"
        >
          BCS Student • Computer Science • Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-14 mb-10 flex items-center justify-center"
        >
          <p className="text-xl md:text-3xl font-display text-[#bfeeff] tracking-[0.05em]">
            {displayText}
            <span className="inline-block w-[2px] h-8 ml-1 align-middle bg-accent-neon animate-blink" />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.8 }}
          className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-5 justify-center items-center mb-12"
        >
          <button
            data-magnetic="true"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="luxury-button px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37]/15 to-accent-neon/10 text-[#f5d98a] font-bold tracking-[0.18em] uppercase shadow-[0_0_30px_rgba(212,175,55,0.18)] hover:scale-[1.03] transition-all"
          >
            Explore My Work
          </button>
          <button
            data-magnetic="true"
            className="luxury-button px-8 py-4 rounded-xl border border-accent-neon/40 text-accent-neon font-bold tracking-[0.18em] uppercase hover:bg-accent-neon hover:text-dark-900 transition-all"
          >
            Download Resume
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[#f5d98a] uppercase tracking-[0.22em] text-sm hover:text-accent-neon transition-colors"
        >
          Let&apos;s Connect →
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="w-7 h-11 border border-[#d4af37] rounded-full flex items-center justify-center shadow-[0_0_18px_rgba(212,175,55,0.35)]">
          <div className="w-1.5 h-3 bg-[#f5d98a] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
