import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95 shadow-sm group ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};
