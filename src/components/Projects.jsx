import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.project-card');
    if (!cards) return;

    cards.forEach((card, idx) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: idx * 0.2,
      });
    });
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <p className="text-accent-neon text-sm font-bold tracking-widest mb-4">04 / PROJECTS</p>
        <h2 className="text-5xl md:text-6xl font-bold font-display text-text-primary">
          Things I've built.
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass border border-accent-neon border-opacity-20 rounded-xl overflow-hidden hover:border-opacity-50 transition-all group">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Visual */}
                <div className="bg-dark-700 relative h-80 md:h-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Parking Grid Visualization */}
                      <g stroke="#00ff88" strokeWidth="2" fill="none">
                        {/* Parking slots */}
                        {[...Array(12)].map((_, i) => (
                          <g key={i}>
                            <rect x={20 + (i % 4) * 90} y={20 + Math.floor(i / 4) * 90} width="70" height="60" opacity="0.6" />
                            <circle cx={55 + (i % 4) * 90} cy={50 + Math.floor(i / 4) * 90} r="15" fill="#00ff88" opacity={Math.random() > 0.5 ? 0.8 : 0.2} />
                          </g>
                        ))}
                      </g>
                    </svg>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-6xl mb-4">🅿️</p>
                    <p className="text-accent-neon font-bold">Smart Parking</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-accent-neon font-display opacity-50">
                        {project.number}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-text-primary mb-4 font-display">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-3 py-1 bg-dark-700 border border-accent-neon border-opacity-30 rounded text-xs font-bold text-accent-neon hover:bg-dark-600 transition-all cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github === 'YOUR_GITHUB_REPO_URL' ? '#' : project.github}
                        className={`flex items-center gap-2 px-6 py-3 border border-accent-neon text-accent-neon rounded hover:bg-accent-neon hover:text-dark-900 transition-all font-bold ${
                          project.github === 'YOUR_GITHUB_REPO_URL' ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={(e) => project.github === 'YOUR_GITHUB_REPO_URL' && e.preventDefault()}
                      >
                        <Github size={20} />
                        GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo === 'YOUR_LIVE_DEMO_URL' ? '#' : project.liveDemo}
                        className={`flex items-center gap-2 px-6 py-3 bg-accent-neon text-dark-900 rounded hover:shadow-lg hover:shadow-accent-neon transition-all font-bold ${
                          project.liveDemo === 'YOUR_LIVE_DEMO_URL' ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={(e) => project.liveDemo === 'YOUR_LIVE_DEMO_URL' && e.preventDefault()}
                      >
                        <ExternalLink size={20} />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add More Projects Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <p className="text-text-secondary italic">
          More projects coming soon. Edit <code>src/data/portfolio.js</code> to add additional projects.
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
