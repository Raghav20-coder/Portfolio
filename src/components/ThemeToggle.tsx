import { useEffect, useState } from 'react';
import { applyTheme, getInitialTheme } from '../utils/theme';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());
  useEffect(() => { applyTheme(theme); }, [theme]);
  const isDark = theme === 'dark';
  return (
    <button aria-label="Toggle theme" className="btn flex items-center gap-2" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      <motion.div layout transition={{ type: 'spring', stiffness: 400, damping: 30 }} className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div layout className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white dark:bg-slate-300" animate={{ x: isDark ? 24 : 0 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
      </motion.div>
      <span className="text-sm text-slate-600 dark:text-slate-300">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
