import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl p-5 glass-hover"
            >
              <div className="font-mono text-accent-cyan text-sm mb-2">
                {edu.years}
              </div>
              <h4 className="font-semibold mb-1">{edu.degree}</h4>
              <p className="text-text-secondary text-sm">{edu.school}</p>
              {edu.rank && (
                <p className="text-accent-gold text-sm mt-2 font-medium">
                  {edu.rank}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
