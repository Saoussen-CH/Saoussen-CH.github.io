import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { profile } from '../data';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
          <span className="text-accent-cyan text-sm">{profile.availability}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-accent-cyan font-medium mb-4"
        >
          {profile.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-text-secondary max-w-2xl mb-8"
        >
          {profile.heroDescription}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Decorative Orbits with Profile Photo */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${100 - (i - 1) * 25}%`,
              height: `${100 - (i - 1) * 25}%`,
              top: `${(i - 1) * 12.5}%`,
              left: `${(i - 1) * 12.5}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 - i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div
              className={`absolute w-3 h-3 rounded-full -top-1.5 left-1/2 ${
                i === 1 ? 'bg-accent-cyan' : i === 2 ? 'bg-accent-violet' : 'bg-accent-magenta'
              }`}
            />
          </motion.div>
        ))}
        {/* Profile Photo in Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute w-32 h-32 top-1/2 left-1/2"
        >
          <img
            src="/profile-photo.png"
            alt={profile.name}
            className="w-full h-full object-cover rounded-full border-4 border-accent-cyan/50 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
