// src/hooks/useAnalytics.ts
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-HKXL7HMJYV";

export function useAnalytics() {
    const location = useLocation();
    const [searchParams] = useSearchParams();


  useEffect(() => {
    // Inicializar solo una vez
    if (!(window as any)._gaInitialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      (window as any)._gaInitialized = true;
    }


    const path = location.pathname;
    const campaign = searchParams.get('code') ? searchParams.get('code') : 'organic'

    // Detectar tipo de dispositivo
    const userAgent = navigator.userAgent.toLowerCase();
    const deviceType = /mobile/i.test(userAgent)
      ? "mobile"
      : /tablet/i.test(userAgent)
      ? "tablet"
      : "desktop";

    // Enviar evento de pageview
    ReactGA.send({
      hitType: "pageview",
      page: path,
      custom: {
        device_type: deviceType,
        campaign
      },
    });

    console.log(`[GA4] Pageview: ${path} | Campaign: ${campaign} | Device: ${deviceType}`);
  }, []);
}
