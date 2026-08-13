$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$baseGeneratorPath = Join-Path $PSScriptRoot "generate-bars-content-document.ps1"
$baseSource = Get-Content -LiteralPath $baseGeneratorPath -Encoding UTF8 -Raw
$helperMarker = $baseSource.IndexOf('$navy =')
$coverMarker = $baseSource.IndexOf("# Cover page")
$saveMarker = $baseSource.IndexOf("# Save the client-review document as an Open XML package.")
if ($helperMarker -lt 0 -or $coverMarker -lt 0 -or $saveMarker -lt 0) { throw "Unable to load the shared document generator sections." }
Invoke-Expression $baseSource.Substring($helperMarker, $coverMarker - $helperMarker)

$outputPath = Join-Path $projectRoot "NESCO_Alloys_Website_Content_Client_Review.docx"

$families = @(
  [PSCustomObject]@{
    Title = "Stainless Steel"
    Summary = "Austenitic, heat-resistant and 400-series stainless grades for corrosion-resistant fabrication and process equipment."
    Intro = "Stainless steels combine corrosion resistance with practical fabrication and broad product availability. Austenitic grades such as 304/304L and 316/316L are widely used across process, food, pharmaceutical and general engineering applications, while higher-alloy and heat-resistant grades serve more demanding environments."
    CTA = "Request stainless steel products by grade, product form, standard and size. Attach your material specification or drawing for review."
    Forms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, coils and round bars."
    Industries = @("Chemical processing", "Food and pharmaceutical", "Oil & gas", "Power generation", "Marine", "Heat exchangers", "Process equipment", "General engineering")
    Manufacturing = @("Steelmaking and refining establish the grade chemistry and control residual elements.", "The alloy is cast and hot worked into billet, slab or other feedstock for the selected product form.", "Hot/cold processing creates pipe, tube, flat product, bar, flange or fitting geometry.", "Solution annealing or grade-specific heat treatment develops corrosion resistance and mechanical condition.", "Descaling, pickling, machining or polishing is followed by inspection, traceability and certification.")
    Standards = @(
      @("ASTM A240/A240M", "Plate, sheet and strip", "Flat products"),
      @("ASTM A276/A479", "Stainless bars and shapes", "Long products"),
      @("ASTM A312/A790", "Austenitic / duplex stainless pipe as applicable", "Pipe"),
      @("ASTM A213/A249/A269/A789", "Product-specific stainless tube standards", "Tube"),
      @("ASTM A182 / A403 / A815", "Forged flanges and wrought fittings", "Piping components"),
      @("EN 10088 / product-specific EN", "European stainless designations and delivery standards", "European reference")
    )
    Grades = @(
      @("Stainless Steel 304 / 304L", "General-purpose austenitic stainless steel for fabrication, food equipment, architectural components and mildly corrosive service. The low-carbon L grade is commonly selected for welded fabrication.", "Austenitic Fe-Cr-Ni stainless; 304L uses restricted carbon for welded fabrication."),
      @("Stainless Steel 316 / 316L", "Molybdenum-bearing austenitic stainless steel with improved resistance to pitting in chloride-containing environments; widely used in chemical, marine-adjacent, pharmaceutical and process equipment.", "Austenitic Fe-Cr-Ni-Mo stainless; molybdenum improves resistance to localised corrosion."),
      @("Stainless Steel 321 / 321H", "Titanium-stabilised austenitic stainless grades for elevated-temperature service. 321H uses controlled higher carbon for improved high-temperature strength.", "Titanium-stabilised Fe-Cr-Ni stainless; 321H uses controlled higher carbon for temperature strength."),
      @("Stainless Steel 347 / 347H", "Niobium-stabilised grades used in welded and high-temperature equipment; the H version is controlled for elevated-temperature strength.", "Niobium-stabilised Fe-Cr-Ni stainless; 347H uses controlled higher carbon."),
      @("Stainless Steel 309S", "Heat-resistant stainless steel used for furnace parts, heat shields and high-temperature oxidation service.", "High-chromium, high-nickel austenitic stainless with restricted carbon."),
      @("Stainless Steel 310 / 310S", "High-chromium, high-nickel heat-resistant stainless steels for elevated-temperature and oxidation-resistant components.", "High-chromium, high-nickel heat-resistant austenitic stainless."),
      @("Stainless Steel 317L", "Higher-molybdenum austenitic stainless steel offering improved resistance in selected chemical and chloride environments.", "Low-carbon austenitic Fe-Cr-Ni stainless with higher molybdenum than 316L."),
      @("Stainless Steel 904L", "High-alloy austenitic stainless steel used in aggressive chemical, acid and chloride-containing services where standard 300-series grades may be insufficient.", "High-alloy austenitic Fe-Cr-Ni-Mo-Cu stainless with low carbon."),
      @("Stainless Steel 316Ti", "Titanium-stabilised 316 variant for selected welded and elevated-temperature applications.", "Titanium-stabilised Fe-Cr-Ni-Mo austenitic stainless."),
      @("Stainless Steel 400", "A family of ferritic and martensitic stainless grades. The exact grade—such as 409, 410, 420, 430 or another designation—must be specified because properties and applications vary significantly.", "Ferritic or martensitic Fe-Cr stainless family; exact chemistry depends on the specified 400-series grade.")
    )
  },
  [PSCustomObject]@{
    Title = "Nickel Alloy"
    Summary = "High-performance nickel, Monel, Inconel, Incoloy and Hastelloy grades for aggressive and high-temperature service."
    Intro = "Nickel and nickel-based alloys are selected for severe corrosion, high-temperature oxidation, reducing or oxidising chemicals, seawater and specialised process duties. Each alloy has a distinct chemistry and operating envelope; the exact UNS designation and product specification should always be stated."
    CTA = "Request nickel alloy products by grade, product form, standard and size. Attach your material specification or drawing for review."
    Forms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, coils and round bars."
    Industries = @("Chemical processing", "Oil & gas", "Power generation", "Marine", "Heat exchangers", "Pollution control", "High-temperature equipment", "Process equipment")
    Manufacturing = @("High-purity raw materials are melted and refined to the specified UNS chemistry.", "The ingot is remelted where required and hot worked into billet, slab or forging stock.", "Rolling, extrusion, drawing, forging or machining creates the ordered product form.", "Solution annealing or age hardening is completed according to alloy and product specification.", "Surface conditioning, NDT, dimensional inspection and heat-wise certification complete the supply.")
    Standards = @(
      @("ASTM B-series material standard", "Grade- and product-form-specific nickel alloy requirements", "Material"),
      @("ASME B16.5 / B16.9", "Flange / butt-weld fitting dimensions where applicable", "Piping dimensions"),
      @("ASME B36.19M or drawing", "Pipe dimensions where applicable", "Dimensions"),
      @("EN / DIN / ISO", "Specified European or international product standard", "Alternative reference"),
      @("Customer specification", "Condition, corrosion tests, NDT and supplementary requirements", "Project-specific")
    )
    Grades = @(
      @("Alloy 20 (UNS N08020)", "Nickel-iron-chromium alloy developed for sulphuric-acid and general chemical-processing environments.", "Ni-Fe-Cr-Mo-Cu alloy with niobium stabilisation."),
      @("Alloy 28 (UNS N08028)", "High-alloy austenitic material used in selected acid, chloride and oil-and-gas process environments.", "High-alloy Fe-Ni-Cr-Mo-Cu austenitic material."),
      @("Alloy 200 / 201 (UNS N02200 / N02201)", "Commercially pure wrought nickel. Alloy 201 is the low-carbon version often preferred for higher-temperature service.", "Commercially pure nickel; Alloy 201 has lower carbon."),
      @("Monel® 400 (UNS N04400)", "Nickel-copper alloy valued for resistance in seawater, hydrofluoric acid and several reducing environments.", "Nickel-copper solid-solution alloy with iron and manganese additions."),
      @("Inconel® 600 (UNS N06600)", "Nickel-chromium alloy with corrosion and heat resistance across furnace, chemical and thermal-processing applications.", "Nickel-chromium-iron corrosion- and heat-resistant alloy."),
      @("Inconel® 601 (UNS N06601)", "Nickel-chromium alloy with aluminium addition for strong oxidation resistance in high-temperature equipment.", "Nickel-chromium-iron alloy with aluminium for oxidation resistance."),
      @("Inconel® 625 (UNS N06625)", "Nickel-chromium-molybdenum-niobium alloy combining high strength with excellent resistance to pitting, crevice corrosion and severe environments.", "Nickel-chromium-molybdenum-niobium alloy strengthened primarily by solid solution."),
      @("Inconel® 718 (UNS N07718)", "Age-hardenable nickel-chromium alloy combining high strength, corrosion resistance and useful performance across demanding low- and elevated-temperature applications.", "Precipitation-hardenable nickel-chromium-iron-niobium-molybdenum alloy."),
      @("Incoloy® 800 (UNS N08800)", "Iron-nickel-chromium alloy used for oxidation, carburisation and high-temperature process equipment.", "Iron-nickel-chromium alloy for oxidation and carburisation resistance."),
      @("Incoloy® 800H / 800HT (UNS N08810 / N08811)", "Controlled-composition and heat-treated variants designed for improved creep and rupture properties at elevated temperatures.", "Controlled-carbon and grain-size Fe-Ni-Cr variants for creep strength."),
      @("Incoloy® 825 (UNS N08825)", "Nickel-iron-chromium-molybdenum-copper alloy used for acid, sour-service and marine-related corrosion duties.", "Nickel-iron-chromium-molybdenum-copper alloy with titanium stabilisation."),
      @("Hastelloy® C22 (UNS N06022)", "Nickel-chromium-molybdenum-tungsten alloy with broad resistance in oxidising and reducing chemical environments.", "Nickel-chromium-molybdenum-tungsten alloy with broad oxidising/reducing resistance."),
      @("Hastelloy® C276 (UNS N10276)", "Versatile nickel-molybdenum-chromium alloy used in severe chemical processing, pollution control and corrosive waste treatment.", "Nickel-molybdenum-chromium-tungsten alloy with very low carbon and silicon.")
    )
  },
  [PSCustomObject]@{
    Title = "Duplex & Super Duplex"
    Summary = "Duplex, super duplex and high-alloy austenitic grades offering strength and chloride corrosion resistance."
    Intro = "Duplex stainless steels contain a mixed austenitic-ferritic structure that provides higher strength than common austenitic grades together with strong resistance to chloride stress-corrosion cracking. Super duplex grades provide enhanced resistance for severe chloride and seawater service."
    CTA = "Request duplex, super duplex and high-alloy stainless products by grade, product form, standard and size. Attach your material specification or drawing for review."
    Forms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, coils and round bars."
    Industries = @("Chemical processing", "Oil & gas", "Offshore", "Marine", "Desalination", "Heat exchangers", "Pulp and paper", "Process equipment")
    Manufacturing = @("Controlled melting establishes chromium, nickel, molybdenum and nitrogen balance for the specified duplex grade.", "Hot working is performed within a controlled temperature range to develop the required product form.", "Solution annealing and rapid cooling restore the intended austenite-ferrite balance and corrosion resistance.", "Forming, machining and surface treatment are managed to avoid harmful intermetallic phases or contamination.", "PMI, mechanical, corrosion and microstructure-related tests are completed as specified.")
    Standards = @(
      @("ASTM A240/A240M", "Duplex stainless plate, sheet and strip grades", "Flat products"),
      @("ASTM A790/A789", "Duplex stainless pipe / tubing", "Tubular products"),
      @("ASTM A182/A815", "Duplex forgings, flanges and wrought fittings", "Piping components"),
      @("ASTM A276/A479", "Duplex bars where listed", "Long products"),
      @("NORSOK / project specification", "Additional corrosion, microstructure and NDT controls when required", "Project-specific")
    )
    Grades = @(
      @("Duplex 2205 (UNS S31803 / S32205)", "The most widely used duplex family, combining high strength with resistance to pitting, crevice corrosion and chloride stress-corrosion cracking.", "Fe-Cr-Ni-Mo-N duplex stainless with balanced austenitic/ferritic structure."),
      @("Super Duplex 2507 (UNS S32750 / S32760)", "High-alloy duplex grades for offshore, seawater, desalination, chemical and high-chloride applications.", "High-Cr, Mo and N duplex stainless; S32760 additionally controls copper and tungsten."),
      @("Duplex 2304 (UNS S32304)", "Lean duplex grade providing useful strength and corrosion resistance with lower alloy content for selected structural and process applications.", "Lean Fe-Cr-Ni-N duplex stainless with low molybdenum content."),
      @("SMO® 254 (UNS S31254)", "A super-austenitic stainless steel with high molybdenum and nitrogen content for strong resistance to pitting and crevice corrosion. It should be listed separately from duplex grades in technically precise content.", "High-Cr-Ni-Mo-N super-austenitic stainless with copper addition.")
    )
  },
  [PSCustomObject]@{
    Title = "Cupro Nickel"
    Summary = "Copper-nickel grades selected for seawater handling, condensers, shipbuilding and marine piping systems."
    Intro = "Copper-nickel alloys are widely used in seawater piping, shipbuilding, offshore systems, condensers and heat exchangers because of their marine corrosion resistance, erosion behaviour and biofouling performance."
    CTA = "Request copper-nickel products by grade, product form, standard and size. Attach your material specification or drawing for review."
    Forms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, and round bars. Coil enquiries are rare and reviewed only against a complete specification."
    Industries = @("Marine", "Shipbuilding", "Offshore", "Condensers", "Desalination", "Power generation")
    Manufacturing = @("Copper and nickel feedstock are melted and refined to the required C70600 or C71500 chemistry.", "Casting and hot working produce billet, slab or tube shell for the selected product form.", "Extrusion, drawing, rolling, forging or forming establishes dimensions and mechanical condition.", "Annealing, cleaning and surface finishing are completed for fabrication or heat-transfer service.", "Dimensions, pressure/NDT, material identity and certification are verified heat-wise.")
    Standards = @(
      @("ASTM B466/B467", "Seamless / welded copper-nickel pipe and tube as applicable", "Tubular products"),
      @("ASTM B171/B122", "Copper-alloy plate, sheet or strip under the applicable specification", "Flat products"),
      @("ASTM B151", "Copper-nickel rod and bar", "Long products"),
      @("ASME B16 / project drawing", "Flange and fitting dimensions where applicable", "Piping components"),
      @("Naval / project specification", "Service-specific testing, cleanliness and acceptance", "Project-specific")
    )
    Grades = @(
      @("CuNi 90/10 (C70600)", "Widely used marine copper-nickel alloy offering a strong balance of seawater corrosion resistance, fabrication and commercial availability.", "Copper-nickel alloy containing nominally about 10% nickel with iron and manganese additions."),
      @("CuNi 70/30 (C71500)", "Higher-nickel copper-nickel alloy selected for demanding seawater, condenser and marine service, including higher flow or turbulence conditions.", "Copper-nickel alloy containing nominally about 30% nickel with iron and manganese additions.")
    )
  },
  [PSCustomObject]@{
    Title = "Titanium"
    Summary = "Commercially pure and alloyed titanium grades for lightweight, high-strength and corrosion-resistant applications."
    Intro = "Titanium provides exceptional corrosion resistance, a high strength-to-weight ratio and reliable performance in seawater, chloride and selected chemical environments. Product cleanliness, surface condition and contamination control are important during fabrication."
    CTA = "Request titanium products by grade, product form, standard and size. Attach your material specification or drawing for review."
    Forms = "Pipes, tubes, flanges, butt weld fittings, sheets and plates, and round bars. Coil enquiries are rare and reviewed only against a complete specification."
    Industries = @("Chemical processing", "Marine", "Heat exchangers", "Desalination", "Aerospace supply chain", "Medical & high-performance engineering")
    Manufacturing = @("Titanium sponge and alloying additions are vacuum melted to control chemistry and interstitial elements.", "Ingot is forged or rolled into billet, slab or bar feedstock.", "Extrusion, rolling, drawing, forging or machining creates the specified product form.", "Annealing and controlled surface treatment establish the required condition without iron contamination.", "Surface, dimensions, NDT, material identity and certification are checked before clean packing.")
    Standards = @(
      @("ASTM B265", "Titanium plate, sheet and strip", "Flat products"),
      @("ASTM B338", "Titanium condenser and heat-exchanger tube", "Tube"),
      @("ASTM B861/B862", "Seamless / welded titanium pipe", "Pipe"),
      @("ASTM B348", "Titanium bars and billets", "Long products"),
      @("ASTM B381", "Titanium forgings and flanges", "Forged products"),
      @("Project specification", "Surface cleanliness, NDT and supplementary requirements", "Order-specific")
    )
    Grades = @(
      @("Titanium Grade 2", "Commercially pure titanium with excellent corrosion resistance, formability and weldability for chemical processing, heat exchangers, marine and general industrial service.", "Commercially pure titanium with controlled oxygen and iron."),
      @("Titanium Grade 5", "Ti-6Al-4V alloy offering high strength and low density for aerospace, high-performance engineering and demanding mechanical components.", "Alpha-beta titanium alloy Ti-6Al-4V."),
      @("Titanium Grade 7", "Commercially pure titanium alloyed with palladium for improved corrosion resistance in selected reducing acid environments.", "Commercially pure titanium with a small palladium addition.")
    )
  }
)

$gradeCount = ($families | ForEach-Object { $_.Grades.Count } | Measure-Object -Sum).Sum

# Cover
Add-Paragraph "NESCO PIPE & TUBES" 15 $blue $true 0 20 18
Add-Label "CLIENT CONTENT REVIEW"
Add-Paragraph "Alloy Categories & Grade Pages" 30 $navy $true 0 5 33
Add-Paragraph "Complete website content structure for all alloy families and subcategories" 16 $blue $false 0 18 22
Add-Paragraph "Prepared for review and approval" 10 $muted $false 0 4 14
Add-Paragraph "NESCO Pipe & Tubes  |  12 August 2026" 10 $text $true 0 20 14
Add-Table @("Review item", "Details") @(
  @("Document purpose", "Client verification of alloy content currently implemented on the website"),
  @("Categories covered", "5 alloy families"),
  @("Subcategories covered", "$gradeCount individual grade pages"),
  @("Content structure", "Shared grade-page framework plus family and grade-specific content"),
  @("Review status", "For confirmation or correction before final approval")
) @(28,72)
Add-Paragraph "Technical note: the exact material standard must be specified for the selected product form. A grade designation alone does not define dimensions, tolerances, supply condition, chemical acceptance limits or mechanical-property requirements." 9.4 $muted

# Contents and directory
Add-PageBreak
Add-Label "DOCUMENT MAP"
Add-Heading "Contents" 1
Add-NumberedItems @(
  "Complete alloy category and subcategory directory",
  "Material availability by product form",
  "Shared content used across all grade pages",
  "Stainless Steel family and 10 grade pages",
  "Nickel Alloy family and 13 grade pages",
  "Duplex & Super Duplex family and 4 grade pages",
  "Cupro Nickel family and 2 grade pages",
  "Titanium family and 3 grade pages",
  "Client review and approval sheet"
)
Add-Paragraph "How to review: Part A contains the navigation structure and content repeated across all alloy-grade pages. Part B contains each family introduction, every listed subcategory, grade positioning, alloy identity, manufacturing route, standards, industries and family RFQ statement." 10 $muted $false 0 10 15

Add-PageBreak
Add-Label "PART A  |  ALLOY DIRECTORY"
Add-Heading "Full categories and subcategories" 1
Add-Paragraph "The Alloys menu and alloy directory are organised into the following five material families. Each grade listed below opens an individual content page on the website." 10.5 $text
foreach ($family in $families) {
  Add-Heading $family.Title 2
  Add-Paragraph $family.Summary 10 $muted
  Add-Bullets @($family.Grades | ForEach-Object { $_[0] })
}

Add-Heading "Material availability by product form" 2
Add-Table @("Material family", "Pipes", "Tubes", "Flanges", "Fittings", "Flat products", "Coils", "Bars") @(
  @("Stainless Steel", "Available", "Available", "Available", "Available", "Available", "Available", "Available"),
  @("Nickel Alloys", "Available", "Available", "Available", "Available", "Available", "Available", "Available"),
  @("Duplex & Super Duplex", "Available", "Available", "Available", "Available", "Available", "Available", "Available"),
  @("Copper Nickel", "Available", "Available", "Available", "Available", "Available", "Rare", "Available"),
  @("Titanium", "Available", "Available", "Available", "Available", "Available", "Rare", "Available")
) @(21,11,11,11,11,14,9,12)
Add-Paragraph "Availability is confirmed against the complete combination of grade, product form, material standard, dimensions, condition, testing, quantity and delivery requirement. 'Rare' means the enquiry requires specific review and is not presented as routine availability." 9.4 $muted

# Shared grade-page framework
Add-PageBreak
Add-Label "PART A  |  SHARED GRADE-PAGE CONTENT"
Add-Heading "Content repeated across alloy grade pages" 1
Add-Heading "How each grade page is introduced" 2
Add-NumberedItems @(
  "The relevant material-family introduction.",
  "The grade-specific website positioning shown in Part B.",
  "The material-selection note reproduced below."
)
Add-Paragraph "The correct material depends on more than corrosion resistance alone. Temperature, pressure, chloride exposure, chemistry, erosion, fabrication route, weldability, mechanical strength, product form, code requirements and lifecycle cost should be reviewed together. Final grade selection remains with the customer’s qualified engineer, designer or material specialist." 10 $text

Add-Heading "Shared product and supply specifications" 2
Add-Table @("Parameter", "Website content") @(
  @("Available forms", "Product-form availability is stated by family; every form remains subject to the selected grade and governing standard."),
  @("Product standard", "State the material specification for the selected pipe, tube, flat product, bar, flange or fitting form."),
  @("Supply condition", "Solution annealed, age hardened, cold worked, hot finished, pickled, polished or as specified."),
  @("Dimensions", "Product-form dimensions, tolerances, cut lengths and end/edge preparation."),
  @("Testing", "PMI, mechanical, corrosion, NDT or supplementary testing as required."),
  @("Documentation", "Material test certificates and inspection reports on request."),
  @("Enquiry basis", "Grade / UNS, product form, standard, dimensions, quantity and delivery destination.")
) @(27,73)

Add-Heading "Dimensions and ordering framework" 2
Add-Paragraph "Dimensions must be specified for the selected product form; a grade designation alone does not define size, tolerance or condition." 9.7 $muted
Add-Table @("Product form", "Ordering dimensions", "Condition / finish", "Standard basis") @(
  @("Pipe", "NPS/OD, schedule or wall, length and ends", "Seamless/welded, heat treated and finished", "Material standard plus ASME dimensions"),
  @("Tube", "OD, wall, length/coil/U-bend geometry", "Seamless/welded, annealed and surface finish", "Product-specific ASTM/EN standard"),
  @("Flat product", "Thickness, width, length or coil geometry", "Hot/cold rolled, annealed, pickled or polished", "Flat-product material standard"),
  @("Bar / forging", "Profile size, tolerance and cut length", "Hot finished, forged, cold finished or machined", "Bar/forging material standard")
) @(19,28,29,24)

Add-Heading "Shared key features" 2
Add-Bullets @(
  "Grade-specific alloying system identified on each page",
  "Available across multiple project product forms subject to specification",
  "Heat-wise traceability and MTC support",
  "PMI, NDT and third-party inspection options"
)

Add-Heading "Chemistry and mechanical-property presentation" 2
Add-Table @("Material reference", "Website explanation") @(
  @("Grade / designation", "The exact grade or UNS designation for the selected page."),
  @("Alloying system", "A concise principal alloying profile, shown for every grade in Part B."),
  @("Certification basis", "Heat analysis and product requirements are certified against the exact material specification stated on the purchase order."),
  @("Mechanical profile", "Tensile, yield, elongation and hardness depend on grade, product form, dimensions and heat-treatment condition."),
  @("Acceptance values", "Use the limits in the ordered product-form standard and specified condition."),
  @("Certification", "Actual heat/lot results are reported on the agreed material test certificate.")
) @(28,72)
Add-Paragraph "The website intentionally does not publish one generic chemical or mechanical table as universally applicable. Exact limits vary by product form, size, condition and specification edition; the certified MTC governs supplied material." 9.4 $muted

Add-Heading "Inspection and testing" 2
Add-NumberedItems @(
  "Grade / UNS and product-standard verification",
  "Heat-number traceability and MTC review",
  "PMI against the specified alloy family",
  "Dimensions, tolerance and surface-condition inspection",
  "Mechanical and hardness testing to the product specification",
  "Corrosion, microstructure or intergranular testing when required",
  "NDT and third-party witnessing against the approved inspection plan"
)

Add-Heading "Packaging and marking" 2
Add-NumberedItems @(
  "Product-form-specific protection for machined faces, surfaces and ends",
  "Heat-wise segregation and durable grade identification",
  "Non-contaminating separators for corrosion-resistant alloys",
  "Moisture-resistant wrapping or export cases where required",
  "Package labels aligned with grade, heat, dimensions, quantity and purchase order"
)

Add-Heading "Why choose NESCO Pipe & Tubes" 2
Add-Table @("NESCO advantage", "Website copy") @(
  @("Specification control", "NESCO reviews the grade, product standard, dimensions, condition and acceptance criteria as one coordinated requirement."),
  @("Multi-material sourcing", "Stainless steel, duplex, nickel alloy, copper-nickel and titanium requirements can be combined within one project enquiry."),
  @("Traceable documentation", "Heat numbers, MTCs and agreed inspection records are aligned with the purchase order before dispatch."),
  @("Inspection coordination", "PMI, dimensional checks, NDT and third-party witnessing can be arranged against an approved inspection plan."),
  @("Value-added processing", "Cutting, machining, end preparation, polishing or protective finishing can be reviewed with the base material supply."),
  @("Export-ready packing", "Identification, surface protection and packing are planned around product geometry and the final transport route."),
  @("Responsive RFQ review", "Technical and commercial inputs are consolidated early so queries are resolved before quotation and production."),
  @("One accountable supply desk", "NESCO provides a single contact for material, processing, documentation, packing and delivery coordination.")
) @(30,70)

Add-Heading "Shared FAQ structure" 2
$faqs = @(
  @("What product forms are available in [selected grade]?", "Availability can include pipes, tubes, flanges, fittings, sheets, plates, coils and bars, but each form must be confirmed against its own material standard and production range."),
  @("What standard should be specified for [selected grade]?", "State both the exact grade/UNS and the product-form material standard. A plate specification cannot be assumed to cover pipe, tube, bar, flange or fitting supply."),
  @("Can NESCO provide chemical and mechanical certificates?", "Yes. An agreed material test certificate can report heat analysis and mechanical results required by the ordered specification."),
  @("Can another grade be substituted?", "Only with written approval from the responsible engineer after reviewing corrosion, strength, temperature, fabrication and code requirements."),
  @("What information produces the fastest quotation?", "Provide grade/UNS, product form, standard, size, condition, quantity, tests, certification and delivery destination.")
)
for ($index=0; $index -lt $faqs.Count; $index++) { Add-QuestionAnswer $faqs[$index][0] $faqs[$index][1] ($index+1) }

Add-Heading "Request-for-quotation requirements" 2
Add-Bullets @("Exact grade / UNS designation", "Required product form", "Applicable material and dimensional standard", "Size, thickness or schedule", "Quantity", "Testing and certification", "Delivery location and required date")

# Family and grade-specific content
$familyNumber = 4
foreach ($family in $families) {
  Add-PageBreak
  Add-Label ("PART B  |  ALLOY FAMILY  |  {0:D2}" -f $familyNumber)
  Add-Heading $family.Title 1
  Add-Heading "Category summary" 2
  Add-Paragraph $family.Summary
  Add-Heading "Family introduction" 2
  Add-Paragraph $family.Intro
  Add-Heading "Available product forms" 2
  Add-Paragraph $family.Forms

  Add-Heading ("Subcategories — {0} grade pages" -f $family.Grades.Count) 2
  Add-Table @("Grade subcategory", "Website positioning", "Principal alloying system") $family.Grades @(24,48,28)

  Add-Heading "Common manufacturing route" 2
  Add-NumberedItems $family.Manufacturing

  Add-Heading "Common specification references" 2
  Add-Table @("Reference", "What it covers", "Role") $family.Standards @(25,52,23)

  Add-Heading "Typical industries served" 2
  Add-Bullets $family.Industries

  Add-Heading "Family request-for-quotation statement" 2
  Add-Paragraph $family.CTA 10.5 $navy $true

  Add-Heading "Review note" 2
  Add-Paragraph "Every grade above uses the shared grade-page content in Part A. The grade name, positioning, alloy identity, relevant family standards, family manufacturing route, industry context and RFQ wording are applied dynamically to its individual website page." 9.6 $muted
  $familyNumber++
}

# Approval
Add-PageBreak
Add-Label "CLIENT CONFIRMATION"
Add-Heading "Review and approval notes" 1
Add-Paragraph "Please mark any corrections required in the alloy hierarchy, grade names, UNS designations, website positioning, product-form availability, standards or NESCO supply language. Approved revisions can then be applied consistently across the alloy directory and all individual grade pages." 10.5 $text
$approvalRows = @(
  @("Alloy directory and shared content", "Approved / Changes required", ""),
  @("Stainless Steel — 10 grades", "Approved / Changes required", ""),
  @("Nickel Alloy — 13 grades", "Approved / Changes required", ""),
  @("Duplex & Super Duplex — 4 grades", "Approved / Changes required", ""),
  @("Cupro Nickel — 2 grades", "Approved / Changes required", ""),
  @("Titanium — 3 grades", "Approved / Changes required", "")
)
Add-Table @("Review area", "Status", "Comments") $approvalRows @(36,28,36)
Add-Paragraph "Client name / company: ______________________________________________" 10 $text $false 0 14 14
Add-Paragraph "Approved by: ____________________________    Date: __________________" 10 $text $false 0 14 14

# Save with alloy-specific metadata.
$saveSource = $baseSource.Substring($saveMarker)
$saveSource = $saveSource.Replace("UPDATED BARS CONTENT", "ALLOYS CONTENT REVIEW")
$saveSource = $saveSource.Replace("NESCO Bars Website Content - Updated", "NESCO Alloys Website Content - Client Review")
$saveSource = $saveSource.Replace("Updated content used across NESCO bar product pages", "Complete alloy categories, subcategories and grade-page content used on the NESCO website")
Invoke-Expression $saveSource
