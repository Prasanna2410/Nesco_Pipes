import { barTechnicalPublishingNote, familyContent, fastenerTechnicalPublishingNote, fittingTechnicalPublishingNote, flangeTechnicalPublishingNote, gradeDescriptions, gradeFamilyContent, materialSelectionNote, subtypeContent, technicalPublishingNote } from "@/lib/product-content";
import { getProductDetailContent, type ProductDetailContent } from "@/lib/product-details";

export type ProductPage = ProductDetailContent & {
  slug: string;
  title: string;
  category: string;
  material: string;
  description: string;
  overview: string[];
  specifications: string[];
  applications: string[];
  pageKind: "product" | "grade";
  features: string[];
  standards: string[];
  supplyOptions: Array<readonly [string, string]>;
  rfqRequirements: string[];
  technicalNote: string;
  cta: string;
  availableForms?: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  image: string;
  items: ProductPage[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function technicalNoteFor(category: string) {
  if (category === "Bars") return barTechnicalPublishingNote;
  if (category === "Flanges") return flangeTechnicalPublishingNote;
  if (category === "Butt Weld Fittings") return fittingTechnicalPublishingNote;
  if (category === "Fasteners") return fastenerTechnicalPublishingNote;
  return technicalPublishingNote;
}

function product(material: string, family: string, category: string): ProductPage {
  const title = family.includes("Flanges") && !family.startsWith(material)
    ? `${material} ${family}`
    : `${material} ${family}`;
  return {
    ...getProductDetailContent(category, title),
    slug: `${slugify(title)}-supplier-exporter-manufacturer`,
    title,
    category,
    material,
    description: `${title} supplied by NESCO Pipe & Tubes for industrial, process, fabrication and export requirements.`,
    overview: [
      `NESCO Pipe & Tubes supplies ${title.toLowerCase()} in project-ready dimensions, finishes and grades for demanding process environments.`,
      "Every enquiry is reviewed around grade, size, pressure class, schedule, finish, quantity and delivery location so buyers receive material that fits the application.",
      "Material can be offered with test certificates, dimensional checks, third-party inspection support and export-ready packing where required.",
    ],
    specifications: [
      "Standards: ASTM, ASME, ANSI, DIN, EN, BS, JIS and project-specific requirements",
      "Forms: seamless, welded, forged, rolled, cut-to-size or machined as applicable",
      "Grades: 304, 304L, 316, 316L, 321, 347, 904L, duplex, super duplex and nickel alloy options",
      "Documentation: MTC, invoice, packing list and inspection reports on request",
    ],
    applications: ["Oil and gas", "Chemical processing", "Petrochemical plants", "Power generation", "Food and pharma", "Marine and infrastructure"],
    pageKind: "product",
    features: [],
    standards: [],
    supplyOptions: [],
    rfqRequirements: [],
    technicalNote: technicalNoteFor(category),
    cta: `Send your ${title.toLowerCase()} specification, drawing or bill of materials for a grade-and-dimension-matched quotation.`,
  };
}

function typeProduct(type: string, category: string, suffix = ""): ProductPage {
  const title = suffix && !type.toLowerCase().endsWith(suffix.toLowerCase()) ? `${type} ${suffix}` : type;
  const detail = subtypeContent[title];
  const family = familyContent[category];
  const pageDetail = getProductDetailContent(category, title);
  return {
    ...product("Industrial", title, category),
    ...pageDetail,
    title,
    material: "Industrial",
    slug: `${slugify(title)}-supplier-exporter`,
    description: category === "Flanges" && detail?.description ? detail.description : pageDetail.overviewContent?.[0] ?? detail?.description ?? `${title} supplied for industrial, process, fabrication and export requirements.`,
    overview: pageDetail.overviewContent ? [...pageDetail.overviewContent] : family ? [family.intro, `Whether the requirement is for standard maintenance quantities or a project package, our team reviews each ${category === "Bars" ? "bar requirement" : `${category.toLowerCase()} enquiry`} against the requested material, dimensions, specification, service conditions, inspection and delivery plan. Availability may include ex-stock, mill production or made-to-order supply depending on the combination.`] : [],
    features: pageDetail.keyFeatures ? [...pageDetail.keyFeatures] : detail?.features ?? [],
    standards: pageDetail.specificationReferences ? [...pageDetail.specificationReferences] : detail?.standards ?? [],
    supplyOptions: pageDetail.productSpecifications ? [...pageDetail.productSpecifications] : family?.supplyOptions ?? [],
    applications: family?.applications ?? [],
    rfqRequirements: family?.rfq ?? [],
    technicalNote: technicalNoteFor(category),
    cta: `Send your ${title.toLowerCase()} specification, drawing or bill of materials for a grade-and-dimension-matched quotation.`,
  };
}

const productCategoryBanners = {
  pipes: "/assets/product-content/pipes.png",
  tubes: "/assets/product-content/tubes.png",
  sheets: "/assets/product-content/sheets.png",
  platesAndCoils: "/assets/product-content/sheets-plates-and-coils.png",
  bars: "/assets/product-content/bars.png",
  flanges: "/assets/product-content/flanges.png",
  buttWeldFittings: "/assets/product-content/butt-weld-fittings.png",
  fasteners: "/assets/product-content/fasteners.png",
} as const;

export const productCategories: ProductCategory[] = [
  {
    id: "pipes",
    title: "Pipes",
    summary: "Seamless, welded and electric-fusion-welded pipe for pressure, process and structural service across demanding industries.",
    image: productCategoryBanners.pipes,
    items: ["Seamless Pipes", "Welded Pipes", "EFW Pipes"].map((type) => typeProduct(type, "Pipes")),
  },
  {
    id: "tubes",
    title: "Tubes",
    summary: "Precision tube solutions for heat transfer, boilers, instrumentation, fabrication and general engineering service.",
    image: productCategoryBanners.tubes,
    items: ["Seamless Tubes", "Welded Tubes", "Heat Exchanger Tubes", "Boiler Tubes", "Instrumentation Tubes"].map((type) => typeProduct(type, "Tubes")),
  },
  {
    id: "sheets-plates-coils",
    title: "Sheets, Plates & Coils",
    summary: "Flat products for fabrication, cladding, vessels, structures and corrosion-resistant industrial surfaces.",
    image: productCategoryBanners.platesAndCoils,
    items: ["Sheets", "Plates", "Coils", "Shim Sheets"].map((type) => typeProduct(type, "Sheets, Plates & Coils")),
  },
  {
    id: "bars",
    title: "Bars",
    summary: "Hot-finished and precision bars for machining, shafts, supports, components and general fabrication.",
    image: productCategoryBanners.bars,
    items: ["Round Bars", "Bright Bars", "Hex Bars", "Square Bars", "Flat Bars"].map((type) => typeProduct(type, "Bars")),
  },
  {
    id: "flanges",
    title: "Flanges",
    summary: "Material-grade flanges and standard flange types for pressure piping, process lines and export projects.",
    image: productCategoryBanners.flanges,
    items: ["Weld Neck", "Slip-On", "Blind", "Socket Weld", "Threaded"].map((type) => typeProduct(type, "Flanges", "Flanges")),
  },
  {
    id: "butt-weld-fittings",
    title: "Butt Weld Fittings",
    summary: "Formed fittings engineered for smooth flow transitions and permanent, leak-resistant piping assemblies.",
    image: productCategoryBanners.buttWeldFittings,
    items: ["Elbows", "Tees", "Reducers", "Stub Ends", "End Caps"].map((type) => typeProduct(type, "Butt Weld Fittings")),
  },
  {
    id: "fasteners",
    title: "Fasteners",
    summary: "Industrial fasteners in stainless steel, alloy steel and high nickel alloys for structural and piping assemblies.",
    image: productCategoryBanners.fasteners,
    items: ["Bolts", "Nuts", "Stud Bolts"].map((type) => typeProduct(type, "Fasteners")),
  },
];

function gradeProduct(title: string, material: string): ProductPage {
  const family = gradeFamilyContent[material];
  const positioning = gradeDescriptions[title] ?? `${title} supplied for industrial requirements.`;
  const gradeDetail = getProductDetailContent(material, title);
  const standardForms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, coils and round bars.";
  const rareCoilForms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, and round bars. Coil enquiries are rare and reviewed only against a complete specification.";
  const availableForms = material === "Cupro Nickel" || material === "Titanium" ? rareCoilForms : standardForms;
  return {
    ...gradeDetail,
    slug: `${slugify(title)}-supplier-exporter`,
    title,
    category: `${material} Grades`,
    material,
    description: positioning,
    overview: [
      family?.intro ?? `${material} products for industrial service.`,
      positioning,
      materialSelectionNote,
    ],
    specifications: [
      "Product forms: pipes, tubes, sheets, plates, coils, bars, flanges, fittings and project-specific forms",
      "Standards: ASTM, ASME, ANSI, DIN, EN, BS, JIS and customer specifications",
      "Condition: solution annealed, pickled, polished, machined or as required",
      "Documentation: material test certificates and inspection reports on request",
    ],
    applications: ["Chemical processing", "Oil and gas", "Power generation", "Marine systems", "Heat exchangers", "Industrial fabrication"],
    pageKind: "grade",
    features: gradeDetail.keyFeatures ? [...gradeDetail.keyFeatures] : [],
    standards: gradeDetail.specificationReferences ? [...gradeDetail.specificationReferences] : [],
    supplyOptions: [["Available forms", availableForms], ["Product standard", "State the material specification for the selected pipe, tube, flat product, bar, flange or fitting form"], ["Supply condition", "Solution annealed, age hardened, cold worked, hot finished, pickled, polished or as specified"], ["Dimensions", "Product-form dimensions, tolerances, cut lengths and end/edge preparation"], ["Testing", "PMI, mechanical, corrosion, NDT or supplementary testing as required"], ["Documentation", "Material test certificates and inspection reports on request"], ["Enquiry basis", "Grade / UNS, product form, standard, dimensions, quantity and delivery destination"]],
    rfqRequirements: ["Exact grade / UNS designation", "Required product form", "Applicable material and dimensional standard", "Size, thickness or schedule", "Quantity", "Testing and certification", "Delivery location and required date"],
    technicalNote: materialSelectionNote,
    cta: family?.cta ?? `Request ${title} by product form, standard and size.`,
    availableForms,
  };
}

const gradeGroups = [
  {
    id: "stainless-steel-grades",
    title: "Stainless Steel",
    summary: "Austenitic, heat-resistant and 400-series stainless grades for corrosion-resistant fabrication and process equipment.",
    image: "/assets/product-content/stainless-steel.png",
    grades: ["Stainless Steel 304 / 304L", "Stainless Steel 316 / 316L", "Stainless Steel 321 / 321H", "Stainless Steel 347 / 347H", "Stainless Steel 309S", "Stainless Steel 310 / 310S", "Stainless Steel 317L", "Stainless Steel 904L", "Stainless Steel 316Ti", "Stainless Steel 400"],
  },
  {
    id: "nickel-alloy-grades",
    title: "Nickel Alloy",
    summary: "High-performance nickel, Monel, Inconel, Incoloy and Hastelloy grades for aggressive and high-temperature service.",
    image: "/assets/product-content/nickel-alloys.png",
    grades: ["Alloy 20 (UNS N08020)", "Alloy 28 (UNS N08028)", "Alloy 200 / 201 (UNS N02200 / N02201)", "Monel® 400 (UNS N04400)", "Inconel® 600 (UNS N06600)", "Inconel® 601 (UNS N06601)", "Inconel® 625 (UNS N06625)", "Inconel® 718 (UNS N07718)", "Incoloy® 800 (UNS N08800)", "Incoloy® 800H / 800HT (UNS N08810 / N08811)", "Incoloy® 825 (UNS N08825)", "Hastelloy® C22 (UNS N06022)", "Hastelloy® C276 (UNS N10276)"],
  },
  {
    id: "duplex-super-duplex-grades",
    title: "Duplex & Super Duplex",
    summary: "Duplex, super duplex and high-alloy austenitic grades offering strength and chloride corrosion resistance.",
    image: "/assets/product-content/duplex-and-super-duplex.png",
    grades: ["Duplex 2205 (UNS S31803 / S32205)", "Super Duplex 2507 (UNS S32750 / S32760)", "Duplex 2304 (UNS S32304)", "SMO® 254 (UNS S31254)"],
  },
  {
    id: "cupro-nickel-grades",
    title: "Cupro Nickel",
    summary: "Copper-nickel grades selected for seawater handling, condensers, shipbuilding and marine piping systems.",
    image: "/assets/product-content/cupro-nickel.png",
    grades: ["CuNi 90/10 (C70600)", "CuNi 70/30 (C71500)"],
  },
  {
    id: "titanium-grades",
    title: "Titanium",
    summary: "Commercially pure and alloyed titanium grades for lightweight, high-strength and corrosion-resistant applications.",
    image: "/assets/product-content/titanium.png",
    grades: ["Titanium Grade 2", "Titanium Grade 5", "Titanium Grade 7"],
  },
] as const;

export const materialAvailabilityMatrix = [
  { family: "Stainless Steel", pipes: "available", tubes: "available", flanges: "available", fittings: "available", flat: "available", coils: "available", bars: "available" },
  { family: "Nickel Alloys", pipes: "available", tubes: "available", flanges: "available", fittings: "available", flat: "available", coils: "available", bars: "available" },
  { family: "Duplex & Super Duplex", pipes: "available", tubes: "available", flanges: "available", fittings: "available", flat: "available", coils: "available", bars: "available" },
  { family: "Copper Nickel", pipes: "available", tubes: "available", flanges: "available", fittings: "available", flat: "available", coils: "rare", bars: "available" },
  { family: "Titanium", pipes: "available", tubes: "available", flanges: "available", fittings: "available", flat: "available", coils: "rare", bars: "available" },
] as const;

export const alloyCategories: ProductCategory[] = gradeGroups.map((group) => ({
  id: group.id,
  title: group.title,
  summary: group.summary,
  image: group.image,
  items: group.grades.map((grade) => gradeProduct(grade, group.title)),
}));

export const allProducts = [...productCategories, ...alloyCategories].flatMap((category) => category.items);

export const featuredProducts = [
  productCategories[0].items[0],
  productCategories[1].items[2],
  productCategories[2].items[1],
  productCategories[3].items[0],
  productCategories[4].items[0],
  productCategories[5].items[0],
  productCategories[6].items[2],
  productCategories[1].items[4],
];

export const companyPages = {
  about: {
    title: "About NESCO Pipe & Tubes",
    description: "NESCO Pipe & Tubes is a Mumbai-based manufacturer, supplier and exporter of stainless steel, ferrous and non-ferrous industrial products.",
  },
  contact: {
    title: "Contact NESCO Pipe & Tubes",
    description: "Share your product grade, dimensions, quantity and destination for a quick industrial material quotation.",
  },
  products: {
    title: "Product Catalogue",
    description: "Explore pipes, tubes, flanges, fittings, flat products, bars and fasteners by product form or alloy family.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description: "How NESCO handles website enquiries, technical attachments, contact information and related business data.",
  },
  "terms-condition": {
    title: "Terms & Conditions",
    description: "Terms governing website access, product information, enquiries, quotations and accepted commercial documents.",
  },
} as const;

export function getProductBySlug(slug: string) {
  return allProducts.find((productItem) => productItem.slug === slug);
}

export function getCategoryForProduct(slug: string) {
  return [...productCategories, ...alloyCategories].find((category) => category.items.some((item) => item.slug === slug));
}

export function getImageForProduct(slug: string) {
  const category = getCategoryForProduct(slug);
  if (!category) return undefined;

  const productItem = category.items.find((item) => item.slug === slug);
  return productItem ? `/assets/product-content/${slugify(productItem.title)}.png` : category.image;
}
