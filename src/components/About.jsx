import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.from(container.querySelector('.about-content'), {
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    });
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <p className="text-accent-neon text-sm font-bold tracking-widest mb-4">01 / ABOUT</p>
        <h2 className="text-5xl md:text-6xl font-bold font-display text-text-primary mb-12">
          Turning curiosity into capability.
        </h2>
      </motion.div>

      <div className="about-content grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            {portfolioData.personal.bio}
          </p>
          <p className="text-text-secondary leading-relaxed">
            I am passionate about exploring how technology can solve real-world problems through creative and practical solutions.
          </p>
          <div className="space-y-3 pt-4">
            <p className="text-sm text-text-muted font-semibold">INTERESTED IN:</p>
            <div className="flex flex-wrap gap-3">
              {portfolioData.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-dark-700 border border-accent-neon border-opacity-30 rounded text-sm text-accent-neon hover:bg-dark-600 transition-all"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-full flex items-center justify-center"
        >
          <div className="glass p-8 rounded-lg border border-accent-neon border-opacity-20 w-full max-w-sm text-center hover:border-opacity-50 transition-all">
            {/* ID Card */}
            <div className="space-y-6">
              <div className="text-4xl font-bold font-display text-accent-neon glow-text">
                MI.
              </div>
              <div>
                <p className="text-text-primary font-bold mb-2">{portfolioData.personal.name}</p>
                <p className="text-sm text-text-secondary mb-4">{portfolioData.personal.title}</p>
                <p className="text-sm text-accent-gold mb-6">{portfolioData.personal.location}</p>
              </div>
              <div className="border-t border-accent-neon border-opacity-20 pt-4">
                <div className="inline-block px-4 py-2 bg-dark-700 border border-accent-neon rounded-full">
                  <span className="text-xs font-bold text-accent-neon animate-pulse">
                    • {portfolioData.personal.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
