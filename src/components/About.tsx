import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MapPin, Clock, Globe, Award, Cloud, Mic, PenLine, Briefcase } from 'lucide-react';
import { profile } from '../data';

const PILLARS = [
  {
    icon: Award,
    title: 'Google Developer Expert',
    desc: 'Recognized by Google for expertise in Cloud AI, part of an exclusive global community.',
  },
  {
    icon: Cloud,
    title: '3× Google Cloud Certified',
    desc: 'Professional ML Engineer · Cloud Architect · Data Engineer, all active 2025-2026.',
  },
  {
    icon: Mic,
    title: 'International Speaker',
    desc: 'Workshops & talks across Europe and MENA on Agentic AI & the Google AI stack.',
  },
  {
    icon: PenLine,
    title: 'AI Technical Author',
    desc: 'Deep technical series and official Google Codelabs, published on Medium and the Google Cloud publication.',
  },
  {
    icon: Briefcase,
    title: 'AI Product & Project Management',
    desc: 'From roadmap to release: Microsoft AI PM Professional covers product strategy, AI lifecycle, and ethics. Google PM Professional covers planning, Agile, and delivery.',
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-mist py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral leading-none mb-14"
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="pt-[3px] flex flex-col gap-5">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Icon size={18} strokeWidth={1.9} className="text-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-[15px] text-ink leading-tight">{p.title}</div>
                      <div className="mt-1 text-[13px] leading-relaxed text-ink">{p.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-line flex flex-col gap-3 text-[13px] text-ink-2">
              <span className="flex items-center gap-3"><MapPin size={16} className="text-coral flex-shrink-0" strokeWidth={1.6} /> {profile.location} · Remote worldwide</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-coral flex-shrink-0" strokeWidth={1.6} /> Responds within 48h · Mon-Fri</span>
              <span className="flex items-center gap-3"><Globe size={16} className="text-coral flex-shrink-0" strokeWidth={1.6} /> Working in EN · FR · AR</span>
            </div>
            <a href="#contact" className="mt-auto pt-10 inline-flex items-center gap-2 text-[14px] font-semibold text-ink self-start hover:text-coral transition-colors">
              <span className="border-b-2 border-ink pb-1 group-hover:border-coral">Start a conversation</span>
              <ArrowRight size={15} strokeWidth={2.2} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-black text-[22px] md:text-[26px] lg:text-[30px] leading-none text-ink">
              Business <span className="accent text-[0.75em] align-middle">×</span> Technology <span className="accent text-[0.75em] align-middle">×</span> Impact
            </h2>
            <div className="mt-8 space-y-6 text-[16px] md:text-[17px] leading-relaxed text-ink-2">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-ink font-medium text-[18px] md:text-[19px]' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
