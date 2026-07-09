import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllCatalogSlugs, getPageTheme, getProductsOverview, getSourcePage } from "@/lib/source-site";

export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllCatalogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getSourcePage(slug);
  if (!page) {
    return { title: "NESCO Pipe & Tubes" };
  }

  return {
    title: `${page.h1} | NESCO Pipe & Tubes`,
    description: page.description || page.paragraphs[0] || "Premium stainless steel systems by NESCO Pipe & Tubes.",
  };
}

function ContentBlocks({ paragraphs }: { paragraphs: string[] }) {
  const chunks = [paragraphs.slice(0, 3), paragraphs.slice(3, 6), paragraphs.slice(6, 9)];
  return (
    <section className="content-grid">
      {chunks.filter((chunk) => chunk.length > 0).map((chunk, index) => (
        <article key={index} className="content-card">
          <small>0{index + 1} / CONTENT</small>
          {chunk.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
      ))}
    </section>
  );
}

function ProductOverview({ groups }: { groups: Awaited<ReturnType<typeof getProductsOverview>> }) {
  return (
    <section className="catalog-groups">
      {groups.map((group, index) => (
        <article key={group.title} className="catalog-group" id={group.id}>
          <div className="catalog-heading">
            <small>0{index + 1} / RANGE</small>
            <h2>{group.title}</h2>
          </div>
          <div className="catalog-links">
            {group.items.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`}>
                <span>{item.title}</span>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default async function SourcePage({ params }: Props) {
  const { slug } = await params;
  const page = await getSourcePage(slug);
  if (!page) notFound();

  const theme = getPageTheme(slug);
  const groups = slug === "products" ? await getProductsOverview() : [];
  const panelTitle = slug === "products" ? "One catalogue. Every requirement." : page.headings[0] || "Certified stainless steel supply";
  const panelCopy = slug === "products" ? "Explore pipes, tubes, sheets, plates, coils, valves, fittings, fasteners and every active supply location." : page.paragraphs[1] || page.paragraphs[0];

  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="inner-hero">
        <div className="inner-hero-bg" />
        <div className="inner-hero-copy">
          <small>{theme.badge}</small>
          <h1>{page.h1}</h1>
          <p>{page.description || page.paragraphs[0]}</p>
          <div className="inner-hero-cta">
            <Link href="/contact">Request a quote <ArrowUpRight /></Link>
            <span>{theme.accent}</span>
          </div>
        </div>
        <div className="inner-hero-panel">
          <span>{theme.copy}</span>
          <div className="panel-line" />
          <b>{panelTitle}</b>
          <p>{panelCopy}</p>
        </div>
      </section>

      {slug === "products" ? <ProductOverview groups={groups} /> : null}

      <section className="highlight-strip">
        {(page.headings.length ? page.headings : [page.title, theme.accent, "Request a Quote"]).slice(0, 6).map((item, index) => (
          <div key={`${item}-${index}`}>
            <small>0{index + 1}</small>
            <span>{item}</span>
          </div>
        ))}
      </section>

      <ContentBlocks paragraphs={page.paragraphs} />

      {page.bullets.length > 0 ? (
        <section className="spec-section">
          <div className="spec-copy">
            <small>Specifications & Highlights</small>
            <h2>Key details extracted from the source page.</h2>
          </div>
          <div className="spec-list">
            {page.bullets.map((bullet, index) => (
              <article key={`${bullet}-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{bullet}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="contact-banner">
        <div>
          <small>Need exact grade, size or destination support?</small>
          <h2>We can turn this requirement into a supply-ready quote.</h2>
        </div>
        <div className="contact-banner-links">
          <Link href="/contact">Open contact page <ArrowRight /></Link>
          {page.emails[0] ? <a href={`mailto:${page.emails[0]}`}>{page.emails[0]}</a> : null}
          {page.phones[0] ? <a href={`tel:${page.phones[0].replace(/[^\d+]/g, "")}`}>{page.phones[0]}</a> : null}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
