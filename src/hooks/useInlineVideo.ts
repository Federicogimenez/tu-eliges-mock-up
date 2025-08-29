import { useEffect, useRef } from "react";

export function useInlineVideo<T extends HTMLVideoElement>() {
  const videoRef = useRef<T | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Asegurar que Safari lo tome inline
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    // Reintentar play cuando la pestaña vuelve a ser visible
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && video.paused) {
        video.play().catch(() => {
          // Safari a veces bloquea el autoplay, ignoramos error
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return videoRef;
}
