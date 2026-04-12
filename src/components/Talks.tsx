import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Mic, PresentationIcon, ExternalLink, ChevronDown } from 'lucide-react';
import { talks } from '../data';

export function Talks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openId, setOpenId] = useState<string | null>(talks[0]?.id ?? null);

  return (
    <section id="talks" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">Speaking</p>
          <h2 className="section-title">Talks & Workshops</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {talks.map((talk, index) => {
            const isOpen = openId === talk.id;
            return (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass rounded-2xl overflow-hidden"
              >
                {/* Clickable Header */}
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                  onClick={() => setOpenId(isOpen ? null : talk.id)}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {talk.type === 'Talk' ? (
                        <Mic size={22} className="text-accent-violet" />
                      ) : (
                        <PresentationIcon size={22} className="text-accent-cyan" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${
                            talk.type === 'Talk'
                              ? 'bg-accent-violet/20 text-accent-violet'
                              : 'bg-accent-cyan/20 text-accent-cyan'
                          }`}
                        >
                          {talk.type}
                        </span>
                        {talk.sessions.length > 0 && (
                          <span className="text-xs text-text-secondary font-mono">
                            {talk.sessions.length} event{talk.sessions.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold group-hover:text-accent-cyan transition-colors leading-snug mb-1">
                        {talk.title}
                      </h3>
                      {!isOpen && (
                        <p className="text-text-secondary text-xs line-clamp-1 leading-relaxed">
                          {talk.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                        {/* Description */}
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                          {talk.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-1 mb-6">
                          {talk.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-text-secondary text-xs pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent-cyan"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Sessions */}
                        {talk.sessions.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                              EVENTS
                            </p>
                            <div className="space-y-2">
                              {talk.sessions.map((session, i) => {
                                const url = session.eventUrl || session.sessionizeUrl;
                                const nameEl = url ? (
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-text-primary text-xs hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
                                  >
                                    {session.event}
                                    <ExternalLink size={10} className="opacity-60" />
                                  </a>
                                ) : (
                                  <span className="font-semibold text-text-primary text-xs">{session.event}</span>
                                );
                                return (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3 py-2.5"
                                  >
                                    <div className="flex items-start min-w-0">
                                      <div className="min-w-0">
                                        {nameEl}
                                        <p className="flex items-center gap-1 text-[12px] text-text-secondary mt-0.5">
                                          <Calendar size={11} />
                                          {session.date} · {session.location}
                                        </p>
                                      </div>
                                    </div>
                                    {session.upcoming ? (
                                      <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-accent-cyan/40 text-accent-cyan bg-accent-cyan/10 whitespace-nowrap">
                                        Upcoming
                                      </span>
                                    ) : (
                                      <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-emerald-400/40 text-emerald-400 bg-emerald-400/10 whitespace-nowrap">
                                        Delivered
                                      </span>
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
