import { useState, useEffect, useCallback } from 'react';

let alreadyShown = false;

export default function useAllyPopUpTrigger(enabled: boolean) {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (!enabled || alreadyShown) return;

    const timer = setTimeout(() => {
      alreadyShown = true;
      setShowPopUp(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [enabled]);

  const closePopUp = useCallback(() => setShowPopUp(false), []);

  return { showPopUp, closePopUp };
}
