import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';
import { education } from '../data';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div className="relative pl-8 border-l-2 border-white/10 space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-dark-primary border-[3px] border-accent-cyan" />

              <div className="font-mono text-accent-cyan text-sm mb-2">
                {edu.years}
              </div>
              <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
              <p className="text-accent-violet font-medium">{edu.school}</p>
              {edu.rank && (
                <p className="text-accent-gold text-sm mt-2 font-medium flex items-center gap-1">
                  <Trophy size={14} /> {edu.rank.replace('🏆 ', '')}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
