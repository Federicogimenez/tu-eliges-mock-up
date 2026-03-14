import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountry } from '../../hooks/useCountry';
import { COUNTRIES, COUNTRY_CODES } from '../../types/country';
import type { CountryCode } from '../../types/country';

const CountrySwitcher = () => {
  const { country, setCountry } = useCountry();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = COUNTRIES[country];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: CountryCode) => {
    setCountry(code);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-1.5 px-2 py-1 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer text-sm"
      >
        <span className="text-base">{current.flag}</span>
        <span className="text-gray-800 dark:text-gray-200 font-medium text-xs">
          {current.label.split(' ')[0].substring(0, 3).toUpperCase()}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/15 rounded-lg shadow-lg overflow-hidden z-50 min-w-[160px]"
          >
            {COUNTRY_CODES.map((code) => {
              const config = COUNTRIES[code];
              return (
                <button
                  key={code}
                  onClick={() => handleSelect(code)}
                  className={`w-full flex items-center gap-x-2 px-3 py-2 text-sm transition-colors cursor-pointer ${
                    code === country
                      ? 'bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="text-base">{config.flag}</span>
                  <span>{config.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySwitcher;
