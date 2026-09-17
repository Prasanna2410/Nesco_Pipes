import { pipePageContent, pipeSharedContent } from "@/lib/pipe-content";
import { stainlessGradeContent, stainlessSharedContent } from "@/lib/stainless-content";

export type ProductDetailContent = {
  manufacturing: readonly string[];
  grades: ReadonlyArray<readonly [string, string, string]>;
  manufacturingStandards: ReadonlyArray<readonly [string, string, string]>;
  chemical: ReadonlyArray<readonly string[]>;
  mechanical: ReadonlyArray<readonly string[]>;
  inspection: readonly string[];
  industries: readonly string[];
  packaging: readonly string[];
  whyNesco: ReadonlyArray<readonly [string, string]>;
  faqs: ReadonlyArray<readonly [string, string]>;
  displayTitle?: string;
  tagline?: string;
  overviewContent?: readonly string[];
  keyFeatures?: readonly string[];
  specificationReferences?: readonly string[];
  productSpecifications?: ReadonlyArray<readonly [string, string]>;
  materialGroups?: ReadonlyArray<readonly [string, string]>;
  materialIdentity?: ReadonlyArray<readonly [string, string]>;
  inspectionNote?: string;
  packagingNote?: string;
  dimensionHeaders?: readonly string[];
  dimensionsNote?: string;
  dimensions?: ReadonlyArray<readonly string[]>;
  standardGroups?: ReadonlyArray<{ readonly title: string; readonly rows: ReadonlyArray<readonly [string, string]> }>;
  chemicalHeaders?: readonly string[];
  mechanicalHeaders?: readonly string[];
  materialDataTitle?: string;
  materialDataDescription?: string;
  chemicalTableTitle?: string;
  chemicalTableNote?: string;
  mechanicalTableTitle?: string;
  mechanicalTableNote?: string;
  inspectionDetails?: ReadonlyArray<readonly [string, string]>;
  relatedProductTitles?: readonly string[];
  productTypeGuide?: ReadonlyArray<readonly [string, string]>;
  surfaceFinishGuide?: ReadonlyArray<readonly [string, string]>;
  selectionGuide?: ReadonlyArray<readonly [string, string]>;
  comparisonHeaders?: readonly string[];
  comparisonRows?: ReadonlyArray<readonly string[]>;
};

const stainlessChemistry = [
  ["TP304L", "≤0.035", "18.0–20.0", "8.0–13.0", "—"],
  ["TP316L", "≤0.035", "16.0–18.0", "10.0–15.0", "Mo 2.0–3.0"],
  ["TP321", "≤0.080", "17.0–19.0", "9.0–12.0", "Ti: 5×(C+N) min–0.70"],
  ["TP347", "≤0.080", "17.0–20.0", "9.0–13.0", "Nb+Ta: 10×C min–1.00"],
] as const;

const stainlessMechanical = [
  ["TP304L", "485", "170", "35"],
  ["TP316L", "485", "170", "35"],
  ["TP321", "515", "205", "35"],
  ["TP347", "515", "205", "35"],
] as const;

const tubeMaterialGroups = [
  ["Stainless Steel", "304, 304L, 316, 316L, 310S, 317L, 321, 347, 347H and 904L"],
  ["Duplex Stainless Steel", "UNS S31803 and UNS S32205 (2205)"],
  ["Super Duplex Stainless Steel", "UNS S32750 (2507) and UNS S32760"],
  ["Nickel Alloys", "Alloy 20, Alloy 28, Alloy 200, Alloy 201, Monel 400, Inconel 600, Inconel 601, Inconel 625, Inconel 718, Incoloy 800, Incoloy 800H, Incoloy 800HT, Incoloy 825, Hastelloy C276 and Hastelloy C22"],
  ["Titanium", "Grade 2 and Grade 5"],
  ["Copper-Nickel", "Cu-Ni 90/10 (UNS C70600) and Cu-Ni 70/30 (UNS C71500)"],
] as const;

const tubeSurfaceFinishGuide = [
  ["Annealed & Pickled (AP)", "Heat treated and acid cleaned to remove scale and surface oxides; a common surface condition for general process tubing."],
  ["Bright Annealed (BA)", "Annealed in a controlled atmosphere to minimise oxidation and produce a smooth, bright surface suitable for applications requiring enhanced surface quality and cleanliness."],
  ["Polished", "Mechanically finished to an agreed grit or surface roughness where improved appearance, cleanability or surface finish is required."],
  ["Mill Finish", "As-produced surface condition without additional mechanical polishing; supplied where permitted by the applicable product specification and suitable for the intended application."],
] as const;

const tubeComparisonHeaders = ["Feature", "Seamless", "Welded"] as const;
const tubeComparisonRows = [
  ["Manufacturing route", "Produced from solid feedstock by piercing or extrusion, followed by cold working where required", "Formed from strip or coil and longitudinally welded"],
  ["Longitudinal weld", "No longitudinal weld seam", "Longitudinal weld present and examined as required by the applicable product standard"],
  ["Typical selection", "Often considered for pressure, temperature and demanding mechanical service, subject to the applicable specification", "Commonly specified for heat-transfer, process, hygienic, structural and mechanical applications, subject to the applicable specification"],
  ["Dimensional / surface control", "Cold finishing can provide close OD, wall-thickness and surface control", "Controlled forming and finishing can provide consistent OD and surface characteristics"],
  ["Commercial basis", "May have a higher cost depending on grade, size, manufacturing route and requirements", "May offer a more economical option depending on grade, size, testing, welding requirements and finish"],
  ["Design rating", "Governed by the applicable code, material standard, dimensions and service conditions", "Governed by the applicable code, material standard, dimensions, weld quality and service conditions"],
] as const;

const pipeDetails: ProductDetailContent = {
  manufacturing: [
    "A solid billet is identified by heat and prepared for piercing.",
    "The heated billet is rotary-pierced or extruded to create a hollow shell without a longitudinal weld.",
    "Hot finishing and, where required, cold drawing or cold rolling bring the pipe to the specified OD and wall.",
    "Solution heat treatment restores corrosion resistance and the required metallurgical condition.",
    "Straightening, sizing, cutting, end preparation, surface treatment and final inspection complete the route.",
  ],
  grades: [
    ["Austenitic stainless", "TP304/304L, TP316/316L, TP321, TP347/347H", "General corrosion, process and elevated-temperature duties"],
    ["Duplex stainless", "S31803/S32205, S32750/S32760", "Higher strength and chloride-bearing environments"],
    ["High-alloy stainless", "904L, S31254", "Selected acid and high-chloride services"],
    ["Nickel alloys", "N06625, N08825, N10276 and others", "Severe corrosion and high-temperature projects"],
    ["Titanium / Cu-Ni", "Grade 2, C70600, C71500", "Seawater, condenser and selected chemical systems"],
  ],
  manufacturingStandards: [
    ["ASTM A312/A312M", "Seamless and welded austenitic stainless steel pipe", "Material / manufacture"],
    ["ASTM A790/A790M", "Seamless and welded ferritic-austenitic (duplex) stainless pipe", "Material / manufacture"],
    ["ASME B36.19M", "Standard dimensions for wrought stainless steel pipe", "Dimensions"],
    ["ASME B36.10M", "Wrought steel pipe dimensions; additional walls may be specified where applicable", "Dimensions"],
    ["EN 10216-5", "Seamless stainless steel tubes for pressure purposes", "European material standard"],
    ["DIN / project specification", "Current EN adoption or expressly stated legacy/project requirement", "Confirm edition on enquiry"],
  ],
  chemical: stainlessChemistry,
  mechanical: stainlessMechanical,
  inspection: [
    "Material test certificate review and heat-number traceability",
    "Visual, dimensional, OD, wall-thickness and length checks",
    "Hydrostatic test or permitted nondestructive electric test, as specified",
    "Positive Material Identification (PMI) when requested",
    "Ultrasonic, eddy-current or other NDT to the purchase specification",
    "Intergranular corrosion, hardness, flattening or supplementary tests where applicable",
    "Third-party inspection coordination against an approved inspection plan",
  ],
  industries: ["Oil & gas", "Petrochemicals", "Chemical processing", "Power generation", "Marine & offshore", "Water & desalination", "Food & pharmaceuticals", "General engineering"],
  packaging: [
    "Heat-wise bundling with durable identification tags",
    "Plain or bevelled ends protected with plastic end caps",
    "Protective wrapping, wooden cases or crates as size and route require",
    "Moisture-barrier and export packing available by agreement",
    "Marking can include grade, size, schedule, standard, heat number and purchase-order reference",
  ],
  whyNesco: [
    ["Specification-led review", "Nesco checks grade, standard, dimensions, ends, tests and documentation as one complete requirement."],
    ["Multi-material sourcing", "Stainless, duplex, nickel alloy, titanium and copper-nickel requirements can be coordinated through one enquiry."],
    ["Inspection support", "MTC review, PMI, NDT and third-party inspection can be arranged when stated in the order."],
    ["Project-ready logistics", "Cut lengths, end protection, identification and export-oriented packing are matched to the delivery plan."],
  ],
  faqs: [
    ["What is a seamless pipe?", "A seamless pipe is made from a solid billet that is pierced and worked into a hollow product, so it has no longitudinal weld seam."],
    ["How should I specify seamless pipe size?", "State the NPS or exact OD, schedule or wall thickness, length, end preparation and the governing material and dimensional standards."],
    ["Which stainless grade should I choose?", "The grade depends on fluid chemistry, chlorides, pressure, temperature, fabrication and code requirements. Nesco can quote the requested grade, while final material selection remains with the project engineer."],
    ["Can Nesco provide test certificates?", "Material test certificates and agreed inspection reports can be supplied when included in the quotation and purchase order."],
    ["Are custom lengths and bevelled ends available?", "They may be available subject to size, grade, quantity and manufacturing route. Include the cut length, tolerance and bevel detail in the enquiry."],
    ["Does every grade follow ASTM A312?", "No. ASTM A312 applies to listed austenitic stainless grades; duplex and other alloy families use their applicable material specifications."],
  ],
};

const tubeDetails: ProductDetailContent = {
  ...pipeDetails,
  materialGroups: tubeMaterialGroups,
  overviewContent: [
    "Stainless steel tubes are manufactured for close dimensional tolerances, controlled surface finish and demanding service conditions. Depending on the application, tubes may be supplied in seamless or welded construction with annealed and pickled (AP), bright annealed (BA), polished or project-specific finishes.",
    "Tubes are specified by actual outside diameter and wall thickness and are widely used where precision, cleanliness, corrosion resistance, heat transfer or reliable small-bore routing is critical.",
    "Whether the requirement is for maintenance quantities or a project package, NESCO reviews the material, dimensions, specification, service conditions, inspection scope and delivery plan as one complete enquiry.",
  ],
  manufacturing: [
    "A hollow is produced by seamless piercing/extrusion or a strip is formed and longitudinally welded, depending on the ordered tube type.",
    "Cold drawing or pilgering may be used to achieve closer OD, wall and surface tolerances.",
    "Intermediate and final heat treatment establish the specified metallurgical condition.",
    "Tubes are straightened, cut, deburred and cleaned; U-bending or special finishing is completed when ordered.",
    "Dimensional, surface and specified pressure/NDT checks are completed before heat-wise packing.",
  ],
  manufacturingStandards: [
    ["ASTM A213/A213M", "Seamless ferritic and austenitic alloy-steel boiler, superheater and heat-exchanger tubes", "Heat-transfer service"],
    ["ASTM A249/A249M", "Welded austenitic steel boiler, superheater, heat-exchanger and condenser tubes", "Heat-transfer service"],
    ["ASTM A269/A269M", "Seamless and welded austenitic stainless tubing for general service", "General service"],
    ["ASTM A789/A789M", "Seamless and welded duplex stainless tubing for general service", "Duplex material"],
    ["ASTM A270/A270M", "Seamless and welded stainless sanitary tubing", "Hygienic service"],
    ["ASTM A554", "Welded stainless steel mechanical tubing", "Mechanical / decorative"],
    ["EN 10216-5 / EN 10217-7", "Seamless / welded stainless tubes for pressure purposes", "European standards"],
    ["Project drawing", "OD, wall, length, tolerances, finish and special test requirements", "Order-specific"],
  ],
  standardGroups: [
    {
      title: "Stainless and duplex tube standards",
      rows: [
        ["ASTM A213/A213M", "Seamless ferritic and austenitic alloy-steel boiler, superheater and heat-exchanger tubes"],
        ["ASTM A249/A249M", "Welded austenitic steel boiler, superheater, heat-exchanger and condenser tubes"],
        ["ASTM A269/A269M", "Seamless and welded austenitic stainless tubing for general service"],
        ["ASTM A789/A789M", "Seamless and welded ferritic/austenitic stainless tubing for general service"],
        ["ASTM A270/A270M", "Seamless and welded stainless sanitary tubing for hygienic service"],
        ["ASTM A554", "Welded stainless steel mechanical tubing for ornamental, structural and other mechanical applications"],
        ["EN 10216-5 / EN 10217-7", "Seamless / welded stainless tubes for pressure purposes"],
      ],
    },
    {
      title: "Nickel-alloy tube standards",
      rows: [
        ["ASTM B163", "Seamless nickel and nickel-alloy condenser and heat-exchanger tubes"],
        ["ASTM B407", "Nickel-iron-chromium alloy seamless pipe and tube"],
        ["ASTM B444", "Nickel-chromium-molybdenum-niobium and related alloy seamless pipe and tube"],
        ["ASTM B622", "Seamless nickel and nickel-cobalt alloy pipe and tube"],
      ],
    },
  ],
  productTypeGuide: [
    ["Seamless Tubes", "Manufactured without a longitudinal weld seam for pressure, temperature and specification-defined critical service."],
    ["Welded Tubes", "Produced from formed strip or coil with a controlled longitudinal weld, supporting dimensional consistency and commercial efficiency."],
    ["Heat Exchanger Tubes", "Designed for heat transfer in condensers, shell-and-tube exchangers, coolers, evaporators and process equipment."],
    ["Boiler Tubes", "Specified for elevated-temperature and pressure service in boilers, superheaters, reheaters and steam-generating equipment."],
    ["Instrumentation Tubes", "Precision tubing with controlled outside diameter, wall thickness, hardness and surface condition for instrumentation, hydraulic and pneumatic systems."],
    ["Hydraulic Tubes", "Precision tubing for high-pressure hydraulic-fluid transfer, subject to the approved material, dimensional and system specification."],
    ["Bright Annealed Tubes", "Tubes heat treated in a controlled atmosphere to provide a smooth, clean and bright finish for hygienic and high-cleanliness duties."],
  ],
  surfaceFinishGuide: tubeSurfaceFinishGuide,
  selectionGuide: [
    ["Heat exchanger", "ASTM A213 seamless or ASTM A249 welded, as required by the equipment specification"],
    ["Boiler / superheater", "ASTM A213 seamless or ASTM A249 welded, subject to the grade and design specification"],
    ["Instrumentation / general service", "ASTM A269 or the approved project tubing specification"],
    ["Sanitary / hygienic", "ASTM A270 with the required internal and external surface finish"],
    ["Hydraulic", "Precision hydraulic-tube or project-specific specification matched to pressure, fluid and fitting system"],
    ["Mechanical / decorative", "ASTM A554 with the required shape, finish and dimensional tolerances"],
  ],
  comparisonHeaders: tubeComparisonHeaders,
  comparisonRows: tubeComparisonRows,
  packaging: [
    "Heat-wise bundles with durable material and purchase-order identification",
    "Plain or prepared ends protected with plastic end caps where applicable",
    "Sleeves, waterproof wrapping, boxes or wooden export crates selected for the tube form and transport route",
    "Straight lengths and coils restrained to prevent movement, surface damage and contamination",
    "Heat number, batch, grade, OD, wall, length and standard retained on package identification",
    "Customer-specific marking and packing can be reviewed before order placement",
  ],
  faqs: [
    ["How is tube sizing different from pipe sizing?", "Tube is normally ordered by actual outside diameter and wall thickness; pipe commonly uses NPS and schedule."],
    ["When should I choose seamless tube?", "It is commonly selected for demanding pressure, heat-transfer, instrumentation or mechanical duties where the project specification calls for a seamless route."],
    ["Can NESCO supply heat-exchanger or U-bend tubes?", "Straight and U-bend requirements can be reviewed against the grade, standard, OD, wall, developed length, bend radius and inspection scope."],
    ["Which surface finishes are available?", "Annealed and pickled, bright annealed, polished and project-specific finishes may be available depending on the manufacturing standard and size."],
    ["What is the difference between tubes and pipes?", "Tubes are normally ordered by actual outside diameter and wall thickness and are commonly used for precision, heat-transfer or instrumentation duty; pipes are commonly ordered by NPS and schedule for piping systems."],
    ["What is the difference between seamless and welded tubes?", "Seamless tube has no longitudinal weld; welded tube is formed from strip or coil and joined along a longitudinal seam. The correct route depends on the material standard, dimensions, service, inspection and project specification."],
    ["Which standard is suitable for heat-exchanger tubes?", "ASTM A213 for seamless and ASTM A249 for welded stainless tubing are common references. The exchanger design, material grade and project specification determine the correct standard."],
    ["Which tube finish should I choose?", "Annealed and pickled is common for general process duty, bright annealed for precision or hygienic duty, and polished finish where an agreed appearance or surface roughness is required."],
    ["Can EN 10204 3.1 certification be supplied?", "EN 10204 3.1 inspection certificates can be supplied when included in the quotation and purchase order. Third-party witnessed certification can be reviewed where the agreed inspection route supports it."],
    ["Can tubes be supplied in coil form?", "Coil supply may be available depending on the material, OD, wall thickness, condition and cleanliness requirement; larger or heavier tubing is generally supplied in straight lengths."],
    ["Can third-party inspection be arranged?", "Yes. Inspection by an agreed agency can be coordinated when the scope, hold points, document requirements and agency are confirmed before order placement."],
    ["How do I request a quotation?", "Use the product enquiry form and include the tube type, material grade, standard, OD, wall, length or coil geometry, quantity, testing, documentation and delivery destination."],
  ],
};

const generalDetails: ProductDetailContent = {
  ...pipeDetails,
  manufacturing: [
    "Raw material is verified against the requested grade and manufacturing route.",
    "Forming, forging, rolling, machining or welding is carried out as applicable to the product.",
    "Heat treatment and surface conditioning are completed to the governing specification.",
    "Dimensions, finish, marking and ordered tests are verified before release.",
  ],
  manufacturingStandards: [
    ["ASTM / ASME", "Material, dimensions and service requirements as applicable", "American standards"],
    ["EN / DIN", "Material and dimensional requirements to the stated edition", "European standards"],
    ["ANSI / ISO / BS / JIS", "Product-specific references where applicable", "International standards"],
    ["Customer drawing", "Dimensions, tolerances and supplementary requirements", "Project-specific"],
  ],
  faqs: [
    ["What information does Nesco need to quote?", "Share the product, exact grade, standard, dimensions, quantity, testing, documentation, packing and delivery destination."],
    ["Can material be supplied with an MTC?", "MTCs and agreed inspection documents can be included when confirmed in the quotation and purchase order."],
    ["Are custom sizes available?", "Custom sizing or processing may be possible depending on the product, material, quantity, tolerance and delivery schedule."],
    ["Does Nesco support third-party inspection?", "Third-party inspection can be coordinated when the agency, inspection plan and hold points are agreed before order placement."],
  ],
};

const professionalWhyNesco = [
  ["Specification control", "NESCO reviews the grade, product standard, dimensions, condition and acceptance criteria as one coordinated requirement."],
  ["Multi-material sourcing", "Stainless steel, duplex, nickel alloy, copper-nickel and titanium requirements can be combined within one project enquiry."],
  ["Traceable documentation", "Heat numbers, MTCs and agreed inspection records are aligned with the purchase order before dispatch."],
  ["Inspection coordination", "PMI, dimensional checks, NDT and third-party witnessing can be arranged against an approved inspection plan."],
  ["Value-added processing", "Cutting, machining, end preparation, polishing or protective finishing can be reviewed with the base material supply."],
  ["Export-ready packing", "Identification, surface protection and packing are planned around product geometry and the final transport route."],
  ["Responsive RFQ review", "Technical and commercial inputs are consolidated early so queries are resolved before quotation and production."],
  ["One accountable supply desk", "NESCO provides a single contact for material, processing, documentation, packing and delivery coordination."],
] as const;

const corrosionResistantMaterialGroups = [
  ["Stainless Steel", "304, 304L, 316, 316L, 310S, 317L, 321, 347, 347H and 904L"],
  ["Duplex Stainless Steel", "UNS S31803 and UNS S32205 (2205)"],
  ["Super Duplex Stainless Steel", "UNS S32750 (2507) and UNS S32760"],
  ["Nickel Alloys", "Alloy 20, Alloy 28, Alloy 200, Alloy 201, Monel 400, Inconel 600, Inconel 601, Inconel 625, Inconel 718, Incoloy 800, Incoloy 800H, Incoloy 800HT, Incoloy 825, Hastelloy C276 and Hastelloy C22"],
  ["Titanium", "Grade 2, Grade 5 and other applicable grades"],
  ["Cupro Nickel", "Cu-Ni 90/10 (C70600) and Cu-Ni 70/30 (C71500)"],
] as const;

const fastenerWhyNesco = [
  ["Specification control", "NESCO reviews the grade, product standard, dimensions, condition and acceptance criteria as one coordinated requirement."],
  ["Multi-material sourcing", "Stainless steel, duplex and nickel-alloy fastener requirements can be combined within one project enquiry."],
  ["Traceable documentation", "Heat numbers, MTCs and agreed inspection records are aligned with the purchase order before dispatch."],
  ["Inspection coordination", "PMI, dimensional checks, NDT and third-party witnessing can be arranged against an approved inspection plan."],
  ["Value-added processing", "Cutting, machining, thread-related requirements, coating, lubrication or protective finishing can be reviewed with the fastener specification."],
  ["Export-ready packing", "Identification, surface protection and packing are planned around product geometry and the final transport route."],
  ["Responsive RFQ review", "Technical and commercial inputs are consolidated early so queries are resolved before quotation and production."],
  ["One accountable supply desk", "NESCO provides a single contact for material, processing, documentation, packing and delivery coordination."],
] as const;

const fittingWhyNesco = [
  ["Specification control", "NESCO reviews the grade, product standard, dimensions, condition and acceptance criteria as one coordinated requirement."],
  ["Multi-material sourcing", "Stainless steel, duplex, nickel alloy, copper-nickel and titanium fitting requirements can be combined within one project enquiry."],
  ["Traceable documentation", "Heat numbers, MTCs and agreed inspection records are aligned with the purchase order before dispatch."],
  ["Inspection coordination", "PMI, dimensional checks, NDT and third-party witnessing can be arranged against an approved inspection plan."],
  ["Value-added processing", "Machining, end preparation, special dimensions, surface finishing or protective treatment can be reviewed against the applicable fitting specification and project requirements."],
  ["Export-ready packing", "Identification, surface protection and packing are planned around product geometry and the final transport route."],
  ["Responsive RFQ review", "Technical and commercial inputs are consolidated early so queries are resolved before quotation and production."],
  ["One accountable supply desk", "NESCO provides a single contact for material, processing, documentation, packing and delivery coordination."],
] as const;

const productManufacturing: Record<string, readonly string[]> = {
  "Seamless Tubes": [
    "A verified billet or hollow is heated and pierced or extruded without creating a longitudinal weld.",
    "Cold drawing or pilgering reduces the outside diameter and wall to the required dimensional range.",
    "Intermediate and final solution heat treatment establish the ordered metallurgical condition.",
    "Straightening, sizing, cutting, deburring and surface conditioning prepare the tube for inspection.",
    "Hydrostatic or nondestructive electric testing, dimensional checks and heat-wise marking complete the supply route.",
  ],
  "Welded Tubes": [
    "Qualified strip or coil is slit to width and continuously formed into a tubular profile.",
    "The longitudinal seam is welded under a controlled procedure and the bead is worked or removed when specified.",
    "Cold working and solution heat treatment are applied where the ordered standard or service requires them.",
    "The tube is sized, straightened, cut and finished to the agreed OD, wall, length and surface condition.",
    "The weld, dimensions and pressure boundary are verified by the specified visual, eddy-current, hydrostatic or pneumatic tests.",
  ],
  "Heat Exchanger Tubes": [
    "Material is selected against fluid chemistry, design temperature, tube-sheet arrangement and exchanger duty.",
    "Seamless or welded hollows are cold finished to achieve controlled OD, wall thickness, ovality and surface quality.",
    "Solution heat treatment and cleaning establish the specified corrosion-resistant condition.",
    "Straight tubes are cut and deburred, or U-bends are formed to the approved radius and developed length.",
    "Eddy-current or other specified NDT, dimensional inspection, cleanliness checks and end protection complete the package.",
  ],
  "Boiler Tubes": [
    "Tube material and manufacturing route are selected to the boiler, superheater or heat-exchanger specification.",
    "Hot working and cold finishing establish the ordered OD, minimum or nominal wall and length.",
    "Heat treatment is controlled for the grade and elevated-temperature service condition.",
    "Straightening, cut-length preparation and end finishing support subsequent expansion or welding.",
    "Mechanical, flattening, flaring, hardness and pressure/NDT requirements are completed to the governing standard.",
  ],
  "Instrumentation Tubes": [
    "Seamless or welded hollows are cold drawn to precision outside diameter, wall and hardness requirements.",
    "Solution or bright annealing establishes the ordered corrosion resistance and fitting-compatible condition.",
    "Straight lengths or coils are cleaned and finished to control surface defects and internal contamination.",
    "Ends are square cut, deburred and capped to protect the sealing surfaces and bore.",
    "Dimensional, hardness, surface and leak/pressure checks are completed before clean, protective packing.",
  ],
  "Weld Neck Flanges": [
    "Traceable billet or bar stock is cut and heated for forging.",
    "The flange and tapered hub are forged to develop a continuous grain flow around the pressure boundary.",
    "Heat treatment is completed to the ordered material specification.",
    "CNC machining establishes the bore, hub profile, facing, bolt circle and gasket seating surface.",
    "Dimensions, facing finish, material identity and required NDT are verified before marking and protection.",
  ],
  "Slip-On Flanges": [
    "Certified forging stock is formed and heat treated to the selected material specification.",
    "The centre bore is machined to slide over the matching pipe OD with the required fit-up clearance.",
    "Facing, outside diameter, thickness and bolt-hole pattern are machined to the flange standard.",
    "Raised-face serrations or the specified gasket finish are produced and checked.",
    "Final dimensional, PMI, marking and documentation checks precede dispatch.",
  ],
  "Blind Flanges": [
    "Forged, cast or permitted plate material is selected to the specified class and material standard.",
    "The solid blank is heat treated where required and rough machined to the flange profile.",
    "Facing, thickness, outside diameter and bolt-hole geometry are finish machined without a centre bore.",
    "Gasket seating finish and pressure-class dimensions are inspected carefully.",
    "Material traceability, NDT where ordered, marking and face protection complete the supply.",
  ],
  "Socket Weld Flanges": [
    "Forged raw material is heat treated to the applicable piping material specification.",
    "The bore and internal socket are machined to support accurate small-bore pipe fit-up.",
    "Facing, hub, thickness and bolt-hole dimensions are completed to the ordered class.",
    "Socket depth, bore transition and gasket finish are verified dimensionally.",
    "PMI, visual inspection, marking and documentation are completed before packing.",
  ],
  "Threaded Flanges": [
    "Traceable flange stock is forged and heat treated for the specified material grade.",
    "The centre bore is machined and threaded to the required thread form and engagement.",
    "Facing, pressure-class geometry and bolt-hole pattern are finish machined.",
    "Threads are gauged while the facing finish and critical dimensions are inspected.",
    "Threads and gasket faces are protected after material verification and marking.",
  ],
  Elbows: [
    "Pipe or plate feedstock is verified for grade, wall and construction class.",
    "The component is hot formed, cold formed, mandrel bent or fabricated to the specified angle and radius.",
    "Forming strains are relieved by the heat treatment required for the selected material.",
    "Ends are calibrated and bevelled to match the connected pipe wall and welding procedure.",
    "Angle, centre-to-end dimensions, ovality, wall and ordered NDT are checked before marking.",
  ],
  Tees: [
    "Suitable pipe, tube, plate or other qualified feedstock is selected according to the applicable fitting specification and manufacturing route.",
    "The branch is formed by extrusion, hydraulic forming, hot drawing or qualified fabrication.",
    "Heat treatment restores the specified material condition after forming or welding.",
    "Run and outlet ends are sized and bevelled to the ordered schedules.",
    "Branch geometry, wall distribution, weld quality and material identity are inspected before release.",
  ],
  Reducers: [
    "Suitable feedstock is selected according to the fitting specification, size, wall and manufacturing route.",
    "Progressive pressing, rolling or forming creates the required diameter transition without abrupt flow changes.",
    "Heat treatment is completed to the material specification and manufacturing class.",
    "Large and small ends are calibrated, trimmed and bevelled to the connecting walls.",
    "End diameters, length, wall, eccentric orientation and required NDT are verified.",
  ],
  "Stub Ends": [
    "Corrosion-resistant tube or plate is selected for the required wall and lap-joint pattern.",
    "The lap is formed by flaring, pressing or qualified fabrication to Type A, B or C geometry.",
    "Heat treatment and surface conditioning are completed as required by the material standard.",
    "The weld end, lap diameter, radius and face are finish formed or machined.",
    "Fit with the specified backing flange, dimensions and traceability are confirmed before packing.",
  ],
  "End Caps": [
    "Plate, sheet or tubular feedstock is verified against the required grade and wall.",
    "Deep drawing, pressing or qualified fabrication produces the specified formed closure profile.",
    "Heat treatment restores the specified corrosion-resistant and mechanical condition.",
    "The open end is sized, trimmed and bevelled for field welding.",
    "Shape, end diameter, minimum wall, surface and ordered examination are checked before release.",
  ],
  Sheets: [
    "Slab is hot rolled to coil or plate and descaled under controlled processing.",
    "Cold rolling may reduce the material to sheet gauge and improve dimensional control.",
    "Annealing and pickling restore the specified metallurgical and surface condition.",
    "Levelling, cut-to-length processing and finishing produce the ordered size and appearance.",
    "Thickness, flatness, finish, surface quality and heat identification are inspected before protective packing.",
  ],
  Plates: [
    "Traceable slab is reheated and rolled to the specified plate thickness and width.",
    "Solution heat treatment or the grade-specific thermal cycle establishes the ordered condition.",
    "Descaling, shot blasting, pickling or grinding produces the required surface.",
    "Plates are levelled and supplied full-size or cut to drawings by approved processing routes.",
    "Thickness, dimensions, flatness, surface, PMI and ultrasonic testing are completed when specified.",
  ],
  Coils: [
    "Slab is hot rolled into continuous coil and descaled for further processing.",
    "Cold rolling and intermediate annealing achieve the specified gauge and mechanical condition.",
    "Final annealing, pickling or bright annealing establishes the ordered finish.",
    "Master coil is levelled or slit to width with the specified edge condition and coil geometry.",
    "Thickness, width, surface, telescoping and coil weight are checked before moisture-resistant wrapping.",
  ],
  "Shim Sheets": [
    "Precision strip or sheet feedstock is selected for the grade, temper and thin-gauge requirement.",
    "Cold rolling controls final thickness and hardness across the strip width.",
    "Annealing or temper rolling establishes the specified spring or soft condition.",
    "Material is slit, sheeted or cut to the required shim profile with controlled burr.",
    "Thickness, hardness, flatness and edge quality are verified before rigid protective packing.",
  ],
  "Round Bars": [
    "Round bar may be produced by hot rolling, forging or extrusion depending on the alloy, size and specified product route.",
    "Heat treatment develops the specified grade condition and mechanical properties.",
    "Straightening and optional peeling or turning remove scale and surface decarburisation.",
    "Cold drawing, centreless grinding or polishing achieves tighter size and finish where ordered.",
    "Diameter, straightness, surface, hardness and required ultrasonic inspection are verified heat-wise.",
  ],
  "Bright Bars": [
    "Hot-finished bar is inspected and prepared for cold finishing.",
    "Cold drawing, peeling or precision turning improves dimensional accuracy and surface quality.",
    "Stress relief or grade-specific heat treatment is completed when required.",
    "Straightening, centreless grinding and polishing produce the ordered tolerance and finish.",
    "Size, straightness, surface defects, hardness and identification are checked before sleeved packing.",
  ],
  "Hex Bars": [
    "Billet or round feedstock is hot rolled, extruded or cold drawn through hexagonal tooling.",
    "Heat treatment establishes the ordered grade and machining condition.",
    "Drawing or finishing controls the across-flats dimension, corner geometry and straightness.",
    "Bars are cut to random or fixed length and ends are prepared as specified.",
    "Across-flats size, twist, straightness, surface and heat identity are verified.",
  ],
  "Square Bars": [
    "Billet is hot rolled, forged or cold drawn to a four-sided section.",
    "Heat treatment is completed to the ordered grade and condition.",
    "Straightening and finishing control side dimension, corner radius and twist.",
    "Bars are cut to the required length and may be ground or polished.",
    "Side size, squareness, straightness, surface quality and material identity are inspected.",
  ],
  "Flat Bars": [
    "Flat bars may be produced by hot or cold rolling, or supplied by cutting or shearing from plate or strip where permitted by the specified product standard and dimensional requirements.",
    "Heat treatment and descaling establish the required material condition.",
    "Width, thickness and edge condition are controlled by rolling, machining or grinding.",
    "Straight lengths or cut pieces are finished for fabrication or machining.",
    "Dimensions, straightness, edge quality, surface and traceability are verified.",
  ],
  Bolts: [
    "Wire, bar or forging stock is verified for the required bolting grade and heat condition.",
    "Cold heading, hot forging or machining forms the head and shank geometry.",
    "Threads are rolled or cut, followed by required heat treatment and surface finishing.",
    "Dimensions, thread gauges, hardness, mechanical properties and grade marking are checked by lot.",
  ],
  Nuts: [
    "Compatible bar, wire or forged blanks are selected to match the bolt grade and service.",
    "Cold forming, hot forging or machining produces the nut profile and bearing faces.",
    "Internal threads are tapped and the grade-specific heat treatment or finishing is completed.",
    "Thread fit, proof load or hardness, dimensions and grade marking are verified by lot.",
  ],
  "Stud Bolts": [
    "Certified bar is straightened and cut to the specified overall stud length.",
    "Threads are rolled or cut to the required form, pitch and engagement.",
    "Heat treatment, coating or lubrication is applied according to the bolting specification.",
    "Thread gauges, length, hardness, mechanical properties, nut compatibility and marking are inspected.",
  ],
};

const subtypeFaqs: Record<string, ReadonlyArray<readonly [string, string]>> = {
  "Seamless Tubes": [["Why choose seamless instead of welded tube?", "Seamless construction removes the longitudinal weld and is often selected for critical pressure, thermal or mechanical duties when required by the equipment specification."], ["Can seamless tubes be supplied cold drawn?", "Yes, subject to grade and size. Cold drawing or pilgering is commonly used where tighter OD, wall, surface or mechanical-property control is required."]],
  "Welded Tubes": [["Can the internal weld bead be removed?", "Bead working or removal may be specified depending on the standard, size and end use; state the required internal surface condition in the enquiry."], ["How is the weld seam inspected?", "Eddy-current, hydrostatic, pneumatic, ultrasonic or other methods may be used according to the product standard and purchase order."]],
  "Heat Exchanger Tubes": [["What data is needed for U-bend tubes?", "State OD, wall, straight-leg lengths, bend radius, tangent lengths, developed length, heat treatment, cleanliness and inspection requirements."], ["Which test is normally used for exchanger tubing?", "Eddy-current testing is widely specified, but hydrostatic, pneumatic, ultrasonic or project-specific examination may also be required."]],
  "Boiler Tubes": [["Are boiler tubes ordered by nominal or minimum wall?", "The governing material specification and equipment design determine the wall basis. The purchase order should state nominal or minimum wall explicitly."], ["Can tube ends be prepared for expansion or welding?", "Yes. Cut length, squareness, deburring, cleaning and special end preparation can be reviewed against the fabrication method."]],
  "Instrumentation Tubes": [["Why are hardness and surface finish important?", "Compression fittings depend on controlled tube hardness, roundness and a smooth defect-free OD to create a reliable seal."], ["Can instrumentation tubing be supplied in coils?", "Straight lengths and coils may be available depending on material, OD, wall, annealed condition and cleanliness requirement."]],
  "Weld Neck Flanges": [["Why is the matching pipe schedule required?", "The flange bore and hub transition should match the connected pipe wall to support alignment, welding and stress transfer."], ["When is a weld neck flange preferred?", "It is commonly selected for higher-pressure, cyclic, elevated-temperature or critical service where a butt-welded connection is appropriate."]],
  "Slip-On Flanges": [["Does a slip-on flange need two fillet welds?", "Typical installation uses internal and external fillet welds, but the approved piping specification and welding procedure govern the final joint."], ["Can a slip-on flange be used for every service?", "No. Pressure, temperature, fatigue, corrosion allowance and piping-code restrictions should be checked by the responsible engineer."]],
  "Blind Flanges": [["How is blind-flange thickness selected?", "Thickness depends on nominal size, pressure class, material group, design temperature and the governing dimensional standard."], ["Can a blind flange be supplied with tapped holes?", "Custom drilling or tapping may be possible against an approved drawing and engineering review."]],
  "Socket Weld Flanges": [["Where are socket weld flanges normally used?", "They are commonly used in compact small-bore pressure piping, subject to the project piping class and service restrictions."], ["Why is an insertion gap specified?", "The approved welding procedure may require a gap between the pipe end and socket shoulder to manage weld shrinkage and stress."]],
  "Threaded Flanges": [["When is a threaded flange appropriate?", "It may suit selected services where welding is restricted, but pressure, temperature, vibration, cyclic duty and leakage risk require engineering review."], ["Which thread information should be provided?", "State the thread standard, nominal size, pitch or series, engagement and any gauging requirement."]],
  Elbows: [["What is the difference between long- and short-radius elbows?", "A long-radius elbow has a larger centreline radius and generally creates a smoother flow transition; the project layout and pressure-drop criteria determine the type."], ["Can NESCO supply special-angle elbows?", "Special angles, tangents and drawing-specific dimensions can be reviewed against material, wall, radius and quantity."]],
  Tees: [["What is an equal tee versus a reducing tee?", "An equal tee uses the same nominal size on run and branch; a reducing tee connects a smaller branch to the main run."], ["Should run and branch schedules both be stated?", "Yes. Provide the run size and wall plus the branch size and wall so the ends match the piping specification."]],
  Reducers: [["When should an eccentric reducer be used?", "Eccentric reducers are used when maintaining a flat side helps manage drainage, vapour pockets or equipment-nozzle alignment; orientation must be stated."], ["How should reducer wall be specified?", "State both end sizes, schedule or wall at each end, construction class, length and concentric/eccentric configuration."]],
  "Stub Ends": [["What must match the backing flange?", "The lap diameter, face, radius and stub-end pattern must suit the selected lap-joint backing flange."], ["Are short- and long-pattern stub ends available?", "Both may be available depending on the dimensional standard, material, size and wall."]],
  "End Caps": [["How is a cap wall selected?", "The cap wall should be specified to match the connected pipe schedule and design requirement, allowing for forming tolerance under the applicable standard."], ["Are caps supplied bevelled?", "Butt-weld caps are normally supplied with weld-end preparation appropriate to the size and wall; special bevels should be stated."]],
  Sheets: [["What is the difference between 2B, BA and No. 4 finish?", "2B is a smooth cold-rolled mill finish, BA is bright annealed, and No. 4 is a directional polished finish. Final appearance can vary by mill and processing route."], ["Can sheets be supplied with protective film?", "PVC or laser-compatible film may be supplied when finish, application, film type and removal expectations are agreed."]],
  Plates: [["When should ultrasonic testing be specified?", "UT is commonly considered for thicker or critical plates used in pressure, structural or machined components; the acceptance standard and scanning scope must be stated."], ["Can plate be cut to drawings?", "Profiles, blanks, rings and drilled or machined parts can be reviewed against drawing tolerances and traceability requirements."]],
  Coils: [["What coil data should be included in an RFQ?", "Provide thickness, width, coil ID, maximum OD or weight, finish, edge, temper, permissible welds and packing orientation."], ["Can master coils be slit to narrow widths?", "Slitting is available subject to grade, thickness, minimum width, edge tolerance and coil-weight requirement."]],
  "Shim Sheets": [["How should shim thickness be specified?", "State nominal thickness, tolerance, temper or hardness, width and length, edge/burr requirement and whether certificates are required."], ["Can shims be supplied as cut components?", "Sheets, strips, coils and drawing-specific shim profiles can be reviewed depending on gauge, quantity and tolerance."]],
  "Round Bars": [["What is the difference between hot-rolled, peeled and ground bar?", "Each route provides a different surface and dimensional accuracy. Machining allowance, tolerance and final component requirements should drive the selection."], ["Can round bars be ultrasonically tested?", "UT can be arranged for critical bar requirements when the test method, quality class and acceptance criteria are stated."]],
  "Bright Bars": [["Why choose bright bar for machining?", "Cold drawing, peeling, grinding or polishing can provide closer dimensions and cleaner surfaces, reducing initial machining allowance."], ["Does bright bar always mean cold drawn?", "No. Bright finish may result from drawing, peeling, turning, grinding or polishing; the required route and condition should be specified."]],
  "Hex Bars": [["How is hex bar size ordered?", "Hex bar is normally specified by the across-flats dimension, tolerance, length, grade and finish."], ["Can hex bars be cut and chamfered?", "Cut lengths and chamfered ends can be reviewed for repeat machining packages."]],
  "Square Bars": [["Which dimensions control square bar acceptance?", "Side dimension, corner radius, squareness, twist, straightness and length should be defined where tighter control is needed."], ["Are cold-finished square bars available?", "Cold-drawn or other finished conditions may be available depending on grade and size."]],
  "Flat Bars": [["Is flat bar rolled or cut from plate?", "Both routes are used. The supply route affects edge condition, grain direction, tolerance and certification, so state any restriction in the order."], ["Which dimensions are required?", "Provide thickness, width, length, edge condition, straightness, grade and surface finish."]],
  Bolts: [["Which information identifies a bolt completely?", "State bolt type, material grade, dimensional standard, thread diameter and pitch, length, head style, finish and required nuts or washers."], ["Can bolts be supplied with coatings?", "Coatings and lubricants can be reviewed, but their compatibility with temperature, corrosion environment and tightening method must be confirmed."]],
  Nuts: [["How should nut grade be matched to a bolt?", "Nut material, strength, temperature rating, thread fit and coating should be selected as a compatible bolting system under the project specification."], ["What is a heavy-hex nut?", "A heavy-hex pattern has larger across-flats and thickness dimensions than a regular hex nut and is common in pressure-service bolting."]],
  "Stud Bolts": [["How is stud-bolt length measured?", "Measurement depends on the specified configuration and dimensional convention. State the required overall length and reference standard explicitly."], ["Are two nuts included with each stud?", "Studs can be supplied alone or as sets with two compatible nuts and washers where specified."]],
};

const tubePageEnhancements: Record<string, Partial<ProductDetailContent>> = {
  "Seamless Tubes": {
    displayTitle: "Stainless Steel & High Nickel Alloy Seamless Tubes",
    overviewContent: [
      "Seamless tubing offers a continuous wall and is selected for pressure, heat-transfer, mechanical and specification-defined critical service. It may be cold drawn or pilgered to achieve closer dimensional control and surface quality.",
      ...(tubeDetails.overviewContent ?? []),
    ],
    productSpecifications: [
      ["Product standard", "ASTM A213 / A269 as applicable; OD, wall thickness and tolerances as per the applicable tube standard or approved project drawing"],
      ["Manufacturing type", "Seamless — pierced or extruded, then cold drawn or pilgered where required"],
      ["Typical NESCO enquiry range", "1/8 in. OD to 4 in. OD; other dimensions reviewed based on grade, standard and manufacturing feasibility"],
      ["Wall thickness", "Nominal or minimum wall thickness, as specified in the applicable standard and purchase order"],
      ["Length", "Straight lengths, fixed cut lengths or U-bend configurations where applicable"],
      ["Ends", "Square cut and deburred; capped or specially prepared ends available where specified"],
      ["Surface finish", "Annealed and pickled; bright annealed or polished finish where specified and available"],
      ["Marking", "Standard mill marking"],
      ["Packaging", "Sleeved or bundled, end protected, boxed or export packed as required"],
    ],
    standardGroups: [
      { title: "Stainless and duplex tube standards", rows: [["ASTM A213/A213M", "Seamless ferritic and austenitic alloy-steel boiler, superheater and heat-exchanger tubes"], ["ASTM A269/A269M", "Seamless and welded austenitic stainless steel tubing for general service"], ["ASTM A789/A789M", "Seamless and welded ferritic/austenitic stainless steel tubing for general service"], ["ASTM A270/A270M", "Seamless and welded stainless steel sanitary tubing for hygienic service"]] },
      { title: "Nickel-alloy tube standards", rows: [["ASTM B163", "Seamless nickel and nickel-alloy condenser and heat-exchanger tubes"], ["ASTM B407", "Nickel-iron-chromium alloy seamless pipe and tube"], ["ASTM B444", "Nickel-chromium-molybdenum-niobium and related alloy seamless pipe and tube"], ["ASTM B622", "Seamless nickel and nickel-cobalt alloy pipe and tube"]] },
    ],
    selectionGuide: [["Heat exchanger", "ASTM A213 for seamless tubes, as required by the equipment specification"], ["Boiler / superheater", "ASTM A213 for seamless tubes, subject to the applicable grade and design specification"], ["Instrumentation / general service", "ASTM A269/A269M or the approved project tubing specification"], ["Sanitary / hygienic", "ASTM A270/A270M for seamless sanitary tubing, with the required internal and external surface finish"], ["Hydraulic", "Applicable precision hydraulic-tube or project-specific specification matched to pressure, fluid and fitting requirements"], ["Nickel-alloy heat exchanger / process service", "Applicable ASTM B-series specification based on the nickel-alloy grade, product form and service requirements"]],
  },
  "Welded Tubes": {
    keyFeatures: ["Versatile welded construction", "Consistent OD, wall thickness and surface finish", "Weld-bead treatment where required and permitted", "Eddy-current, hydrostatic or other applicable testing as required"],
    specificationReferences: ["ASTM A269/A269M for general-service austenitic stainless steel tubing", "ASTM A249/A249M for welded austenitic stainless steel boiler, superheater, heat-exchanger and condenser tubes", "ASTM A789/A789M for welded ferritic/austenitic stainless steel tubing, including duplex grades where applicable", "Applicable material-specific standards"],
    overviewContent: [
      "Welded tubing provides a versatile and economical format for heat-transfer, process, structural and hygienic duties. Weld condition, bead treatment, heat treatment and inspection should be selected for the intended application.",
      ...(tubeDetails.overviewContent ?? []),
    ],
    productSpecifications: [
      ["Product standard", "ASTM A249 / A269 as applicable; dimensional tolerances to the ordered standard or approved project drawing"],
      ["Manufacturing type", "Strip or coil formed and longitudinally welded under a controlled welding procedure"],
      ["Typical NESCO enquiry range", "1/4 in. OD to 6 in. OD; larger or alternative dimensions reviewed based on grade, standard and manufacturing feasibility"],
      ["Wall thickness", "As specified; weld bead worked or removed where required and permitted by the applicable specification"],
      ["Length", "Straight or fixed cut length"],
      ["Ends", "Square cut and deburred; capped or specially prepared where specified"],
      ["Surface finish", "Pickled and passivated, bright annealed or polished, as specified"],
      ["Marking", "Standard mill marking"],
      ["Packaging", "Sleeved or bundled, end protected, boxed or export packed as required"],
    ],
    standardGroups: [
      { title: "Stainless and duplex tube standards", rows: [["ASTM A249/A249M", "Welded austenitic stainless steel boiler, superheater, heat-exchanger and condenser tubes"], ["ASTM A269/A269M", "Seamless and welded austenitic stainless steel tubing for general service"], ["ASTM A789/A789M", "Seamless and welded ferritic/austenitic stainless steel tubing for general service"], ["ASTM A270/A270M", "Seamless and welded stainless steel sanitary tubing for hygienic service"], ["ASTM A554", "Welded stainless steel mechanical tubing for ornamental, structural, exhaust and other mechanical applications"], ["EN 10217-7", "Welded stainless steel tubes for pressure purposes"]] },
      { title: "Nickel-alloy tube standards", rows: [["ASTM B468/B468M", "Welded nickel-iron-chromium-molybdenum-copper alloy pipe, including Alloy 20-type materials"], ["ASTM B514", "Welded nickel-iron-chromium alloy tube"], ["ASTM B516", "Welded nickel-chromium-iron alloy tube, including UNS N06600"], ["ASTM B619/B619M", "Welded Hastelloy C276 and C22 tube"], ["ASTM B704", "Welded nickel alloys UNS N06625 and UNS N08825"], ["ASTM B730", "Welded nickel tube 200/201 and Monel-type materials"]] },
    ],
    selectionGuide: [["Heat exchanger", "ASTM A249/A249M for welded tubes, as required by the equipment specification"], ["Boiler / superheater", "ASTM A249/A249M for welded tubes, subject to the applicable grade and design specification"], ["Instrumentation / general service", "ASTM A269/A269M or the approved project tubing specification"], ["Sanitary / hygienic", "ASTM A270/A270M with the required internal and external surface finish"], ["Hydraulic", "Applicable precision hydraulic-tube or project-specific specification matched to pressure, fluid and fitting requirements"], ["Mechanical / decorative", "ASTM A554 for welded stainless steel mechanical tubing, with the required shape, finish and dimensional tolerances"]],
  },
  "Heat Exchanger Tubes": {
    keyFeatures: ["Straight or U-bend configurations", "Controlled OD, wall thickness and ovality", "Cleanliness and surface condition suited to heat-transfer service", "Eddy-current, hydrostatic or other specified inspection and testing options"],
    specificationReferences: ["ASTM A213/A213M for seamless stainless and alloy-steel heat-exchanger tubes", "ASTM A249/A249M for welded austenitic stainless-steel heat-exchanger tubes", "ASTM A789/A789M for duplex and ferritic/austenitic stainless-steel tubing, where applicable", "Applicable ASTM B-series standards for nickel and copper-nickel alloys", "Project-specific U-bend, dimensional, heat-treatment and testing requirements"],
    overviewContent: [
      "Heat exchanger tubes transfer heat between fluids in shell-and-tube condensers, coolers, evaporators and process exchangers. Material selection should consider fluid chemistry, chloride exposure, velocity, temperature, fouling and cleaning method.",
      ...(tubeDetails.overviewContent ?? []),
    ],
    productSpecifications: [
      ["Product standard", "ASTM A213/A213M or ASTM A249/A249M for applicable stainless-steel tubes; ASTM A789/A789M for applicable duplex/ferritic-austenitic stainless tubing; or the applicable material-specific standard"],
      ["Manufacturing type", "Seamless or welded, with cold finishing where required for controlled OD, wall thickness, ovality and surface condition"],
      ["Typical NESCO enquiry range", "3/8 in. OD to 2 in. OD; project-specific dimensions reviewed on enquiry"],
      ["Wall thickness", "Specified in mm or BWG, as applicable, and coordinated with the tube-sheet and exchanger design"],
      ["Length", "Straight cut length or U-bend to the approved bend radius and developed geometry"],
      ["Ends", "Square cut and deburred; capped where cleanliness protection is required"],
      ["Surface finish", "Annealed and pickled or bright annealed, according to the material, applicable standard and cleanliness requirements"],
      ["Marking", "Standard mill marking"],
      ["Packaging", "Capped and boxed with cleanliness and export protection as required"],
    ],
    standardGroups: [
      { title: "Stainless and duplex tube standards", rows: [["ASTM A213/A213M", "Seamless ferritic and austenitic alloy-steel boiler, superheater and heat-exchanger tubes"], ["ASTM A249/A249M", "Welded austenitic stainless-steel boiler, superheater, heat-exchanger and condenser tubes"], ["ASTM A789/A789M", "Seamless and welded ferritic/austenitic stainless-steel tubing for general service"], ["EN 10216-5", "Seamless stainless-steel tubes for pressure purposes"], ["EN 10217-7", "Welded stainless-steel tubes for pressure purposes"]] },
      { title: "Nickel-alloy tube standards", rows: [["ASTM B163", "Seamless nickel and nickel-alloy condenser and heat-exchanger tubes"], ["ASTM B407", "Nickel-iron-chromium alloy seamless tube"], ["ASTM B444", "Nickel-chromium-molybdenum-niobium and related alloy seamless tube"], ["ASTM B622", "Seamless nickel and nickel-cobalt alloy tube"]] },
    ],
    selectionGuide: [["Shell-and-tube heat exchanger", "ASTM A213/A213M for seamless tubes or ASTM A249/A249M for welded tubes, as required by the equipment specification"], ["Condenser / cooler", "Applicable stainless-steel or nickel-alloy tube standard selected according to fluid chemistry, temperature and corrosion requirements"], ["Boiler / superheater", "ASTM A213/A213M for applicable seamless alloy-steel tubes, subject to the grade and design specification"], ["Duplex / super duplex service", "ASTM A789/A789M or applicable project/material specification, based on grade and service conditions"], ["Nickel-alloy heat-transfer service", "Applicable ASTM B-series specification based on the alloy grade, tube form and service requirements"], ["U-bend heat exchanger", "Applicable tube standard with specified bend radius, developed length, dimensional requirements and heat-treatment requirements"]],
  },
  "Boiler Tubes": {
    keyFeatures: ["Designed for elevated-temperature and pressure service", "Seamless or welded routes depending on the applicable specification", "Cut lengths and end preparation for fabrication and installation", "Mechanical, flattening, flaring and NDT requirements as specified by the applicable standard"],
    specificationReferences: ["ASTM A213/A213M for seamless ferritic and austenitic alloy-steel boiler, superheater and heat-exchanger tubes", "ASTM A249/A249M for welded austenitic stainless-steel boiler, superheater and heat-exchanger tubes", "ASME Section II material requirements where contractually or project-specifically required", "Project- or OEM-specific supplementary requirements"],
    overviewContent: [
      "Boiler tubes are used in water walls, economisers, superheaters, reheaters and steam-generating equipment. They require careful control of material condition, dimensions, heat treatment and test documentation.",
      ...(tubeDetails.overviewContent ?? []),
    ],
    productSpecifications: [
      ["Product standard", "ASTM A213/A213M for applicable seamless tubes or ASTM A249/A249M for applicable welded tubes; ASME Section II requirements where contractually specified"],
      ["Manufacturing type", "Seamless or welded with hot working, cold finishing and heat treatment as required by the ordered standard"],
      ["Typical NESCO enquiry range", "1/2 in. OD to 4 in. OD; other dimensions reviewed against the grade and equipment specification"],
      ["Wall thickness", "Nominal or minimum wall, explicitly stated on the purchase order"],
      ["Length", "Fixed cut length coordinated with the fabrication or boiler drawing"],
      ["Ends", "Square cut and deburred; prepared for expansion or welding where specified"],
      ["Surface finish", "Annealed and pickled or the condition required by the ordered material standard"],
      ["Marking", "Standard mill marking"],
      ["Packaging", "Bundled, end protected, boxed or export packed as required"],
    ],
    selectionGuide: [["Boiler / steam generation", "ASTM A213/A213M for applicable seamless alloy-steel tubes, subject to the grade and design specification"], ["Superheater / reheater", "ASTM A213/A213M for applicable seamless ferritic or austenitic alloy-steel tubes, subject to the applicable grade and design requirements"], ["Heat-transfer service", "Applicable boiler or heat-exchanger tube standard selected according to material grade, temperature, pressure and service conditions"], ["Duplex / super duplex service", "ASTM A789/A789M or applicable project/material specification, where permitted"], ["Welded boiler tubes", "ASTM A249/A249M for applicable welded austenitic stainless-steel tubes"], ["Special-alloy service", "Applicable ASTM B-series or other material-specific specification based on the alloy grade and service requirements"]],
  },
  "Instrumentation Tubes": {
    keyFeatures: ["Precision outside diameter and wall-thickness control", "Bright annealed or solution-annealed finishes where required", "Straight lengths or coils", "High-cleanliness, capped ends and protective packing options"],
    specificationReferences: ["ASTM A269/A269M and applicable material-specific standards", "Seamless or welded, with cold-drawn or cold-worked condition as specified", "Hardness, surface finish and dimensional requirements matched to the applicable tubing and fitting specification", "Hydrostatic, pneumatic or another leak test as specified or agreed"],
    overviewContent: [
      "Instrumentation tubing is used for impulse lines, analyser systems, hydraulic and pneumatic control, sampling, dosing and small-bore process connections. Reliable sealing depends on accurate OD, controlled hardness, smooth surfaces and compatible tube fittings.",
      ...(tubeDetails.overviewContent ?? []),
    ],
    productSpecifications: [
      ["Product standard", "ASTM A269/A269M or the approved material and project tubing specification"],
      ["Manufacturing type", "Seamless or welded; cold working or cold drawing as required for precision OD, wall thickness, hardness and surface control"],
      ["Typical NESCO enquiry range", "1/16 in. OD to 1 in. OD; project-specific dimensions reviewed on enquiry"],
      ["Wall thickness", "Precision wall thickness matched to the approved fitting or compression system"],
      ["Length", "Straight lengths or coils according to grade, size and cleanliness requirements"],
      ["Ends", "Square cut, deburred and capped to protect the bore and sealing surfaces"],
      ["Surface finish", "Bright annealed or solution annealed according to the material, applicable specification and fitting requirements"],
      ["Marking", "Standard mill marking or agreed customer-specific identification"],
      ["Packaging", "Clean, capped and protected for straight-length or coil supply"],
    ],
    standardGroups: [
      { title: "Stainless and duplex tube standards", rows: [["ASTM A269/A269M", "Seamless and welded austenitic stainless-steel tubing for general service"], ["ASTM A789/A789M", "Seamless and welded ferritic/austenitic stainless-steel tubing for general service"], ["EN 10216-5", "Seamless stainless-steel tubes for pressure purposes"], ["EN 10217-7", "Welded stainless-steel tubes for pressure purposes"]] },
      { title: "Nickel-alloy tube standards", rows: [["Applicable ASTM B-series standards", "Nickel-alloy tubing selected according to the applicable alloy grade, product form, dimensions and service requirements"]] },
    ],
    selectionGuide: [["Instrumentation / impulse lines", "ASTM A269/A269M or the approved project tubing specification, selected according to material, pressure and service conditions"], ["Hydraulic / pneumatic systems", "Applicable precision tubing specification matched to system pressure, fluid compatibility and fitting requirements"], ["Control & process instrumentation", "Stainless-steel or nickel-alloy tubing selected according to fluid chemistry, pressure, temperature and project requirements"], ["Compression fittings", "Precision OD and wall thickness matched to the approved tube and fitting system"], ["High-cleanliness service", "Bright annealed or specified surface condition with clean, capped and protected tube supply"]],
  },
};

const flatProductDetails: ProductDetailContent = {
  ...generalDetails,
  materialGroups: corrosionResistantMaterialGroups,
  grades: [
    ["Austenitic stainless", "304/304L, 316/316L, 321, 347, 317L, 904L", "Fabrication, vessels, food, pharmaceutical and chemical equipment"],
    ["Duplex / super duplex", "S32205, S32750, S32760, S32304", "Higher strength and chloride-bearing process or marine service"],
    ["Nickel alloys", "N06600, N06625, N08825, N10276 and others", "Severe corrosion and elevated-temperature equipment"],
    ["Titanium / copper-nickel", "Grades 2, 5, 7; C70600, C71500", "Heat exchangers, marine systems and specialised chemical fabrication"],
  ],
  manufacturingStandards: [
    ["ASTM A240/A240M", "Stainless steel plate, sheet and strip for pressure vessels and general applications", "Material specification"],
    ["ASTM A480/A480M", "General requirements for flat-rolled stainless steel products", "Tolerance / finish basis"],
    ["ASTM A666/A666M", "Annealed or cold-worked austenitic stainless sheet, strip, plate and flat bar", "Selected applications"],
    ["ASTM B-series", "Grade-specific nickel, copper-nickel and titanium flat-product specifications", "Material-specific"],
    ["EN 10088", "Stainless steel flat products under the applicable part and delivery condition", "European reference"],
    ["Customer drawing / PO", "Size, tolerance, finish, edge, processing and inspection", "Order-specific"],
  ],
  inspection: ["MTC and heat-number traceability review", "Thickness, width, length and diagonal checks", "Flatness, edge and surface-finish inspection", "PMI when specified", "Ultrasonic testing for plate where ordered", "Hardness, mechanical or corrosion testing to the material specification", "Film, interleave, marking and packing verification"],
  industries: ["Chemical processing", "Food & beverage", "Pharmaceutical", "Oil & gas", "Power generation", "Marine", "Architecture", "Transport", "General fabrication"],
  packaging: ["Sheets stacked on skids with edge and corner protection", "Plates strapped on heavy timber bearers or in export frames", "Coils wrapped with moisture barriers and bore/edge protection", "Protective film or paper interleave when specified", "Heat, grade, size, finish and PO identification retained on every package"],
  whyNesco: professionalWhyNesco,
  faqs: [["Which flat-product details are essential for quotation?", "State grade, product form, material standard, thickness, width, length or coil geometry, finish, edge, quantity and certificates."], ["Can NESCO provide cut-to-size material?", "Cut sheets, plates, strips, blanks and drawing-based profiles can be reviewed against tolerance, quantity and traceability requirements."], ["Are decorative finishes consistent between batches?", "Visual appearance may vary by mill and processing batch. Samples, direction, surface-protection film and acceptance criteria should be agreed for appearance-critical work."], ["Can PMI and third-party inspection be arranged?", "Yes, when the inspection scope, agency and hold points are included before order placement."]],
  dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
  dimensionsNote: "Flat-product availability depends on the combined grade, thickness, width, length or coil geometry, finish and tolerance. State whether dimensions are nominal or minimum.",
  dimensions: [["Thickness", "Sheet, plate or precision shim gauge", "Nominal value and tolerance", "Uniformity and permitted variation"], ["Width / length", "Mill size, cut size or drawing profile", "Finished dimensions and squareness", "Edge and diagonal tolerance"], ["Coil geometry", "Width, ID, OD and maximum weight", "Slit/master coil and orientation", "Telescoping and edge condition"], ["Finish", "No.1, 2B, BA, No.4, hairline or polished", "Finish designation and protective film", "Surface reference / sample if critical"]],
};

const barDetails: ProductDetailContent = {
  ...generalDetails,
  materialGroups: corrosionResistantMaterialGroups,
  grades: [["Stainless steel", "304/304L, 316/316L, 321, 347, 410, 420, 431", "Machining, shafts, food, chemical and general engineering"], ["Duplex / super duplex", "UNS S31803 / S32205, UNS S32750 / S32760", "High-strength, chloride-resistant machined components"], ["Nickel alloys", "UNS N08020, UNS N08028, UNS N04400, UNS N06600, UNS N06625, UNS N07718, UNS N08825, UNS N06022, UNS N10276", "Corrosion, temperature and high-performance components"], ["Copper-nickel", "UNS C70600 (90/10 Cu-Ni), UNS C71500 (70/30 Cu-Ni)", "Marine, seawater and condenser components"], ["Titanium", "Grades 2, 5 and 7", "Lightweight, corrosion-resistant and high-strength components"]],
  manufacturingStandards: [["ASTM A276/A276M", "Stainless steel bars and shapes", "General bar material"], ["ASTM A479/A479M", "Stainless steel bars and shapes for use in boilers and other pressure vessels", "Pressure equipment"], ["ASTM A484/A484M", "General requirements for stainless bars, billets, shapes and forgings", "Tolerance / quality"], ["Applicable ASTM B-series specifications", "Nickel alloys, titanium alloys and copper-nickel/copper alloys, depending on grade and product form", "Special alloys"], ["EN 10088-3", "Technical delivery conditions for stainless semi-finished products, bars, rods, wire, sections and bright products for general purposes", "European reference"], ["Drawing / tolerance class", "Profile dimensions, straightness, finish and cut length", "Order-specific"]],
  inspection: ["Heat-number and MTC review", "Profile size and dimensional tolerance", "Straightness, twist and length inspection", "Surface examination and finish comparison", "PMI and hardness when specified", "Ultrasonic testing for critical bar", "Cut-list and piece-mark verification"],
  industries: ["Machining", "Valves & pumps", "Oil & gas", "Chemical processing", "Marine", "Industrial machinery & OEMs", "Food equipment", "General engineering"],
  packaging: ["Heat-wise bundles with separators between grades", "Oiled or wrapped surfaces where appropriate", "Threaded or machined ends protected", "Wooden cases or crates for precision cut pieces where required", "Grade, heat, size, condition and PO tags on each bundle"],
  whyNesco: professionalWhyNesco,
  faqs: [["What information is needed to quote bar?", "State profile, grade, material standard, size, tolerance, condition, finish, length, quantity and testing."], ["Can bars be supplied in fixed cut lengths?", "Yes, subject to cutting tolerance, minimum order quantity and the selected grade and diameter."], ["Which finish is best for machining?", "Peeled, turned, ground or bright-drawn conditions may reduce machining allowance; the final component tolerance and surface requirement should guide selection."], ["Can heat-wise traceability be maintained after cutting?", "Piece marking or heat-wise segregation can be arranged when specified before processing."]],
  dimensionHeaders: ["Profile", "Size basis", "Common conditions", "Critical order detail"],
  dimensionsNote: "Bar dimensions are ordered by profile-specific size and tolerance. Confirm machining allowance, straightness, corner geometry and cut-length tolerance where critical.",
  dimensions: [["Round", "Diameter", "Hot rolled, peeled, ground or polished", "Diameter tolerance and straightness"], ["Hexagon", "Across flats", "Hot finished or cold drawn", "Corner condition and twist"], ["Square", "Side dimension", "Hot rolled or cold finished", "Squareness and corner radius"], ["Flat", "Width x thickness", "Hot/cold rolled or plate/strip-derived where permitted", "Manufacturing route, edge condition and flatness"]],
};

const flangeDetails: ProductDetailContent = {
  ...generalDetails,
  overviewContent: [
    "Flanges create detachable, bolted connections between pipe, valves, vessels and equipment. Correct selection requires the material grade, standard, nominal size, pressure class, facing, bore, wall schedule, dimensions and testing requirements to be defined together.",
    "Whether the requirement is for standard maintenance quantities or a project package, our team reviews each flange requirement against the requested material, dimensions, specification, service conditions, inspection and delivery plan. Availability may include ex-stock, mill production or made-to-order supply depending on the combination.",
    "NESCO Pipe & Tubes supplies and exports industrial flanges for piping, process, pressure equipment and engineering applications. Our flange range includes Weld Neck, Slip-On, Blind, Socket Weld and Threaded flanges in stainless steel, duplex, super duplex, nickel alloys, titanium and other applicable materials.",
    "Flanges can be supplied in accordance with applicable ASME, ASTM, EN and project-specific requirements, with different pressure classes, sizes, facings, bore configurations and machining requirements available subject to specification and availability.",
    "NESCO supports standard and project-specific requirements with material traceability, Mill Test Certificates, inspection coordination and export-ready packing as required.",
    "Other flange configurations available on request include Lap Joint, Orifice and project-specific flanges.",
  ],
  grades: [
    ["Stainless Steel", "304, 304L, 316, 316L, 310S, 317L, 321, 347, 347H and 904L", "General process piping, chemical service, pressure and elevated-temperature applications"],
    ["Duplex Stainless Steel", "UNS S31803, UNS S32205 (2205), UNS S32750 (2507) and UNS S32760", "High-strength applications and chloride-bearing environments"],
    ["Nickel Alloys", "Alloy 20, Alloy 28, Alloy 200, Alloy 201, Monel 400, Inconel 600, Inconel 601, Inconel 625, Inconel 718, Incoloy 800, Incoloy 800H, Incoloy 800HT, Incoloy 825, Hastelloy C276 and Hastelloy C22", "Severe corrosion, high-temperature and demanding chemical/process service"],
    ["Titanium", "Grade 2, Grade 5 and other applicable grades", "Seawater, chemical processing and lightweight corrosion-resistant applications"],
    ["Cupro Nickel", "Cu-Ni 90/10 (C70600) and Cu-Ni 70/30 (C71500)", "Marine, seawater, condenser and heat-exchanger systems"],
  ],
  manufacturingStandards: [
    ["ASME B16.5", "Pipe flanges and flanged fittings, NPS 1/2 through NPS 24", "Dimensions, pressure-temperature ratings, tolerances, marking and testing"],
    ["ASME B16.47", "Large-diameter steel flanges, NPS 26 through NPS 60", "Large-diameter flange dimensions, ratings and drilling"],
    ["ASTM A182/A182M", "Forged or rolled alloy and stainless-steel pipe flanges, fittings, valves and related pressure-system components", "Material specification"],
    ["ASTM B564", "Nickel-alloy forgings, including applicable nickel, Ni-Cu and nickel-alloy grades", "Nickel-alloy material specification"],
    ["ASTM B381", "Titanium and titanium-alloy forgings", "Titanium material specification"],
    ["EN 1092-1", "Circular steel flanges with PN designation", "European dimensional and pressure-rating basis"],
    ["Project specification / drawing", "Non-standard dimensions, bore, facing, drilling, tolerances, inspection or other project requirements", "Order-specific requirements"],
  ],
  inspection: ["MTC and forging heat traceability", "NPS, class, OD, thickness and bolt-circle checks", "Bore and hub dimensions", "Facing type and surface-finish verification", "PMI and hardness when specified", "UT or liquid-penetrant examination where ordered", "Marking and face-protection verification", "Testing and inspection arranged to the purchase order, approved ITP or project requirements"],
  industries: ["Refineries", "Petrochemicals", "Oil & gas", "Power generation", "Chemical processing", "Marine", "Water & desalination", "Pressure equipment"],
  packaging: ["Machined faces protected with covers or non-abrasive separators", "Small flanges boxed; larger flanges secured on pallets", "Threads, RTJ grooves and bores protected from impact", "Heat and piece traceability retained after machining", "Export packages labelled with type, grade, NPS, class and PO"],
  whyNesco: professionalWhyNesco,
  faqs: [["Which flange details are essential for quotation?", "State type, material grade, dimensional standard, NPS, pressure class, bore or schedule, facing, finish, quantity and inspection."], ["What is the difference between Class and PN ratings?", "Class and PN belong to different flange standard systems and are not direct dimensional substitutes. Use the complete selected standard and rating."], ["Why must facing finish be specified?", "Gasket performance depends on facing type, groove geometry and surface finish. The piping specification should define the required gasket seating surface."], ["Can custom flanges be manufactured to drawings?", "Yes, subject to approved material, design responsibility, machining drawing, tolerances, testing and quantity."]],
  dimensionHeaders: ["Design input", "Typical options", "Required RFQ detail", "Why it matters"],
  dimensionsNote: "Flange size alone is insufficient. The dimensional standard, pressure class, facing, bore and pipe outside diameter should be specified together.",
  dimensions: [["Nominal size", "NPS / DN", "Nominal pipe size and applicable standard", "Establishes the flange size and dimensional basis"], ["Standard", "ASME B16.5, ASME B16.47, EN 1092-1 or project standard", "Applicable flange standard", "Determines dimensions, drilling, tolerances and rating basis"], ["Pressure rating", "Class 150, 300, 400, 600, 900, 1500, 2500 or applicable PN rating", "Class / PN rating and applicable standard", "Establishes the pressure-temperature rating basis"], ["Facing", "RF, FF, RTJ or other specified facing", "Facing type and required facing finish", "Must be compatible with the mating flange and gasket arrangement"], ["Bore / pipe schedule", "Standard bore, bore matched to pipe schedule or specified bore", "Pipe OD, wall thickness / schedule and required bore", "Controls weld transition, alignment and internal flow passage"], ["Dimensions / drilling", "Standard dimensional pattern or project-specific", "OD, thickness, bolt circle/PCD, bolt-hole size and number where required", "Ensures mating compatibility and correct installation"], ["Material / grade", "Stainless, duplex, super duplex, nickel alloy, titanium or Cu-Ni", "Grade and applicable material specification", "Determines mechanical, corrosion and temperature suitability"]],
};

const productPageEnhancements: Record<string, Partial<ProductDetailContent>> = {
  ...tubePageEnhancements,
  "Round Bars": {
    displayTitle: "Stainless Steels & Nickel Alloys Round Bars",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel round bars, supporting standard and project-specific requirements.", "Round bars are widely used for machining, shafts, valves, fasteners, structural components, supports, tooling and fabricated assemblies. They are selected based on grade, diameter, length, condition, dimensional tolerances, surface finish and applicable inspection requirements.", "Availability may include ex-stock, mill production or made-to-order supply, depending on the material, dimensions and quantity required."],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensionsNote: "Round-bar dimensions are specified by diameter, length, manufacturing condition and tolerance. Confirm straightness, surface finish and end preparation where critical.",
    dimensions: [["Diameter", "Standard or non-standard", "Nominal diameter and tolerance", "Dimensional accuracy"], ["Length", "Random, fixed or cut-to-size", "Finished length and tolerance", "Cut-length accuracy"], ["Condition", "Hot rolled, forged, cold drawn, peeled, ground or polished", "Required condition", "Mechanical and surface condition"], ["Surface", "Black, pickled, bright, ground, polished or machined", "Required finish", "Surface quality"], ["Straightness", "Standard or precision", "Permitted deviation", "Straightness over length"], ["Ends", "Mill cut, saw cut, machined or chamfered", "End preparation", "Squareness and burr control"]],
  },
  "Bright Bars": {
    displayTitle: "Stainless Steel & Nickel Alloy Bright Bars",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel bright bars, supporting standard, maintenance and project-specific requirements.", "Bright bars are precision-finished bar products used for machining, shafts, valves, fasteners, precision components, tooling and fabricated assemblies. They are selected based on grade, profile, size, length, manufacturing condition, dimensional tolerances and surface finish.", "Bright bars may be supplied in cold-drawn, peeled, centreless-ground or polished conditions, depending on the material, size and specified requirements."],
  },
  "Hex Bars": {
    displayTitle: "Stainless Steel & Nickel Alloy Hex Bars",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel hex bars, supporting standard, maintenance and project-specific requirements.", "Hex bars provide a six-sided profile suited to machining, fasteners, valves, fittings, shafts, precision components and fabricated assemblies. Selection should define the grade, across-flats dimension, length, condition, dimensional tolerance, surface finish and applicable inspection requirements.", "Hex bars may be supplied in cold-drawn, hot-finished, peeled, ground or polished conditions, depending on the material, size and specified requirements."],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensionsNote: "Hex-bar dimensions are specified by across-flats size, length, manufacturing condition and tolerance. Confirm corner geometry, straightness and cut-length tolerance where critical.",
    dimensions: [["Across flats", "Standard or non-standard sizes", "Nominal AF dimension and tolerance", "Across-flats accuracy"], ["Length", "Random, fixed or cut-to-size", "Finished length and tolerance", "Cut-length accuracy"], ["Condition", "Hot finished, cold drawn, peeled, ground or polished", "Required manufacturing condition", "Dimensional and mechanical condition"], ["Corner geometry", "Standard or specified radius", "Corner radius / geometry where critical", "Corner consistency"], ["Straightness", "Standard or precision", "Maximum permitted deviation", "Straightness over length"], ["Surface finish", "Black, pickled, bright, ground or polished", "Required surface condition", "Surface quality"]],
  },
  "Square Bars": {
    displayTitle: "Stainless Steel & Nickel Alloy Square Bars",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel square bars, supporting standard, maintenance and project-specific requirements.", "Square bars provide a four-sided profile suited to machining, shafts, fasteners, supports, structural components, tooling and fabricated assemblies. Selection should define the grade, side dimension, length, condition, dimensional tolerance, corner geometry, surface finish and applicable inspection requirements.", "Square bars may be supplied in hot-finished, cold-finished, peeled, ground or polished conditions, depending on the material, size and specified requirements."],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensionsNote: "Square-bar dimensions are specified by side dimension, length, manufacturing condition and tolerance. Confirm squareness, corner geometry, straightness and cut-length tolerance where critical.",
    dimensions: [["Side dimension", "Standard or non-standard sizes", "Nominal side dimension and tolerance", "Dimensional accuracy"], ["Length", "Random, fixed or cut-to-size", "Finished length and tolerance", "Cut-length accuracy"], ["Condition", "Hot finished, cold drawn, peeled, ground or polished", "Required manufacturing condition", "Dimensional and mechanical condition"], ["Corner geometry", "Standard or specified radius", "Corner radius / geometry where critical", "Corner consistency"], ["Squareness", "Standard or precision", "Permitted deviation from square", "Section geometry"], ["Straightness", "Standard or precision", "Maximum permitted deviation", "Straightness over length"]],
  },
  "Flat Bars": {
    displayTitle: "Stainless Steel & Nickel Alloy Flat Bars",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel flat bars, supporting standard, maintenance and project-specific requirements.", "Flat bars provide a rectangular section suited to fabrication, supports, brackets, frames, structural components, machining, base plates and general engineering applications. Selection should define the grade, width, thickness, length, manufacturing condition, dimensional tolerance, edge condition, flatness, surface finish and applicable inspection requirements.", "Flat bars may be supplied as rolled or approved plate/strip-derived products, depending on the material, dimensions and applicable product standard."],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensionsNote: "Flat-bar dimensions are specified by width, thickness, length, manufacturing route and tolerance. Confirm flatness, straightness, edge condition and cut-length tolerance where critical.",
    dimensions: [["Width", "Standard or non-standard sizes", "Nominal width and tolerance", "Width accuracy"], ["Thickness", "Standard or specified gauges", "Nominal thickness and tolerance", "Thickness uniformity"], ["Length", "Random, fixed or cut-to-size", "Finished length and tolerance", "Cut-length accuracy"], ["Condition", "Hot finished, cold finished, rolled, ground or polished", "Required manufacturing condition", "Material and dimensional condition"], ["Edges", "Mill, sheared, slit, deburred, machined or ground", "Required edge condition", "Edge quality"], ["Flatness / straightness", "Standard or precision", "Permitted deviation", "Flatness and straightness"]],
  },
  "Weld Neck Flanges": { overviewContent: ["Flanges create detachable, bolted connections between pipes, valves, vessels and equipment. Weld Neck Flanges are selected according to the material grade, flange standard, nominal size, pressure class, facing, bore, wall schedule, dimensions and applicable testing requirements.", "NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of industrial flanges in stainless steel, duplex, super duplex, nickel alloys, titanium and copper-nickel.", "Weld Neck Flanges feature a tapered hub and butt-weld connection and are commonly selected for high-pressure, high-temperature, cyclic and critical process applications."] },
  "Slip-On Flanges": { overviewContent: ["Slip-On Flanges provide detachable, bolted connections and are designed to fit over the pipe before being welded in position. Selection should coordinate the material grade, dimensional standard, nominal size, pressure class, facing, bore and inspection requirements.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel Slip-On Flanges for general process, utility and industrial piping.", "Availability is confirmed against the complete material, size, class, facing, bore and quantity requirement."] },
  "Blind Flanges": { overviewContent: ["Blind Flanges are solid flanges used to close piping systems, valves, vessel nozzles and equipment connections. Selection should coordinate the material grade, dimensional standard, nominal size, pressure class, facing, drilling and inspection requirements.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel Blind Flanges for isolation, inspection access and future line extension.", "The flange must be selected for the complete design pressure, temperature and bolting load under the approved piping specification."] },
  "Socket Weld Flanges": { overviewContent: ["Socket Weld Flanges create compact bolted connections for small-bore piping, with the pipe inserted into a machined socket and joined by a fillet weld. Selection should coordinate the grade, standard, size, pressure class, facing, socket dimensions and pipe wall.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel Socket Weld Flanges for applicable pressure, utility and process-piping systems.", "Socket geometry, installation gap and welding practice remain subject to the approved piping class and procedure."] },
  "Threaded Flanges": { overviewContent: ["Threaded Flanges provide detachable connections where the pipe engages internal threads rather than a circumferential weld. Selection should coordinate the material grade, flange standard, nominal size, pressure class, facing, thread designation, bore and service conditions.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel Threaded Flanges for selected piping applications where welding is restricted or impractical.", "Suitability for pressure, temperature, vibration, cyclic loading and hazardous service must be confirmed by the responsible piping engineer."] },
  Elbows: { overviewContent: ["Butt weld elbows change pipeline direction while maintaining a continuous welded flow path. Common configurations include 45°, 90° and 180° returns in long-radius or short-radius patterns.", "NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel elbows for process piping, pressure systems and fabrication packages.", "Selection should define the material grade, fitting class, dimensional standard, angle, radius, NPS, wall or schedule, end preparation and inspection scope."] },
  Tees: { overviewContent: ["Butt weld tees create a 90-degree branch from a main piping run. Equal tees retain the run diameter, while reducing tees connect a smaller branch.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel tees for process, pressure, marine and industrial piping.", "Run and branch sizes, wall requirements, manufacturing route, fitting class and examination scope must be specified together."] },
  Reducers: { overviewContent: ["Butt weld reducers provide controlled transitions between different pipe sizes. Concentric reducers align connected pipe centrelines, while eccentric reducers maintain an offset where layout, drainage or vapour management requires it.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel reducers for process piping and fabrication packages.", "Both end sizes and walls, overall length, concentric or eccentric configuration, orientation and inspection requirements should be stated together."] },
  "Stub Ends": { overviewContent: ["Stub Ends are used with lap-joint backing flanges to create rotatable, demountable piping connections. They support alignment flexibility and can reduce the use of high-alloy material in the loose backing flange.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel Stub Ends in applicable patterns and lengths.", "The pipe size, wall, pattern, lap dimensions, facing and backing-flange compatibility must be coordinated as one requirement."] },
  "End Caps": { overviewContent: ["Butt weld End Caps provide a permanent welded closure at the end of a piping run. Their formed geometry creates a smooth pressure boundary for construction, isolation and final line termination.", "NESCO Pipe & Tubes supplies stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel End Caps for process and pressure piping.", "Material grade, NPS, wall or schedule, construction route, weld-end preparation and examination requirements should be specified together."] },
  Sheets: {
    displayTitle: "Stainless Steel & Nickel Alloy Sheets",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel sheets, supporting standard, maintenance and project-specific requirements.", "Sheets are flat-rolled products used for fabrication, equipment, liners, enclosures, process components and architectural applications. Selection should define the grade, thickness, width, length, finish, edge condition, flatness, testing and protective packing.", "Availability may include ex-stock, mill production or cut-to-size supply, depending on the material, dimensions, finish and quantity required."],
    productSpecifications: [["Product form", "Sheet, plate, strip or cut blank, as required"], ["Thickness", "Nominal or minimum thickness and applicable tolerance"], ["Dimensions", "Width × length, as applicable"], ["Surface finish", "No. 1, 2B, BA, No. 4, hairline, mirror or other project-specific finish"], ["Edges", "Mill, slit, sheared, deburred or machined, as specified"], ["Processing", "Cut-to-size, slitting, levelling, bending, drilling or profiling, where required"], ["Protection & packing", "Paper interleave, PVC film, oiling or moisture-barrier/export packing, as required"]],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensions: [["Thickness", "Sheet, plate or precision shim gauge", "Nominal or minimum thickness and applicable tolerance", "Uniformity and permitted variation"], ["Width / length", "Mill size or cut size", "Finished dimensions and squareness", "Edge and diagonal tolerance"], ["Finish", "No. 1, 2B, BA, No. 4, hairline or polished", "Finish designation and protective film", "Surface reference or sample if critical"]],
  },
  Plates: {
    displayTitle: "Stainless Steel & Nickel Alloy Plates",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel plates, supporting standard and project-specific requirements.", "Plates are used for pressure equipment, tanks, process vessels, structural fabrication, cladding, formed components, heat shields and general engineering applications. Selection should define the grade, thickness, dimensions, finish, edge condition, flatness, testing and protective packing.", "Availability may include ex-stock, mill production or cut-to-drawing supply, depending on the material, dimensions and quantity required."],
    productSpecifications: [["Product form", "Plate, cut plate, blank or profile, as required"], ["Thickness", "Nominal or minimum thickness and applicable tolerance"], ["Dimensions", "Width × length, as applicable"], ["Surface finish", "Hot-rolled, descaled, pickled, blasted, ground or other specified finish"], ["Edges", "Mill, sheared, gas-cut, machined or deburred, as specified"], ["Processing", "Cut-to-size, levelling, bending, drilling, profiling or other approved processing"], ["Protection & packing", "Paper interleave, protective film, moisture-barrier or export packing, as required"]],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensions: [["Thickness", "Plate thickness or precision plate/shim gauge", "Nominal or minimum thickness and tolerance", "Uniformity and permitted variation"], ["Width / length", "Mill size or cut size", "Finished dimensions and squareness", "Edge and diagonal tolerance"], ["Finish / surface condition", "Hot-rolled, descaled, pickled, blasted or ground", "Surface condition and any specified finish", "Surface quality / reference sample if critical"], ["Flatness", "Standard or project-specific flatness requirement", "Permitted flatness tolerance", "Overall flatness and local deviation"]],
  },
  Coils: {
    displayTitle: "Stainless Steel & Nickel Alloy Coils",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, duplex, super duplex, nickel alloy, titanium and copper-nickel coils, supporting standard and project-specific requirements.", "Coils are supplied for fabrication, forming, process equipment, heat exchangers, cladding, strip processing and general engineering applications. Selection should define the grade, thickness, width, coil ID and OD, coil weight, surface finish, edge condition, testing and protective packing.", "Availability may include master coils, slit coils and processed supply, depending on the material, dimensions, finish and quantity required."],
    productSpecifications: [["Product form", "Master coil or slit coil"], ["Thickness", "Nominal or minimum thickness and applicable tolerance"], ["Width", "Coil width and applicable width tolerance"], ["Coil geometry", "Coil ID, OD and maximum coil weight"], ["Surface finish", "No. 1, 2B, BA, No. 4, hairline, mirror or other specified finish"], ["Edges", "Mill, slit, sheared, deburred or machined, as specified"], ["Processing", "Slitting, levelling, cut-to-length or other approved processing"], ["Protection & packing", "Paper interleave, PVC film, oiling, moisture-barrier wrapping and specified eye-to-sky or eye-to-wall packing"]],
    dimensionsNote: "Coil availability depends on the combined grade, thickness, width, coil geometry, finish, edge condition and applicable tolerances. State whether dimensions are nominal or minimum.",
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensions: [["Thickness", "Coil gauge", "Nominal or minimum thickness and applicable tolerance", "Uniformity and permitted variation"], ["Width", "Master or slit-coil width", "Finished width and applicable tolerance", "Width consistency and edge condition"], ["Coil geometry", "ID, OD and maximum coil weight", "Required ID, maximum OD and coil weight", "Telescoping, coil stability and winding condition"], ["Edge condition", "Mill, slit, sheared or deburred", "Required edge condition", "Burrs, edge quality and consistency"], ["Surface finish", "No. 1, 2B, BA, No. 4, hairline, mirror or other specified finish", "Finish designation and protective film where required", "Surface quality / reference sample if critical"]],
  },
  "Shim Sheets": {
    displayTitle: "Stainless Steel & Nickel Alloy Shim Sheets",
    overviewContent: ["NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of stainless steel, nickel alloy, titanium and copper-nickel shim sheets, supporting standard and project-specific requirements.", "Shim sheets are precision flat products used for alignment, spacing, levelling, gap adjustment, packing, calibration and general engineering applications. Selection should define the grade, thickness, dimensions, tolerance, flatness, surface finish, edge condition, testing and protective packing.", "Availability may include sheets, strips and cut-to-size shims, depending on the material, gauge, tolerance and quantity required."],
    productSpecifications: [["Product form", "Shim sheet, strip or cut-to-size shim"], ["Thickness", "Nominal thickness and applicable tolerance"], ["Dimensions", "Width × length or required shim dimensions"], ["Surface finish", "As-rolled, annealed, polished or other specified finish"], ["Edges", "Sheared, slit, deburred or machined, as specified"], ["Processing", "Cutting, shearing, slitting, punching, drilling or profiling, where required"], ["Protection & packing", "Paper interleave, protective film, moisture-barrier or rigid protective packing"]],
    dimensionHeaders: ["Ordering parameter", "Typical options", "What to state", "Acceptance focus"],
    dimensions: [["Thickness", "Precision shim gauge", "Nominal thickness and applicable tolerance", "Uniformity and permitted variation"], ["Width / length", "Standard cut size or custom shim dimensions", "Finished dimensions and dimensional tolerance", "Size accuracy and squareness"], ["Flatness", "Standard or project-specific requirement", "Permitted flatness tolerance", "Overall flatness and local deviation"], ["Surface finish", "As-rolled, annealed, polished or specified finish", "Finish designation and surface requirements", "Surface quality / reference sample if critical"], ["Edge condition", "Sheared, slit, deburred or machined", "Required edge condition", "Burr control and edge quality"]],
  },
  Bolts: {
    overviewContent: ["Bolts are used to secure flanged joints, valves, equipment, structural connections and fabricated assemblies. Correct selection requires the product type, material or strength grade, dimensional standard, nominal diameter, thread specification, length, finish and compatibility with the mating nut and washer to be defined together.", "NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of industrial bolts, stud bolts, nuts and washers for pressure piping, petrochemical, power, marine, heat-exchanger, structural and maintenance applications.", "Heat or lot traceability, Mill Test Certificates, mechanical and hardness testing, PMI, dimensional and thread-gauge inspection, finish or coating verification, matched-set identification and export documentation can be coordinated where specified."],
    grades: [["Stainless Steel Fasteners", "ASTM F593; 304/304L, 316/316L and other applicable stainless grades", "Corrosion-resistant piping, equipment and general industrial assemblies"], ["Pressure-Service Alloy & Stainless Bolting", "ASTM A193 Grade B8, B8M, B16 and other applicable grades", "Flanges, valves, pressure equipment and elevated-temperature service"], ["Low-Temperature Bolting", "ASTM A320 applicable grades, including L7, B8 and B8M where specified", "Low-temperature pressure and piping applications"], ["Nickel-Alloy Bolting", "UNS N06625, N07718, N08825, N10276 and other project-specific grades", "Corrosive, high-strength and elevated-temperature applications"], ["Project-Specific Bolting", "Material grade, strength class, coating and dimensions as specified", "OEM, structural and specialised assemblies"]],
  },
  Nuts: {
    overviewContent: ["Industrial nuts are internally threaded components used with bolts and studs to secure flanged joints, valves, equipment, structures and fabricated assemblies. Correct selection requires the nut type, material or strength grade, dimensional standard, thread form, nominal diameter, pitch, thickness and compatibility with the mating bolt or stud.", "NESCO Pipe & Tubes is a supplier, stockist, importer and exporter of industrial nuts for pressure piping, petrochemical, power, marine, heat-exchanger, structural and maintenance applications.", "Heat or lot traceability, Mill Test Certificates, mechanical and hardness testing, PMI, dimensional and thread inspection, finish or coating verification, matched-set identification and export documentation can be coordinated where specified."],
    grades: [["Austenitic Stainless Steel", "304, 304L, 316, 316L, 321, 347, 310S and 904L", "Corrosion-resistant piping, equipment and general industrial assemblies"], ["Alloy Steel", "Grade 2, 2H, 7, 7M, B16 and other applicable grades", "Pressure, high-temperature and specialised bolting applications"], ["Pressure-Service Stainless Steel", "Grade 8, 8A, 8C, 8M and other applicable grades", "Flanges, valves, pressure equipment and elevated-temperature service"], ["Nickel Alloys", "Alloy 625, Alloy 718, Alloy 825, Hastelloy C276 and other project-specified grades", "Severe corrosion, high-strength and elevated-temperature applications"], ["Project-Specific Materials", "Material grade, strength class and coating as specified", "OEM, structural and specialised assemblies"]],
    manufacturingStandards: [["ASTM A194/A194M", "Carbon steel, alloy steel and stainless steel nuts for bolts used in high-pressure or high-temperature service, or both", "Pressure & high-temperature nuts"], ["ASTM F594", "Stainless steel nuts for general corrosion-resistant service", "General stainless steel nuts"], ["ASTM A453/A453M", "High-temperature bolting materials, including nuts, with expansion coefficients comparable to austenitic stainless steels", "Special high-temperature nuts"], ["ASTM A320/A320M", "Alloy-steel and stainless-steel bolting for low-temperature service; includes requirements for nuts used with the bolting", "Low-temperature bolting assemblies"], ["ASME B18.2.2", "Dimensions for inch-series hex, square, hex-flange and coupling nuts and other covered nut types", "Nut dimensions"], ["Applicable ISO / DIN standards", "Nut dimensions, thread and product requirements where specified", "Metric / project requirements"], ["ASTM A962/A962M", "Common requirements for bolting intended for service from cryogenic to creep-range temperatures", "General bolting requirements"], ["Project / OEM specification", "Coating, lubrication, supplementary testing, marking and other joint-specific requirements", "Project-specific requirements"]],
  },
  "Stud Bolts": {
    overviewContent: ["Industrial stud bolts are threaded fasteners used with two compatible nuts to secure flanged joints, valves, pressure equipment and other bolted assemblies. A complete specification defines the material or strength grade, dimensional and product standards, thread form, nominal diameter, pitch, stud length, thread configuration, condition, finish and compatible nuts.", "NESCO Pipe & Tubes supplies stud bolts for pressure piping, petrochemical, power, marine, heat-exchanger, pressure-equipment and maintenance applications, individually or as complete stud-and-nut assemblies.", "Heat or lot traceability, Mill Test Certificates, mechanical and hardness testing, PMI, dimensional and thread inspection, finish verification, matched-set identification and export documentation can be coordinated where specified."],
    grades: [["Alloy Steel", "ASTM A193 Grade B7 and B16", "Flanged joints, valves, pressure equipment and elevated-temperature service"], ["Stainless Steel", "ASTM A193 Grade B8 and B8M", "Corrosion-resistant flanged joints, valves and equipment"], ["Low-Temperature Alloy Steel", "ASTM A320 Grade L7", "Low-temperature pressure piping and equipment"], ["Special High-Temperature Bolting", "ASTM A453 applicable grades", "Special high-temperature applications requiring controlled thermal expansion characteristics"], ["Nickel-Alloy Stud Bolts", "Selected grades such as UNS N06625, N07718, N08825 and N10276, where specified", "Severe-corrosion, high-strength and elevated-temperature applications"]],
    manufacturingStandards: [["ASTM A193/A193M", "Alloy-steel and stainless-steel bolting for high-temperature or high-pressure service and other special-purpose applications, including studs and stud bolts", "Pressure, high-temperature and special-purpose stud bolts"], ["ASTM A320/A320M", "Alloy-steel and stainless-steel bolting for low-temperature service, including studs and stud bolts", "Low-temperature stud bolts"], ["ASTM A453/A453M", "High-temperature bolting materials with expansion coefficients comparable to austenitic stainless steels, including studs and stud bolts", "Special high-temperature service"], ["ASTM F593", "Stainless-steel bolts, hex cap screws and studs for applications requiring general corrosion resistance", "General stainless-steel stud bolts"], ["ASME B18.31.2", "Dimensions and general data for continuous-thread studs, double-end studs and flange bolting studs", "Stud dimensions"], ["Applicable nut specification", "Requirements for nuts compatible with the specified stud-bolt grade and service", "Mating nuts"], ["ASTM A962/A962M", "Common requirements for bolting components used with applicable ASTM bolting specifications", "General bolting requirements"], ["Project / OEM specification", "Coating, lubrication, supplementary testing, marking and other joint-specific requirements", "Project-specific requirements"]],
    dimensionHeaders: ["Ordering item", "Examples", "Required detail", "Acceptance / control"],
    dimensionsNote: "A complete stud-bolt description combines the material grade, applicable dimensional standard, nominal diameter, length and specified thread designation.",
    dimensions: [["Thread", "Metric, UNC, UNF, 8UN or specified thread form", "Nominal diameter, pitch/series, thread class and thread length", "Thread gauge and dimensional verification"], ["Diameter", "Specified nominal diameter", "Nominal diameter and applicable tolerance", "Diameter measurement"], ["Length", "Overall stud length", "Length convention and specified tolerance", "Length measurement"], ["Thread configuration", "Continuous thread, double-end or flange bolting stud", "Threaded length, unthreaded portion and thread run-out where applicable", "Dimensional and visual verification"], ["Finish", "Plain, coated, plated or lubricated where specified", "Finish/coating system and applicable requirements", "Visual and finish/coating verification"]],
  },
};

const fittingDetails: ProductDetailContent = {
  ...generalDetails,
  overviewContent: [
    "Butt weld fittings create permanent welded transitions for changes in direction, branch connections, pipe-size reduction and line closure. Correct selection requires the fitting type, material grade, manufacturing class, dimensional standard, nominal size, wall or schedule, end preparation and inspection scope to be defined together.",
    "NESCO Pipe & Tubes supplies elbows, tees, reducers, stub ends and end caps for process piping, pressure systems, fabrication packages and maintenance requirements. Each fitting requirement is reviewed against the connecting pipe, service conditions, approved piping class and welding procedure.",
    "The NESCO range includes stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel fittings, subject to the applicable grade, product standard, size, wall and manufacturing route.",
    "Seamless, welded or qualified fabricated construction can be coordinated where permitted by the governing specification. Heat-wise traceability, Mill Test Certificates, dimensional inspection, NDT coordination and export-ready packing are available as specified.",
  ],
  grades: [
    ["Austenitic stainless steel", "ASTM A403 WP304/WP304L, WP316/WP316L, WP321 and WP347", "General corrosion-resistant process and pressure piping"],
    ["Duplex / super duplex stainless steel", "ASTM A815 WP grades, including applicable duplex/super duplex grades based on UNS S31803/S32205 and S32750/S32760, with class/subclass as specified", "Higher-strength chloride-bearing, seawater, offshore and severe-service piping"],
    ["Nickel alloys", "ASTM B366 grades including UNS N04400, N06600, N06625, N08825 and N10276", "Severe corrosion and elevated-temperature piping"],
    ["Titanium", "ASTM B363 Grades 2, 5 and 7 where applicable", "Marine, heat-exchanger and selected chemical systems"],
    ["Copper-nickel", "UNS C70600 (90/10 Cu-Ni) and UNS C71500 (70/30 Cu-Ni) under the applicable fitting or project specification", "Marine, condenser and seawater piping"],
  ],
  manufacturingStandards: [
    ["ASME B16.9", "Overall dimensions, tolerances, ratings, testing and marking for factory-made wrought butt-welding fittings", "Dimensions / ratings"],
    ["ASME B16.25", "Preparation of butt-welding ends for joining into piping systems", "Weld ends"],
    ["MSS SP-43", "Wrought and fabricated butt-welding fittings for low-pressure, corrosion-resistant applications, including applicable light-wall fittings", "Low-pressure / light-wall fitting reference"],
    ["ASTM A403/A403M", "Wrought austenitic stainless steel piping fittings", "Stainless material / class"],
    ["ASTM A815/A815M", "Wrought ferritic, ferritic/austenitic and martensitic stainless steel piping fittings", "Duplex material / class"],
    ["ASTM B366/B366M", "Factory-made wrought nickel and nickel-alloy fittings", "Nickel-alloy material"],
    ["ASTM B363", "Seamless and welded unalloyed titanium and titanium-alloy welding fittings", "Titanium material"],
    ["ASME B36.19M", "Stainless steel pipe dimensions and schedules, where applicable", "Pipe dimensional compatibility"],
    ["ASME B36.10M", "Welded and seamless wrought steel pipe dimensions and schedules, where applicable", "Pipe dimensional compatibility"],
    ["Project specification / drawing", "Special geometry, wall transitions, tangents, barred branches and supplementary examination", "Order-specific"],
  ],
  inspection: ["MTC, heat number and fitting class verification", "NPS, schedule, centre-to-end and end-diameter checks", "Wall-thickness distribution after forming", "Bevel angle, land and squareness inspection", "PMI and liquid-penetrant examination when specified", "Radiographic or ultrasonic examination of welds by class or purchase order", "Heat-treatment and NDT report review", "Marking, bevel protection and packing verification before dispatch"],
  industries: ["Process piping", "Oil & gas", "Refineries", "Chemical & fertiliser", "Power generation", "Marine & offshore", "Water treatment", "Food & pharmaceutical"],
  packaging: ["Ends capped to protect bevels and internal cleanliness", "Fittings nested or individually wrapped without metal-to-metal damage", "Small items boxed; heavy fittings palletised or crated", "Heat-wise tags and durable product marking", "Export packing and lifting points planned for large fittings"],
  whyNesco: fittingWhyNesco,
  faqs: [["What information is required to quote a butt-weld fitting?", "Provide fitting type, angle or configuration, material grade, material class, dimensional standard, NPS, schedule or wall, quantity and NDT."], ["Must the fitting schedule match the pipe?", "The weld-end outside diameter and wall should be compatible with the connecting pipe and approved welding procedure."], ["What do WP-S, WP-W, WP-WX or WP-WU indicate?", "These class markings identify manufacture and examination routes under the applicable fitting specification; specify the class required by the piping design."], ["Can special dimensions be supplied?", "Drawing-specific radii, tangents, end walls or fabricated configurations can be reviewed with design and inspection requirements."]],
  dimensionHeaders: ["Parameter", "Typical definition", "RFQ input", "Inspection focus"],
  dimensionsNote: "Butt-weld fitting dimensions must be coordinated with both connected pipe ends. State every run, branch or reducer end size and wall.",
  dimensions: [["Configuration", "Elbow angle, tee type, reducer type or closure", "Exact type / drawing", "Geometry and orientation"], ["End size", "NPS / OD at each connection", "Run, branch, large and small ends", "Fit with connecting pipe"], ["Wall", "Schedule or nominal/minimum wall", "Each end wall requirement", "Forming thinning and weld preparation"], ["End preparation", "Standard bevel or special weld detail", "Angle, land and root detail", "Field fit-up"]],
};

const fastenerDetails: ProductDetailContent = {
  ...generalDetails,
  overviewContent: [
    "Industrial fasteners secure flanged joints, valves, equipment, structures and fabricated assemblies. A complete fastener specification must combine the product type, material or strength grade, dimensional standard, thread form, diameter, pitch, length, heat-treatment condition, finish and compatible nut or washer requirement.",
    "NESCO Pipe & Tubes supplies bolts, nuts and stud bolts for pressure piping, petrochemical, power, marine, heat-exchanger, structural and maintenance applications. Requirements can be supplied as individual items or coordinated bolting sets, subject to grade, size, quantity and specification.",
    "The NESCO range includes stainless steel, pressure-service alloy and stainless bolting, low-temperature bolting and selected nickel-alloy grades. Material selection must account for design temperature, corrosion environment, mechanical loading and compatibility between every component in the joint.",
    "Heat or lot traceability, Mill Test Certificates, mechanical and hardness testing, PMI, thread gauging, coating verification, matched-set packing and export documentation can be coordinated where specified in the purchase order.",
  ],
  grades: [
    ["General stainless fasteners", "ASTM F593 bolts, hex cap screws and studs with ASTM F594 compatible nuts; commonly requested 304 and 316 families", "Corrosion-resistant general and equipment assemblies"],
    ["Pressure-service alloy and stainless bolting", "ASTM A193 Grades B8, B8M and B16, with ASTM A194 nuts selected for the specified bolting combination", "Flanges, valves and pressure equipment"],
    ["Low-temperature bolting", "ASTM A320 material grades with ASTM A194 or other specification-matched nuts", "Specified low-temperature pressure joints"],
    ["Nickel-alloy bolting", "UNS N06625, UNS N07718, UNS N08825, UNS N10276 and project-specific grades", "Corrosive, high-strength and elevated-temperature service"],
    ["Project-specific bolting", "Material, strength class, coating and dimensions to the approved bolting specification or drawing", "OEM, structural and specialised assemblies"],
  ],
  manufacturingStandards: [
    ["ASTM A193/A193M", "Alloy-steel and stainless-steel bolting for high-temperature or high-pressure service and other special-purpose applications", "Pressure bolting"],
    ["ASTM A194/A194M", "Carbon, alloy and stainless steel nuts for high-pressure or high-temperature service", "Compatible nuts"],
    ["ASTM A320/A320M", "Alloy-steel and stainless-steel bolting for low-temperature service", "Low-temperature bolting"],
    ["ASTM F593 / F594", "Stainless steel bolts, hex cap screws and studs, with compatible stainless steel nuts", "General stainless fasteners"],
    ["ASTM A453/A453M", "High-temperature bolting with expansion coefficients comparable to austenitic stainless steel", "Special high-temperature service"],
    ["ASME B18 / ISO / DIN", "Product geometry, thread form and dimensions under the selected standard", "Dimensions"],
    ["Project bolting specification", "Coating, lubrication, tightening, lot testing, marking and supplementary requirements", "Joint-specific"],
  ],
  inspection: ["Heat or lot traceability and MTC review", "Diameter, pitch, length and GO/NO-GO thread-gauge inspection", "Head, nut, bearing-face and chamfer dimensions", "Hardness, tensile, yield, proof-load or impact testing as required by the specification", "PMI for stainless and alloy verification when specified", "Coating thickness and lubricant verification where ordered", "Grade marking, nut compatibility and matched-set checks", "Quantity, segregation and protective packing verification before dispatch"],
  industries: ["Pressure piping", "Oil & gas", "Petrochemicals", "Power generation", "Marine", "Structural fabrication", "Heat exchangers", "Maintenance shutdowns"],
  packaging: ["Bolting segregated by grade, heat/lot, size and finish", "Matched stud-and-nut sets bagged or boxed when ordered", "Threads protected from impact and contamination", "Moisture-resistant export cartons and timber cases", "Labels show standard, grade, thread, length, quantity and PO"],
  whyNesco: fastenerWhyNesco,
  faqs: [["What information is essential for fastener quotation?", "Provide fastener type, material/strength grade, dimensional standard, diameter, pitch, length, finish, nut/washer requirement, quantity and certificates."], ["Can stainless and alloy bolting grades be interchanged?", "No. Strength, temperature capability, corrosion behaviour and matching nut requirements differ; substitutions require approval from the responsible engineer."], ["Why must coating and lubricant be stated?", "Surface condition influences corrosion protection, friction and tightening load. It must be compatible with the service and assembly procedure."], ["Can fasteners be supplied as matched sets?", "Bolts, studs, nuts and washers can be packaged as coordinated sets when grades, quantities and marking requirements are specified."]],
  dimensionHeaders: ["Ordering item", "Examples", "Required detail", "Acceptance control"],
  dimensionsNote: "A complete fastener description combines material grade with a separate dimensional standard and thread designation.",
  dimensions: [["Thread", "Metric, UNC, UNF, 8UN or special", "Diameter, pitch/series and class", "GO/NO-GO gauging"], ["Length", "Under-head or overall by product type", "Measurement convention and tolerance", "Assembly grip / engagement"], ["Head / nut", "Hex, heavy hex, socket or drawing-specific", "Dimensional standard", "Across-flats and bearing face"], ["Finish", "Plain, passivated, coated or lubricated", "Coating system and thickness", "Friction and corrosion compatibility"]],
};

const categoryDetails: Record<string, ProductDetailContent> = {
  Tubes: {
    ...tubeDetails,
    whyNesco: professionalWhyNesco,
    dimensionHeaders: ["Tube requirement", "Typical options", "What to specify", "Control point"],
    dimensionsNote: "Tube is normally ordered by actual outside diameter and wall thickness. State whether wall is nominal or minimum and include the required tolerance.",
    dimensions: [["Outside diameter", "Precision OD in metric or inch", "Exact OD and tolerance", "Fitting, tube-sheet or fabrication fit"], ["Wall thickness", "Nominal or minimum wall", "Wall and permitted variation", "Pressure, heat transfer and forming"], ["Length / form", "Straight, fixed length, coil or U-bend", "Length, radius and developed geometry", "Equipment fit-up"], ["Surface / ends", "BA, AP, polished; cut/deburred/capped", "Internal and external finish", "Cleanliness and sealing"]],
  },
  "Sheets, Plates & Coils": flatProductDetails,
  Bars: barDetails,
  Flanges: flangeDetails,
  "Butt Weld Fittings": fittingDetails,
  Fasteners: fastenerDetails,
};

const familyManufacturing: Record<string, readonly string[]> = {
  "Stainless Steel": ["Steelmaking and refining establish the grade chemistry and control residual elements.", "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.", "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.", "Solution annealing or grade-specific heat treatment develops corrosion resistance and mechanical condition.", "Descaling, pickling, machining or polishing is followed by inspection, traceability and certification."],
  "Nickel Alloy": ["High-purity raw materials are melted and refined to the specified UNS chemistry.", "The ingot is remelted where required and hot worked into billet, slab or forging stock.", "Rolling, extrusion, drawing, forging or machining creates the ordered product form.", "Solution annealing or age hardening is completed according to alloy and product specification.", "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply."],
  "Duplex & Super Duplex": ["Controlled melting establishes chromium, nickel, molybdenum and nitrogen balance for the specified duplex grade.", "Hot working is performed within a controlled temperature range to develop the required product form.", "Solution annealing and rapid cooling restore the intended austenite-ferrite balance and corrosion resistance.", "Forming, machining and surface treatment are managed to avoid harmful intermetallic phases or contamination.", "PMI, mechanical, corrosion and microstructure-related tests are completed as specified."],
  "Cupro Nickel": ["Copper and nickel feedstock are melted and refined to the required C70600 or C71500 chemistry.", "Casting and hot working produce billet, slab or tube shell for the selected product form.", "Extrusion, drawing, rolling, forging or forming establishes dimensions and mechanical condition.", "Annealing, cleaning and surface finishing are completed for fabrication or heat-transfer service.", "Dimensions, pressure/NDT, material identity and certification are verified heat-wise."],
  Titanium: ["Titanium sponge and alloying additions are vacuum melted to control chemistry and interstitial elements.", "Ingot is forged or rolled into billet, slab or bar feedstock.", "Extrusion, rolling, drawing, forging or machining creates the specified product form.", "Annealing and controlled surface treatment establish the required condition without iron contamination.", "Surface, dimensions, NDT, material identity and certification are checked before clean packing."],
};

const familyStandards: Record<string, ReadonlyArray<readonly [string, string, string]>> = {
  "Stainless Steel": [["ASTM A240/A240M", "Plate, sheet and strip", "Flat products"], ["ASTM A276/A479", "Stainless bars and shapes", "Long products"], ["ASTM A312/A790", "Austenitic / duplex stainless pipe as applicable", "Pipe"], ["ASTM A213/A249/A269/A789", "Product-specific stainless tube standards", "Tube"], ["ASTM A182 / A403 / A815", "Forged flanges and wrought fittings", "Piping components"], ["EN 10088 / product-specific EN", "European stainless designations and delivery standards", "European reference"]],
  "Nickel Alloy": [["ASTM B-series material standard", "Grade- and product-form-specific nickel alloy requirements", "Material"], ["ASME B16.5 / B16.9", "Flange / butt-weld fitting dimensions where applicable", "Piping dimensions"], ["ASME B36.19M or drawing", "Pipe dimensions where applicable", "Dimensions"], ["EN / DIN / ISO", "Specified European or international product standard", "Alternative reference"], ["Customer specification", "Condition, corrosion tests, NDT and supplementary requirements", "Project-specific"]],
  "Duplex & Super Duplex": [["ASTM A240/A240M", "Duplex stainless plate, sheet and strip grades", "Flat products"], ["ASTM A790/A789", "Duplex stainless pipe / tubing", "Tubular products"], ["ASTM A182/A815", "Duplex forgings, flanges and wrought fittings", "Piping components"], ["ASTM A276/A479", "Duplex bars where listed", "Long products"], ["NORSOK / project specification", "Additional corrosion, microstructure and NDT controls when required", "Project-specific"]],
  "Cupro Nickel": [["ASTM B466/B467", "Seamless / welded copper-nickel pipe and tube as applicable", "Tubular products"], ["ASTM B171/B122", "Copper-alloy plate, sheet or strip under the applicable specification", "Flat products"], ["ASTM B151", "Copper-nickel rod and bar", "Long products"], ["ASME B16 / project drawing", "Flange and fitting dimensions where applicable", "Piping components"], ["Naval / project specification", "Service-specific testing, cleanliness and acceptance", "Project-specific"]],
  Titanium: [["ASTM B265", "Titanium plate, sheet and strip", "Flat products"], ["ASTM B338", "Titanium condenser and heat-exchanger tube", "Tube"], ["ASTM B861/B862", "Seamless / welded titanium pipe", "Pipe"], ["ASTM B348", "Titanium bars and billets", "Long products"], ["ASTM B381", "Titanium forgings and flanges", "Forged products"], ["Project specification", "Surface cleanliness, NDT and supplementary requirements", "Order-specific"]],
};

const principalAlloyingSystem: Record<string, string> = {
  "Stainless Steel 304 / 304L": "Austenitic Fe-Cr-Ni stainless; 304L uses restricted carbon for welded fabrication.",
  "Stainless Steel 316 / 316L": "Austenitic Fe-Cr-Ni-Mo stainless; molybdenum improves resistance to localised corrosion.",
  "Stainless Steel 321 / 321H": "Titanium-stabilised Fe-Cr-Ni stainless; 321H uses controlled higher carbon for temperature strength.",
  "Stainless Steel 347 / 347H": "Niobium-stabilised Fe-Cr-Ni stainless; 347H uses controlled higher carbon.",
  "Stainless Steel 309S": "High-chromium, high-nickel austenitic stainless with restricted carbon.",
  "Stainless Steel 310 / 310S": "High-chromium, high-nickel heat-resistant austenitic stainless.",
  "Stainless Steel 317L": "Low-carbon austenitic Fe-Cr-Ni stainless with higher molybdenum than 316L.",
  "Stainless Steel 904L": "High-alloy austenitic Fe-Cr-Ni-Mo-Cu stainless with low carbon.",
  "Stainless Steel 316Ti": "Titanium-stabilised Fe-Cr-Ni-Mo austenitic stainless.",
  "Stainless Steel 400": "Ferritic or martensitic Fe-Cr stainless family; exact chemistry depends on the specified 400-series grade.",
  "Alloy 20 (UNS N08020)": "Ni-Fe-Cr-Mo-Cu alloy with niobium stabilisation.",
  "Alloy 28 (UNS N08028)": "High-alloy Fe-Ni-Cr-Mo-Cu austenitic material.",
  "Alloy 200 / 201 (UNS N02200 / N02201)": "Commercially pure nickel; Alloy 201 has lower carbon.",
  "Monel® 400 (UNS N04400)": "Nickel-copper solid-solution alloy with iron and manganese additions.",
  "Inconel® 600 (UNS N06600)": "Nickel-chromium-iron corrosion- and heat-resistant alloy.",
  "Inconel® 601 (UNS N06601)": "Nickel-chromium-iron alloy with aluminium for oxidation resistance.",
  "Inconel® 625 (UNS N06625)": "Nickel-chromium-molybdenum-niobium alloy strengthened primarily by solid solution.",
  "Inconel® 718 (UNS N07718)": "Precipitation-hardenable nickel-chromium-iron-niobium-molybdenum alloy.",
  "Incoloy® 800 (UNS N08800)": "Iron-nickel-chromium alloy for oxidation and carburisation resistance.",
  "Incoloy® 800H / 800HT (UNS N08810 / N08811)": "Controlled-carbon and grain-size Fe-Ni-Cr variants for creep strength.",
  "Incoloy® 825 (UNS N08825)": "Nickel-iron-chromium-molybdenum-copper alloy with titanium stabilisation.",
  "Hastelloy® C22 (UNS N06022)": "Nickel-chromium-molybdenum-tungsten alloy with broad oxidising/reducing resistance.",
  "Hastelloy® C276 (UNS N10276)": "Nickel-molybdenum-chromium-tungsten alloy with very low carbon and silicon.",
  "Duplex 2205 (UNS S31803 / S32205)": "Fe-Cr-Ni-Mo-N duplex stainless with balanced austenitic/ferritic structure.",
  "Super Duplex 2507 (UNS S32750 / S32760)": "High-Cr, Mo and N duplex stainless; S32760 additionally controls copper and tungsten.",
  "Duplex 2304 (UNS S32304)": "Lean Fe-Cr-Ni-N duplex stainless with low molybdenum content.",
  "SMO® 254 (UNS S31254)": "High-Cr-Ni-Mo-N super-austenitic stainless with copper addition.",
  "CuNi 90/10 (C70600)": "Copper-nickel alloy containing nominally about 10% nickel with iron and manganese additions.",
  "CuNi 70/30 (C71500)": "Copper-nickel alloy containing nominally about 30% nickel with iron and manganese additions.",
  "Titanium Grade 2": "Commercially pure titanium with controlled oxygen and iron.",
  "Titanium Grade 5": "Alpha-beta titanium alloy Ti-6Al-4V.",
  "Titanium Grade 7": "Commercially pure titanium with a small palladium addition.",
};

const familyPropertyFocus: Record<string, string> = {
  "Stainless Steel": "Tensile, yield, elongation and hardness depend on exact grade, product form, thickness and heat-treatment condition.",
  "Nickel Alloy": "Mechanical properties vary substantially between solution-annealed and age-hardened alloys and between product forms.",
  "Duplex & Super Duplex": "Higher yield strength than common austenitic grades is typical; phase balance, heat treatment and product form remain critical.",
  "Cupro Nickel": "Strength and ductility depend on alloy, temper, product form and cold work; tube and plate requirements are not interchangeable.",
  Titanium: "Strength varies widely between commercially pure and alloyed grades and with annealed or heat-treated condition.",
};

function gradeDetails(material: string, title: string): ProductDetailContent {
  const relatedStandards = familyStandards[material] ?? generalDetails.manufacturingStandards;
  const gradeLabel = title.replace(/^Stainless Steel /, "");
  return {
    ...generalDetails,
    manufacturing: familyManufacturing[material] ?? generalDetails.manufacturing,
    grades: [["Specified grade", title, "Supply is reviewed by product form, governing standard, condition and service"], ["Alloy family", material, "Related grades are not treated as automatic substitutes"]],
    manufacturingStandards: relatedStandards,
    chemicalHeaders: ["Material reference", "Technical profile"],
    chemical: [["Grade / designation", gradeLabel], ["Alloying system", principalAlloyingSystem[title] ?? `${material} chemistry to the ordered product standard`], ["Certification basis", "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order"]],
    mechanicalHeaders: ["Property basis", "Supply requirement"],
    mechanical: [["Mechanical profile", familyPropertyFocus[material] ?? "Properties depend on grade, product form and condition."], ["Acceptance values", "Use the tensile, yield, elongation and hardness limits in the ordered product-form standard and specified condition"], ["Certification", "Actual heat/lot results are reported on the agreed material test certificate"]],
    materialDataTitle: `${gradeLabel} material reference.`,
    materialDataDescription: "A concise engineering identity for procurement. Exact chemical limits and mechanical acceptance values vary by product form, size, condition and specification edition; the certified MTC governs supplied material.",
    chemicalTableTitle: "Chemistry and alloy identity",
    chemicalTableNote: "Principal alloying profile · certification limits follow the ordered standard",
    mechanicalTableTitle: "Mechanical-property basis",
    mechanicalTableNote: "Product-form and condition dependent · verify certified values",
    inspection: ["Grade / UNS and product-standard verification", "Heat-number traceability and MTC review", "PMI against the specified alloy family", "Dimensions, tolerance and surface-condition inspection", "Mechanical and hardness testing to the product specification", "Corrosion, microstructure or intergranular testing when required", "NDT and third-party witnessing against the approved inspection plan"],
    industries: material === "Cupro Nickel" ? ["Marine", "Shipbuilding", "Offshore", "Condensers", "Desalination", "Power generation"] : material === "Titanium" ? ["Chemical processing", "Marine", "Heat exchangers", "Desalination", "Aerospace supply chain", "Medical & high-performance engineering"] : ["Chemical processing", "Oil & gas", "Power generation", "Marine", "Heat exchangers", "Process equipment", "General engineering"],
    packaging: ["Product-form-specific protection for machined faces, surfaces and ends", "Heat-wise segregation and durable grade identification", "Non-contaminating separators for corrosion-resistant alloys", "Moisture-resistant wrapping or export cases where required", "Package labels aligned with grade, heat, dimensions, quantity and purchase order"],
    whyNesco: professionalWhyNesco,
    faqs: [[`What product forms are available in ${gradeLabel}?`, "Availability can include pipes, tubes, flanges, fittings, sheets, plates, coils and bars, but each form must be confirmed against its own material standard and production range."], [`What standard should be specified for ${gradeLabel}?`, "State both the exact grade/UNS and the product-form material standard. A plate specification cannot be assumed to cover pipe, tube, bar, flange or fitting supply."], ["Can NESCO provide chemical and mechanical certificates?", "Yes. An agreed material test certificate can report heat analysis and mechanical results required by the ordered specification."], ["Can another grade be substituted?", "Only with written approval from the responsible engineer after reviewing corrosion, strength, temperature, fabrication and code requirements."], ["What information produces the fastest quotation?", "Provide grade/UNS, product form, standard, size, condition, quantity, tests, certification and delivery destination."]],
    keyFeatures: [principalAlloyingSystem[title] ?? `${material} grade supplied to exact UNS and product standard`, "Available across multiple project product forms subject to specification", "Heat-wise traceability and MTC support", "PMI, NDT and third-party inspection options"],
    specificationReferences: relatedStandards.map(([standard, scope]) => `${standard} — ${scope}`),
    dimensionHeaders: ["Product form", "Ordering dimensions", "Condition / finish", "Standard basis"],
    dimensionsNote: "Dimensions must be specified for the selected product form; a grade designation alone does not define size, tolerance or condition.",
    dimensions: [["Pipe", "NPS/OD, schedule or wall, length and ends", "Seamless/welded, heat treated and finished", "Material standard plus ASME dimensions"], ["Tube", "OD, wall, length/coil/U-bend geometry", "Seamless/welded, annealed and surface finish", "Product-specific ASTM/EN standard"], ["Flat product", "Thickness, width, length or coil geometry", "Hot/cold rolled, annealed, pickled or polished", "Flat-product material standard"], ["Bar / forging", "Profile size, tolerance and cut length", "Hot finished, forged, cold finished or machined", "Bar/forging material standard"]],
    ...(material === "Stainless Steel" ? { ...stainlessSharedContent, ...stainlessGradeContent[title] } : {}),
  };
}

function enrichCategoryProduct(base: ProductDetailContent, title: string, category: string): ProductDetailContent {
  const enhancement = productPageEnhancements[title];
  return {
    ...base,
    ...enhancement,
    manufacturing: productManufacturing[title] ?? base.manufacturing,
    faqs: [...(subtypeFaqs[title] ?? []), ...base.faqs].slice(0, category === "Tubes" ? 14 : 6),
    relatedProductTitles: undefined,
  };
}

export function getProductDetailContent(category: string, title: string): ProductDetailContent {
  if (category === "Pipes") {
    const pipeDetail = pipePageContent[title as keyof typeof pipePageContent];
    if (pipeDetail) {
      return {
        ...pipeDetails,
        ...pipeSharedContent,
        ...pipeDetail,
        manufacturingStandards: pipeDetail.standardGroups.flatMap((group) => group.rows.map(([standard, scope]) => [standard, scope, group.title] as const)),
      };
    }
    return pipeDetails;
  }
  if (categoryDetails[category]) return enrichCategoryProduct(categoryDetails[category], title, category);
  if (["Stainless Steel", "Nickel Alloy", "Duplex & Super Duplex", "Cupro Nickel", "Titanium"].includes(category)) return gradeDetails(category, title);
  return generalDetails;
}
