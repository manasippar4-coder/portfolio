import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    gsap.from(timeline.querySelector('.timeline-node'), {
      scrollTrigger: {
        trigger: timeline,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      scale: 0,
      opacity: 0,
      duration: 0.6,
    });

    gsap.from(timeline.querySelector('.timeline-content'), {
      scrollTrigger: {
        trigger: timeline,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 20,
      duration: 0.8,
      delay: 0.2,
    });
  }, []);

  const { education } = portfolioData;

  return (
    <section id="education" ref={containerRef} className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <p className="text-accent-neon text-sm font-bold tracking-widest mb-4">02 / EDUCATION</p>
        <h2 className="text-5xl md:text-6xl font-bold font-display text-text-primary">
          Learning with purpose.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="mt-16 relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-neon to-accent-cyan" />

        <div className="space-y-12">
          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative pl-12 md:pl-0 md:even:flex-row-reverse md:even:text-right"
          >
            {/* Timeline Node */}
            <div className="timeline-node absolute left-0 top-0 md:left-1/2 w-6 h-6 bg-dark-900 border-3 border-accent-neon rounded-full transform -translate-x-1/2 md:-translate-y-2" />

            {/* Content */}
            <div className="timeline-content md:w-1/2 md:px-12">
              <div className="glass p-8 rounded-lg border border-accent-neon border-opacity-20 hover:border-opacity-50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-accent-neon">
                    {education.startYear} — {education.endYear}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{education.degree}</h3>
                <p className="text-accent-gold mb-4 font-semibold">{education.institution}</p>
                <p className="text-text-secondary mb-4">{education.university}</p>
                <div className="inline-block px-4 py-2 bg-dark-700 border border-accent-neon border-opacity-30 rounded">
                  <p className="text-sm text-accent-neon font-bold">CGPA: {education.cgpa}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 pt-16 border-t border-accent-neon border-opacity-20 text-center"
      >
        <p className="text-text-secondary text-lg">
          Building a strong foundation in Computer Science with focus on practical problem-solving and modern development practices.
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
