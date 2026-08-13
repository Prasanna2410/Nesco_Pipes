import Link from "next/link";
import { ArrowUpRight, Clock3, FileText, Mail, MapPin, Scale, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

type Props = {
  documentCode: string;
  eyebrow: string;
  title: string;
  introduction: string;
  effectiveDate: string;
  highlights: ReadonlyArray<readonly [string, string]>;
  sections: readonly LegalSection[];
  notice: string;
};

export function LegalDocumentPage({ documentCode, eyebrow, title, introduction, effectiveDate, highlights, sections, notice }: Props) {
  return (
    <main className="legal-page-v2">
      <SiteHeader />

      <section className="legal-v2-hero">
        <div className="legal-v2-grid" aria-hidden="true" />
        <div className="legal-v2-hero-inner">
          <div className="legal-v2-hero-copy">
            <small><i /> {eyebrow}</small>
            <h1>{title}</h1>
            <p>{introduction}</p>
            <div className="legal-v2-meta">
              <span><Clock3 /> Last updated <b>{effectiveDate}</b></span>
              <span><FileText /> Document <b>{documentCode}</b></span>
            </div>
          </div>
          <div className="legal-v2-hero-mark" aria-hidden="true"><Scale /><b>NESCO</b><span>Website governance</span></div>
        </div>
        <div className="legal-v2-highlights">
          {highlights.map(([label, copy], index) => <div key={label}><b>{String(index + 1).padStart(2, "0")}</b><span><small>{label}</small><p>{copy}</p></span></div>)}
        </div>
      </section>

      <section className="legal-v2-body">
        <aside className="legal-v2-sidebar">
          <small>Document contents</small>
          <nav aria-label={`${title} contents`}>
            {sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><b>{String(index + 1).padStart(2, "0")}</b><span>{section.title}</span></a>)}
          </nav>
          <div><ShieldCheck /><span><b>Questions about this document?</b><a href="mailto:sales@shreeimpexalloys.com">Email the NESCO team <ArrowUpRight /></a></span></div>
        </aside>

        <article className="legal-v2-document">
          <div className="legal-v2-notice"><ShieldCheck /><p>{notice}</p></div>
          {sections.map((section, index) => <section id={section.id} key={section.id}>
            <div className="legal-v2-section-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? <ul>{section.bullets.map((item) => <li key={item}><i /><span>{item}</span></li>)}</ul> : null}
            </div>
          </section>)}
        </article>
      </section>

      <section className="legal-v2-contact">
        <div><small>NESCO / POLICY CONTACT</small><h2>Need clarification?</h2><p>Contact our Mumbai office with the document name and a clear description of your question or request.</p></div>
        <div>
          <a href="mailto:sales@shreeimpexalloys.com"><Mail /><span><small>Email</small><b>sales@shreeimpexalloys.com</b></span><ArrowUpRight /></a>
          <a href="https://maps.google.com/?q=Shop+No+4+124+T+P+Street+6th+Kumbharwada+Mumbai+400004" target="_blank" rel="noreferrer"><MapPin /><span><small>Office</small><b>6th Kumbharwada, Mumbai 400004</b></span><ArrowUpRight /></a>
        </div>
      </section>

      <div className="legal-v2-related"><span>Related document</span><Link href={documentCode === "PRIVACY-01" ? "/terms-condition" : "/privacy-policy"}>{documentCode === "PRIVACY-01" ? "Read Terms & Conditions" : "Read Privacy Policy"}<ArrowUpRight /></Link></div>
      <SiteFooter />
    </main>
  );
}
