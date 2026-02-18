import { useEffect, useRef } from 'react';

export const useJsonLd = (data: Record<string, unknown> | Record<string, unknown>[]) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
