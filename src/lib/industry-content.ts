export type IndustryPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  applications: string[];
  requirements: Array<readonly [string, string]>;
  grades: string[];
  products: string[];
  considerations: string[];
  faqs: Array<readonly [string, string]>;
  resources: string[];
};

export const industries: IndustryPage[] = [
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    eyebrow: "Upstream, midstream and downstream supply",
    summary: "Specification-led piping and alloy supply for hydrocarbon production, transmission, refining and terminal infrastructure.",
    description: "NESCO coordinates pipes, tubes, flanges, fittings, fasteners and corrosion-resistant materials for oil and gas packages, subject to the approved piping class, service conditions and project specification.",
    image: "/assets/industry-backgrounds/01-oil-and-gas.png",
    applications: ["Process and utility piping", "Gathering and transmission lines", "Refinery and terminal piping", "Heat exchangers and condensers", "Offshore and seawater systems", "Maintenance and shutdown requirements"],
    requirements: [["Pressure and temperature", "Design conditions, piping class and corrosion allowance govern the product form, wall and rating."], ["Corrosion environment", "Fluid chemistry, chlorides, sour-service conditions and external exposure must be reviewed by the responsible engineer."], ["Traceability", "Heat-number traceability, material certificates and inspection scope should be stated with the enquiry."], ["Project control", "Approved manufacturer lists, supplementary testing, coating, marking and packing requirements should be shared before quotation."]],
    grades: ["Stainless Steel 304 / 304L", "Stainless Steel 316 / 316L", "Duplex 2205 (UNS S31803 / S32205)", "Super Duplex 2507 (UNS S32750 / S32760)", "Inconel® 625 (UNS N06625)", "Incoloy® 825 (UNS N08825)"],
    products: ["Seamless Pipes", "Welded Pipes", "EFW Pipes", "Seamless Tubes", "Weld Neck Flanges", "Elbows", "Tees", "Reducers", "Stud Bolts"],
    considerations: ["Confirm the applicable material, dimensional and design standards separately.", "State NACE / ISO sour-service requirements where the project specification calls for them.", "Coordinate fitting wall, flange bore and branch connections with the mating pipe.", "Define NDT, PMI, impact, corrosion or third-party inspection requirements at enquiry stage."],
    faqs: [["Can NESCO quote a complete piping package?", "Yes. Share the material take-off or BOQ with grades, sizes, schedules, classes, quantities and documentation requirements for a coordinated review."], ["Are duplex and nickel alloys always required offshore?", "No. Material selection depends on the actual fluid, chloride level, temperature, stress, fabrication route and design life. The project materials engineer must approve the grade."], ["What should an oil and gas RFQ include?", "Include the governing specification, material grade, product standard, size, schedule or class, end details, quantity, testing, certification, coating, packing and delivery destination."]],
    resources: ["pipe-selection-for-oil-and-gas", "understanding-pipe-schedules", "understanding-astm-standards", "material-test-certificates"],
  },
  {
    slug: "chemical-and-petrochemical",
    title: "Chemical & Petrochemical",
    eyebrow: "Corrosion-aware process supply",
    summary: "Industrial metal products coordinated around process chemistry, temperature, pressure, fabrication and contamination-control requirements.",
    description: "Chemical and petrochemical systems can expose materials to acids, chlorides, solvents, oxidising media and cyclic operating conditions. NESCO supplies specified products after review of the customer-approved material and service requirements.",
    image: "/assets/industry-backgrounds/03-chemical.png",
    applications: ["Process transfer lines", "Reactors and vessel connections", "Heat exchangers", "Storage and loading systems", "Utility and effluent piping", "Maintenance replacement packages"],
    requirements: [["Process compatibility", "The process licensor or materials engineer should approve the grade against concentration, contaminants and temperature."], ["Fabrication route", "Welding procedure, heat treatment, pickling and passivation can influence the finished system."], ["Cleanliness", "Surface finish, end protection and packing should reflect the process and contamination risk."], ["Documentation", "MTC type, PMI, corrosion testing and inspection hold points should be defined in the purchase specification."]],
    grades: ["Stainless Steel 316 / 316L", "Stainless Steel 317L", "Stainless Steel 904L", "Alloy 20 (UNS N08020)", "Hastelloy® C22 (UNS N06022)", "Hastelloy® C276 (UNS N10276)", "SMO® 254 (UNS S31254)"],
    products: ["Seamless Pipes", "Welded Pipes", "Heat Exchanger Tubes", "Sheets", "Plates", "Weld Neck Flanges", "Elbows", "Reducers"],
    considerations: ["Do not select a grade from alloy name alone; review the complete process environment.", "Specify whether intergranular, pitting or other supplementary corrosion testing is required.", "Confirm allowable iron contamination and surface-finish requirements.", "Align the product standard and fabrication condition with the approved equipment or piping specification."],
    faqs: [["Is 316L suitable for every chemical service?", "No. 316L is widely used, but suitability depends on the chemical, concentration, temperature, contaminants, flow and fabrication condition."], ["Can higher alloys be supplied as a mixed product package?", "Subject to availability, NESCO can coordinate pipes, tubes, flat products, flanges, fittings and bars against one reviewed BOQ."], ["What information helps prevent a material mismatch?", "State the exact UNS or grade, product standard, dimensions, condition, testing, surface requirements and intended service in the purchase specification."]],
    resources: ["stainless-steel-in-chemical-processing", "ss-304-vs-ss-316", "duplex-vs-super-duplex-stainless-steel", "material-test-certificates"],
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical",
    eyebrow: "Clean and traceable process materials",
    summary: "Stainless steel tube, pipe and components for hygienic process, utility and support systems, supplied to the specified finish and documentation scope.",
    description: "Pharmaceutical facilities require careful separation of product-contact, clean-utility and general service requirements. NESCO reviews grade, finish, dimensional standard, inspection and documentation against the customer specification.",
    image: "/assets/industry-backgrounds/04-food-and-pharma.png",
    applications: ["Purified-water and clean-utility systems", "Process transfer and product-contact lines", "Clean steam and utility distribution", "Heat-transfer equipment", "Equipment fabrication", "Non-product-contact support systems"],
    requirements: [["Surface condition", "Finish, roughness acceptance, cleaning and end protection must be defined by the validated system specification."], ["Material selection", "Product-contact and cleaning chemistry should be reviewed separately from non-contact services."], ["Weld quality", "Tube dimensions, end condition and documentation should support the approved orbital or manual welding procedure."], ["Traceability", "Heat identity, certificates and any project-specific inspection records should be preserved through supply."]],
    grades: ["Stainless Steel 304 / 304L", "Stainless Steel 316 / 316L", "Stainless Steel 316Ti", "Hastelloy® C22 (UNS N06022)", "Hastelloy® C276 (UNS N10276)"],
    products: ["Seamless Tubes", "Welded Tubes", "Instrumentation Tubes", "Seamless Pipes", "Sheets", "Plates", "Round Bars"],
    considerations: ["Differentiate hygienic tube specifications from general industrial pipe specifications.", "State internal and external finish, cleaning, capping and packaging requirements.", "Confirm whether certificates must reference heat, lot or individual component identification.", "The owner’s validated specification governs product-contact material and acceptance criteria."],
    faqs: [["Is 316L commonly used in pharmaceutical processing?", "Yes, particularly for many product-contact systems, but the approved grade and finish depend on process chemistry, cleaning regime and validated system requirements."], ["Can tube be supplied with controlled finish and capped ends?", "These requirements can be reviewed when the requested finish, standard, size, inspection and packaging scope are provided."], ["Does an MTC confirm hygienic suitability?", "An MTC records specified material test results; it does not replace surface-finish verification, fabrication controls or system validation."]],
    resources: ["ss-304-vs-ss-316", "stainless-steel-pipe-grades-and-applications", "material-test-certificates", "industrial-pipe-procurement-guide"],
  },
  {
    slug: "power-and-energy",
    title: "Power & Energy",
    eyebrow: "High-temperature and utility service",
    summary: "Pipes, boiler and heat-exchanger tubes, fittings and alloy products for generation, heat recovery, utilities and energy infrastructure.",
    description: "Power and energy projects combine steam, condensate, cooling water, fuel and balance-of-plant systems. Each requirement is reviewed against the specified temperature, pressure, corrosion environment and inspection plan.",
    image: "/assets/industry-backgrounds/02-power-plants.png",
    applications: ["Boiler and superheater systems", "Heat exchangers and condensers", "Steam and condensate piping", "Cooling-water systems", "Fuel and utility lines", "Renewable and waste-to-energy plants"],
    requirements: [["Elevated temperature", "Allowable stress, oxidation, creep and thermal cycling are design considerations for the responsible engineer."], ["Heat transfer", "Tube dimensions, wall tolerance, surface condition and inspection influence exchanger manufacture and performance."], ["Water chemistry", "Cooling and condensate chemistry can affect material selection and corrosion control."], ["Inspection", "Eddy-current, hydrostatic, ultrasonic or other testing should be specified where applicable."]],
    grades: ["Stainless Steel 304 / 304L", "Stainless Steel 316 / 316L", "Stainless Steel 321 / 321H", "Stainless Steel 347 / 347H", "Stainless Steel 310 / 310S", "Incoloy® 800H / 800HT (UNS N08810 / N08811)"],
    products: ["Boiler Tubes", "Heat Exchanger Tubes", "Seamless Pipes", "EFW Pipes", "Weld Neck Flanges", "Elbows", "Stud Bolts"],
    considerations: ["Use the approved pressure design code and current material edition.", "State minimum wall, dimensional tolerances and tube-length requirements clearly.", "Identify heat-treatment, impact or high-temperature testing requirements.", "Coordinate replacement material with the original equipment and engineering review."],
    faqs: [["Can NESCO support boiler and heat-exchanger retubing?", "Yes. Provide tube standard, grade, outside diameter, wall, length, quantity, condition and test requirements for review."], ["Are stainless grades interchangeable at high temperature?", "No. Stabilisation, carbon level, oxidation resistance, strength and fabrication requirements vary; engineering approval is essential."], ["Can inspection be coordinated before dispatch?", "Project-specific inspection and third-party witness requirements can be reviewed when stated at enquiry stage."]],
    resources: ["understanding-pipe-schedules", "stainless-steel-pipe-grades-and-applications", "understanding-astm-standards", "material-test-certificates"],
  },
  {
    slug: "engineering-and-manufacturing",
    title: "Engineering & Manufacturing",
    eyebrow: "Production-ready metal supply",
    summary: "Material forms coordinated for machining, fabrication, equipment building, maintenance and repeat manufacturing requirements.",
    description: "Fabricators and equipment manufacturers need predictable dimensions, machinability, weldability, surface condition and documentation. NESCO supports product-form and grade selection against customer drawings and purchase specifications.",
    image: "/assets/industry-backgrounds/06-infrastructure.png",
    applications: ["Process-equipment fabrication", "Machined components and shafts", "Skids and modular systems", "Pressure equipment components", "General fabrication", "Maintenance and repeat production"],
    requirements: [["Drawing control", "Revision, dimensions, tolerances, machining allowance and quantity should be unambiguous."], ["Supply condition", "Hot finished, cold drawn, solution annealed, bright, peeled or machined condition affects downstream work."], ["Weldability and forming", "Material grade and condition should suit the approved fabrication procedure."], ["Repeatability", "Traceability, agreed tolerances and inspection records help control repeat orders."]],
    grades: ["Stainless Steel 304 / 304L", "Stainless Steel 316 / 316L", "Stainless Steel 400", "Duplex 2205 (UNS S31803 / S32205)", "Inconel® 625 (UNS N06625)", "Titanium Grade 2", "Titanium Grade 5"],
    products: ["Round Bars", "Bright Bars", "Hex Bars", "Flat Bars", "Sheets", "Plates", "Seamless Tubes", "Fasteners"],
    considerations: ["Define tolerances and datum references on controlled drawings.", "Confirm whether dimensions are finished size or include machining allowance.", "State hardness, mechanical, ultrasonic or surface inspection requirements.", "Approve substitutions only through the customer’s engineering change process."],
    faqs: [["Can material be supplied cut to length?", "Cut lengths and machining-related requirements can be reviewed subject to grade, size, tolerance, quantity and availability."], ["What is needed for a repeat manufacturing quote?", "Provide the controlled drawing or specification, material grade, condition, quantity, inspection plan and required delivery schedule."], ["Can multiple material forms be consolidated?", "NESCO can coordinate bars, flat products, tubes, flanges, fittings and fasteners into a reviewed supply package where feasible."]],
    resources: ["industrial-pipe-procurement-guide", "understanding-astm-standards", "material-test-certificates", "ss-304-vs-ss-316"],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    eyebrow: "Durable supply for built assets",
    summary: "Stainless and special-alloy products for water, transport, urban utility, structural and public-infrastructure requirements.",
    description: "Infrastructure projects balance durability, lifecycle exposure, fabrication, aesthetics and maintainability. NESCO supplies specified material for project packages and maintenance requirements across India and export markets.",
    image: "/assets/industries/06-infrastructure.webp",
    applications: ["Water and wastewater systems", "Transport and station infrastructure", "Architectural metalwork", "Urban utility piping", "Bridges and structural components", "Coastal and marine-adjacent assets"],
    requirements: [["Exposure", "Atmospheric category, chlorides, immersion, pollution and cleaning practice influence material selection."], ["Design life", "Corrosion allowance, accessibility and maintenance strategy should be considered by the project engineer."], ["Fabrication", "Surface protection, welding, finishing and site handling affect installed performance and appearance."], ["Logistics", "Project marking, phased delivery, packing and destination requirements should be included in the BOQ."]],
    grades: ["Stainless Steel 304 / 304L", "Stainless Steel 316 / 316L", "Duplex 2205 (UNS S31803 / S32205)", "Super Duplex 2507 (UNS S32750 / S32760)", "CuNi 90/10 (C70600)", "Titanium Grade 2"],
    products: ["Welded Pipes", "EFW Pipes", "Sheets", "Plates", "Round Bars", "Flanges", "Fasteners"],
    considerations: ["Match material selection to the actual installed exposure, not only the project location.", "Protect finished surfaces from carbon-steel contamination during fabrication and site handling.", "Define coating, finish, marking and packing requirements before quotation.", "Coordinate installation details with the approved structural or piping design."],
    faqs: [["Is stainless steel maintenance-free in infrastructure?", "No material is maintenance-free. Correct grade selection, fabrication, cleaning and inspection remain important throughout service."], ["Which grade is better for coastal exposure?", "316-series or higher-alloy materials are often considered where chlorides are significant, but the project engineer should evaluate exposure, design and maintenance."], ["Can NESCO support phased project deliveries?", "Phased supply can be reviewed against the BOQ, material availability, inspection milestones and agreed delivery plan."]],
    resources: ["ss-304-vs-ss-316", "stainless-steel-pipe-grades-and-applications", "industrial-pipe-procurement-guide", "material-test-certificates"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
