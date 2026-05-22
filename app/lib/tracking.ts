export const PHONE_NUMBER_DISPLAY = "+1 (713) 322-7646";
export const PHONE_NUMBER_TEL = "+17133227646";

export type CallEventPayload = {
  event: "call_click";
  location: string;
  phone: string;
  timestamp: string;
  page: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackCallClick(location: string): void {
  if (typeof window === "undefined") return;

  const payload: CallEventPayload = {
    event: "call_click",
    location,
    phone: PHONE_NUMBER_TEL,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "call_click", {
      event_category: "engagement",
      event_label: location,
      phone_number: PHONE_NUMBER_TEL,
    });
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      content_name: "call_click",
      content_category: location,
    });
  }

  window.dispatchEvent(
    new CustomEvent("call_click", { detail: payload }),
  );

  if (process.env.NODE_ENV !== "production") {
    console.info("[tracking] call_click", payload);
  }
}
