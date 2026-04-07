import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, ShieldCheck, Cloud, Brain, BarChart3, Trophy, ClipboardList } from 'lucide-react';
import { experiences, certifications } from '../data';

const certIconMap: Record<string, React.ReactNode> = {
  'gcp-ml': <Brain size={20} className="text-accent-cyan" />,
  'gcp-architect': <Cloud size={20} className="text-accent-cyan" />,
  'gcp-data': <BarChart3 size={20} className="text-accent-cyan" />,
  'tensorflow': <Brain size={20} className="text-accent-violet" />,
  'pm': <ClipboardList size={20} className="text-accent-cyan" />,
  'complete-list-100+-certifications': <Trophy size={20} className="text-accent-gold" />,
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">Experience & Certifications</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase size={24} className="text-accent-cyan" /> Work Experience
            </h3>
            <div className="relative pl-8 border-l-2 border-white/10 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-dark-primary border-[3px] border-accent-cyan" />
                  
                  <div className="font-mono text-accent-cyan text-sm mb-2">
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                  <p className="text-accent-violet font-medium mb-3">
                    {exp.company} • {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent-cyan"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Award size={24} className="text-accent-cyan" /> Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl p-5 glass-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {certIconMap[cert.id] || <ShieldCheck size={20} className="text-accent-cyan" />}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{cert.title}</h4>
                      <p className="text-accent-cyan text-sm">{cert.provider}</p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        {cert.date.split(' • ').map((d, i) => (
                          <span
                            key={i}
                            className={`text-xs ${i === 0 && d.startsWith('Re-certified') ? 'text-accent-gold font-semibold' : 'text-text-secondary'}`}
                          >
                            {i > 0 && <span className="text-white/20 mr-1.5">•</span>}{d}
                          </span>
                        ))}
                      </div>
                      <p><a href={cert.url} className="text-accent-violet text-sm hover:underline">View Certificate</a></p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
