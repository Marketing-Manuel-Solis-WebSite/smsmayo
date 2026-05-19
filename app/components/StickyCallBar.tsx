"use client";

import { useEffect, useState } from "react";
import CallButton from "./CallButton";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={[
        "fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-6",
        "sticky-cta pointer-events-none",
        "transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto max-w-md">
        <CallButton
          location="sticky_footer"
          label="Llame ahora"
          subLabel="Atención disponible"
          variant="primary"
          size="lg"
          pulse
          showNumber
        />
      </div>
    </div>
  );
}
