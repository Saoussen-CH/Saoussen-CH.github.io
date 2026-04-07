import { motion } from 'framer-motion';
import { profile } from '../data';

export function StatsBar() {
  return (
    <div className="relative z-20 px-6 md:px-12 lg:px-24 -mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-dark-primary/80 backdrop-blur-xl shadow-2xl px-8 py-5 flex items-center justify-between flex-wrap gap-6"
      >
        {profile.stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6">
            {i > 0 && <div className="hidden md:block w-px h-8 bg-white/10" />}
            <div>
              <div className={`text-2xl font-bold ${'featured' in stat && stat.featured ? 'text-accent-gold' : 'text-text-primary'}`}>
                {stat.value}
              </div>
              <div className="text-text-secondary text-xs mt-0.5">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
