import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative block cursor-pointer size-10 rounded-full overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
        <img 
          src="/day-mode.svg" 
          alt="Switch to light mode" 
          className={`absolute left-1/2 top-1/2 -translate-1/2 size-3/6 transition-all rounded-full duration-300  ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        />
        <img 
          src="/night-mode.svg" 
          alt="Switch to dark mode" 
          className={`absolute left-1/2 top-1/2 -translate-1/2 size-3/6 rounded-full transition-all duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        />
    </button>
  );
};