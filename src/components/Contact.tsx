import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, Linkedin, Github, Mail } from 'lucide-react';
import { socialLinks } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={18} strokeWidth={1.8} />,
  github: <Github size={18} strokeWidth={1.8} />,
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
};

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative cta-wash py-28 md:py-36 border-t border-line overflow-hidden grain">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-rose blur-3xl opacity-60 animate-float-slow" />
        <div className="absolute -bottom-40 -right-20 w-[560px] h-[560px] rounded-full bg-lavender-2 blur-3xl opacity-70 animate-float-slower" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Contact</p>
          <h2 className="mt-4 font-display font-black text-[28px] md:text-[36px] lg:text-[44px] leading-[1.05] text-ink">
            Let's build <span className="accent">together.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[560px] text-[17px] leading-relaxed text-ink-2">
            I'm open to consulting engagements, speaking invitations, and collaborations on agentic
            AI, solution architecture, and AI product strategy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 grid sm:grid-cols-2 gap-5 max-w-[780px] mx-auto"
        >
          <a
            href="https://calendly.com/saoussen-chaabnia-pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2.5xl bg-ink text-paper p-8 md:p-10 overflow-hidden text-center"
          >
            <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-coral/25 blur-3xl transition-transform group-hover:scale-125" />
            <div className="relative flex flex-col items-center">
              <span className="w-11 h-11 rounded-lg bg-paper/10 grid place-items-center mb-5">
                <Calendar size={19} strokeWidth={1.8} />
              </span>
              <h3 className="text-[24px] md:text-[26px] font-bold leading-tight">Book a call</h3>
              <p className="mt-2 text-[13px] text-paper/70">30 minutes · Calendly</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: '#F59E0B' }}>
                Schedule <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>

          <a
            href="mailto:consulting@saoussen-chaabnia-ai.com"
            className="group relative block rounded-2.5xl bg-paper border border-line p-8 md:p-10 overflow-hidden text-center shadow-sm hover:border-coral/40 transition-colors"
          >
            <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-coral/15 blur-3xl transition-transform group-hover:scale-125" />
            <div className="relative flex flex-col items-center">
              <span className="w-11 h-11 rounded-lg bg-coral/10 text-coral grid place-items-center mb-5">
                <Mail size={19} strokeWidth={1.8} />
              </span>
              <h3 className="text-[24px] md:text-[26px] font-bold leading-tight text-ink">Send an email</h3>
              <p className="mt-2 text-[13px] text-ink-3 break-all">consulting@saoussen-chaabnia-ai.com</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-coral">
                Write <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {socialLinks.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-paper border border-line text-ink hover:border-coral/40 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <span className="text-coral transition-colors">
                {iconMap[s.icon]}
              </span>
              <span className="text-[13px] font-semibold group-hover:text-coral transition-colors">{s.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
