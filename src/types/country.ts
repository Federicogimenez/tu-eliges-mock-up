export type CountryCode = 'usa' | 'bra' | 'arg' | 'col' | 'mex';

export interface CountryConfig {
  code: CountryCode;
  label: string;
  flag: string;
  locale: string;
}

export interface CountryContextType {
  country: CountryCode;
  setCountry: (code: CountryCode) => void;
  countryConfig: CountryConfig;
}

export const COUNTRIES: Record<CountryCode, CountryConfig> = {
  usa: { code: 'usa', label: 'English', flag: '🇺🇸', locale: 'en-US' },
  bra: { code: 'bra', label: 'Português', flag: '🇧🇷', locale: 'pt-BR' },
  arg: { code: 'arg', label: 'Español (AR)', flag: '🇦🇷', locale: 'es-AR' },
  col: { code: 'col', label: 'Español (CO)', flag: '🇨🇴', locale: 'es-CO' },
  mex: { code: 'mex', label: 'Español (MX)', flag: '🇲🇽', locale: 'es-MX' },
};

export const COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[];
