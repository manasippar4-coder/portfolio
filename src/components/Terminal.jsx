import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '$ Welcome to my developer terminal' },
    { type: 'system', text: '$ Type a command to learn more about me' },
  ]);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    about: {
      label: 'about',
      execute: () => `I am ${portfolioData.personal.name}, a ${portfolioData.personal.title} from ${portfolioData.personal.location}.`,
    },
    skills: {
      label: 'skills',
      execute: () => `${portfolioData.skills.programming.concat(portfolioData.skills.web, portfolioData.skills.database).map(s => s.name).join(' / ')}`,
    },
    education: {
      label: 'education',
      execute: () => `${portfolioData.education.degree} at ${portfolioData.education.institution} (${portfolioData.education.startYear}-${portfolioData.education.endYear})`,
    },
    projects: {
      label: 'projects',
      execute: () => portfolioData.projects.map(p => p.title).join(', '),
    },
    contact: {
      label: 'contact',
      execute: () => `${portfolioData.personal.phone} | ${portfolioData.personal.email}`,
    },
    help: {
      label: 'help',
      execute: () => `Available commands: ${Object.keys(commands).join(', ')}`,
    },
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setHistory((prev) => [...prev, { type: 'input', text: `$ ${cmd}` }]);

    if (commands[trimmedCmd]) {
      setHistory((prev) => [...prev, { type: 'output', text: commands[trimmedCmd].execute() }]);
    } else if (trimmedCmd === '') {
      // Do nothing on empty input
    } else {
      setHistory((prev) => [...prev, { type: 'error', text: `command not found: ${trimmedCmd}` }]);
    }

    setInput('');
    setTimeout(() => terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight), 0);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <p className="text-accent-neon text-sm font-bold tracking-widest mb-4">INTERACTIVE</p>
        <h2 className="text-5xl md:text-6xl font-bold font-display text-text-primary">
          Developer Terminal
        </h2>
      </motion.div>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass border border-accent-neon border-opacity-30 rounded-lg overflow-hidden"
      >
        <div className="bg-dark-900 bg-opacity-80">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-accent-neon border-opacity-20 bg-dark-800 bg-opacity-50">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-text-secondary ml-4">manas-portfolio@terminal</span>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-6 font-mono text-sm h-96 overflow-y-auto space-y-2"
          >
            {history.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {entry.type === 'input' && (
                  <div className="text-accent-cyan">{entry.text}</div>
                )}
                {entry.type === 'output' && (
                  <div className="text-accent-neon pl-4">{entry.text}</div>
                )}
                {entry.type === 'error' && (
                  <div className="text-red-400 pl-4">{entry.text}</div>
                )}
                {entry.type === 'system' && (
                  <div className="text-text-secondary italic pl-4">{entry.text}</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Terminal Input */}
          <div className="border-t border-accent-neon border-opacity-20 px-6 py-4 flex items-center gap-2">
            <span className="text-accent-cyan">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(input);
                }
              }}
              className="flex-1 bg-transparent outline-none text-text-primary font-mono"
              placeholder="Type 'help' for commands"
            />
          </div>
        </div>
      </motion.div>

      {/* Command Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
      >
        {Object.values(commands).map((cmd, idx) => (
          <button
            key={idx}
            onClick={() => handleCommand(cmd.label)}
            className="px-4 py-2 text-sm bg-dark-700 border border-accent-neon border-opacity-30 text-accent-neon rounded hover:border-opacity-100 hover:bg-dark-600 transition-all font-mono"
          >
            $ {cmd.label}
          </button>
        ))}
      </motion.div>
    </section>
  );
};

export default Terminal;
