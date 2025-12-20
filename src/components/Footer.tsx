import { profile } from '../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center">
      <p className="text-text-muted text-sm">
        Designed & Built by {profile.name} © {currentYear}
      </p>
    </footer>
  );
}
