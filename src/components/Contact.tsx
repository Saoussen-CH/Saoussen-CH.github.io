import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Github, Calendar } from 'lucide-react';
import { socialLinks, calendlyLink } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar size={24} />,
  linkedin: <Linkedin size={24} />,
  github: <Github size={24} />,
  medium: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  ),
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-dark-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="section-label">Connect</p>
          <h2 className="section-title mb-6">Let's Work Together</h2>
          <p className="text-text-secondary text-lg mb-10">
            Whether you're exploring AI agents, need an architecture review, want to bring an AI product to market, 
            or need help balancing feasibility and impact — let's talk. I'm also available for speaking engagements 
            and knowledge-sharing opportunities.
          </p>
        </motion.div>

        {/* Calendly Button - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <motion.a
            href={calendlyLink.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-3 px-8 py-4 text-lg font-semibold"
          >
            <Calendar size={28} />
            <span>{calendlyLink.name}</span>
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl glass-hover group"
            >
              <span className="text-text-primary group-hover:text-accent-cyan transition-colors">
                {iconMap[link.icon]}
              </span>
              <span className="font-medium">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
