import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AllyContextType, AllyDataProps } from '../types/ally';
import { fetchAllyData } from '../lib/allyApi';

const defaultAllyData: AllyDataProps = {
  alliedName: '',
  alliedCompanyImg: '',
  alliedCuponCode: '',
  discount_percent: 0,
  membership_anual_fee: 48,
  new_price_after_discount: 48,
  isLoading: false,
  userNotFound: false
};

const AllyContext = createContext<AllyContextType | undefined>(undefined);

interface AllyProviderProps {
  children: ReactNode;
}

export const AllyProvider: React.FC<AllyProviderProps> = ({ children }) => {
  const [code, setCode] = useState<string | null>(null);
  const [allyData, setAllyData] = useState<AllyDataProps>(defaultAllyData);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Solo ejecutar una vez al montar el componente
    if (hasInitialized) return;

    const extractCodeFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const codeParam = urlParams.get('code');
      
      if (codeParam) {
        setCode(codeParam);
        // Marcar como loading mientras se hace la consulta
        setAllyData(prev => ({ ...prev, isLoading: true }));
        
        // Hacer la consulta a la API
        fetchAllyData(codeParam)
          .then((data) => {
            setAllyData(data);
          })
          .catch((error) => {
            console.error('Error loading ally data:', error);
            setAllyData(prev => ({ 
              ...prev, 
              isLoading: false, 
              userNotFound: true,
              alliedCuponCode: codeParam
            }));
          });
      }
    };

    extractCodeFromURL();
    setHasInitialized(true);
  }, [hasInitialized]);

  const contextValue: AllyContextType = {
    code,
    allyData
  };

  return (
    <AllyContext.Provider value={contextValue}>
      {children}
    </AllyContext.Provider>
  );
};

export { AllyContext };