import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Github, Bot, Palette, PenTool, GitBranch, BarChart2, Database } from 'lucide-react';
import { projects } from '../data';

const projectIconMap: Record<string, React.ReactNode> = {
  'adk-multiagent-production-template': <Bot size={24} className="text-accent-cyan" />,
  'ai-creative-studio': <Palette size={24} className="text-accent-violet" />,
  'content-creation-mas': <PenTool size={24} className="text-accent-cyan" />,
  'mlops-gcp': <GitBranch size={24} className="text-accent-gold" />,
  'sentiment-analysis': <BarChart2 size={24} className="text-accent-magenta" />,
  'census-prediction': <Database size={24} className="text-accent-cyan" />,
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        {/* Featured — full-width larger cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-primary border border-accent-cyan/20 rounded-2xl overflow-hidden hover:border-accent-cyan hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)]"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-dark-tertiary to-dark-secondary">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {projectIconMap[project.id] || <Bot size={24} className="text-accent-cyan" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                    Production-Ready
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 glass rounded text-xs text-accent-cyan font-mono">
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
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects — smaller 3-col grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (featuredProjects.length + index) * 0.1 }}
              className="group bg-dark-primary border border-white/10 rounded-2xl overflow-hidden hover:border-accent-violet hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(131,56,236,0.12)]"
            >
              {/* Header */}
              <div className="p-4 bg-gradient-to-br from-dark-tertiary to-dark-secondary">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {projectIconMap[project.id] || <Bot size={20} className="text-accent-cyan" />}
                </div>
                <h3 className="text-sm font-semibold leading-snug">{project.title}</h3>
              </div>

              {/* Body */}
              <div className="p-4">
                <p className="text-text-secondary text-xs mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 glass rounded text-[10px] text-accent-cyan font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-text-primary hover:text-accent-violet transition-colors group/link text-xs"
                >
                  <Github size={14} />
                  GitHub
                  <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
