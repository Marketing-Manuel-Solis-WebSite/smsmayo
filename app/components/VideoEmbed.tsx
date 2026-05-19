"use client";

const VIDEO_SRC =
  "https://iframe.mediadelivery.net/embed/547379/ea34ee45-a75e-4646-958a-a4c343dad94b?autoplay=true&muted=true&loop=true&preload=true&responsive=true";

export default function VideoEmbed() {
  return (
    <div className="video-wrapper ring-1 ring-gold/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
      <iframe
        src={VIDEO_SRC}
        title="Law Offices Of Manuel Solis"
        loading="eager"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}
