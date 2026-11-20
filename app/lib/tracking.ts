import { track } from "@vercel/analytics";

// A dónde llevan todos los botones (antes eran llamadas a +1 713 322-7646).
// Los utm_* dejan ver en las analíticas del sitio cuánta gente llegó desde este SMS.
export const SITE_URL =
  "https://www.manuelsolis.com/es?utm_source=sms&utm_medium=sms&utm_campaign=sms-mayo";
export const SITE_DISPLAY = "www.manuelsolis.com";

// Cuenta cada toque a un botón en Vercel Web Analytics (evento «click_sitio»).
export function trackSiteClick(location: string): void {
  track("click_sitio", { ubicacion: location });
}

export function trackVideo(evento: "video_sonido" | "video_terminado"): void {
  track(evento);
}
