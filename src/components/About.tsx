import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Cloud, Sparkles, Diamond } from 'lucide-react';
import { profile } from '../data';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">About Me</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Technology × Business × Impact
            </h2>
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-text-secondary mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {[
              {
                icon: <Star size={18} fill="currentColor" className="text-accent-gold" />,
                title: 'Google Developer Expert',
                desc: 'Recognized by Google for expertise in Cloud AI, part of an exclusive global community.',
              },
              {
                icon: <Cloud size={18} fill="currentColor" className="text-accent-cyan" />,
                title: '3× Google Cloud Certified',
                desc: 'Professional ML Engineer · Cloud Architect · Data Engineer, all active 2025-2026.',
              },
              {
                icon: <Diamond size={18} fill="currentColor" className="text-accent-violet" />,
                title: 'International Speaker',
                desc: 'Workshops & talks across Europe and MENA on Agentic AI & the Google AI stack.',
              },
              {
                icon: <Sparkles size={18} fill="currentColor" className="text-accent-cyan" />,
                title: 'Technical Thought Leader',
                desc: '42+ articles on Medium & Google Cloud publication.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 py-5 border-b border-white/10 last:border-0"
              >
                <div className="mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold text-text-primary mb-1 text-base">{item.title}</div>
                  <div className="text-text-secondary text-sm leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
