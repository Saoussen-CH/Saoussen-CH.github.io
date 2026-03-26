import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Mic, PresentationIcon, ExternalLink } from 'lucide-react';
import { talks } from '../data';

export function Talks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

        <div className="grid md:grid-cols-2 gap-6">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl p-6 glass-hover group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {talk.type === 'Talk' ? (
                    <Mic size={22} className="text-accent-violet" />
                  ) : (
                    <PresentationIcon size={22} className="text-accent-cyan" />
                  )}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    talk.type === 'Talk'
                      ? 'bg-accent-violet/20 text-accent-violet'
                      : 'bg-accent-cyan/20 text-accent-cyan'
                  }`}
                >
                  {talk.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-cyan transition-colors">
                {talk.title}
              </h3>

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
              <div className="mt-auto">
                <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                  {talk.sessions.length > 1 ? `${talk.sessions.length} Sessions` : '1 Session'}
                </p>
                <div className="space-y-2">
                  {talk.sessions.map((session, i) => (
                    <div
                      key={i}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2"
                    >
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-secondary">
                        <span className="font-medium text-text-primary">{session.event}</span>
                        {session.upcoming && (
                          <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-accent-cyan/20 text-accent-cyan">
                            Upcoming
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-text-secondary">
                          <Calendar size={11} />
                          {session.date}
                        </span>
                        <span className="flex items-center gap-1 text-text-secondary">
                          <MapPin size={11} />
                          {session.location}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {session.sessionizeUrl && (
                          <a
                            href={session.sessionizeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent-cyan text-xs font-medium hover:underline"
                          >
                            <ExternalLink size={11} />
                            Sessionize
                          </a>
                        )}
                        {session.eventUrl && (
                          <a
                            href={session.eventUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent-violet text-xs font-medium hover:underline"
                          >
                            <ExternalLink size={11} />
                            Event
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
