import React, { createContext, useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { CountryCode, CountryContextType } from '../types/country';
import { COUNTRIES, COUNTRY_CODES } from '../types/country';

const STORAGE_KEY = 'uchooseit-country';
const QUERY_PARAM = 'country';
const DEFAULT_COUNTRY: CountryCode = 'usa';

const CountryContext = createContext<CountryContextType | undefined>(undefined);

interface CountryProviderProps {
  children: ReactNode;
}

const isValidCountry = (value: string | null): value is CountryCode =>
  value !== null && COUNTRY_CODES.includes(value as CountryCode);

const getInitialCountry = (): CountryCode => {
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get(QUERY_PARAM);

  if (isValidCountry(paramValue)) {
    localStorage.setItem(STORAGE_KEY, paramValue);
    return paramValue;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (isValidCountry(stored)) {
    return stored;
  }

  return DEFAULT_COUNTRY;
};

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [country, setCountryState] = useState<CountryCode>(getInitialCountry);

  const setCountry = (code: CountryCode) => {
    setCountryState(code);
    localStorage.setItem(STORAGE_KEY, code);

    const url = new URL(window.location.href);
    url.searchParams.set(QUERY_PARAM, code);
    window.history.replaceState({}, '', url.toString());
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get(QUERY_PARAM);

    if (isValidCountry(paramValue) && paramValue !== country) {
      setCountryState(paramValue);
      localStorage.setItem(STORAGE_KEY, paramValue);
    }
  }, [country]);

  const contextValue: CountryContextType = useMemo(() => ({
    country,
    setCountry,
    countryConfig: COUNTRIES[country],
  }), [country]);

  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext };
