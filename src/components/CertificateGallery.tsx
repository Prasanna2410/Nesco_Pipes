"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, X } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

const certificates = [
  {
    standard: "ISO 9001:2015",
    title: "Quality Management System",
    shortTitle: "Quality management",
    image: "/assets/certificates/iso-9001-2015.jpg",
    width: 1241,
    height: 1754,
    number: "IN/89526355/1684",
    issued: "09 July 2026",
    expires: "08 July 2029",
    accent: "#35a2ff",
    copy: "A structured quality-management framework supporting consistent processes, controlled documentation and continual improvement.",
  },
  {
    standard: "ISO 14001:2015",
    title: "Environmental Management System",
    shortTitle: "Environmental management",
    image: "/assets/certificates/iso-14001-2015.jpg",
    width: 1241,
    height: 1754,
    number: "IN/35826356/2584",
    issued: "09 July 2026",
    expires: "08 July 2029",
    accent: "#31c4c8",
    copy: "A recognised framework for managing environmental responsibilities through defined controls, monitoring and improvement.",
  },
  {
    standard: "ISO 45001:2018",
    title: "Occupational Health & Safety Management",
    shortTitle: "Health & safety management",
    image: "/assets/certificates/iso-45001-2018.jpg",
    width: 1241,
    height: 1754,
    number: "IN/92826357/6185",
    issued: "09 July 2026",
    expires: "08 July 2029",
    accent: "#6e8cff",
    copy: "A management-system framework focused on workplace risk, operational controls and continual improvement in health and safety.",
  },
  {
    standard: "PED 2014/68/EU",
    title: "Pressure Equipment Directive",
    shortTitle: "Pressure equipment",
    image: "/assets/certificates/ped-2014-68-eu.jpg",
    width: 1500,
    height: 1950,
    number: "SR/4978654/2026",
    issued: "09 July 2026",
    expires: "08 July 2029",
    accent: "#ff7657",
    copy: "Certification covering the stated pressure-equipment product scope under the European Pressure Equipment Directive.",
  },
] as const;

export function CertificateGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? 0 : (current + 1) % certificates.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? 0 : (current - 1 + certificates.length) % certificates.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const activeCertificate = activeIndex === null ? null : certificates[activeIndex];

  return (
    <>
      <div className="certificate-gallery-grid">
        {certificates.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={certificate.standard}
            style={{ "--certificate-accent": certificate.accent } as CSSProperties}
          >
            <button
              className="certificate-preview"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${certificate.standard} certificate`}
            >
              <span className="certificate-preview-glow" />
              <Image
                src={certificate.image}
                alt={`${certificate.standard} certificate issued to NESCO Pipe & Tubes`}
                width={certificate.width}
                height={certificate.height}
                sizes="(max-width: 720px) 88vw, (max-width: 1200px) 42vw, 31vw"
              />
              <span className="certificate-zoom"><Maximize2 aria-hidden="true" /> View full certificate</span>
            </button>

            <div className="certificate-card-copy">
              <div className="certificate-card-topline">
                <span>{String(index + 1).padStart(2, "0")} / 04</span>
                <b><i /> Active</b>
              </div>
              <small>{certificate.shortTitle}</small>
              <h3>{certificate.standard}</h3>
              <p>{certificate.copy}</p>
              <dl>
                <div><dt>Certificate no.</dt><dd>{certificate.number}</dd></div>
                <div><dt>Issue date</dt><dd>{certificate.issued}</dd></div>
                <div><dt>Valid until</dt><dd>{certificate.expires}</dd></div>
              </dl>
              <button className="certificate-view-button" type="button" onClick={() => setActiveIndex(index)}>
                Inspect credential <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="certificate-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCertificate.standard} certificate preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveIndex(null)}
          >
            <motion.div
              className="certificate-lightbox-panel"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="certificate-lightbox-bar">
                <span><ShieldCheck aria-hidden="true" /> {activeCertificate.standard}</span>
                <div>
                  <a href={activeCertificate.image} target="_blank" rel="noreferrer">Open original <ArrowUpRight aria-hidden="true" /></a>
                  <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close certificate preview" autoFocus><X /></button>
                </div>
              </div>
              <div className="certificate-lightbox-image">
                <Image
                  src={activeCertificate.image}
                  alt={`${activeCertificate.standard} certificate issued to NESCO Pipe & Tubes`}
                  fill
                  sizes="92vw"
                  priority
                />
              </div>
              <div className="certificate-lightbox-controls">
                <button type="button" onClick={() => setActiveIndex((activeIndex! - 1 + certificates.length) % certificates.length)} aria-label="Previous certificate"><ChevronLeft /></button>
                <span>{String(activeIndex! + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span>
                <button type="button" onClick={() => setActiveIndex((activeIndex! + 1) % certificates.length)} aria-label="Next certificate"><ChevronRight /></button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
