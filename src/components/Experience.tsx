import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data';

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-16"
        >
          <div className="lg:col-span-6">
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Experience</p>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[16px] leading-relaxed text-ink-2 max-w-[520px]">
              From data-science POCs to cloud-native multi-agent platforms. Always framed around an outcome,
              always followed through to production.
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          <div className="relative pl-8 border-l-2 border-line space-y-12">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="relative"
              >
                <span className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-[3px] ${
                  i === 0 ? 'bg-coral border-coral' : 'bg-paper border-coral'
                }`} />
                <p className="font-mono text-[13px] font-semibold text-coral mb-2">
                  {exp.startDate} - {exp.endDate}
                </p>
                <h3 className="text-[20px] md:text-[22px] font-bold text-ink leading-snug mb-1">
                  {exp.title}
                </h3>
                <p className="text-[14px] font-medium text-violet mb-3">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="relative pl-5 text-[14px] text-ink-2 leading-relaxed before:content-['→'] before:absolute before:left-0 before:top-[1px] before:text-coral before:font-bold"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
