import { motion } from 'framer-motion';
import { Linkedin, Github, Calendar, Sparkles } from 'lucide-react';
import { profile, socialLinks } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={17} strokeWidth={1.8} />,
  github: <Github size={17} strokeWidth={1.8} />,
  medium: (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  ),
  substack: (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  ),
  sessionize: (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
      <path d="M12 0c6.628 0 12 5.372 12 12v10c0 1.097-.903 2-2 2h-7.5l-.001-.169c-.049-2.894-1.347-4.902-3.709-5.96L24 12l-.32-.109c-2.858-.999-5.251-2.462-7.18-4.391c-1.928-1.928-3.392-4.322-4.391-7.181L12 0L4 18c0 .667.167 1.167.5 1.5c.334.334.834.5 1.5.5l.187.001c3.771.04 5.313 1.295 5.313 3.999H2c-1.097 0-2-.903-2-2V2C0 .903.903 0 2 0h10Zm7.207 4.793c-.781-.781-1.73-1.097-2.121-.707c-.39.39-.074 1.34.707 2.121c.781.781 1.731 1.098 2.121.707c.391-.39.074-1.34-.707-2.121Z" />
    </svg>
  ),
  calendar: <Calendar size={17} strokeWidth={1.8} />,
};

function Portrait() {
  return (
    <div className="relative">
      <div
        className="absolute -right-3 -bottom-4 -left-3 top-6 rounded-t-[6rem] rounded-b-[1.6rem]"
        style={{ background: 'linear-gradient(135deg, #DDD6FE 0%, #BFDBFE 100%)' }}
        aria-hidden
      />
      <div className="relative mt-4 overflow-hidden rounded-t-[6rem] rounded-b-[1.6rem] shadow-[0_30px_60px_-20px_rgba(14,14,26,0.22)]">
        <img
          src="/profile-photo-opt.png"
          alt={`${profile.name}, ${profile.title}`}
          loading="eager"
          fetchPriority="high"
          className="block w-[220px] h-[290px] md:w-[260px] md:h-[340px] object-cover object-top"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14,14,26,0.075) 1.1px, transparent 1.1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden
      />
      <div
        className="absolute -right-40 -top-24 w-[820px] h-[820px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(196,181,253,0.55) 0%, rgba(147,197,253,0.35) 45%, rgba(255,255,255,0) 70%)',
          filter: 'blur(20px)',
        }}
        aria-hidden
      />
      <div
        className="absolute -right-20 bottom-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(147,197,253,0.50) 0%, rgba(255,255,255,0) 65%)',
          filter: 'blur(30px)',
        }}
        aria-hidden
      />
      <div
        className="absolute -left-32 bottom-8 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(247,199,189,0.28) 0%, rgba(255,255,255,0) 65%)',
          filter: 'blur(40px)',
        }}
        aria-hidden
      />

      <div className="relative flex-1 flex items-center w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-6">
        <div className="w-full grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-center">

          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/90 backdrop-blur border border-line px-3 py-1.5 text-[12px] font-semibold text-ink-2 shadow-sm">
                <Sparkles size={12} style={{ color: '#F59E0B' }} strokeWidth={2.2} />
                Google Developer Expert · Cloud AI
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/90 backdrop-blur border border-line px-3 py-1.5 text-[12px] font-semibold text-ink-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-8 md:mt-10 font-display font-black leading-[0.95] tracking-[-0.035em]"
            >
              <span className="block text-[30px] md:text-[36px] lg:text-[40px] text-ink-2 font-semibold mb-5 tracking-normal">
                Hi, I'm Saoussen.
              </span>
              <span className="block text-[28px] md:text-[38px] lg:text-[46px] text-ink">
                I design and ship
              </span>
              <span className="block text-[28px] md:text-[38px] lg:text-[46px] accent">
                production AI solutions.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 md:mt-6 max-w-none lg:pr-6 text-[15px] md:text-[16px] leading-relaxed text-ink-2"
            >
              AI Solutions Engineer focused on agentic architectures, MLOps, and AI product
              strategy. I help teams turn ambitious ideas into systems that run in production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://calendly.com/saoussen-chaabnia-pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-[15px] font-semibold transition-all hover:bg-ink-2 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Calendar size={16} strokeWidth={2} />
                Schedule a call
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-5 flex items-center gap-3"
            >
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 rounded-xl bg-paper border border-line grid place-items-center text-ink-3 hover:text-coral hover:border-coral/40 hover:-translate-y-0.5 transition-all"
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end lg:-mt-16"
          >
            <Portrait />
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-line border-y border-line bg-paper/60 backdrop-blur-sm">
          {profile.stats.map((s, i) => (
            <div key={i} className="py-3 md:py-4 px-3 text-center">
              <div className={`font-display font-black text-[24px] md:text-[26px] leading-none ${
                s.featured ? 'text-coral' : 'text-ink'
              }`}>
                {s.value}
              </div>
              <div className="mt-2 text-[12px] md:text-[13px] font-medium text-ink-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
