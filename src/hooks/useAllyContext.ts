import { useContext } from 'react';
import { AllyContext } from '../context/AllyContext';
import type { AllyContextType } from '../types/ally';

export const useAllyContext = (): AllyContextType => {

  const context = useContext(AllyContext);
    
  if (context === undefined) {
    throw new Error('useAllyContext must be used within an AllyProvider');
  }
  return context;
};