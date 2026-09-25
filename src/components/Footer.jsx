import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-accent-neon border-opacity-20 bg-dark-900 bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl font-bold font-display text-accent-neon glow-text mb-3">
              {portfolioData.personal.initials}.
            </p>
            <p className="text-text-secondary font-semibold mb-2">{portfolioData.personal.title}</p>
            <p className="text-text-muted text-sm">{portfolioData.personal.location}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-bold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {portfolioData.navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-text-secondary hover:text-accent-neon transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-bold text-text-primary mb-4">Connect</h4>
            <div className="flex gap-3">
              {portfolioData.social.github !== 'YOUR_GITHUB_URL' && (
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-neon transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {portfolioData.social.linkedin !== 'YOUR_LINKEDIN_URL' && (
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-neon transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {portfolioData.personal.email !== 'YOUR_EMAIL_HERE' && (
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-text-secondary hover:text-accent-neon transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-neon border-opacity-20 py-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-text-muted text-sm"
            >
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </motion.p>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-accent-neon animate-pulse" />
              <span className="text-text-secondary text-sm">{portfolioData.personal.status}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-32 bg-accent-neon opacity-5 blur-3xl" />
    </footer>
  );
};

export default Footer;
