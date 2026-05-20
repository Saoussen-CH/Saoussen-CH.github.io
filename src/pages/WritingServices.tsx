import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Minus, Clock, Mail } from 'lucide-react';
import { profile } from '../data';
import { Navbar } from '../components/Navbar';

const tiers = [
  {
    num: '01',
    title: 'Simple Educational Article',
    sub: 'Concept explanation, no code, no project',
    price: '$250 - $400',
    hours: '4-6 hrs',
    includes: [
      '~1,500-2,000 words',
      'Research & technical accuracy',
      'Concept explanation & background research',
      '1 round of revisions',
    ],
    excludes: [
      'No original code written',
      'No diagrams or visuals',
    ],
  },
  {
    num: '02',
    title: 'AI/ML Deep-Dive',
    sub: '~2,000 words, illustrative code snippets, 1-2 diagrams',
    price: '$450 - $600',
    hours: '7-10 hrs',
    includes: [
      'Everything in Tier 1',
      'Illustrative code snippets',
      '1-2 custom diagrams',
      'Outline approval before writing',
      '2 rounds of revisions',
    ],
    excludes: [
      'No original project built from scratch',
    ],
  },
  {
    num: '03',
    title: 'Technical Tutorial with Custom Code & Diagrams',
    sub: 'Original tested code, custom visuals, step-by-step',
    price: '$750 - $1,000',
    hours: '12-16 hrs',
    includes: [
      'Everything in Tier 2',
      'Original code written & tested',
      'Custom architecture diagrams',
      'Hands-on experimentation',
      'Step-by-step tutorial format',
      '2 rounds of revisions',
    ],
    excludes: [],
  },
  {
    num: '04',
    title: 'Full Mini-Project + Article',
    sub: 'End-to-end build, GitHub repo, deep writeup',
    price: '$1,200 - $1,800',
    hours: '20-30 hrs',
    includes: [
      'Everything in Tier 3',
      'Fully working project built from scratch',
      'Runnable / deployable end-to-end',
      'GitHub repo with README',
      'Experience-driven first-person narrative',
      'Design decisions documented',
      '2,000+ words',
      '2 rounds of revisions',
    ],
    excludes: [],
  },
];

export function WritingServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    document.title = 'Technical Writing Services - Saoussen Chaabnia';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <section className="bg-paper pt-36 pb-28 md:pt-40 md:pb-32 border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral leading-none mb-6">
              Services
            </p>
            <div className="grid lg:grid-cols-12 gap-10 mb-14">
              <div className="lg:col-span-6">
                <h1 className="font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink">
                  Technical Writing <span className="accent">Pricing</span>
                </h1>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.num}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                className="card p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full font-mono text-[12px] font-bold flex-shrink-0 mt-0.5" style={{ background: 'rgba(29,78,216,0.10)', color: '#1D4ED8' }}>{tier.num}</span>
                    <div>
                      <h3 className="text-[16px] font-bold text-ink leading-snug">{tier.title}</h3>
                      <p className="mt-0.5 text-[13px] text-ink-3">{tier.sub}</p>
                    </div>
                  </div>
                  <span className="font-display font-black text-[17px] whitespace-nowrap ml-3 flex-shrink-0 text-coral">
                    {tier.price}
                  </span>
                </div>

                <div className="border-t border-line-soft pt-4 flex-1">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    {tier.includes.map((item, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-[12.5px] text-ink-2 leading-relaxed">
                        <Check size={12} strokeWidth={2.5} className="flex-shrink-0 mt-[3px] text-coral" />
                        {item}
                      </div>
                    ))}
                    {tier.excludes.map((item, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-[12.5px] text-ink-4 leading-relaxed">
                        <Minus size={12} strokeWidth={2} className="flex-shrink-0 mt-[3px]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    <span className="tag">
                      <Clock size={10} strokeWidth={2} />
                      {tier.hours}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mist py-28 md:py-32 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral leading-none mb-6">
              Contact
            </p>
            <h2 className="font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink mb-5">
              Let's work <span className="accent">together</span>
            </h2>
            <p className="text-[16px] text-ink-2 mb-8 max-w-[480px] mx-auto leading-relaxed">
              Share your topic, target audience, and publishing platform and I'll confirm the tier and timeline.
            </p>
            <a
              href="mailto:consulting@saoussen-chaabnia-ai.com"
              className="btn-primary"
            >
              <Mail size={16} strokeWidth={2} />
              consulting@saoussen-chaabnia-ai.com
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-night pt-8 pb-6 border-t border-paper/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex">
              <span className="w-1 h-6 rounded-sm bg-coral mr-0.5" />
              <span className="w-1 h-4 rounded-sm bg-coral-2 mr-0.5 translate-y-1" />
              <span className="w-1 h-5 rounded-sm bg-violet-2 translate-y-0.5" />
            </span>
            <span className="font-display font-black text-[15px] tracking-tight text-paper">
              SAOUSSEN <span className="italic text-coral-2 font-black mx-0.5">AI</span> CHAABNIA
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
