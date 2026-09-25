import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-40 items-center justify-between px-8 py-6 transition-all duration-300 ${
          scrolled ? 'glass border-b border-accent-neon border-opacity-20' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-display text-accent-neon glow-text"
        >
          {portfolioData.personal.initials}
        </motion.div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {portfolioData.navigation.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`text-sm font-medium transition-all ${
                activeSection === item.href.slice(1)
                  ? 'text-accent-neon glow-text'
                  : 'text-text-secondary hover:text-accent-neon'
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 text-accent-neon"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden fixed inset-0 z-40 glass backdrop-blur-xl ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {portfolioData.navigation.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              className="text-2xl font-display text-accent-neon glow-text"
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
