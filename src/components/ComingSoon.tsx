import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon-grid" aria-hidden="true" />
      <div className="coming-soon-glow coming-soon-glow-one" aria-hidden="true" />
      <div className="coming-soon-glow coming-soon-glow-two" aria-hidden="true" />

      <header className="coming-soon-header">
        <div className="coming-soon-logo">
          <Image
            src="/assets/nesco-logo-provided.png"
            alt="NESCO Pipe & Tubes"
            width={500}
            height={200}
            priority
          />
        </div>
        <div className="coming-soon-location">
          <MapPin aria-hidden="true" />
          <span>Mumbai, India</span>
        </div>
      </header>

      <section className="coming-soon-content" aria-labelledby="coming-soon-title">
        <div className="coming-soon-status">
          <i aria-hidden="true" />
          New website in progress
        </div>
        <h1 id="coming-soon-title">
          Something strong<br />
          is <em>coming soon.</em>
        </h1>
        <p>
          We are building a new digital experience for NESCO Pipe &amp; Tubes.
          In the meantime, our team remains available for product enquiries,
          technical requirements and quotations.
        </p>

      </section>

      <footer className="coming-soon-footer">
        <span>NESCO / PIPE &amp; TUBES</span>
        <span>Manufacturer · Stockist · Supplier · Exporter</span>
      </footer>

      <div className="coming-soon-rings" aria-hidden="true">
        <i /><i /><i />
        <span>NESCO</span>
      </div>
    </main>
  );
}
