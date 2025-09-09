import { useEffect, useState } from "react";

// Extendemos Navigator para incluir la propiedad que no está tipada
declare global {
  interface Navigator {
    msMaxTouchPoints?: number;
  }
}

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints !== undefined
      );
    };

    setIsTouch(checkTouch());
  }, []);

  return isTouch;
}
