import { useEffect, useState } from "react";

export default function useIsInView(
  element: React.RefObject<Element | null>,
  options?: IntersectionObserverInit
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!element.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options } 
    );

    observer.observe(element.current);

    return () => {
      // if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [element, options]);

  return isInView ;
}
