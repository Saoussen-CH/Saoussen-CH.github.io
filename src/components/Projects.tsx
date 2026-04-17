import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { projects } from '../data';

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="bg-mist py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-14"
        >
          <div className="lg:col-span-6">
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Projects</p>
            <h2 className="mt-4 font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink">
              Open Source <span className="accent">Projects</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[16px] leading-relaxed text-ink-2 max-w-[520px]">
              A selection of repos I build and maintain. Agentic architectures, MLOps platforms, and
              cloud-native pipelines. Each card links straight to the source on GitHub.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.05 }}
              className="card p-6 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="label">P.{String(i + 1).padStart(2, '0')}</span>
                <div className="flex items-center gap-1.5">
                  {p.featured && (
                    <span
                      className="chip text-[10px] py-0.5"
                      style={{
                        background: 'rgba(245,158,11,0.14)',
                        color: '#B45309',
                        borderColor: 'rgba(245,158,11,0.35)',
                      }}
                    >
                      <Star size={10} strokeWidth={2.5} /> Featured
                    </span>
                  )}
                  <ArrowUpRight size={16} strokeWidth={1.75}
                    className="text-ink-3 group-hover:text-coral group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>

              <h3 className="text-[17px] font-bold text-ink leading-snug mb-3 group-hover:text-coral transition-colors">
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ink-2 flex-1">{p.description}</p>

              <div className="mt-5 pt-4 border-t border-line-soft flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
