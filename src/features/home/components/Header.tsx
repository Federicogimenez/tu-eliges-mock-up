import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

export const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full py-6 px-4">
      <div className="container mx-auto flex justify-center">
        <img
          src={theme === 'dark' ? '/uchooseit-black.svg' : '/uchooseit-white.svg'}
          alt="UChooseIt"
          className="h-8 md:h-10"
        />
      </div>
    </header>
  );
};