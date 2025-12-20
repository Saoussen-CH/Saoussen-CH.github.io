import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { projects } from '../data';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-primary border border-white/10 rounded-2xl overflow-hidden hover:border-accent-violet hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(131,56,236,0.15)]"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-dark-tertiary to-dark-secondary">
                <div className="w-14 h-14 bg-gradient-main rounded-xl flex items-center justify-center text-2xl mb-4">
                  {project.emoji}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 glass rounded text-xs text-accent-cyan font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-primary hover:text-accent-cyan transition-colors group/link"
                >
                  <Github size={18} />
                  View on GitHub
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
