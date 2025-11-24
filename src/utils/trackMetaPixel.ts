
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export type MetaPixelEvent =
  | "PageView"
  | "ViewContent"
  // | "AddToCart"
  | "InitiateCheckout"
  | "Purchase"
  | string; // permite custom events

export interface MetaPixelParams {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  contents?: { id: string; quantity: number }[];
  [key: string]: any; // extensible
}

export const trackMetaEvent = (
  event: MetaPixelEvent,
  params?: MetaPixelParams
): void => {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") {
    console.warn("[Meta Pixel] fbq no está cargado aún.");
    return;
  }

  if (params) {
    window.fbq("track", event, params);
  } else {
    window.fbq("track", event);
  }
};
