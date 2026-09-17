import type { ProductDetailContent } from "@/lib/product-details";

// Stainless-steel content from the client's correction document; editorial notes are not published.
export const stainlessSharedContent: Partial<ProductDetailContent> = {
  "productSpecifications": [
    [
      "Available Forms",
      "Pipes, Tubes, Flanges, Butt Weld Fittings, Sheets, Plates, Coils, Round Bars"
    ],
    [
      "Product Standard",
      "Applicable material/product standard"
    ],
    [
      "Supply Condition",
      "Solution annealed, hot finished, cold worked, or other specified condition"
    ],
    [
      "Dimensions",
      "Product-form dimensions, tolerances, cut lengths, end/edge preparation"
    ],
    [
      "Testing",
      "PMI, mechanical, corrosion, NDT or supplementary testing as required"
    ],
    [
      "Documentation",
      "MTC and inspection reports as specified"
    ],
    [
      "Identification",
      "Heat number, grade, size and other agreed identification"
    ],
    [
      "Enquiry Basis",
      "Grade/UNS, product form, standard, dimensions, quantity and destination"
    ]
  ],
  "dimensionHeaders": [
    "Product Form",
    "Dimensions / Configuration",
    "Supply Options",
    "Reference"
  ],
  "dimensions": [
    [
      "Pipes",
      "NPS/OD, schedule/wall thickness, length, end configuration",
      "Seamless/welded, heat treated/finished",
      "Applicable material + dimensional standard"
    ],
    [
      "Tubes",
      "OD, wall thickness, length/coil, U-bend",
      "Seamless/welded, annealed/specified finish",
      "Applicable ASTM/EN product standard"
    ],
    [
      "Flat Products",
      "Thickness, width, length/coil",
      "Hot/cold rolled, annealed, pickled/polished",
      "Applicable flat-product material standard"
    ],
    [
      "Bars / Forgings",
      "Diameter/profile, tolerance, cut length",
      "Hot finished, forged, cold finished, machined",
      "Applicable bar/forging standard"
    ]
  ],
  "dimensionsNote": "Dimensions and supply options are confirmed against the exact grade, product form, applicable specification and manufacturing availability.",
  "inspection": [
    "Grade/UNS/product standard verification",
    "Heat-number traceability and MTC review",
    "PMI against specified alloy/applicable material specification",
    "Dimensional, tolerance and surface-condition inspection",
    "Mechanical and hardness testing according to applicable product specification when specified",
    "Corrosion, microstructure, intergranular or other supplementary testing when required",
    "Applicable NDT and third-party witnessing against the approved inspection plan"
  ],
  "inspectionNote": "Testing requirements are applied according to the applicable material/product standard, purchase specification and customer/project requirements.",
  "packaging": [
    "Product-form-specific protection for machined faces, surfaces and ends.",
    "Heat-wise segregation and durable grade identification.",
    "Clean, non-contaminating separators/protective materials where required.",
    "Moisture-resistant wrapping/export packing where required.",
    "Wooden cases/crates where required.",
    "Identification labels can include grade, heat number, size, dimensions, quantity and PO/project reference, as applicable."
  ],
  "packagingNote": "Packaging and marking can be adapted to customer, project and export requirements."
};

export const stainlessGradeContent: Record<string, Partial<ProductDetailContent>> = {
  "Stainless Steel 304 / 304L": {
  "overviewContent": [
    "304/304L is an austenitic chromium-nickel stainless steel widely used for its combination of corrosion resistance, formability, weldability and general-purpose mechanical performance. It is commonly supplied for process equipment, food and beverage applications, pharmaceutical equipment, architectural components, fabrication and general engineering service.",
    "Grade 304 is the standard-carbon version, while 304L has a lower carbon content and is commonly selected for welded fabrication where reduced susceptibility to sensitization during welding is important.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, process chemistry, erosion, fabrication route, weldability, mechanical requirements, product form, applicable codes and lifecycle considerations should be reviewed together. Final grade selection remains with the customer's qualified engineer, designer or material specialist."
  ],
  "keyFeatures": [
    "Austenitic chromium-nickel stainless steel with good general corrosion resistance and formability.",
    "304L has a lower carbon content than 304 and is commonly selected for welded fabrication.",
    "Available in selected product forms subject to grade, product specification, size and supply availability.",
    "Heat-wise traceability and material test certification support.",
    "PMI, dimensional inspection, applicable NDT and third-party inspection can be arranged when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M / ASTM A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M / ASTM A249/A249M / ASTM A269/A269M — Product-specific austenitic stainless tube standards",
    "ASTM A182/A182M / ASTM A403/A403M — Forged stainless steel flanges and wrought austenitic stainless fittings",
    "EN 10088 / applicable product-specific EN standard — European stainless steel designations and product requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 304 / 304L"
    ],
    [
      "UNS",
      "S30400 / S30403"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Distinction",
      "304L has a lower carbon content than 304"
    ],
    [
      "Selection",
      "Based on service conditions and applicable specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "304 / 304L product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "304 / 304L"
    ],
    [
      "Alloying system",
      "Austenitic Fe-Cr-Ni stainless; 304L uses restricted carbon for welded fabrication."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "304 / 304L material reference."
},
  "Stainless Steel 316 / 316L": {
  "overviewContent": [
    "316/316L is an austenitic chromium-nickel-molybdenum stainless steel widely used where improved corrosion resistance is required compared with conventional 304 stainless steel. The addition of molybdenum provides better resistance to pitting and crevice corrosion, particularly in chloride-containing environments.",
    "Grade 316 is the standard-carbon version, while 316L has a lower carbon content and is commonly selected for welded fabrication where reduced susceptibility to sensitization during welding is important.",
    "Stainless Steel 316 / 316L is commonly supplied for chemical processing equipment, process piping, pharmaceutical and food-processing equipment, marine-related applications, heat exchangers, architectural components and general industrial service.",
    "Material selection should consider temperature, pressure, chloride exposure, process chemistry, fabrication and welding requirements, mechanical properties, product form, applicable codes and project specifications. Final grade selection remains with the customer's qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the required 316/316L chemistry, including controlled chromium, nickel and molybdenum content.",
    "The steel is cast and hot worked into billet, slab or other feedstock according to the selected product form and manufacturing route.",
    "The material is formed and processed into the required pipe, tube, flat product, bar, flange or fitting form according to the applicable manufacturing specification.",
    "Solution annealing and controlled processing are applied according to the product form and applicable specification to achieve the required metallurgical condition and properties.",
    "Descaling, pickling, machining, grinding or polishing may be carried out according to the specified surface finish, followed by dimensional inspection, traceability and certification."
  ],
  "keyFeatures": [
    "Austenitic chromium-nickel-molybdenum stainless steel with improved corrosion resistance compared with 304/304L.",
    "Molybdenum addition provides improved resistance to localized corrosion such as pitting and crevice corrosion in suitable service environments.",
    "316L has a lower carbon content than 316 and is commonly selected for welded fabrication.",
    "Available in selected product forms subject to grade, product specification, size and supply availability.",
    "Heat-wise traceability and material test certification support.",
    "PMI, dimensional inspection, applicable NDT and third-party inspection can be arranged when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M / ASTM A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M / ASTM A249/A249M / ASTM A269/A269M — Product-specific austenitic stainless tube standards",
    "ASTM A182/A182M / ASTM A403/A403M — Forged stainless steel flanges and wrought austenitic stainless fittings",
    "EN 10088 / applicable product-specific EN standard — European stainless steel designations and product requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 316 / 316L"
    ],
    [
      "UNS",
      "S31600 / S31603"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Alloying Element",
      "Molybdenum (Mo)"
    ],
    [
      "Key Distinction",
      "316L has a lower carbon content than 316"
    ],
    [
      "Selection",
      "Based on service conditions and applicable specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "316 / 316L product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "316 / 316L"
    ],
    [
      "Alloying system",
      "Austenitic Fe-Cr-Ni-Mo stainless; molybdenum improves resistance to localised corrosion."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "316 / 316L material reference."
},
  "Stainless Steel 321 / 321H": {
  "overviewContent": [
    "Stainless Steel 321 / 321H is a titanium-stabilised austenitic chromium-nickel stainless steel developed for applications involving elevated temperatures and welded fabrication. Titanium stabilisation helps reduce the risk of chromium carbide precipitation during elevated-temperature exposure, making 321 suitable for applications where resistance to sensitisation is important.",
    "Grade 321 is the standard-carbon version, while 321H has a controlled higher carbon content for improved high-temperature strength.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, thermal cycling, chemistry, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle considerations should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the required 321 / 321H chemistry, including controlled chromium, nickel, carbon and titanium content.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot and cold processing forms the material into the required pipe, tube, flat product, bar, flange or fitting geometry according to the applicable manufacturing route.",
    "Solution annealing and controlled processing develop the required metallurgical condition, corrosion resistance and mechanical properties.",
    "Descaling, pickling, machining or polishing may be carried out according to the specified surface finish, followed by dimensional inspection, traceability and certification."
  ],
  "keyFeatures": [
    "Titanium-stabilised Fe-Cr-Ni austenitic stainless steel designed for elevated-temperature and welded applications.",
    "321H uses controlled higher carbon content to provide improved strength at elevated temperatures.",
    "Available across multiple project product forms subject to specification, dimensions and availability.",
    "Heat-wise traceability and MTC support.",
    "PMI, applicable NDT and third-party inspection options when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M / ASTM A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M / ASTM A249/A249M / ASTM A269/A269M — Product-specific austenitic stainless tube standards",
    "ASTM A182/A182M / ASTM A403/A403M — Forged stainless steel flanges and wrought austenitic stainless fittings",
    "EN 10088 / applicable product-specific EN standard — European stainless steel designations and product requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 321 / 321H"
    ],
    [
      "UNS",
      "S32100 / S32109"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Alloying Feature",
      "Titanium-stabilised chromium-nickel stainless steel"
    ],
    [
      "Key Distinction",
      "321H has a controlled higher carbon content than 321 for improved elevated-temperature strength"
    ],
    [
      "Material Selection",
      "Based on service conditions and applicable specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "321 / 321H product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "321 / 321H"
    ],
    [
      "Alloying system",
      "Titanium-stabilised Fe-Cr-Ni stainless; 321H uses controlled higher carbon for improved elevated-temperature strength."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "321 / 321H material reference."
},
  "Stainless Steel 347 / 347H": {
  "overviewContent": [
    "Stainless Steel 347 / 347H is a niobium-stabilised austenitic chromium-nickel stainless steel developed for welded fabrication and elevated-temperature service. Niobium stabilisation helps reduce chromium carbide precipitation during elevated-temperature exposure, making 347 suitable for applications where resistance to sensitisation is important.",
    "347H is the higher-carbon version of 347, with controlled carbon content to provide improved elevated-temperature strength for applicable high-temperature service.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, thermal cycling, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the required 347/347H chemistry, including controlled chromium, nickel, carbon and niobium levels.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Solution annealing and controlled processing develop the required metallurgical condition, corrosion resistance and mechanical properties.",
    "Descaling, pickling, machining or polishing may be carried out, followed by dimensional inspection, traceability and certification."
  ],
  "keyFeatures": [
    "Niobium-stabilised Fe-Cr-Ni austenitic stainless steel designed for welded fabrication and elevated-temperature applications.",
    "347H uses controlled higher carbon for improved elevated-temperature strength.",
    "Available across multiple product forms subject to specification, dimensions and availability.",
    "Heat-wise traceability and MTC support.",
    "PMI, applicable NDT and third-party inspection options when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M and A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M, A249/A249M and A269/A269M — Product-specific austenitic stainless steel tube/tubing",
    "ASTM A182/A182M and A403/A403M — Forged flanges/pressure components and wrought austenitic stainless steel fittings",
    "Applicable EN product/material standards — European stainless steel requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 347 / 347H"
    ],
    [
      "UNS",
      "S34700 / S34709"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Alloying Feature",
      "Niobium-stabilised chromium-nickel stainless steel"
    ],
    [
      "Key Distinction",
      "347H uses controlled higher carbon for improved elevated-temperature strength"
    ],
    [
      "Material Selection",
      "Based on service conditions and the applicable product specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "347 / 347H product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "347 / 347H"
    ],
    [
      "Alloying system",
      "Niobium-stabilised Fe-Cr-Ni stainless; 347H uses controlled higher carbon."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "347 / 347H material reference."
},
  "Stainless Steel 309S": {
  "overviewContent": [
    "Stainless Steel 309S is a high-chromium, high-nickel austenitic stainless steel developed for elevated-temperature service and resistance to oxidation. Its higher chromium and nickel content compared with common austenitic grades provides improved performance in high-temperature and oxidising environments.",
    "309S is commonly selected for furnace components, heat-treatment equipment, heat shields, combustion-related equipment and other applications involving elevated temperatures and oxidation.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, atmosphere, thermal cycling, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the required 309S chemistry, including controlled chromium, nickel and carbon levels.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Solution annealing and controlled processing develop the required metallurgical condition and mechanical properties.",
    "Descaling, pickling, machining or polishing may be carried out, followed by dimensional inspection, traceability and certification."
  ],
  "keyFeatures": [
    "High-chromium, high-nickel austenitic stainless steel developed for elevated-temperature and oxidation-resistant applications.",
    "Lower-carbon 309S designation intended to reduce susceptibility to sensitisation compared with the higher-carbon 309 grade.",
    "Available across multiple product forms subject to specification, dimensions and availability.",
    "Heat-wise traceability and MTC support.",
    "PMI, applicable NDT and third-party inspection options when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M and A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M, A249/A249M and A269/A269M — Product-specific austenitic stainless steel tube/tubing",
    "ASTM A182/A182M and A403/A403M — Forged flanges/pressure components and wrought austenitic stainless steel fittings",
    "Applicable EN product/material standards — European stainless steel requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 309S"
    ],
    [
      "UNS",
      "S30908"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Alloying Feature",
      "High-chromium, high-nickel austenitic stainless steel"
    ],
    [
      "Key Distinction",
      "309S is the lower-carbon version of 309, commonly selected where reduced susceptibility to sensitisation is required"
    ],
    [
      "Material Selection",
      "Based on service conditions and the applicable product specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "309S product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "309S"
    ],
    [
      "Alloying system",
      "High-chromium, high-nickel austenitic stainless with restricted carbon."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "309S material reference."
},
  "Stainless Steel 310 / 310S": {
  "overviewContent": [
    "Stainless Steel 310 / 310S is a high-chromium, high-nickel austenitic stainless steel developed for elevated-temperature service and resistance to oxidation. Its alloy composition provides good strength and oxidation resistance in demanding high-temperature environments.",
    "310S is the lower-carbon version of 310 and is commonly selected for applications involving elevated temperatures, welded fabrication and oxidation-resistant service.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, atmosphere, thermal cycling, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the required 310/310S chemistry, including controlled chromium, nickel and carbon levels.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Solution annealing and controlled processing develop the required metallurgical condition and mechanical properties.",
    "Descaling, pickling, machining or polishing may be carried out, followed by dimensional inspection, traceability and certification."
  ],
  "keyFeatures": [
    "High-chromium, high-nickel austenitic stainless steel developed for elevated-temperature and oxidation-resistant applications.",
    "310S uses lower controlled carbon than 310 and is commonly selected for welded fabrication and applicable high-temperature service.",
    "Available across multiple product forms subject to specification, dimensions and availability.",
    "Heat-wise traceability and MTC support.",
    "PMI, applicable NDT and third-party inspection options when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M and A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M, A249/A249M and A269/A269M — Product-specific austenitic stainless steel tube/tubing",
    "ASTM A182/A182M and A403/A403M — Forged flanges/pressure components and wrought austenitic stainless steel fittings",
    "Applicable EN product/material standards — European stainless steel requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 310 / 310S"
    ],
    [
      "UNS",
      "S31000 / S31008"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Alloying Feature",
      "High-chromium, high-nickel austenitic stainless steel"
    ],
    [
      "Key Distinction",
      "310S uses lower controlled carbon than 310 and is commonly selected for welded fabrication and applicable elevated-temperature service"
    ],
    [
      "Material Selection",
      "Based on service conditions and the applicable product specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "310 / 310S product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "310 / 310S"
    ],
    [
      "Alloying system",
      "High-chromium, high-nickel austenitic stainless; 310S uses controlled lower carbon than 310."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "310 / 310S material reference."
},
  "Stainless Steel 317L": {
  "overviewContent": [
    "Stainless Steel 317L is a low-carbon, molybdenum-bearing austenitic chromium-nickel stainless steel developed for improved corrosion resistance in selected chemical-processing and chloride-containing environments. Its higher molybdenum content compared with 316L provides improved resistance to pitting and crevice corrosion in applicable service conditions.",
    "317L is commonly considered for chemical processing equipment, process piping, industrial scrubbers, pulp and paper equipment and other applications where enhanced corrosion resistance is required.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the required 317L chemistry, including controlled chromium, nickel, molybdenum and carbon levels.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Solution annealing and controlled processing develop the required metallurgical condition, corrosion resistance and mechanical properties.",
    "Descaling, pickling, machining or polishing may be carried out, followed by dimensional inspection, traceability and certification."
  ],
  "keyFeatures": [
    "Low-carbon, molybdenum-bearing austenitic Fe-Cr-Ni stainless steel with higher molybdenum content than 316L.",
    "Improved resistance to pitting and crevice corrosion in selected chloride-containing and chemical environments.",
    "Available across multiple product forms subject to specification, dimensions and availability.",
    "Heat-wise traceability and MTC support.",
    "PMI, applicable NDT and third-party inspection options when specified."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A276M and A479/A479M — Stainless steel bars and shapes",
    "ASTM A312/A312M — Austenitic stainless steel pipe",
    "ASTM A213/A213M, A249/A249M and A269/A269M — Product-specific austenitic stainless steel tube/tubing",
    "ASTM A182/A182M and A403/A403M — Forged flanges/pressure components and wrought austenitic stainless steel fittings",
    "Applicable EN product/material standards — European stainless steel requirements"
  ],
  "materialIdentity": [
    [
      "Specified Grade",
      "Stainless Steel 317L"
    ],
    [
      "UNS",
      "S31703"
    ],
    [
      "Alloy Family",
      "Austenitic Stainless Steel"
    ],
    [
      "Key Alloying Feature",
      "Molybdenum-bearing chromium-nickel stainless steel with higher molybdenum than 316L"
    ],
    [
      "Key Distinction",
      "Low-carbon 317L provides enhanced corrosion resistance in selected chemical and chloride-containing environments"
    ],
    [
      "Material Selection",
      "Based on service conditions and the applicable product specification"
    ]
  ],
  "standardGroups": [
    {
      "title": "317L product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "317L"
    ],
    [
      "Alloying system",
      "Low-carbon austenitic Fe-Cr-Ni stainless with higher molybdenum than 316L."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "317L material reference."
},
  "Stainless Steel 904L": {
  "overviewContent": [
    "Stainless steels combine corrosion resistance with practical fabrication and broad product availability. Austenitic grades such as 304/304L and 316/316L are widely used across process, food, pharmaceutical and general engineering applications, while higher-alloy and heat-resistant grades serve more demanding environments.",
    "904L is a high-alloy, low-carbon austenitic stainless steel used in aggressive chemical, acid and chloride-containing services where standard austenitic grades may be insufficient.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the grade chemistry and control residual elements.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Solution annealing establishes the required metallurgical condition and corrosion-resistant structure.",
    "Descaling, pickling, machining or polishing is followed by inspection, traceability and certification."
  ],
  "keyFeatures": [
    "High-alloy, low-carbon austenitic Fe-Cr-Ni-Mo-Cu stainless steel.",
    "Available across multiple project product forms subject to specification.",
    "Heat-wise traceability and MTC support.",
    "PMI, NDT and third-party inspection options."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A479 — Stainless bars and shapes",
    "ASTM A312 — Austenitic stainless steel pipe",
    "ASTM A213/A249/A269 — Product-specific stainless tube standards",
    "ASTM A182 / A403 — Forged flanges and wrought austenitic stainless fittings",
    "EN 10088 / product-specific EN — European stainless designations and delivery standards"
  ],
  "grades": [
    [
      "Specified grade",
      "Stainless Steel 904L",
      "High-alloy austenitic stainless for demanding corrosion-service applications"
    ],
    [
      "Alloy family",
      "Stainless Steel",
      "Related grades are not treated as automatic substitutes"
    ]
  ],
  "standardGroups": [
    {
      "title": "904L product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "904L"
    ],
    [
      "Alloying system",
      "High-alloy austenitic Fe-Cr-Ni-Mo-Cu stainless with low carbon."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "904L material reference."
},
  "Stainless Steel 316Ti": {
  "overviewContent": [
    "Stainless steels combine corrosion resistance with practical fabrication and broad product availability. Austenitic grades such as 304/304L and 316/316L are widely used across process, food, pharmaceutical and general engineering applications, while higher-alloy and heat-resistant grades serve more demanding environments.",
    "316Ti is a titanium-stabilised austenitic stainless steel developed for selected welded and elevated-temperature applications where stabilisation against sensitisation is required.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the grade chemistry and control residual elements.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Solution annealing or grade-specific heat treatment develops corrosion resistance and mechanical condition.",
    "Descaling, pickling, machining or polishing is followed by inspection, traceability and certification."
  ],
  "keyFeatures": [
    "Titanium-stabilised Fe-Cr-Ni-Mo austenitic stainless steel.",
    "Available across multiple project product forms subject to specification.",
    "Heat-wise traceability and MTC support.",
    "PMI, NDT and third-party inspection options."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip",
    "ASTM A276/A479 — Stainless bars and shapes",
    "ASTM A312 — Austenitic stainless steel pipe",
    "ASTM A213/A249/A269 — Product-specific stainless tube standards",
    "ASTM A182 / A403 — Forged flanges and wrought austenitic stainless fittings",
    "EN 10088 / product-specific EN — European stainless designations and delivery standards"
  ],
  "grades": [
    [
      "Specified grade",
      "Stainless Steel 316Ti",
      "Titanium-stabilised austenitic stainless for selected welded and elevated-temperature applications"
    ],
    [
      "Alloy family",
      "Stainless Steel",
      "Related grades are not treated as automatic substitutes"
    ]
  ],
  "standardGroups": [
    {
      "title": "316Ti product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Stainless steel plate, sheet and strip"
        ],
        [
          "ASTM A276/A276M",
          "Stainless steel bars and shapes"
        ],
        [
          "ASTM A479/A479M",
          "Stainless steel bars/shapes for pressure vessels and related service"
        ],
        [
          "ASTM A312/A312M",
          "Stainless steel pipe"
        ],
        [
          "ASTM A213/A213M",
          "Seamless austenitic boiler, superheater and heat-exchanger tubes"
        ],
        [
          "ASTM A249/A249M",
          "Welded austenitic boiler, heat-exchanger and condenser tubes"
        ],
        [
          "ASTM A269/A269M",
          "Austenitic stainless tubing for general service"
        ],
        [
          "ASTM A182/A182M",
          "Forged/rolled stainless steel flanges and pressure components"
        ],
        [
          "ASTM A403/A403M",
          "Wrought austenitic stainless steel fittings"
        ],
        [
          "Applicable EN standard",
          "European product/material requirements"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "316Ti"
    ],
    [
      "Alloying system",
      "Titanium-stabilised Fe-Cr-Ni-Mo austenitic stainless."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "316Ti material reference."
},
  "Stainless Steel 400": {
  "displayTitle": "Stainless Steel 400 Series",
  "overviewContent": [
    "Stainless steels combine corrosion resistance with practical fabrication and broad product availability. Austenitic grades such as 304/304L and 316/316L are widely used across process, food, pharmaceutical and general engineering applications, while ferritic and martensitic grades provide different combinations of strength, hardness, wear resistance and corrosion resistance.",
    "400 series stainless steels include ferritic and martensitic grades such as 409, 410, 420 and 430. The exact grade must be specified because chemistry, heat-treatment condition, mechanical properties, corrosion resistance and applications vary significantly across the series.",
    "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist."
  ],
  "manufacturing": [
    "Steelmaking and refining establish the specified grade chemistry and control residual elements.",
    "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.",
    "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.",
    "Annealing or grade-specific heat treatment develops the required metallurgical condition, hardness and mechanical properties.",
    "Descaling, pickling, machining or polishing is followed by inspection, traceability and certification."
  ],
  "keyFeatures": [
    "Ferritic and martensitic Fe-Cr stainless steel family; exact chemistry depends on the specified 400-series grade.",
    "Available across multiple project product forms subject to specification.",
    "Heat-wise traceability and MTC support.",
    "PMI, NDT and third-party inspection options."
  ],
  "specificationReferences": [
    "ASTM A240/A240M — Plate, sheet and strip where the specified ferritic or martensitic grade is listed",
    "ASTM A276/A276M — Bars and shapes where the specified grade is listed",
    "ASTM A479/A479M — Pressure-service bars and shapes where the specified grade is listed",
    "ASTM A268/A268M — Ferritic and martensitic stainless tubing for general service; confirm grade listing",
    "ASTM A213/A213M — Ferritic boiler, superheater and heat-exchanger tubes where the grade is listed",
    "ASTM A182/A182M — Forged or rolled pressure components where the specified grade is listed",
    "ASTM A815/A815M — Wrought ferritic and martensitic stainless piping fittings where the grade is listed",
    "Specified pipe material standard — Confirm the exact ferritic or martensitic grade, pipe construction and applicable specification; do not apply austenitic or duplex specifications by default",
    "Applicable EN standard — European requirements for the exact grade and product form"
  ],
  "grades": [
    [
      "Specified grade",
      "Stainless Steel 400 Series",
      "Ferritic and martensitic stainless grades selected according to required strength, hardness, corrosion resistance and service conditions"
    ],
    [
      "Common grades",
      "409, 410, 420, 430",
      "Grade selection depends on the required material properties, product form and service"
    ],
    [
      "Alloy family",
      "Stainless Steel",
      "Related grades are not treated as automatic substitutes"
    ]
  ],
  "standardGroups": [
    {
      "title": "400 Series product-standard references",
      "rows": [
        [
          "ASTM A240/A240M",
          "Plate, sheet and strip where the specified ferritic or martensitic grade is listed"
        ],
        [
          "ASTM A276/A276M",
          "Bars and shapes where the specified grade is listed"
        ],
        [
          "ASTM A479/A479M",
          "Pressure-service bars and shapes where the specified grade is listed"
        ],
        [
          "ASTM A268/A268M",
          "Ferritic and martensitic stainless tubing for general service; confirm grade listing"
        ],
        [
          "ASTM A213/A213M",
          "Ferritic boiler, superheater and heat-exchanger tubes where the grade is listed"
        ],
        [
          "ASTM A182/A182M",
          "Forged or rolled pressure components where the specified grade is listed"
        ],
        [
          "ASTM A815/A815M",
          "Wrought ferritic and martensitic stainless piping fittings where the grade is listed"
        ],
        [
          "Specified pipe material standard",
          "Confirm the exact ferritic or martensitic grade, pipe construction and applicable specification; do not apply austenitic or duplex specifications by default"
        ],
        [
          "Applicable EN standard",
          "European requirements for the exact grade and product form"
        ]
      ]
    }
  ],
  "chemical": [
    [
      "Grade / designation",
      "400 Series"
    ],
    [
      "Alloying system",
      "Ferritic or martensitic Fe-Cr stainless family; exact chemistry depends on the specified 400-series grade."
    ],
    [
      "Certification basis",
      "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."
    ]
  ],
  "mechanical": [
    [
      "Mechanical profile",
      "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition."
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
  "materialDataTitle": "400 Series material reference."
},
};
