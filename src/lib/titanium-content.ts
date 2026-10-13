import type { ProductDetailContent } from "@/lib/product-details";

// Titanium content transcribed from the client correction document. Editorial
// headings from the document are represented by the existing product-page UI.
export const titaniumSharedContent: Partial<ProductDetailContent> = {
  dimensionHeaders: ["Product form", "Ordering dimensions", "Condition / finish", "Standard basis"],
  dimensionsNote:
    "Dimensions must be specified for the selected product form; a grade designation alone does not define size, tolerance, surface condition or supply condition.",
  dimensions: [
    [
      "Pipe",
      "NPS/OD, wall thickness or schedule, length and ends",
      "Seamless/welded, annealed, heat treated or finished as specified",
      "Applicable pipe material and dimensional standards",
    ],
    [
      "Tube",
      "OD, wall thickness, length or coil/U-bend geometry",
      "Seamless/welded, annealed and surface finish as specified",
      "Applicable tube/product standard",
    ],
    [
      "Flat product",
      "Thickness, width, length or coil geometry",
      "Hot/cold rolled, annealed, pickled or polished as specified",
      "Applicable flat-product material standard",
    ],
    [
      "Bar / forging",
      "Diameter/profile, tolerance and cut length",
      "Hot worked, forged, cold finished or machined as specified",
      "Applicable bar/forging material standard",
    ],
  ],
  packaging: [
    "Product-form-specific protection for machined faces, surfaces and ends",
    "Heat-wise segregation and durable grade / heat identification",
    "Clean, non-contaminating separators and protective materials suitable for titanium products",
    "Moisture-resistant wrapping, crates or export packaging where required",
    "Package markings aligned with grade, heat number, dimensions, quantity and purchase order",
  ],
  packagingNote: "Packaging and marking can be adapted to customer, project and export requirements.",
};

const titaniumSpecificationReferences = [
  "ASTM B265 — Titanium and titanium alloy plate, sheet and strip, where applicable",
  "ASTM B338 — Titanium and titanium alloy seamless and welded tubes for condensers and heat exchangers, where applicable",
  "ASTM B861 / B862 — Titanium and titanium alloy seamless / welded pipe, where applicable",
  "ASTM B348 — Titanium and titanium alloy bars and billets, where applicable",
  "ASTM B381 — Titanium and titanium alloy forgings, where applicable",
  "Project specification — Surface condition, cleanliness, NDT, inspection and supplementary requirements, where specified",
] as const;

const titaniumStandardRows = [
  ["ASTM B265", "Titanium and titanium alloy plate, sheet and strip — Flat products"],
  [
    "ASTM B338",
    "Titanium and titanium alloy seamless and welded tubes for condensers and heat exchangers — Tube",
  ],
  ["ASTM B861 / B862", "Titanium and titanium alloy seamless / welded pipe — Pipe"],
  ["ASTM B348", "Titanium and titanium alloy bars and billets — Long products"],
  ["ASTM B381", "Titanium and titanium alloy forgings — Forged products"],
  [
    "Project specification",
    "Surface condition, cleanliness, NDT, inspection and supplementary requirements — Order-specific",
  ],
] as const;

type TitaniumGradeConfig = {
  key: string;
  displayTitle: string;
  designation: string;
  alloyFamily: string;
  alloySystem: string;
  overview: readonly [string, string, string, string];
  manufacturing: readonly [string, string, string, string, string];
  keyFeature: string;
  supplyCondition: string;
};

function createTitaniumGradeContent(config: TitaniumGradeConfig): Partial<ProductDetailContent> {
  return {
    displayTitle: config.displayTitle,
    overviewContent: config.overview,
    manufacturing: config.manufacturing,
    keyFeatures: [
      config.keyFeature,
      "Available across multiple product forms subject to the applicable specification, dimensions and availability.",
      "Heat-wise traceability and material test certificate (MTC) support.",
      "PMI, NDT and third-party inspection options where specified.",
    ],
    specificationReferences: titaniumSpecificationReferences,
    grades: [
      [
        "Specified grade",
        config.designation,
        "Supply reviewed by product form, governing standard, condition and service",
      ],
      [
        "Alloy family",
        config.alloyFamily,
        "Related titanium grades are reviewed against the specified application and requirements and are not automatic substitutes",
      ],
    ],
    productSpecifications: [
      [
        "Available forms",
        "Pipes, tubes, flanges, butt weld fittings, sheets, plates, round bars and other forms, subject to specification and availability",
      ],
      [
        "Product standard",
        "Applicable material and product standard for the selected pipe, tube, flat product, bar, flange or fitting form",
      ],
      ["Supply condition", config.supplyCondition],
      [
        "Dimensions",
        "Product-form dimensions, tolerances, cut lengths and end or edge preparation, as applicable",
      ],
      [
        "Testing",
        "PMI, mechanical testing, corrosion testing, NDT or supplementary testing, as required by the applicable specification",
      ],
      [
        "Documentation",
        "Material test certificates (MTCs), inspection reports and other quality documentation, as specified or requested",
      ],
      [
        "Enquiry basis",
        "Grade / UNS, product form, applicable standard, dimensions, quantity and delivery destination",
      ],
    ],
    standardGroups: [
      {
        title: `${config.displayTitle} product-standard references`,
        rows: titaniumStandardRows,
      },
    ],
    chemicalHeaders: ["Material reference", "Technical profile"],
    chemical: [
      ["Grade / designation", config.designation],
      ["Alloying system", config.alloySystem],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order",
      ],
      [
        "Mechanical-property basis",
        "Product-form and condition dependent; verify certified values against the applicable specification",
      ],
    ],
    mechanicalHeaders: ["Property basis", "Supply requirement"],
    mechanical: [
      [
        "Mechanical profile",
        "Strength and ductility depend on product form, material condition, size and applicable product specification",
      ],
      [
        "Acceptance values",
        "Use the tensile strength, yield strength, elongation and hardness requirements specified for the ordered product form and condition",
      ],
      ["Certification", "Actual heat / lot results are reported on the agreed material test certificate"],
    ],
    materialDataTitle: `${config.displayTitle} material reference`,
    materialDataDescription:
      "A concise engineering identity for procurement. Exact chemical limits and mechanical acceptance values vary by product form, size, condition and applicable specification; the certified MTC governs the supplied material.",
    chemicalTableTitle: "Chemistry and alloy identity",
    chemicalTableNote: "Principal alloying profile; certification limits follow the ordered standard.",
    mechanicalTableTitle: "Property basis",
    mechanicalTableNote: "Product-form and condition dependent; verify certified values against the applicable specification.",
    inspection: [
      "Grade / UNS and applicable product-standard verification",
      "Heat-number traceability and MTC review",
      `PMI against the specified ${config.key} chemistry`,
      "Dimensions, tolerances and surface-condition inspection",
      "Mechanical and hardness testing as required by the applicable product specification",
      "Metallurgical, corrosion or other supplementary testing where specified",
      "NDT and third-party inspection / witnessing against the approved inspection plan",
    ],
    inspectionNote:
      "Testing requirements are applied according to the applicable material/product standard, purchase specification and approved inspection plan.",
  };
}

const titaniumGradeConfigs: readonly TitaniumGradeConfig[] = [
  {
    key: "Titanium Grade 2",
    displayTitle: "Titanium Grade 2 (UNS R50400)",
    designation: "Titanium Grade 2 — UNS R50400",
    alloyFamily: "Commercially Pure Titanium",
    alloySystem: "Commercially pure titanium with controlled oxygen, iron and other specified residual elements",
    overview: [
      "Nesco Pipe & Tubes is a manufacturer, stockist, supplier and exporter of Titanium Grade 2 (UNS R50400), available in pipes, tubes, sheets, plates, coils, round bars and other product forms, subject to applicable specifications, dimensions and availability.",
      "Titanium Grade 2 provides excellent corrosion resistance, good formability and reliable weldability for demanding chemical, marine and industrial environments. Product cleanliness, surface condition and contamination control are important during fabrication.",
      "Commercially pure titanium with excellent corrosion resistance, formability and weldability for chemical processing, heat exchangers, marine and general industrial service.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist.",
    ],
    manufacturing: [
      "Titanium sponge is vacuum melted under controlled conditions to achieve the required chemistry and control interstitial elements.",
      "The resulting ingot is forged or rolled into billet, slab or other starting feedstock according to the required product form.",
      "Extrusion, rolling, drawing, forging or machining creates the specified product form, dimensions and tolerances.",
      "Annealing and controlled surface treatment establish the required material condition and surface quality, with appropriate contamination control.",
      "Surface, dimensions, NDT, material identity, testing and certification are verified against the applicable product specification before clean packing and dispatch.",
    ],
    keyFeature: "Commercially pure titanium with controlled chemistry, including oxygen and iron.",
    supplyCondition: "Annealed, hot worked, cold worked, pickled, polished or as specified for the product form",
  },
  {
    key: "Titanium Grade 5",
    displayTitle: "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
    designation: "Titanium Grade 5 — Ti-6Al-4V / UNS R56400",
    alloyFamily: "Alpha-Beta Titanium Alloy",
    alloySystem: "Alpha-beta titanium alloy containing aluminium and vanadium as principal alloying elements",
    overview: [
      "Nesco Pipe & Tubes is a manufacturer, stockist, supplier and exporter of Titanium Grade 5 (Ti-6Al-4V / UNS R56400), available in pipes, tubes, sheets, plates, round bars, forgings and other product forms, subject to applicable specifications, dimensions and availability.",
      "Titanium Grade 5 provides a high strength-to-weight ratio, good corrosion resistance and reliable performance in demanding mechanical and industrial environments. Product cleanliness, surface condition and contamination control are important during fabrication.",
      "Ti-6Al-4V is a widely used alpha-beta titanium alloy offering high strength and low density for aerospace, high-performance engineering, marine and demanding mechanical components.",
      "The correct material depends on more than strength or corrosion resistance alone. Temperature, pressure, chemical environment, mechanical loading, fabrication route, weldability, heat treatment, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist.",
    ],
    manufacturing: [
      "Titanium sponge and alloying additions are vacuum melted under controlled conditions to achieve the required Ti-6Al-4V chemistry and control interstitial elements.",
      "The resulting ingot is forged or rolled into billet, slab, bar or other starting feedstock according to the required product form.",
      "Forging, rolling, extrusion, drawing or machining is used to produce the specified product form, dimensions and tolerances.",
      "Heat treatment and controlled surface treatment are applied as specified for the required material condition and surface quality.",
      "Surface condition, dimensions, material identity, mechanical properties, NDT and certification are verified against the applicable product specification before clean packing and dispatch.",
    ],
    keyFeature: "Alpha-beta titanium alloy Ti-6Al-4V with a high strength-to-weight ratio.",
    supplyCondition: "Annealed, heat treated, cold worked, hot worked, pickled, polished or as specified for the product form",
  },
  {
    key: "Titanium Grade 7",
    displayTitle: "Titanium Grade 7 (UNS R52400)",
    designation: "Titanium Grade 7 — UNS R52400",
    alloyFamily: "Commercially Pure Titanium with Palladium",
    alloySystem: "Commercially pure titanium with a controlled palladium addition",
    overview: [
      "Nesco Pipe & Tubes is a manufacturer, stockist, supplier and exporter of Titanium Grade 7 (UNS R52400), available in pipes, tubes, sheets, plates, round bars, forgings and other product forms, subject to applicable specifications, dimensions and availability.",
      "Titanium Grade 7 is a commercially pure titanium grade with a controlled palladium addition, providing enhanced corrosion resistance in selected reducing acid and chemical environments. Product cleanliness, surface condition and contamination control are important during fabrication.",
      "Titanium Grade 7 is selected for demanding chemical processing and corrosion-service applications where enhanced resistance to reducing environments is required.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemical environment, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist.",
    ],
    manufacturing: [
      "Titanium sponge and controlled palladium additions are vacuum melted under controlled conditions to achieve the required chemistry and control interstitial elements.",
      "The resulting ingot is forged or rolled into billet, slab, bar or other starting feedstock according to the required product form.",
      "Extrusion, rolling, drawing, forging or machining is used to produce the specified product form, dimensions and tolerances.",
      "Annealing and controlled surface treatment are applied as specified to establish the required material condition and surface quality.",
      "Surface condition, dimensions, material identity, testing, NDT and certification are verified against the applicable product specification before clean packing and dispatch.",
    ],
    keyFeature:
      "Commercially pure titanium with a controlled palladium addition for enhanced corrosion resistance in selected environments.",
    supplyCondition: "Annealed, cold worked, hot worked, pickled, polished or as specified for the product form",
  },
] as const;

export const titaniumGradeContent: Record<string, Partial<ProductDetailContent>> = Object.fromEntries(
  titaniumGradeConfigs.map((config) => [config.key, createTitaniumGradeContent(config)]),
);
