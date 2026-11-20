"use client";

import { useEffect, useRef } from "react";
import { trackVideo } from "../lib/tracking";

// Video «Hermanos en apuros» (ROI SMS) en la CDN de Bunny. El embed anterior de
// Bunny Stream (ea34ee45…) dejó de existir el 2026-11-20.
const VIDEO_SRC =
  "https://SolisPullZone.b-cdn.net/ROI%20SMS/HERMANOS%20EN%20APUROS%20ACT.mp4";

export default function VideoEmbed() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React no escribe el atributo «muted» en el HTML; sin él iOS no reproduce solo.
    v.muted = true;
    v.play().catch(() => {});

    let conSonido = false;
    let terminado = false;
    const onVolume = () => {
      if (!conSonido && !v.muted && v.volume > 0) {
        conSonido = true;
        trackVideo("video_sonido");
      }
    };
    const onTime = () => {
      if (!terminado && v.duration && v.currentTime >= v.duration - 1) {
        terminado = true;
        trackVideo("video_terminado");
      }
    };
    v.addEventListener("volumechange", onVolume);
    v.addEventListener("timeupdate", onTime);
    return () => {
      v.removeEventListener("volumechange", onVolume);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  return (
    <div className="video-wrapper ring-1 ring-gold/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
      <video
        ref={ref}
        src={VIDEO_SRC}
        poster="/video-poster.jpg"
        title="Law Offices Of Manuel Solis"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />
    </div>
  );
}
