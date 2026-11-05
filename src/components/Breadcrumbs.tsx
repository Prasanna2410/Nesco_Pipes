import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return <>
    <nav className="content-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => <span key={`${item.label}-${index}`}>
        {index ? <ChevronRight aria-hidden="true" /> : null}
        {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
      </span>)}
    </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
