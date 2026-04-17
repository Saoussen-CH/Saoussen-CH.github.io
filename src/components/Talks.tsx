import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Mic, Presentation, ExternalLink, ChevronDown } from 'lucide-react';
import { talks } from '../data';

export function Talks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [openId, setOpenId] = useState<string | null>(talks[0]?.id ?? null);

  return (
    <section id="talks" className="relative py-28 md:py-32 border-t border-line overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14,14,26,0.045) 1.1px, transparent 1.1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden
      />
      <div
        className="absolute -right-40 -top-24 w-[820px] h-[820px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(196,181,253,0.22) 0%, rgba(147,197,253,0.14) 45%, rgba(255,255,255,0) 70%)',
          filter: 'blur(28px)',
        }}
        aria-hidden
      />
      <div
        className="absolute -left-20 bottom-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(147,197,253,0.20) 0%, rgba(255,255,255,0) 65%)',
          filter: 'blur(36px)',
        }}
        aria-hidden
      />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-14"
        >
          <div className="lg:col-span-6">
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Speaking</p>
            <h2 className="mt-4 font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink">
              Talks & workshops across <span className="accent">Europe and MENA.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[16px] leading-relaxed text-ink-2 max-w-[520px]">
              Code-first sessions on agentic AI, multi-agent systems, and production
              architecture, from Kraków to Mahdia.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {talks.map((talk, index) => {
            const isOpen = openId === talk.id;
            const isTalk = talk.type === 'Talk';
            return (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                  onClick={() => setOpenId(isOpen ? null : talk.id)}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {isTalk ? (
                      <Mic size={20} strokeWidth={1.9} className="text-coral flex-shrink-0 mt-1" />
                    ) : (
                      <Presentation size={20} strokeWidth={1.9} className="text-violet flex-shrink-0 mt-1" />
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="chip" style={isTalk ? { background: '#EEEBFF', color: '#7C3AED', borderColor: 'rgba(167, 139, 250, 0.35)' } : { background: 'rgba(99, 102, 241, 0.12)', color: '#6366F1', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                          {talk.type}
                        </span>
                        {talk.sessions.length > 0 && (
                          <span className="font-mono text-[11px] text-ink-4 uppercase tracking-wider2">
                            {talk.sessions.length} event{talk.sessions.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[15.5px] md:text-[16.5px] font-bold text-ink leading-snug group-hover:text-coral transition-colors">
                        {talk.title}
                      </h3>
                      {!isOpen && (
                        <p className="mt-1 text-[13px] text-ink-2 line-clamp-1 leading-relaxed">
                          {talk.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    strokeWidth={1.8}
                    className={`flex-shrink-0 text-ink-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 border-t border-line-soft pt-4">
                        <p className="text-[14px] leading-relaxed text-ink-2 mb-4">
                          {talk.description}
                        </p>

                        {talk.highlights.length > 0 && (
                          <ul className="grid gap-1.5 mb-5">
                            {talk.highlights.map((h, hi) => (
                              <li key={hi} className="relative pl-5 text-[13px] text-ink-2 leading-relaxed">
                                <span className="absolute left-0 top-[9px] w-2 h-0.5 bg-coral" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}

                        {talk.sessions.length > 0 && (
                          <div>
                            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider2 text-ink-4 mb-3">
                              Events
                            </p>
                            <div className="space-y-2">
                              {talk.sessions.map((s, i) => {
                                const url = s.eventUrl || s.sessionizeUrl;
                                const Title = url ? (
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink hover:text-[#6366F1] transition-colors"
                                  >
                                    {s.event}
                                    <ExternalLink size={11} className="opacity-60" />
                                  </a>
                                ) : (
                                  <span className="text-[13.5px] font-semibold text-ink">{s.event}</span>
                                );
                                return (
                                  <div
                                    key={i}
                                    className="card-wash flex items-center justify-between gap-3 rounded-xl border border-line-soft px-3.5 py-2.5"
                                  >
                                    <div className="min-w-0">
                                      {Title}
                                      <p className="flex items-center gap-1.5 mt-0.5 font-mono text-[11.5px] text-ink-3">
                                        <Calendar size={11} strokeWidth={1.8} />
                                        {s.date} · {s.location}
                                      </p>
                                    </div>
                                    {s.upcoming ? (
                                      <span className="chip chip-warn flex-shrink-0">Upcoming</span>
                                    ) : (
                                      <span className="chip chip-pass flex-shrink-0">Delivered</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
