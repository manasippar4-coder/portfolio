import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-40 items-center justify-between px-8 py-4 transition-all duration-300 ${
          scrolled ? 'glass border-b border-accent-neon/20 shadow-[0_0_25px_rgba(0,255,136,0.08)]' : 'bg-transparent'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-3 py-2 rounded-xl border border-accent-neon/20 bg-gradient-to-r from-accent-neon/10 to-[#d4af37]/10 text-2xl font-black font-display text-accent-neon glow-text"
        >
          {portfolioData.personal.initials}
        </motion.div>

        <div className="flex items-center gap-8">
          {portfolioData.navigation.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className={`relative text-sm font-medium tracking-[0.24em] uppercase transition-all ${
                activeSection === item.href.slice(1)
                  ? 'text-accent-neon glow-text'
                  : 'text-text-secondary hover:text-accent-neon'
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-[#d4af37] via-accent-neon to-[#00d9ff] rounded-full" />
              )}
            </motion.a>
          ))}
        </div>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-5 right-5 z-50 text-accent-neon bg-dark-900/60 backdrop-blur-md border border-accent-neon/20 rounded-full p-3 shadow-[0_0_20px_rgba(0,255,136,0.1)]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden fixed inset-0 z-40 glass ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {portfolioData.navigation.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 18 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ delay: idx * 0.08 }}
              className="text-2xl font-display text-accent-neon glow-text tracking-[0.18em] uppercase"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
