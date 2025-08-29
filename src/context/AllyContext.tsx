import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AllyContextType, AllyDataProps } from '../types/ally';
import { fetchAllyData } from '../lib/allyApi';

const defaultAllyData: AllyDataProps = {
  alliedName: '',
  alliedCompanyImg: '/icons/user_no_image.jpg',
  alliedCuponCode: '',
  discount_percent: 0,
  membership_anual_fee: 47.99,
  new_price_after_discount: 47.99,
  isLoading: true,
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

  const recurlyUrl = 'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD'
  const recurlyCuponUrl = 'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='

  useEffect(() => {
    // Solo ejecutar una vez al montar el componente
    if (hasInitialized) return;

    const extractCodeFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const codeParam = urlParams.get('code');
      
      if (codeParam) {
        setCode(recurlyCuponUrl + codeParam);
        // Actualizar LocalStorage con el nuevo código
        localStorage.setItem('ally-code', codeParam);
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
      } else {
        // Buscar código en LocalStorage
        const storedCode = localStorage.getItem('ally-code');
        if (storedCode) {
          setCode(recurlyCuponUrl + storedCode);
          // Marcar como loading mientras se hace la consulta
          setAllyData(prev => ({ ...prev, isLoading: true }));
          
          // Hacer la consulta a la API con el código almacenado
          fetchAllyData(storedCode)
            .then((data) => {
              setAllyData(data);
            })
            .catch((error) => {
              console.error('Error loading ally data:', error);
              setAllyData(prev => ({
                ...prev,
                isLoading: false,
                userNotFound: true,
                alliedCuponCode: storedCode
              }));
            });
        } else {
          setAllyData(prev => ({
            ...prev,
            isLoading: false,
          }))
        }
        // Si no existe código en LocalStorage, no hacer nada
      }
    };

    extractCodeFromURL();
    setHasInitialized(true);
  }, [hasInitialized]);

  const contextValue: AllyContextType = {
    recurlyUrl,
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