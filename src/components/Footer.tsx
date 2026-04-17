import { profile, socialLinks } from '../data';

const NAV_GROUPS = [
  { title: 'Practice', links: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ]},
  { title: 'Credentials', links: [
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
  ]},
  { title: 'Output', links: [
    { label: 'Articles', href: '#writing' },
    { label: 'Speaking', href: '#talks' },
  ]},
];

export function Footer() {
  return (
    <footer className="bg-night text-paper/80 pt-16 pb-6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-x-6 gap-y-10 pb-10 border-b border-paper/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex">
                <span className="w-1 h-6 rounded-sm bg-coral mr-0.5" />
                <span className="w-1 h-4 rounded-sm bg-coral-2 mr-0.5 translate-y-1" />
                <span className="w-1 h-5 rounded-sm bg-violet-2 translate-y-0.5" />
              </span>
              <span className="font-display font-black text-[15px] tracking-tight text-paper">
                SAOUSSEN <span className="italic text-coral-2 font-black mx-0.5">AI</span> CHAABNIA
              </span>
            </div>
            <p className="max-w-[420px] text-[14px] leading-relaxed text-paper/60">
              I design and ship production-grade AI systems. Agentic architecture, solution
              design, MLOps.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
              Based in {profile.location} · Working worldwide
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-5 gap-4">
            {NAV_GROUPS.map(g => (
              <div key={g.title}>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider2 text-coral-2 mb-4">{g.title}</p>
                <ul className="space-y-2">
                  {g.links.map(l => (
                    <li key={l.href}>
                      <a href={l.href} className="text-[14px] text-paper/70 hover:text-paper transition-colors">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-2">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider2 text-coral-2 mb-4">Connect</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 w-fit">
                <li>
                  <a href="#contact" className="text-[14px] text-paper/70 hover:text-paper transition-colors">Contact</a>
                </li>
                {socialLinks.map(s => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                      className="text-[14px] text-paper/70 hover:text-paper transition-colors">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <p className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50 text-center">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
