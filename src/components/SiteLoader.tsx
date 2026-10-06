"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EXIT_DURATION_MS = 760;
const SAFETY_TIMEOUT_MS = 4500;

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const completing = useRef(false);
  const exitTimer = useRef<number | undefined>(undefined);

  const complete = useCallback(() => {
    if (completing.current) return;
    completing.current = true;

    document.documentElement.classList.remove("site-loading");
    setLeaving(true);
    exitTimer.current = window.setTimeout(() => setVisible(false), EXIT_DURATION_MS);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      completing.current = true;
      const hideTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(hideTimer);
    }

    document.documentElement.classList.add("site-loading");
    const safetyTimer = window.setTimeout(complete, SAFETY_TIMEOUT_MS);

    return () => {
      window.clearTimeout(safetyTimer);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      document.documentElement.classList.remove("site-loading");
    };
  }, [complete]);

  if (!visible) return null;

  return (
    <div
      className={`site-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Loading NESCO Pipe & Tubes"
      aria-live="polite"
    >
      <div className="site-loader-ambient" aria-hidden="true" />
      <div className="site-loader-shell">
        <div className="site-loader-meta">
          <span><i /> NESCO / INDUSTRIAL MATERIALS</span>
          <button type="button" onClick={complete}>Skip intro</button>
        </div>

        <div className="site-loader-stage">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/assets/brand/nesco-loader-poster.webp"
            onEnded={complete}
            onError={complete}
            aria-hidden="true"
          >
            <source src="/assets/brand/nesco-loader-mobile.mp4" type="video/mp4" media="(max-width: 600px)" />
            <source src="/assets/brand/nesco-loader.mp4" type="video/mp4" />
          </video>
          <div className="site-loader-vignette" aria-hidden="true" />
        </div>

        <div className="site-loader-status">
          <span>Engineering material supply</span>
          <div className="site-loader-progress" aria-hidden="true"><i /></div>
          <small>Loading experience</small>
        </div>
      </div>
    </div>
  );
}
