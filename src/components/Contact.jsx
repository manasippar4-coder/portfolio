import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    // For now, just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <p className="text-accent-neon text-sm font-bold tracking-widest mb-4">05 / CONTACT</p>
        <h2 className="text-5xl md:text-6xl font-bold font-display text-text-primary">
          Let's build something.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-dark-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-neon font-bold">👤</span>
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">Name</p>
                  <p className="text-text-primary font-semibold">{portfolioData.personal.name}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-dark-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent-neon" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">Location</p>
                  <p className="text-text-primary font-semibold">{portfolioData.personal.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-dark-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-accent-neon" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">Phone</p>
                  <a href={`tel:${portfolioData.personal.phone}`} className="text-text-primary font-semibold hover:text-accent-neon transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-dark-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-accent-neon" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">Email</p>
                  <p className="text-text-primary font-semibold">
                    {portfolioData.personal.email === 'YOUR_EMAIL_HERE' ? (
                      <span className="text-text-muted italic">YOUR_EMAIL_HERE</span>
                    ) : (
                      <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-accent-neon transition-colors">
                        {portfolioData.personal.email}
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">Connect</h3>
            <div className="flex gap-4">
              {portfolioData.social.github !== 'YOUR_GITHUB_URL' && (
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-accent-neon border-opacity-30 flex items-center justify-center hover:bg-dark-700 hover:border-opacity-100 transition-all"
                >
                  <Github size={20} className="text-accent-neon" />
                </a>
              )}
              {portfolioData.social.linkedin !== 'YOUR_LINKEDIN_URL' && (
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-accent-neon border-opacity-30 flex items-center justify-center hover:bg-dark-700 hover:border-opacity-100 transition-all"
                >
                  <Linkedin size={20} className="text-accent-neon" />
                </a>
              )}
              {(portfolioData.social.github === 'YOUR_GITHUB_URL' || portfolioData.social.linkedin === 'YOUR_LINKEDIN_URL') && (
                <p className="text-text-secondary text-sm italic">
                  Update social links in <code>src/data/portfolio.js</code>
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-3">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark-800 border border-accent-neon border-opacity-20 rounded text-text-primary focus:border-opacity-100 focus:outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark-800 border border-accent-neon border-opacity-20 rounded text-text-primary focus:border-opacity-100 focus:outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-6 py-3 bg-dark-800 border border-accent-neon border-opacity-20 rounded text-text-primary focus:border-opacity-100 focus:outline-none transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent-neon text-dark-900 font-bold rounded hover:shadow-lg hover:shadow-accent-neon transform hover:scale-105 transition-all neon-glow"
          >
            {submitted ? '✓ Message Sent' : 'SEND MESSAGE'}
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-accent-neon text-sm font-semibold"
            >
              Thank you! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
