import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { certifications } from '../data';

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="bg-paper py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-14"
        >
          <div className="lg:col-span-6">
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Credentials</p>
            <h2 className="mt-4 font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink">
              Certified across <span className="accent">the stack.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[16px] leading-relaxed text-ink-2 max-w-[520px]">
              Certified across the full stack - ML engineering, cloud architecture, data engineering, project management, and AI product management. The rare combination that builds the system, manages the delivery, and owns the product.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.06 }}
              className="group card relative p-6 flex flex-col"
            >
              <ArrowUpRight size={16} strokeWidth={1.75}
                className="absolute top-5 right-5 text-ink-3 group-hover:text-coral group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              <h3 className="text-[16px] font-bold text-ink leading-snug group-hover:text-coral transition-colors pr-6">
                {c.title}
              </h3>
              <p className="mt-1 text-[13px] font-medium" style={{ color: '#3B82F6' }}>{c.provider}</p>
              <p className="mt-4 pt-4 border-t border-line-soft text-[12.5px] font-medium text-ink-2">
                {(() => {
                  const parts = c.date.split('•').map(s => s.trim());
                  if (parts.length <= 1) return c.date;
                  return (
                    <>
                      <span style={{ color: '#F59E0B' }} className="font-semibold">{parts[0]}</span>
                      {' • ' + parts.slice(1).join(' • ')}
                    </>
                  );
                })()}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
