import { motion } from 'framer-motion';
import { ArrowRight, Star, Linkedin, Github, Calendar } from 'lucide-react';
import { profile, socialLinks } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={18} />,
  github: <Github size={18} />,
  medium: (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  ),
  substack: (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  ),
  sessionize: (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
      <path d="M12 0c6.628 0 12 5.372 12 12v10c0 1.097-.903 2-2 2h-7.5l-.001-.169c-.049-2.894-1.347-4.902-3.709-5.96L24 12l-.32-.109c-2.858-.999-5.251-2.462-7.18-4.391c-1.928-1.928-3.392-4.322-4.391-7.181L12 0L4 18c0 .667.167 1.167.5 1.5c.334.334.834.5 1.5.5l.187.001c3.771.04 5.313 1.295 5.313 3.999H2c-1.097 0-2-.903-2-2V2C0 .903.903 0 2 0h10Zm7.207 4.793c-.781-.781-1.73-1.097-2.121-.707c-.39.39-.074 1.34.707 2.121c.781.781 1.731 1.098 2.121.707c.391-.39.074-1.34-.707-2.121Z" />
    </svg>
  ),
  calendar: <Calendar size={18} />,
};

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col relative">

      {/* Main content — fills available space */}
      <div className="flex-1 flex items-center w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 pt-20 pb-4">

        {/* Left: Content */}
        <div>
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row flex-wrap gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full whitespace-nowrap">
              <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse flex-shrink-0" />
              <span className="text-accent-cyan text-xs">{profile.availability}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full whitespace-nowrap">
              <Star size={12} className="text-accent-gold fill-accent-gold flex-shrink-0" />
              <span className="text-accent-gold text-xs">Google Developer Expert • Cloud AI</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold leading-tight mb-6"
          >
            <span className="block text-3xl md:text-4xl text-text-primary mb-1">Hi, I'm</span>
            <span className="block text-4xl md:text-5xl gradient-text">Saoussen Chaabnia</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-accent-cyan font-medium mb-4 whitespace-nowrap"
          >
            {profile.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-text-secondary mb-8 text-justify"
          >
            {profile.heroDescription}
          </motion.p>

          {/* Social icons + Schedule a Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 flex-wrap"
          >
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-cyan transition-colors"
              >
                {iconMap[link.icon]}
              </a>
            ))}
            <div className="w-px h-8 bg-white/10 mx-1" />
            <a href="https://calendly.com/saoussen-chaabnia-pro/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Schedule a Call
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex items-center justify-end"
        >
          <div className="relative">
            {/* Glow background — stronger */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent-cyan/50 via-accent-violet/40 to-accent-magenta/30 blur-3xl opacity-80" />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-violet/30 to-accent-cyan/20 blur-xl" />
            {/* Photo */}
            <img
              src="/profile-photo.png"
              alt={`${profile.name} - ${profile.title}`}
              loading="eager"
              fetchPriority="high"
              className="relative w-80 h-80 object-cover rounded-3xl border border-white/20 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats overlay — pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full px-6 md:px-12 lg:px-24 pb-16 relative z-20 -mb-8"
      >
        <div className="max-w-3xl mx-auto rounded-xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-6 py-3 grid grid-cols-5 divide-x divide-white/10">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center px-3">
              <div className={`text-lg font-bold ${'featured' in stat && stat.featured ? 'text-accent-gold' : 'text-text-primary'}`}>
                {stat.value}
              </div>
              <div className="text-text-secondary text-[10px] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
