import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#talks', label: 'Speaking' },
  { href: '#writing', label: 'Articles' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-50% 0px -40% 0px' }
    );
    NAV.forEach(n => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-paper/85 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex">
            <span className="w-1 h-6 rounded-sm bg-coral mr-0.5" />
            <span className="w-1 h-4 rounded-sm bg-coral-2 mr-0.5 translate-y-1" />
            <span className="w-1 h-5 rounded-sm bg-violet translate-y-0.5" />
          </span>
          <span className="font-display font-black text-[15px] tracking-tight text-ink">
            SAOUSSEN <span className="italic text-coral font-black mx-0.5">AI</span> CHAABNIA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[14px] font-medium transition-colors ${
                active === n.href ? 'text-ink' : 'text-ink-3 hover:text-ink'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-4 py-2 text-[13px] font-semibold hover:bg-ink-2 transition-colors"
          >
            Get in touch <ArrowRight size={14} strokeWidth={2.25} />
          </a>
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-line bg-paper shadow-sm hover:bg-mist transition-colors"
          >
            {open ? (
              <span className="relative w-5 h-5">
                <span className="absolute inset-x-0 top-1/2 h-0.5 bg-ink rotate-45" />
                <span className="absolute inset-x-0 top-1/2 h-0.5 bg-ink -rotate-45" />
              </span>
            ) : (
              <span className="flex flex-col gap-[5px]">
                <span className="w-5 h-0.5 bg-ink rounded-full" />
                <span className="w-5 h-0.5 bg-ink rounded-full" />
                <span className="w-5 h-0.5 bg-ink rounded-full" />
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-line">
          <div className="max-w-[1320px] mx-auto px-6 py-4 grid gap-2">
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[15px] font-medium text-ink-2"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full justify-center">
              Get in touch <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
