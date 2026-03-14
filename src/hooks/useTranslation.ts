import { useMemo, useCallback } from 'react';
import { useCountry } from './useCountry';
import type { CountryCode } from '../types/country';

import us from '../translates/us.json';
import bra from '../translates/bra.json';
import arg from '../translates/arg.json';
import col from '../translates/col.json';
import mex from '../translates/mex.json';

type TranslationValue = string | Record<string, unknown>;
type TranslationFile = Record<string, unknown>;

const translations: Record<CountryCode, TranslationFile> = { usa: us, bra, arg, col, mex };

const getNestedValue = (obj: Record<string, unknown>, path: string): TranslationValue | undefined => {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return current as TranslationValue | undefined;
};

const interpolate = (text: string, vars?: Record<string, string>): string => {
  if (!vars) return text;
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => vars[key] ?? `{{${key}}}`);
};

export const useTranslation = () => {
  const { country } = useCountry();

  const currentTranslations = useMemo(() => translations[country], [country]);
  const fallbackTranslations = useMemo(() => translations.usa, []);

  const t = useCallback((key: string, vars?: Record<string, string>): string => {
    let value = getNestedValue(currentTranslations, key);

    if (value === undefined || typeof value !== 'string') {
      value = getNestedValue(fallbackTranslations, key);
    }

    if (value === undefined || typeof value !== 'string') {
      if (import.meta.env.DEV) {
        console.warn(`[i18n] Missing translation key: "${key}"`);
      }
      return key;
    }

    return interpolate(value, vars);
  }, [currentTranslations, fallbackTranslations]);

  const tHtml = useCallback((key: string, vars?: Record<string, string>): { __html: string } => {
    return { __html: t(key, vars) };
  }, [t]);

  return { t, tHtml };
};
