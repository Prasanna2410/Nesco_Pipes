import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactExperience } from "@/components/ContactExperience";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { ProductExplorer } from "@/components/ProductExplorer";
import { ProductPageNav } from "@/components/ProductPageNav";
import { ProductCategorySidebar } from "@/components/ProductCategorySidebar";
import { ProductInquiryPanel } from "@/components/ProductInquiryPanel";
import { allProducts, companyPages, getCategoryForProduct, getImageForProduct, getProductBySlug } from "@/lib/catalog";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPipeApplicationImage(application: string) {
  const label = application.toLowerCase();

  if (label.includes("oil") || label.includes("gas") || label.includes("petrochemical") || label.includes("refiner")) {
    return "/assets/industry-backgrounds/01-oil-and-gas.png";
  }
  if (label.includes("power") || label.includes("boiler") || label.includes("steam")) {
    return "/assets/industry-backgrounds/02-power-plants.png";
  }
  if (label.includes("chemical") || label.includes("fertilizer")) {
    return "/assets/industry-backgrounds/03-chemical.png";
  }
  if (label.includes("food") || label.includes("pharma")) {
    return "/assets/industry-backgrounds/04-food-and-pharma.png";
  }
  if (label.includes("marine") || label.includes("offshore") || label.includes("water") || label.includes("desalination")) {
    return "/assets/industry-backgrounds/05-marine.png";
  }

  return "/assets/industry-backgrounds/06-infrastructure.png";
}

export function generateStaticParams() {
  return [
    ...Object.keys(companyPages).map((slug) => ({ slug })),
    ...allProducts.map((item) => ({ slug: item.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const company = companyPages[slug as keyof typeof companyPages];
  const title = product?.displayTitle ?? product?.title ?? company?.title;
  const description = product?.description ?? company?.description;

  return {
    title: title ? `${title} | NESCO Pipe & Tubes` : "NESCO Pipe & Tubes",
    description: description ?? "Industrial stainless steel, ferrous and non-ferrous metal products by NESCO Pipe & Tubes.",
  };
}

function ProductCatalogue() {
  return <ProductExplorer />;
}

function CompanyContent({ slug }: { slug: keyof typeof companyPages }) {
  if (slug === "products") return <ProductCatalogue />;

  const page = companyPages[slug];
  const blocks = {
    about: [
      "NESCO Pipe & Tubes supplies stainless steel, ferrous and non-ferrous industrial products from Mumbai for customers across India and export markets.",
      "The company focuses on practical buying support: correct grades, reliable dimensions, clear documentation, responsive quotations and carefully packed material.",
      "Our catalogue now covers pipes, tubes, flat products, bars, rods, wires, flanges, fittings, fasteners, instrumentation fittings and valves.",
    ],
    contact: [
      "Send your product name, grade, standard, size, schedule or class, quantity and delivery destination for a faster quotation.",
      "Our Mumbai team handles stainless steel pipes, tubes, sheets, plates, coils, flanges, fittings, fasteners, valves and special alloy requirements.",
      "Phone: +91 91679 63226. Email: sales@shreeimpexalloys.com. Address: Shop No-4/124 T P Street, 6th Kumbharwada, Mumbai - 400004.",
    ],
    "privacy-policy": [
      "Enquiry information is used to respond to quotations, technical questions and business communication.",
      "We do not sell enquiry details. Contact information may be retained for follow-up, documentation and commercial record keeping.",
    ],
    "terms-condition": [
      "Product availability, price, inspection, packing, delivery timeline and payment terms are confirmed in the official quotation or commercial document.",
      "Material specifications should be reviewed and approved before order confirmation to ensure the supplied product matches the intended application.",
    ],
  }[slug] ?? [];

  return (
    <>
      <section className="content-grid">
        {blocks.map((copy, index) => (
          <article className="content-card" key={copy}>
            <small>0{index + 1} / NESCO</small>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="contact-banner">
        <div>
          <small>{page.title}</small>
          <h2>{page.description}</h2>
        </div>
        <div className="contact-banner-links">
          <Link href="/products">Explore catalogue <ArrowRight /></Link>
          <Link href="/contact">Request a quote <ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}

export default async function CatalogPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const companyKey = slug as keyof typeof companyPages;
  const company = companyPages[companyKey];

  if (!product && !company) notFound();

  if (!product && companyKey === "contact") {
    return (
      <main className="contact-page">
        <SiteHeader />
        <ContactExperience />
        <SiteFooter />
      </main>
    );
  }

  const category = product ? getCategoryForProduct(product.slug) : undefined;
  const productImage = product ? getImageForProduct(product.slug) : undefined;
  const title = product?.title ?? company.title;
  const description = product?.description ?? company.description;
  const showMaterialData = product?.pageKind === "grade" || product?.category === "Pipes" || product?.category === "Tubes";
  const chemistryHeaders = product?.chemicalHeaders ?? ["Grade", "C", "Cr", "Ni", "Other"];
  const mechanicalHeaders = product?.mechanicalHeaders ?? ["Grade", "Tensile MPa", "Yield MPa", "Elongation %"];
  const customRelatedProducts = product?.relatedProductTitles?.flatMap((relatedTitle) => {
    const relatedProduct = allProducts.find((item) => item.title === relatedTitle);
    return relatedProduct ? [relatedProduct] : [];
  }) ?? [];
  const relatedItems = customRelatedProducts.length
    ? customRelatedProducts
    : category?.items.filter((item) => item.slug !== product?.slug).slice(0, 12) ?? [];
  const usesAvailableGradeHeading = product
    ? ["Bars", "Flanges", "Butt Weld Fittings", "Fasteners"].includes(product.category)
    : false;
  const gradeIntroduction = product?.category === "Butt Weld Fittings"
    ? "NESCO supplies the material families shown below in butt weld fitting form, subject to fitting type, grade, class, size, wall, manufacturing route and availability."
    : product?.category === "Fasteners"
      ? "NESCO supplies the material and bolting families shown below, subject to fastener type, grade, dimensions, thread, condition, finish and availability."
      : product?.category === "Flanges"
        ? "NESCO supplies the material families shown below in flange form, subject to flange type, grade, size, pressure class, facing, bore and availability."
        : product?.category === "Bars"
          ? "NESCO supplies the material families shown below in bar form, subject to the exact grade, profile, size, condition, standard and availability."
          : "Commonly requested families are shown below. Availability is confirmed against the complete specification.";
  const selectionGuideCopy = product?.category === "Flanges"
    ? {
        eyebrow: "/ FLANGE SELECTION GUIDE",
        title: "Choose the flange around the joint and service.",
        description: "Use the connection method, pressure-temperature duty, piping class and maintenance needs as the starting point. The approved piping specification governs final selection.",
        firstColumn: "Flange type",
        secondColumn: "Typical use",
        ariaLabel: "Flange type and typical use guide",
      }
    : product?.category === "Butt Weld Fittings"
      ? {
          eyebrow: "/ FITTING SELECTION GUIDE",
          title: "Match the fitting to the change in flow path.",
          description: "Start with the required direction, branch, transition or closure, then coordinate every end with the connected pipe. The approved piping class and design specification govern final selection.",
          firstColumn: "Fitting type",
          secondColumn: "Typical use",
          ariaLabel: "Butt weld fitting type and typical use guide",
        }
      : product?.category === "Fasteners"
        ? {
            eyebrow: "/ FASTENER SELECTION GUIDE",
            title: "Specify the complete bolting assembly.",
            description: "Select the product form together with its material grade, thread, dimensions, compatible nuts or washers, finish and service conditions. The approved joint design governs final selection.",
            firstColumn: "Fastener type",
            secondColumn: "Typical use",
            ariaLabel: "Fastener type and typical use guide",
          }
        : {
            eyebrow: "/ TUBE SELECTION GUIDE",
            title: "A practical starting point for specification review.",
            description: "These references guide the enquiry only. The equipment design, material grade, service conditions and approved project specification govern the final selection.",
            firstColumn: "Application",
            secondColumn: "Common specification basis",
            ariaLabel: "Tube application and common standard guide",
          };

  return (
    <main className="inner-page">
      <SiteHeader />
      {!product && companyKey !== "products" ? <section className="inner-hero">
        <div className="inner-hero-bg" />
        <div className="inner-hero-copy">
          <small>NESCO Pipe & Tubes</small>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="inner-hero-cta">
            <Link href="/contact">Request a quote <ArrowUpRight /></Link>
            <span>Mumbai, India</span>
          </div>
        </div>
        <div className="inner-hero-panel">
          <span>Company page</span>
          <div className="panel-line" />
          <b>{category?.title ?? "Industrial metal solutions"}</b>
          <p>{category?.summary ?? "Manufacturer, supplier and exporter of stainless steel and alloy products for industrial applications."}</p>
        </div>
      </section> : null}

      {product ? (
        <div className="product-page-flow">
          <ProductPageNav items={[
            { id: "overview", label: "Overview" },
            ...(product.productTypeGuide?.length ? [{ id: "tube-range", label: "Tube range" }] : []),
            { id: "grades", label: "Grades" },
            { id: "specifications", label: "Specifications" },
            ...(product.dimensions?.length ? [{ id: "dimensions", label: "Dimensions" }] : []),
            { id: "standards", label: "Standards" },
            ...(product.selectionGuide?.length ? [{ id: "tube-guide", label: "Selection guide" }] : []),
            ...(showMaterialData ? [{ id: "material-data", label: "Material data" }] : []),
            { id: "quality", label: "Quality" },
            { id: "applications", label: "Applications" },
            { id: "why-nesco", label: "Why Nesco" },
            { id: "faqs", label: "FAQs" },
            { id: "rfq", label: "Request quote" },
            { id: "related", label: "Related" },
          ]} />

          <div className="product-content-shell">
            <ProductCategorySidebar currentSlug={product.slug} key={product.slug} />
            <div className="product-content-main">

          <section className="product-overview-v2 pipe-overview-layout" id="overview">
            <div className="product-overview-media">
              <Image src={productImage ?? category?.image ?? "/assets/product-category-banners/01-pipes.png"} alt={`${product.title} supplied by NESCO Pipe & Tubes`} fill sizes="(max-width: 900px) 100vw, 44vw" />
              <div><small>{product.pageKind === "grade" ? "Material grade" : "Product form"}</small><span>{product.category}</span></div>
            </div>
            <div className="product-overview-copy">
              <small>/ 01 — TECHNICAL OVERVIEW</small>
              <h2>{product.displayTitle ?? product.title}</h2>
              {product.tagline ? <p className="product-tagline">{product.tagline}</p> : null}
              {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="manufacturing-flow" aria-label="Manufacturing process" role="list">
                <small>How it is made</small>
                {product.manufacturing.map((step, index) => <div role="listitem" key={step}><b>{String(index + 1).padStart(2, "0")}</b><p>{step}</p></div>)}
              </div>
              <div className="overview-actions"><Link href="/contact">Request reviewed quotation <ArrowUpRight /></Link><span>Material documents on request</span></div>
            </div>
          </section>

          {product.features.length || product.standards.length ? (
            <section className="product-technical-v2" id="technical">
              <div className="technical-v2-head"><small>/ 02 — PRODUCT DETAIL</small><h2>Built around the specification.</h2><p>{["Flanges", "Butt Weld Fittings", "Fasteners"].includes(product.category) ? product.description : "Key characteristics and commonly referenced standards from the supplied technical content master."}</p></div>
              <div className="technical-v2-columns">
                <div className="technical-feature-list"><small>Key features</small>{product.features.map((item, index) => <article key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></article>)}</div>
                <div className="technical-standard-list"><small>Common specification references</small>{product.standards.map((item) => <div key={item}><span>STD</span><p>{item}</p></div>)}</div>
              </div>
              {product.pageKind === "product" && category ? <div className="product-type-strip"><small>Explore the {category.title.toLowerCase()} range</small><div>{category.items.map((item) => <Link className={item.slug === product.slug ? "is-current" : ""} href={`/${item.slug}`} key={item.slug}>{item.title}<ArrowUpRight /></Link>)}</div></div> : null}
            </section>
          ) : null}

          {product.productTypeGuide?.length ? (
            <section className="tube-range-section" id="tube-range">
              <div className="product-section-heading">
                <small>/ PRODUCT RANGE</small>
                <h2>Tube formats matched to the duty.</h2>
                <p>NESCO reviews construction route, service conditions, finish and inspection requirements before confirming the appropriate tube supply.</p>
              </div>
              <div className="tube-range-grid">
                {product.productTypeGuide.map(([tubeType, copy], index) => <article key={tubeType}>
                  <div><b>{String(index + 1).padStart(2, "0")}</b><ArrowUpRight aria-hidden="true" /></div>
                  <h3>{tubeType}</h3>
                  <p>{copy}</p>
                </article>)}
              </div>
            </section>
          ) : null}

          <section className="product-data-section" id="grades">
            <div className="product-section-heading"><small>{usesAvailableGradeHeading ? "/ 03 — AVAILABLE GRADES" : "/ 03 — MATERIAL RANGE"}</small><h2>{usesAvailableGradeHeading ? "Available Material Grades" : "Grades matched to the service."}</h2><p>{gradeIntroduction}</p></div>
            {product.materialGroups ? <div className="responsive-data-table material-groups-table" role="region" aria-label="Available material groups" tabIndex={0}>
              <div className="data-table-row data-table-head"><span>Material family</span><span>Available materials and grades</span></div>
              {product.materialGroups.map(([family, grades]) => <div className="data-table-row" key={family}><b data-label="Material family">{family}</b><span data-label="Available materials and grades">{grades}</span></div>)}
            </div> : <div className="responsive-data-table" role="region" aria-label="Available material grades" tabIndex={0}>
              <div className="data-table-row data-table-head"><span>Material family</span><span>Common grades</span><span>Typical selection context</span></div>
              {product.grades.map(([family, grades, use]) => <div className="data-table-row" key={family}><b data-label="Material family">{family}</b><span data-label="Common grades">{grades}</span><p data-label="Typical selection context">{use}</p></div>)}
            </div>}
          </section>

          <section className="product-supply-v2" id="specifications">
            <div className="supply-v2-head"><small>/ 04 — SUPPLY & CUSTOMISATION</small><h2>{product.pageKind === "grade" ? "Available forms and enquiry basis." : "Define the supply condition."}</h2><p>{product.availableForms ?? "Final availability depends on the complete combination of material, dimensions, standard, condition, testing and quantity."}</p></div>
            <div className="supply-v2-table">
              <div className="supply-table-row supply-table-header"><span>Parameter</span><span>Typical information to specify</span></div>
              {product.supplyOptions.map(([label, value], index) => <div className="supply-table-row" key={label}><small>{String(index + 1).padStart(2, "0")}</small><b>{label}</b><p>{value}</p></div>)}
            </div>
          </section>

          {product.surfaceFinishGuide?.length ? (
            <section className="tube-finish-section" aria-labelledby="tube-finish-title">
              <div className="tube-finish-intro">
                <small>SURFACE CONDITION</small>
                <h2 id="tube-finish-title">Finish selected around cleanliness and service.</h2>
                <p>Availability and final acceptance depend on the manufacturing standard, material, size and agreed surface requirement.</p>
              </div>
              <div className="tube-finish-grid">
                {product.surfaceFinishGuide.map(([finish, copy], index) => <article key={finish}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <h3>{finish}</h3>
                  <p>{copy}</p>
                </article>)}
              </div>
            </section>
          ) : null}

          {product.dimensions?.length ? <section className="product-data-section product-dimensions-section" id="dimensions">
            <div className="product-section-heading"><small>/ 05 — DIMENSIONS & SIZE RANGE</small><h2>Dimensions aligned to the manufacturing route.</h2><p>{product.dimensionsNote}</p></div>
            <div className="responsive-data-table dimensions-data-table" role="region" aria-label="Product dimensions and ordering parameters" tabIndex={0}>
              <div className="data-table-row data-table-head" style={{ gridTemplateColumns: `repeat(${product.dimensionHeaders?.length ?? 4}, minmax(150px, 1fr))` }}>{product.dimensionHeaders?.map((header) => <span key={header}>{header}</span>)}</div>
              {product.dimensions.map((row) => <div className="data-table-row" style={{ gridTemplateColumns: `repeat(${product.dimensionHeaders?.length ?? 4}, minmax(150px, 1fr))` }} key={row.join("-")}>{row.map((cell, index) => index === 0 ? <b data-label={product.dimensionHeaders?.[index] ?? "Parameter"} key={`${cell}-${index}`}>{cell}</b> : <span data-label={product.dimensionHeaders?.[index] ?? `Detail ${index}`} key={`${cell}-${index}`}>{cell}</span>)}</div>)}
            </div>
          </section> : null}

          <section className="product-data-section product-standards-section" id="standards">
            <div className="product-section-heading"><small>{product.category === "Butt Weld Fittings" ? "/ 06 — FITTING & PIPE REFERENCES" : "/ 06 — MANUFACTURING STANDARDS"}</small><h2>{product.category === "Butt Weld Fittings" ? "Fitting and pipe references, clearly separated." : "Standards aligned for every order."}</h2><p>{product.category === "Butt Weld Fittings" ? "Fitting material and dimensional requirements are stated separately from the pipe-dimensional references used to coordinate compatible weld ends." : "The material standard, dimensional standard and project requirements should be stated separately."}</p></div>
            {product.standardGroups ? <div className="standards-groups">{product.standardGroups.map((group) => <div className="standards-group" key={group.title}><h3>{group.title}</h3><div className="responsive-data-table standards-table standards-table-two-column" role="region" aria-label={`${group.title} standards`} tabIndex={0}><div className="data-table-row data-table-head"><span>Standard</span><span>What it covers</span></div>{group.rows.map(([standard, scope]) => <div className="data-table-row" key={standard}><b data-label="Standard">{standard}</b><span data-label="What it covers">{scope}</span></div>)}</div></div>)}</div> : <div className="responsive-data-table standards-table" role="region" aria-label="Manufacturing and dimensional standards" tabIndex={0}>
              <div className="data-table-row data-table-head"><span>Reference</span><span>What it covers</span><span>Role</span></div>
              {product.manufacturingStandards.map(([standard, scope, role]) => <div className="data-table-row" key={standard}><b data-label="Reference">{standard}</b><span data-label="What it covers">{scope}</span><p data-label="Role">{role}</p></div>)}
            </div>}
          </section>

          {product.selectionGuide?.length ? (
            <section className="tube-selection-section" id="tube-guide">
              <div className="product-section-heading light-heading">
                <small>{selectionGuideCopy.eyebrow}</small>
                <h2>{selectionGuideCopy.title}</h2>
                <p>{selectionGuideCopy.description}</p>
              </div>
              <div className="responsive-data-table dark-data-table tube-selection-table" role="region" aria-label={selectionGuideCopy.ariaLabel} tabIndex={0}>
                <div className="data-table-row data-table-head"><span>{selectionGuideCopy.firstColumn}</span><span>{selectionGuideCopy.secondColumn}</span></div>
                {product.selectionGuide.map(([application, standard]) => <div className="data-table-row" key={application}><b data-label={selectionGuideCopy.firstColumn}>{application}</b><span data-label={selectionGuideCopy.secondColumn}>{standard}</span></div>)}
              </div>
              {product.comparisonRows?.length ? <div className="tube-comparison-block">
                <div className="tube-comparison-heading"><small>CONSTRUCTION COMPARISON</small><h3>Seamless and welded tubes, compared responsibly.</h3></div>
                <div className="responsive-data-table dark-data-table tube-comparison-table" role="region" aria-label="Seamless and welded tube comparison" tabIndex={0}>
                  <div className="data-table-row data-table-head">{product.comparisonHeaders?.map((header) => <span key={header}>{header}</span>)}</div>
                  {product.comparisonRows.map((row) => <div className="data-table-row" key={row.join("-")}>{row.map((cell, index) => index === 0 ? <b data-label={product.comparisonHeaders?.[index] ?? "Criteria"} key={`${cell}-${index}`}>{cell}</b> : <span data-label={product.comparisonHeaders?.[index] ?? `Option ${index}`} key={`${cell}-${index}`}>{cell}</span>)}</div>)}
                </div>
              </div> : null}
            </section>
          ) : null}

          {showMaterialData ? <section className="material-data-section" id="material-data">
            <div className="product-section-heading light-heading"><small>/ 06 — REFERENCE MATERIAL DATA</small><h2>{product.materialDataTitle ?? "Reference material data."}</h2><p>{product.materialDataDescription ?? "Representative values for frequently requested stainless grades. Values are percentages by mass or minimum mechanical requirements unless shown otherwise; always verify the ordered material standard, product form and edition."}</p></div>
            <div className="material-table-block">
              <div className="material-table-title"><span>{product.chemicalTableTitle ?? "Chemical composition"}</span><small>{product.chemicalTableNote ?? "Selected principal elements · % max or range"}</small></div>
              <div className="responsive-data-table dark-data-table dynamic-material-table" role="region" aria-label={product.chemicalTableTitle ?? "Chemical composition"} tabIndex={0}>
                <div className="data-table-row data-table-head" style={{ gridTemplateColumns: `repeat(${chemistryHeaders.length}, minmax(112px, 1fr))` }}>{chemistryHeaders.map((header) => <span key={header}>{header}</span>)}</div>
                {product.chemical.map((row) => <div className="data-table-row" style={{ gridTemplateColumns: `repeat(${chemistryHeaders.length}, minmax(112px, 1fr))` }} key={row.join("-")}>{row.map((cell, index) => index === 0 ? <b data-label={chemistryHeaders[index]} key={`${cell}-${index}`}>{cell}</b> : <span data-label={chemistryHeaders[index]} key={`${cell}-${index}`}>{cell}</span>)}</div>)}
              </div>
            </div>
            <div className="material-table-block">
              <div className="material-table-title"><span>{product.mechanicalTableTitle ?? "Mechanical properties"}</span><small>{product.mechanicalTableNote ?? "Room-temperature minimums · verify the ordered product standard"}</small></div>
              <div className="responsive-data-table dark-data-table dynamic-material-table" role="region" aria-label={product.mechanicalTableTitle ?? "Mechanical properties"} tabIndex={0}>
                <div className="data-table-row data-table-head" style={{ gridTemplateColumns: `repeat(${mechanicalHeaders.length}, minmax(130px, 1fr))` }}>{mechanicalHeaders.map((header) => <span key={header}>{header}</span>)}</div>
                {product.mechanical.map((row) => <div className="data-table-row" style={{ gridTemplateColumns: `repeat(${mechanicalHeaders.length}, minmax(130px, 1fr))` }} key={row.join("-")}>{row.map((cell, index) => index === 0 ? <b data-label={mechanicalHeaders[index]} key={`${cell}-${index}`}>{cell}</b> : <span data-label={mechanicalHeaders[index]} key={`${cell}-${index}`}>{cell}</span>)}</div>)}
              </div>
            </div>
          </section> : null}

          <section className="quality-packaging-section" id="quality">
            <div className="quality-column"><div className="product-section-heading"><small>/ 07 — INSPECTION & TESTING</small><h2>Evidence before dispatch.</h2></div>{product.inspectionDetails ? <div className="inspection-detail-list">{product.inspectionDetails.map(([test, explanation], index) => <article key={test}><b>{String(index + 1).padStart(2, "0")}</b><div><strong>{test}</strong><p>{explanation}</p></div></article>)}</div> : <div className="numbered-checks">{product.inspection.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div>}</div>
            <div className="quality-column packaging-column"><div className="product-section-heading"><small>PACKAGING & MARKING</small><h2>Protected and traceable.</h2></div><div className="numbered-checks">{product.packaging.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div></div>
          </section>

          <section className="product-applications-v2" id="applications">
            <div className="applications-v2-head"><small>/ 08 — APPLICATIONS & INDUSTRIES</small><h2>Engineered for demanding service environments.</h2><p>From process plants to marine systems, NESCO coordinates material, dimensions and documentation around the operating conditions of each application.</p></div>
            <div className="applications-v2-grid">{product.applications.map((item, index) => <article className={product.category === "Pipes" ? "has-application-image" : undefined} key={item}>{product.category === "Pipes" ? <Image className="application-card-image" src={getPipeApplicationImage(item)} alt={`${item} pipe application`} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" /> : null}<div><small>{String(index + 1).padStart(2, "0")}</small><ArrowUpRight aria-hidden="true" /></div><span>{item}</span></article>)}</div>
            <div className="industry-service-band"><div className="industry-band-copy"><small>Industries served</small><strong>One supply partner across critical sectors.</strong></div><div className="industry-chip-list" aria-label="Industries served" role="list">{product.industries.map((industry) => <span role="listitem" key={industry}>{industry}</span>)}</div></div>
          </section>

          <section className="why-nesco-section" id="why-nesco">
            <div className="product-section-heading"><small>/ 09 — WHY NESCO PIPE & TUBES</small><h2>Built for buyers who cannot leave details to chance.</h2><p>From specification review to export documentation, NESCO coordinates the technical and commercial details as one complete supply requirement.</p></div>
            <div className="why-nesco-grid">{product.whyNesco.map(([title, copy], index) => <article key={title}><div className="why-nesco-card-top"><b>{String(index + 1).padStart(2, "0")}</b><ArrowUpRight /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </section>

          <section className="product-faq-section" id="faqs">
            <div className="product-section-heading"><small>/ 10 — FREQUENTLY ASKED QUESTIONS</small><h2>Clear answers before you specify.</h2><p>Quick guidance on product selection, standards, dimensions, inspection and documentation. For project-specific requirements, NESCO will review the complete enquiry with your team.</p></div>
            <div className="product-faq-list">{product.faqs.map(([question, answer], index) => <details key={question}><summary><b>{String(index + 1).padStart(2, "0")}</b><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
          </section>

          <ProductInquiryPanel productTitle={product.displayTitle ?? product.title} category={product.category} cta={product.cta} />

          <aside className="product-technical-note"><b>Technical publishing note</b><p>{product.technicalNote}</p></aside>

          {relatedItems.length ? (
            <section className="related-products" id="related">
              <div className="catalog-heading"><small>Related range</small><h2>Complete {category?.title.toLowerCase() ?? "product"} supply support</h2></div>
              <div className="catalog-links">
                {relatedItems.map((item) => (
                  <Link href={`/${item.slug}`} key={item.slug}><span>{item.title}</span><ArrowUpRight /></Link>
                ))}
              </div>
            </section>
          ) : null}
            </div>
          </div>
        </div>
      ) : (
        <CompanyContent slug={companyKey} />
      )}

      {!product ? <section className="contact-banner">
        <div>
          <small>Need exact grade, size or destination support?</small>
          <h2>Send the specification and our team will respond with a supply-ready quote.</h2>
        </div>
        <div className="contact-banner-links">
          <Link href="/contact">Open contact page <ArrowRight /></Link>
          <a href="mailto:sales@shreeimpexalloys.com">sales@shreeimpexalloys.com</a>
          <a href="tel:+919167963226">+91 91679 63226</a>
        </div>
      </section> : null}

      <SiteFooter />
    </main>
  );
}
