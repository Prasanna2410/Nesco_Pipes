const SOURCE_BASE = "https://shreeimpexalloys.com";

const CORE_SLUGS = new Set(["about", "products", "quality-policy", "certificate", "contact", "privacy-policy", "terms-condition"]);

type SourcePage = {
  slug: string;
  sourcePath: string;
  title: string;
  description: string;
  h1: string;
  paragraphs: string[];
  headings: string[];
  bullets: string[];
  emails: string[];
  phones: string[];
};

function cleanText(value: string) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&ndash;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

function uniq(items: string[], min = 1) {
  return [...new Set(items.map((item) => item.trim()).filter((item) => item.length >= min))];
}

function toSlug(path: string) {
  return path.replace(/^\//, "").replace(/\.php$/i, "");
}

function classify(slug: string) {
  if (CORE_SLUGS.has(slug)) return "company";
  if (slug.includes("supplier-") && !slug.includes("manufacturer")) return "markets";
  if (slug.includes("valves") || slug.includes("fittings") || slug.includes("fasteners")) return "components";
  if (slug.includes("tube")) return "tubes";
  if (slug.includes("sheet") || slug.includes("plate") || slug.includes("coil")) return "flat-products";
  return "pipes";
}

export function getPageTheme(slug: string) {
  const type = classify(slug);
  switch (type) {
    case "markets":
      return { badge: "Supply Network", accent: "GLOBAL DELIVERY", copy: "Fast-moving stainless steel supply routes for regional and export demand." };
    case "components":
      return { badge: "Flow Control", accent: "VALVES & FITTINGS", copy: "Sanitary and industrial connection systems designed for clean routing and control." };
    case "tubes":
      return { badge: "Tube Systems", accent: "PRECISION TUBES", copy: "Closer tolerances, cleaner finishes and confident fabrication performance." };
    case "flat-products":
      return { badge: "Flat Stock", accent: "SHEETS · PLATES · COILS", copy: "Surface-first stainless inventory for fabrication, cladding and production flow." };
    default:
      return { badge: "Pipe Systems", accent: "SEAMLESS & WELDED PIPES", copy: "Pressure-ready stainless steel pipe programs built around grade, size and reliability." };
  }
}

export async function discoverSourcePaths() {
  const html = await fetch(`${SOURCE_BASE}/index.php`, { next: { revalidate: 86400 } }).then((res) => res.text());
  const matches = [...html.matchAll(/href="([^"]+\.php(?:\?[^"]*)?)"/gi)]
    .map((match) => match[1])
    .filter((path) => !path.startsWith("http") || path.startsWith(SOURCE_BASE))
    .map((path) => path.replace(SOURCE_BASE, "").replace(/^\//, ""));

  return uniq(matches)
    .filter((path) => path !== "index.php")
    .sort();
}

export async function getAllCatalogSlugs() {
  const paths = await discoverSourcePaths();
  return paths.map(toSlug);
}

export async function getSourcePage(slug: string): Promise<SourcePage | null> {
  const sourcePath = `${slug}.php`;
  const response = await fetch(`${SOURCE_BASE}/${sourcePath}`, { next: { revalidate: 86400 } });
  if (!response.ok) return null;

  const html = await response.text();
  const title = cleanText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? slug);
  const description = cleanText(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? "");
  const h1 = cleanText(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? title);
  const paragraphs = uniq(
    [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => cleanText(match[1])).filter((item) => item.length > 80),
    40,
  ).filter((item) => !/(copyright|all rights reserved|design(?:ed)?\s*&\s*developed|fourty60)/i.test(item)).slice(0, 14);
  const headings = uniq(
    [...html.matchAll(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map((match) => cleanText(match[1])),
    3,
  ).filter((item) => !/^(contact info|contact|email|quick links|other products)$/i.test(item)).slice(0, 10);
  const bullets = uniq(
    [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((match) => cleanText(match[1])),
    3,
  ).filter((item) => !/^(home|about us|product|products|contact|blog)$/i.test(item)).slice(0, 24);
  const emails = uniq([...html.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map((match) => match[0]));
  const phones = uniq([...html.matchAll(/\+?\d[\d\s-]{7,}\d/g)].map((match) => match[0].replace(/\s+/g, " ").trim()), 10).slice(0, 4);

  return { slug, sourcePath, title, description, h1, paragraphs, headings, bullets, emails, phones };
}

export async function getProductsOverview() {
  const slugs = await getAllCatalogSlugs();
  const filtered = slugs.filter((slug) => !CORE_SLUGS.has(slug));

  const groups = [
    { title: "Pipes & Tubes", id: "pipes-tubes", filter: (slug: string) => !slug.includes("supplier-") && (slug.includes("pipe") || slug.includes("tube")) },
    { title: "Sheets, Plates, Coils & Rods", id: "flat-products", filter: (slug: string) => !slug.includes("supplier-") && ["sheet", "plate", "coil", "strip", "rod"].some((term) => slug.includes(term)) },
    { title: "Valves, Fittings & Fasteners", id: "flow-components", filter: (slug: string) => !slug.includes("supplier-") && !["pipe", "tube", "sheet", "plate", "coil", "strip", "rod"].some((term) => slug.includes(term)) },
    { title: "Markets & Supply Locations", id: "markets", filter: (slug: string) => slug.includes("supplier-") },
  ];

  return groups
    .map((group) => ({
      ...group,
      items: filtered.filter(group.filter).map((slug) => ({ slug, title: slug.replace(/-/g, " ").replace(/\b\w/g, (x) => x.toUpperCase()) })),
    }))
    .filter((group) => group.items.length > 0);
}
