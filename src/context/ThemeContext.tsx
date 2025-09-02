import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeContextType } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Detectar preferencia del navegador al inicializar
  // useEffect(() => {
  //   const detectSystemTheme = (): Theme => {
  //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //       return 'dark';
  //     }
  //     return 'light';
  //   };

  //   // Verificar si hay tema guardado en localStorage
  //   const savedTheme = localStorage.getItem('theme') as Theme;
    
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   } else {
  //     // Si no hay tema guardado, usar la preferencia del sistema
  //     const systemTheme = detectSystemTheme();
  //     setTheme(systemTheme);
  //     localStorage.setItem('theme', systemTheme);
  //   }
  // }, []);

  // Aplicar el tema al documento
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme == 'dark' ? 'light' : 'dark');
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };