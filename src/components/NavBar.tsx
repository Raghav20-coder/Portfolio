import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function NavBar() {
  const [active, setActive] = useState('home');
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsTop(scrollY < 8);
      let current = 'home';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = s.id;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${isTop ? 'bg-white/80 dark:bg-slate-900/60' : 'bg-white/90 dark:bg-slate-900/80 shadow-sm'} backdrop-blur`}> 
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900 dark:text-white">Raghav Dixit</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`py-2 transition-colors ${active === s.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="ml-4 inline-flex md:hidden items-center rounded-lg px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700">
          Contact
        </a>
      </nav>
    </header>
  );
}



