import type { ProductDetailContent } from "@/lib/product-details";

// CuNi content transcribed from the client correction document. Document-only
// headings and editorial inconsistencies are normalized for website publication.
export const cuproNickelSharedContent: Partial<ProductDetailContent> = {
  dimensionHeaders: ["Product form", "Ordering dimensions", "Condition / finish", "Standard basis"],
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
      "Applicable product standard",
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
  dimensionsNote:
    "Dimensions must be specified for the selected product form; a grade designation alone does not define size, tolerance, finish or supply condition.",
  inspection: [
    "Grade / UNS and applicable product-standard verification",
    "Heat-number traceability and material test certificate review",
    "PMI against the specified grade and alloy chemistry",
    "Dimensions, tolerances and surface-condition inspection",
    "Mechanical and hardness testing as required by the applicable product specification",
    "Corrosion, metallurgical or other supplementary testing where specified",
    "NDT and third-party inspection or witnessing against the approved inspection plan",
  ],
  inspectionNote:
    "Testing requirements are applied according to the applicable material/product standard, purchase specification and approved inspection plan.",
  packaging: [
    "Product-form-specific protection for surfaces, machined faces and ends",
    "Heat-wise segregation and durable grade / heat identification",
    "Non-contaminating separators and protective materials suitable for copper-nickel products",
    "Moisture-resistant wrapping, crates or export packaging where required",
    "Package markings aligned with grade, heat number, dimensions, quantity and purchase order",
  ],
  packagingNote: "Packaging and marking can be adapted to customer, project and export requirements.",
};

const commonSpecificationReferences = [
  "ASTM B466/B466M — Seamless copper-nickel pipe and tube, where applicable",
  "ASTM B467 — Welded copper-nickel pipe, where applicable",
  "ASTM B171/B171M — Copper-alloy plate and sheet for pressure vessels, condensers and heat exchangers, where applicable",
  "ASTM B151/B151M — Copper-nickel rod and bar, where applicable",
  "ASME B16 / project drawing — Flange and fitting dimensions, where applicable",
  "Naval / project specification — Service-specific testing, cleanliness, inspection and acceptance requirements, where specified",
] as const;

const commonStandardRows = [
  ["ASTM B466/B466M", "Seamless copper-nickel pipe and tube — Tubular products"],
  ["ASTM B467", "Welded copper-nickel pipe — Tubular products"],
  [
    "ASTM B171/B171M",
    "Copper-alloy plate and sheet for pressure vessels, condensers and heat exchangers — Flat products",
  ],
  ["ASTM B151/B151M", "Copper-nickel rod and bar — Long products"],
  ["ASME B16 / project drawing", "Flange and fitting dimensions, where applicable — Piping components"],
  [
    "Naval / project specification",
    "Service-specific testing, cleanliness, inspection and acceptance requirements, where specified — Project-specific",
  ],
] as const;

export const cuproNickelGradeContent: Record<string, Partial<ProductDetailContent>> = {
  "CuNi 90/10 (C70600)": {
    displayTitle: "CuNi 90/10 (UNS C70600)",
    overviewContent: [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of CuNi 90/10 (UNS C70600), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Copper Nickel 90/10 is a copper-nickel alloy containing approximately 90% copper and 10% nickel, widely used in seawater piping, shipbuilding, offshore systems, condensers and heat exchangers. It offers good resistance to seawater corrosion, erosion-corrosion and marine biofouling, together with good fabrication and welding characteristics.",
      "It is a widely used marine copper-nickel alloy offering a practical balance of seawater corrosion resistance, erosion performance, fabrication characteristics and service suitability.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, seawater chemistry, flow velocity, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist.",
    ],
    manufacturing: [
      "Copper and nickel feedstock are melted and refined under controlled conditions to achieve the required CuNi 90/10 (UNS C70600) chemistry.",
      "Casting and hot working produce the required billet, slab, tube shell or other starting form for the selected product.",
      "Extrusion, drawing, rolling, forging or forming establishes the required dimensions, tolerances and mechanical condition according to the product form.",
      "Annealing, cleaning and surface finishing are carried out as specified to achieve the required metallurgical condition and surface quality.",
      "Dimensions, material identity, applicable testing and certification are verified heat-wise against the relevant product specification and inspection requirements.",
    ],
    keyFeatures: [
      "Copper-nickel alloy containing approximately 10% nickel, with controlled iron and manganese additions that support seawater corrosion and erosion-corrosion resistance.",
      "Available across multiple product forms, subject to the applicable product specification, dimensions and availability.",
      "Heat-wise traceability and material test certificate support.",
      "PMI, NDT and third-party inspection options against specified inspection requirements.",
    ],
    specificationReferences: commonSpecificationReferences,
    grades: [
      [
        "Specified grade",
        "CuNi 90/10 (UNS C70600)",
        "Supply is reviewed by product form, governing standard, condition and service",
      ],
      [
        "Alloy family",
        "Copper-Nickel Alloy",
        "Related copper-nickel grades are reviewed against the required specification and service conditions",
      ],
    ],
    productSpecifications: [
      [
        "Available forms",
        "Pipes, tubes, flanges, butt weld fittings, sheets, plates and round bars; other forms are reviewed against the complete specification",
      ],
      [
        "Product standard",
        "Applicable material and product standard for the selected pipe, tube, flat product, bar, flange or fitting form",
      ],
      ["Supply condition", "Annealed, cold worked, hot worked, pickled, polished or as specified"],
      [
        "Dimensions",
        "Product-form dimensions, tolerances, cut lengths and end/edge preparation, as applicable",
      ],
      ["Testing", "PMI, mechanical, corrosion, NDT or supplementary testing as required"],
      [
        "Documentation",
        "Material test certificates, inspection reports and other quality documentation as specified or requested",
      ],
      [
        "Enquiry basis",
        "Grade / UNS, product form, applicable standard, dimensions, quantity and delivery destination",
      ],
    ],
    standardGroups: [
      {
        title: "CuNi 90/10 product-standard references",
        rows: commonStandardRows,
      },
    ],
    chemicalHeaders: ["Material reference", "Technical profile"],
    chemical: [
      ["Grade / designation", "CuNi 90/10 (UNS C70600)"],
      [
        "Alloying system",
        "Copper-nickel alloy containing approximately 10% nickel, with controlled iron and manganese additions",
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order",
      ],
    ],
    mechanicalHeaders: ["Property basis", "Supply requirement"],
    mechanical: [
      [
        "Mechanical profile",
        "Strength and ductility depend on temper, product form and degree of cold work; requirements for tubes, pipes, plate and bar are not interchangeable",
      ],
      [
        "Acceptance values",
        "Tensile strength, yield strength, elongation and hardness limits are verified against the ordered product-form standard and specified condition",
      ],
      ["Certification", "Actual heat/lot results are reported on the agreed material test certificate"],
    ],
    materialDataTitle: "CuNi 90/10 (UNS C70600) material reference",
    materialDataDescription:
      "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values vary by product form, size, condition and applicable specification; the certified material test certificate governs the supplied material.",
    chemicalTableTitle: "Alloy identity and chemistry",
    chemicalTableNote: "Principal alloying profile; certification limits follow the ordered standard.",
    mechanicalTableTitle: "Mechanical-property basis",
    mechanicalTableNote: "Product-form and condition dependent; verify certified values.",
  },
  "CuNi 70/30 (C71500)": {
    displayTitle: "CuNi 70/30 (UNS C71500)",
    overviewContent: [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of CuNi 70/30 (UNS C71500), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Copper Nickel 70/30 is a higher-nickel copper-nickel alloy widely used in seawater piping, shipbuilding, offshore systems, condensers and heat exchangers. It offers enhanced resistance to seawater corrosion, erosion-corrosion and marine biofouling, together with good fabrication and welding characteristics.",
      "It is selected for demanding seawater, condenser and marine service, including applications involving higher flow velocities and turbulent conditions.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, seawater chemistry, flow velocity, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist.",
    ],
    manufacturing: [
      "Copper and nickel feedstock are melted and refined under controlled conditions to achieve the required CuNi 70/30 (UNS C71500) chemistry.",
      "Casting and hot working produce the required billet, slab, tube shell or other starting form for the selected product.",
      "Extrusion, drawing, rolling, forging or forming establishes the required dimensions, tolerances and mechanical condition according to the product form.",
      "Annealing, cleaning and surface finishing are carried out as specified to achieve the required metallurgical condition and surface quality.",
      "Dimensions, material identity, applicable testing and certification are verified heat-wise against the relevant product specification and inspection requirements.",
    ],
    keyFeatures: [
      "Copper-nickel alloy containing approximately 30% nickel, with controlled iron and manganese additions that support seawater corrosion and erosion-corrosion resistance.",
      "Available across multiple product forms, subject to the applicable product specification, dimensions and availability.",
      "Heat-wise traceability and material test certificate support.",
      "PMI, NDT and third-party inspection options against specified inspection requirements.",
    ],
    specificationReferences: commonSpecificationReferences,
    grades: [
      [
        "Specified grade",
        "CuNi 70/30 (UNS C71500)",
        "Supply is reviewed by product form, governing standard, condition and service",
      ],
      [
        "Alloy family",
        "Copper-Nickel (Cu-Ni)",
        "Related Cu-Ni grades are reviewed against the specified application and requirements; they are not treated as automatic substitutes",
      ],
    ],
    productSpecifications: [
      [
        "Available forms",
        "Pipes, tubes, flanges, butt weld fittings, sheets, plates and round bars, subject to specification and availability",
      ],
      [
        "Product standard",
        "Applicable material and product standard for the selected pipe, tube, flat product, bar, flange or fitting form",
      ],
      ["Supply condition", "Annealed, cold worked, hot worked, pickled, polished or as specified"],
      [
        "Dimensions",
        "Product-form dimensions, tolerances, cut lengths and end/edge preparation, as applicable",
      ],
      ["Testing", "PMI, mechanical, hardness, corrosion, NDT or supplementary testing as required"],
      [
        "Documentation",
        "Material test certificates, inspection reports and other quality documentation as specified or requested",
      ],
      [
        "Enquiry basis",
        "Grade / UNS, product form, applicable standard, dimensions, quantity and delivery destination",
      ],
    ],
    standardGroups: [
      {
        title: "CuNi 70/30 product-standard references",
        rows: commonStandardRows,
      },
    ],
    chemicalHeaders: ["Material reference", "Technical profile"],
    chemical: [
      ["Grade / designation", "CuNi 70/30 (UNS C71500)"],
      [
        "Alloying system",
        "Copper-nickel alloy containing nominally about 30% nickel, with controlled iron and manganese additions",
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order",
      ],
    ],
    mechanicalHeaders: ["Property basis", "Supply requirement"],
    mechanical: [
      [
        "Mechanical profile",
        "Strength and ductility depend on grade, condition, product form and degree of cold work; requirements for tube, pipe, plate and bar are not interchangeable",
      ],
      [
        "Acceptance values",
        "Tensile strength, yield strength, elongation and hardness limits are verified against the ordered product-form standard and specified condition",
      ],
      ["Certification", "Actual heat/lot results are reported on the agreed material test certificate"],
    ],
    materialDataTitle: "CuNi 70/30 (UNS C71500) material reference",
    materialDataDescription:
      "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values vary by product form, size, condition and applicable specification; the certified material test certificate governs the supplied material.",
    chemicalTableTitle: "Alloy identity and chemistry",
    chemicalTableNote: "Principal alloying profile; certification limits follow the ordered standard.",
    mechanicalTableTitle: "Mechanical-property basis",
    mechanicalTableNote: "Product-form and condition dependent; verify certified values.",
  },
};
