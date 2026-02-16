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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              {/* Event & Meta */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-cyan transition-colors">
                {talk.event}
              </h3>
              <div className="flex flex-wrap gap-3 text-text-muted text-sm mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {talk.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {talk.location}
                </span>
              </div>

              {/* Talk Title */}
              <p className="text-accent-violet text-sm font-medium mb-3">
                {talk.title}
              </p>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {talk.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mt-6">
                {talk.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-text-secondary text-xs pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent-cyan"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Links */}
              {(talk.sessionizeUrl || talk.eventUrl) && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {talk.sessionizeUrl && (
                    <a
                      href={talk.sessionizeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent-cyan text-sm font-medium hover:underline"
                    >
                      <ExternalLink size={14} />
                      Sessionize
                    </a>
                  )}
                  {talk.eventUrl && (
                    <a
                      href={talk.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent-violet text-sm font-medium hover:underline"
                    >
                      <ExternalLink size={14} />
                      Event Page
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
