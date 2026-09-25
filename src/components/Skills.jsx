import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const skillCards = containerRef.current?.querySelectorAll('.skill-card');
    if (!skillCards) return;

    skillCards.forEach((card, idx) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: idx * 0.1,
      });
    });
  }, []);

  const allSkills = [
    ...portfolioData.skills.programming,
    ...portfolioData.skills.web,
    ...portfolioData.skills.database,
  ];

  const skillCategories = [
    { title: 'Programming', skills: portfolioData.skills.programming },
    { title: 'Web', skills: portfolioData.skills.web },
    { title: 'Database', skills: portfolioData.skills.database },
  ];

  return (
    <section id="skills" ref={containerRef} className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <p className="text-accent-neon text-sm font-bold tracking-widest mb-4">03 / SKILLS</p>
        <h2 className="text-5xl md:text-6xl font-bold font-display text-text-primary">
          Tools I build with.
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-accent-neon mb-6 font-display">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="skill-card group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="glass p-6 rounded-lg border border-accent-neon border-opacity-20 group-hover:border-opacity-50 group-hover:bg-dark-700 transition-all h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <h4 className="text-lg font-bold text-text-primary">{skill.name}</h4>
                    </div>
                    <p className="text-sm text-text-secondary">{skill.description}</p>
                    <div className="mt-4 pt-4 border-t border-accent-neon border-opacity-20">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-dark-600 rounded overflow-hidden">
                          <div className="h-full w-4/5 bg-gradient-to-r from-accent-neon to-accent-cyan" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technology Constellation - Interactive Network */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 pt-12 border-t border-accent-neon border-opacity-20"
      >
        <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Technology Constellation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="glass p-4 rounded-lg border border-accent-neon border-opacity-20 group-hover:border-opacity-50 group-hover:shadow-lg group-hover:shadow-accent-neon transition-all text-center cursor-pointer">
                <p className="text-2xl mb-2">{skill.icon}</p>
                <p className="text-sm font-bold text-accent-neon">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
