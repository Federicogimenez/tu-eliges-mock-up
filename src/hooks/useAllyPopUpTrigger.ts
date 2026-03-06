import { useState, useEffect, useCallback } from 'react';

let alreadyShown = false;

export default function useAllyPopUpTrigger(enabled: boolean) {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (!enabled || alreadyShown) return;

    let intersectionObs: IntersectionObserver | null = null;

    const observeTarget = (target: Element) => {
      intersectionObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            alreadyShown = true;
            setShowPopUp(true);
            intersectionObs?.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      intersectionObs.observe(target);
    };

    const existing = document.getElementById('pricing-section');
    if (existing) {
      observeTarget(existing);
      return () => intersectionObs?.disconnect();
    }

    const mutationObs = new MutationObserver(() => {
      const target = document.getElementById('pricing-section');
      if (target) {
        mutationObs.disconnect();
        observeTarget(target);
      }
    });

    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObs.disconnect();
      intersectionObs?.disconnect();
    };
  }, [enabled]);

  const closePopUp = useCallback(() => setShowPopUp(false), []);

  return { showPopUp, closePopUp };
}
