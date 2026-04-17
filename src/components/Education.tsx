import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';
import { education } from '../data';

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="bg-paper py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-14"
        >
          <div className="lg:col-span-6">
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Education</p>
            <h2 className="mt-4 font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink">
              Grounded in <span className="accent">engineering.</span>
            </h2>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          <div className="relative pl-8 border-l-2 border-line space-y-12">
            {education.map((ed, i) => (
              <motion.article
                key={ed.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="relative"
              >
                <span className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-[3px] ${
                  i === 0 ? 'bg-coral border-coral' : 'bg-paper border-coral'
                }`} />
                <p className="font-mono text-[13px] font-semibold text-coral mb-2">{ed.years}</p>
                <h3 className="text-[20px] md:text-[22px] font-bold text-ink leading-snug mb-1">{ed.degree}</h3>
                <p className="text-[14px] font-medium text-violet mb-3">{ed.school}</p>
                {ed.rank && (
                  <span
                    className="inline-flex items-center gap-1.5 chip"
                    style={{
                      background: 'rgba(245,158,11,0.14)',
                      color: '#B45309',
                      borderColor: 'rgba(245,158,11,0.35)',
                    }}
                  >
                    <Award size={11} strokeWidth={2.5} />
                    {ed.rank.replace(/[^0-9A-Za-z /:]/g, '').trim()}
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
