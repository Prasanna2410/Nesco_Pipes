import type { ProductDetailContent } from "@/lib/product-details";

// Nickel-alloy content transcribed from the client correction document; document-only editorial labels are intentionally excluded.
export const nickelSharedContent: Partial<ProductDetailContent> = {
  "productSpecifications": [
    [
      "Available forms",
      "Pipes, tubes, flanges, butt weld fittings, sheets and plates, coils and round bars."
    ],
    [
      "Product standard",
      "State the material specification for the selected pipe, tube, flat product, bar, flange or fitting form."
    ],
    [
      "Supply condition",
      "Stabilized annealed, cold worked, hot finished, pickled, polished or as specified."
    ],
    [
      "Dimensions",
      "Product-form dimensions, tolerances, cut lengths and end/edge preparation."
    ],
    [
      "Testing",
      "PMI, mechanical, corrosion, NDT or supplementary testing as required."
    ],
    [
      "Documentation",
      "Material test certificates and inspection reports on request."
    ],
    [
      "Enquiry basis",
      "Grade / UNS, product form, standard, dimensions, quantity and delivery destination."
    ]
  ],
  "dimensionHeaders": [
    "Product form",
    "Ordering dimensions",
    "Condition / finish",
    "Standard basis"
  ],
  "dimensions": [
    [
      "Pipe",
      "NPS/OD, schedule or wall, length and ends",
      "Seamless/welded, heat treated and finished",
      "Material standard plus ASME dimensions"
    ],
    [
      "Tube",
      "OD, wall, length/coil/U-bend geometry",
      "Seamless/welded, annealed and surface finish",
      "Product-specific ASTM/EN standard"
    ],
    [
      "Flat product",
      "Thickness, width, length or coil geometry",
      "Hot/cold rolled, annealed, pickled or polished",
      "Flat-product material standard"
    ],
    [
      "Bar / forging",
      "Profile size, tolerance and cut length",
      "Hot finished, forged, cold finished or machined",
      "Bar/forging material standard"
    ]
  ],
  "dimensionsNote": "Dimensions must be specified for the selected product form; a grade designation alone does not define size, tolerance or condition.",
  "standardGroups": [
    {
      "title": "Nickel-alloy manufacturing and dimensional references",
      "rows": [
        [
          "Applicable ASTM B-series material standard",
          "Grade- and product-form-specific nickel alloy requirements — Material"
        ],
        [
          "ASME B16.5 / B16.9",
          "Flange / butt-weld fitting dimensions where applicable — Piping dimensions"
        ],
        [
          "ASME B36.19M or drawing",
          "Pipe dimensions where applicable — Dimensions"
        ],
        [
          "EN / DIN / ISO",
          "Specified European or international product standard — Alternative reference"
        ],
        [
          "Customer specification",
          "Condition, corrosion tests, NDT and supplementary requirements — Project-specific"
        ]
      ]
    }
  ],
  "inspection": [
    "Grade / UNS and product-standard verification",
    "Heat-number traceability and MTC review",
    "PMI against the specified alloy",
    "Dimensions, tolerance and surface-condition inspection",
    "Mechanical and hardness testing to the product specification",
    "Corrosion, microstructure or intergranular testing when required",
    "NDT and third-party witnessing against the approved inspection plan"
  ],
  "inspectionNote": "Testing requirements are applied according to the applicable material/product standard, purchase specification and approved inspection plan.",
  "packaging": [
    "Product-form-specific protection for machined faces, surfaces and ends",
    "Heat-wise segregation and durable grade identification",
    "Non-contaminating separators for corrosion-resistant alloys",
    "Moisture-resistant wrapping or export cases where required",
    "Package labels aligned with grade, heat, dimensions, quantity and purchase order"
  ],
  "packagingNote": "Packaging and marking can be adapted to customer, project and export requirements."
};

export const nickelGradeContent: Record<string, Partial<ProductDetailContent>> = {
  "Alloy 20 (UNS N08020)": {
    "displayTitle": "Alloy 20 (UNS N08020)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Alloy 20 (UNS N08020), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Alloy 20 is a nickel-iron-chromium alloy with molybdenum and copper, developed for demanding corrosion environments. Its alloy chemistry provides strong resistance to sulphuric acid and selected aggressive chemical-processing media, while niobium stabilisation supports resistance to sensitisation during welding.",
      "Alloy 20 is commonly selected for sulphuric-acid service, chemical processing, and applications involving aggressive acidic environments where conventional stainless steels may not provide the required corrosion resistance.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, acid concentration, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Stabilized annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Ni-Fe-Cr-Mo-Cu alloy with niobium stabilisation.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "ASTM B729",
      "ASTM B463 / B473",
      "ASTM B829",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable.",
      "EN / DIN / ISO — Specified European or international product standard.",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements.",
      "Applicable current ASTM material specification — Grade- and product-form-specific Alloy 20 requirements."
    ],
    "grades": [
      [
        "Specified grade",
        "Alloy 20 (UNS N08020)",
        "Nickel-iron-chromium-molybdenum-copper alloy for demanding chemical and sulphuric-acid service"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Alloy 20 (UNS N08020)"
      ],
      [
        "Alloying system",
        "Ni-Fe-Cr-Mo-Cu alloy with niobium stabilisation."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between annealed conditions and product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Alloy 20 (UNS N08020) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Alloy 28 (UNS N08028)": {
    "displayTitle": "Alloy 28 (UNS N08028)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Alloy 28 (UNS N08028), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Alloy 28 is a high-alloy austenitic nickel-iron-chromium alloy containing molybdenum and copper, developed for strong resistance to aggressive acidic and chloride-containing environments.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "High-alloy Ni-Fe-Cr-Mo-Cu austenitic nickel alloy with controlled carbon.",
      "High resistance to selected acidic, chloride-containing and other aggressive process environments.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific Alloy 28 requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Alloy 28 (UNS N08028)",
        "High-alloy nickel-iron-chromium alloy for demanding acidic, chloride-containing and corrosive process environments"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Alloy 28 (UNS N08028)"
      ],
      [
        "Alloying system",
        "Austenitic Ni-Fe-Cr alloy with molybdenum and copper."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Alloy 28 (UNS N08028) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Alloy 200 / 201 (UNS N02200 / N02201)": {
    "displayTitle": "Nickel 200 / Nickel 201 (UNS N02200 / N02201)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Nickel 200 / Nickel 201 (UNS N02200 / N02201), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Nickel 200 and Nickel 201 are commercially pure wrought nickel grades. Nickel 201 is the low-carbon version of Nickel 200 and is preferred for applications involving prolonged exposure to elevated temperatures where reduced carbon content is required.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Commercially pure wrought nickel; Nickel 201 has controlled lower carbon content than Nickel 200.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Nickel 200 / Nickel 201 (UNS N02200 / N02201)",
        "Commercially pure nickel grades; selection depends on carbon requirement, temperature, product form and service conditions"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Nickel 200 / Nickel 201 (UNS N02200 / N02201)"
      ],
      [
        "Alloying system",
        "Commercially pure nickel; Nickel 201 has lower carbon content than Nickel 200."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Nickel 200 / Nickel 201 (UNS N02200 / N02201) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Monel® 400 (UNS N04400)": {
    "displayTitle": "Monel® 400 (UNS N04400)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Monel® 400 (UNS N04400), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Monel® 400 is a nickel-copper alloy valued for its resistance to seawater, hydrofluoric acid and reducing environments, together with good mechanical properties and resistance to stress corrosion cracking in selected service conditions.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer's qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-copper solid-solution alloy with controlled iron and manganese additions.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Monel® 400 (UNS N04400)",
        "Nickel-copper alloy selected for seawater, hydrofluoric acid, reducing environments and other demanding corrosion-service applications"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Monel 400"
      ],
      [
        "UNS designation",
        "N04400"
      ],
      [
        "Alloying system",
        "Nickel-copper alloy with controlled iron and manganese"
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Monel® 400 (UNS N04400) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Inconel® 600 (UNS N06600)": {
    "displayTitle": "Inconel® 600 (UNS N06600)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Inconel® 600 (UNS N06600), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Inconel® 600 is a nickel-chromium alloy with good resistance to oxidation and corrosion at elevated temperatures, along with resistance to a range of organic and inorganic compounds. It is commonly selected for furnace components, chemical-processing equipment, heat-treatment applications and other high-temperature service environments.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer's qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-chromium alloy with controlled iron content, offering corrosion resistance and oxidation resistance at elevated temperatures.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Inconel® 600 (UNS N06600)",
        "Nickel-chromium alloy selected for oxidation resistance, corrosion resistance and elevated-temperature service in chemical processing, furnace and heat-treatment applications"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Inconel® 600 (UNS N06600)"
      ],
      [
        "Alloying system",
        "Nickel-chromium alloy with controlled iron content, developed for corrosion resistance and oxidation resistance at elevated temperatures."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Inconel® 600 (UNS N06600) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Inconel® 601 (UNS N06601)": {
    "displayTitle": "Inconel® 601 (UNS N06601)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Inconel® 601 (UNS N06601), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Inconel® 601 is a nickel-chromium alloy with aluminium addition, developed for high-temperature oxidation resistance and corrosion resistance. It is commonly selected for furnace components, heat-treatment equipment, petrochemical processing and other applications involving elevated temperatures and demanding thermal environments.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-chromium-iron alloy with aluminium addition, offering strong oxidation resistance at elevated temperatures.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Inconel® 601 (UNS N06601)",
        "Nickel-chromium alloy selected for high-temperature oxidation resistance and demanding thermal-service applications"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Inconel® 601 (UNS N06601)"
      ],
      [
        "Alloying system",
        "Nickel-chromium-iron alloy with aluminium addition, developed for oxidation resistance at elevated temperatures."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Inconel® 601 (UNS N06601) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Inconel® 625 (UNS N06625)": {
    "displayTitle": "Inconel® 625 (UNS N06625)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Inconel® 625 (UNS N06625), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Inconel® 625 is a nickel-chromium-molybdenum-niobium alloy offering high strength and excellent resistance to pitting, crevice corrosion and chloride-containing environments. It is commonly selected for chemical processing, marine and offshore equipment, pollution-control systems, heat exchangers and other demanding corrosion-service applications.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-chromium-molybdenum-niobium alloy providing high strength and strong resistance to pitting, crevice corrosion and chloride-containing environments.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Inconel® 625 (UNS N06625)",
        "Nickel-chromium-molybdenum-niobium alloy selected for high strength and demanding corrosion-service applications"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Inconel® 625 (UNS N06625)"
      ],
      [
        "Alloying system",
        "Nickel-chromium-molybdenum-niobium alloy with molybdenum and niobium additions providing high strength and resistance to localized corrosion."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Inconel® 625 (UNS N06625) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Inconel® 718 (UNS N07718)": {
    "displayTitle": "Inconel® 718 (UNS N07718)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Inconel® 718 (UNS N07718), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Inconel® 718 is a precipitation-hardenable nickel-chromium-iron alloy with niobium and molybdenum additions, developed for high strength, corrosion resistance and reliable mechanical performance across demanding temperature ranges. It is commonly selected for aerospace, power generation, oil and gas, chemical processing and other high-strength applications.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution treatment followed by precipitation or age hardening is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Precipitation-hardenable nickel-chromium-iron alloy with niobium and molybdenum additions for high strength and demanding service conditions.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Inconel® 718 (UNS N07718)",
        "Precipitation-hardenable nickel alloy selected for high strength and demanding temperature and mechanical-service applications"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Inconel® 718 (UNS N07718)"
      ],
      [
        "Alloying system",
        "Precipitation-hardenable nickel-chromium-iron-niobium-molybdenum alloy."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary substantially between solution-treated and age-hardened conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Inconel® 718 (UNS N07718) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Incoloy® 800 (UNS N08800)": {
    "displayTitle": "Incoloy® 800 (UNS N08800)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Incoloy® 800 (UNS N08800), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Incoloy® 800 is an iron-nickel-chromium alloy developed for elevated-temperature service, offering resistance to oxidation, carburisation and nitridation. It is commonly selected for heat-treatment equipment, petrochemical processing, furnace components and other high-temperature process applications.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Iron-nickel-chromium alloy offering oxidation, carburisation and nitridation resistance in elevated-temperature service.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Incoloy® 800 (UNS N08800)",
        "Iron-nickel-chromium alloy selected for elevated-temperature oxidation, carburisation and nitridation resistance"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Incoloy® 800 (UNS N08800)"
      ],
      [
        "Alloying system",
        "Iron-nickel-chromium alloy developed for oxidation, carburisation and nitridation resistance at elevated temperatures."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Incoloy® 800 (UNS N08800) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Incoloy® 800H / 800HT (UNS N08810 / N08811)": {
    "displayTitle": "Incoloy® 800H / 800HT (UNS N08810 / N08811)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Incoloy® 800H / 800HT (UNS N08810 / N08811), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Incoloy® 800H and 800HT are controlled-composition variants of the 800 series, developed for improved creep and rupture strength at elevated temperatures. Their controlled carbon, aluminium and titanium levels and specified grain-size requirements support reliable mechanical performance in high-temperature process equipment.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Controlled-composition Fe-Ni-Cr alloys developed for improved creep and rupture strength at elevated temperatures.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Incoloy® 800H / 800HT (UNS N08810 / N08811)",
        "High-temperature nickel-iron-chromium variants selected for improved creep and rupture strength"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Incoloy® 800H / 800HT (UNS N08810 / N08811)"
      ],
      [
        "Alloying system",
        "Controlled-composition iron-nickel-chromium alloys developed for elevated-temperature creep and rupture strength."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Incoloy® 800H / 800HT (UNS N08810 / N08811) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Incoloy® 825 (UNS N08825)": {
    "displayTitle": "Incoloy® 825 (UNS N08825)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Incoloy® 825 (UNS N08825), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Incoloy® 825 is a nickel-iron-chromium alloy with molybdenum, copper and titanium additions, developed for resistance to acidic and chloride-containing environments. It is commonly selected for chemical processing, pollution-control equipment, oil and gas, marine applications and other demanding corrosion-service environments.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-iron-chromium-molybdenum-copper alloy with titanium stabilisation for demanding corrosion-service environments.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Incoloy® 825 (UNS N08825)",
        "Nickel-iron-chromium alloy selected for acidic, chloride-containing and other demanding corrosion-service applications"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Incoloy® 825 (UNS N08825)"
      ],
      [
        "Alloying system",
        "Nickel-iron-chromium-molybdenum-copper alloy with titanium stabilisation."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Incoloy® 825 (UNS N08825) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Hastelloy® C22 (UNS N06022)": {
    "displayTitle": "Hastelloy® C-22 (UNS N06022)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Hastelloy® C-22 (UNS N06022), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Hastelloy® C-22 is a nickel-chromium-molybdenum-tungsten alloy developed for broad resistance to both oxidising and reducing chemical environments, including strong resistance to pitting, crevice corrosion and stress-corrosion cracking. It is commonly selected for chemical processing, pollution-control equipment, pharmaceutical processing and other severe corrosion-service applications.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-chromium-molybdenum-tungsten alloy offering broad resistance to oxidising and reducing environments and strong resistance to localized corrosion.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Hastelloy® C-22 (UNS N06022)",
        "Nickel-chromium-molybdenum-tungsten alloy selected for severe oxidising/reducing chemical and localized-corrosion service"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Hastelloy® C-22 (UNS N06022)"
      ],
      [
        "Alloying system",
        "Nickel-chromium-molybdenum-tungsten alloy developed for broad resistance to oxidising and reducing chemical environments."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Hastelloy® C-22 (UNS N06022) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  },
  "Hastelloy® C276 (UNS N10276)": {
    "displayTitle": "Hastelloy® C-276 (UNS N10276)",
    "overviewContent": [
      "Nesco Pipe & Tubes is a manufacturer, supplier, stockist and exporter of Hastelloy® C-276 (UNS N10276), offering pipes, tubes, flanges, butt weld fittings, sheets, plates, coils and round bars in specified dimensions, finishes, conditions and testing requirements for industrial and project applications. Availability and applicable standards are confirmed against the customer’s purchase specification.",
      "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated.",
      "Hastelloy® C-276 is a nickel-chromium-molybdenum-tungsten alloy developed for strong resistance to severe oxidising and reducing chemical environments, including pitting, crevice corrosion and stress-corrosion cracking. It is commonly selected for chemical processing, pollution-control equipment, corrosive waste treatment and other demanding corrosion-service applications.",
      "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
    ],
    "manufacturing": [
      "High-purity raw materials are melted and refined to the specified UNS chemistry.",
      "The ingot is remelted where required and hot worked into billet, slab or forging stock.",
      "Rolling, extrusion, drawing, forging or machining creates the ordered product form.",
      "Solution annealing or other specified heat treatment is completed according to the alloy and product specification.",
      "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."
    ],
    "keyFeatures": [
      "Nickel-chromium-molybdenum-tungsten alloy with very low carbon and silicon.",
      "Available across multiple project product forms subject to specification.",
      "Heat-wise traceability and MTC support.",
      "PMI, NDT and third-party inspection options."
    ],
    "specificationReferences": [
      "Applicable ASTM B-series material standard — Grade- and product-form-specific nickel alloy requirements",
      "ASME B16.5 / B16.9 — Flange / butt-weld fitting dimensions where applicable",
      "ASME B36.19M or drawing — Pipe dimensions where applicable",
      "EN / DIN / ISO — Specified European or international product standard",
      "Customer specification — Condition, corrosion tests, NDT and supplementary requirements"
    ],
    "grades": [
      [
        "Specified grade",
        "Hastelloy® C-276 (UNS N10276)",
        "Nickel-chromium-molybdenum-tungsten alloy selected for severe oxidising/reducing corrosion and localized-corrosion service"
      ],
      [
        "Alloy family",
        "Nickel Alloy",
        "Related grades are not treated as automatic substitutes"
      ]
    ],
    "chemicalHeaders": [
      "Material reference",
      "Technical profile"
    ],
    "chemical": [
      [
        "Grade / designation",
        "Hastelloy® C-276 (UNS N10276)"
      ],
      [
        "Alloying system",
        "Nickel-chromium-molybdenum-tungsten alloy with very low carbon and silicon."
      ],
      [
        "Certification basis",
        "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
      ]
    ],
    "mechanicalHeaders": [
      "Property basis",
      "Supply requirement"
    ],
    "mechanical": [
      [
        "Mechanical profile",
        "Mechanical properties vary between solution-annealed and cold-worked conditions and between product forms."
      ],
      [
        "Acceptance values",
        "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition."
      ],
      [
        "Certification",
        "Actual heat/lot results are reported on the agreed material test certificate."
      ]
    ],
    "materialDataTitle": "Hastelloy® C-276 (UNS N10276) material reference",
    "materialDataDescription": "A concise engineering reference for procurement. Exact chemical limits and mechanical acceptance values depend on product form, size, condition and the applicable specification edition; the certified material test certificate governs the supplied material.",
    "chemicalTableTitle": "Chemistry and alloy identity",
    "chemicalTableNote": "Principal alloying profile; certification limits follow the ordered standard.",
    "mechanicalTableTitle": "Mechanical-property basis",
    "mechanicalTableNote": "Product-form and condition dependent; verify certified values."
  }
};

