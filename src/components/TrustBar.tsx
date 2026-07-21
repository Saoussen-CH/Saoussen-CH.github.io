import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data';

export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-paper pt-28 md:pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          A little about the numbers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 font-display font-black text-display-2 text-ink"
        >
          7+ years of <span className="accent">shipping, writing, speaking.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 mx-auto max-w-[620px] text-[16px] leading-relaxed text-ink-2"
        >
          Recognised by Google as a Developer Expert in Cloud AI. Certified across the stack, publishing deep technical series on production AI, speaking across Europe and MENA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-5 divide-x divide-line border-x border-line max-w-[960px] mx-auto"
        >
          {profile.stats.map((s, i) => (
            <div key={i} className="py-3 px-4">
              <div className={`font-display font-black text-[44px] md:text-[56px] leading-none ${
                s.featured ? 'text-coral' : 'text-ink'
              }`}>
                {s.value}
              </div>
              <div className="mt-3 text-[13px] text-ink-3">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
