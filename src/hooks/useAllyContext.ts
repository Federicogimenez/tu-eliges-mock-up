import { useContext } from 'react';
import type { AllyContextType } from '../types/ally';
import { AllyContext } from '../context/AllyContext';

export const useAllyContext = (): AllyContextType => {
  const context = useContext(AllyContext);
  if (context === undefined) {
    throw new Error('useAllyContext must be used within an AllyProvider');
  }
  return context;
};