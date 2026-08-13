$ErrorActionPreference = "Stop"

# Reuse the tested Open XML helpers and package writer from the Bars document generator.
$projectRoot = Split-Path -Parent $PSScriptRoot
$baseGeneratorPath = Join-Path $PSScriptRoot "generate-bars-content-document.ps1"
$baseSource = Get-Content -LiteralPath $baseGeneratorPath -Encoding UTF8 -Raw
$helperMarker = $baseSource.IndexOf('$navy =')
$coverMarker = $baseSource.IndexOf("# Cover page")
$saveMarker = $baseSource.IndexOf("# Save the client-review document as an Open XML package.")
if ($helperMarker -lt 0 -or $coverMarker -lt 0 -or $saveMarker -lt 0) { throw "Unable to load the shared document generator sections." }
Invoke-Expression $baseSource.Substring($helperMarker, $coverMarker - $helperMarker)
$outputPath = Join-Path $projectRoot "NESCO_Flanges_Website_Content_Client_Review.docx"

# Cover page
Add-Paragraph "NESCO PIPE & TUBES" 15 $blue $true 0 20 18
Add-Label "CLIENT CONTENT REVIEW"
Add-Paragraph "Flanges Product Pages" 32 $navy $true 0 5 34
Add-Paragraph "Website content currently used for Weld Neck, Slip-On, Blind, Socket Weld and Threaded Flanges" 16 $blue $false 0 18 22
Add-Paragraph "Prepared for review and approval" 10 $muted $false 0 4 14
Add-Paragraph "NESCO Pipe & Tubes  |  10 August 2026" 10 $text $true 0 20 14

$coverTableRows = @(
  @("Document purpose", "Client verification of live website content"),
  @("Pages covered", "5 flange product pages"),
  @("Content structure", "Shared technical sections plus page-specific content"),
  @("Review status", "For confirmation / correction before final approval")
)
Add-Table @("Review item", "Details") $coverTableRows @(28, 72)
Add-Paragraph "Scope note: chemical and mechanical composition tables are not currently displayed on the flange-form pages. The website presents material families, pressure and dimensional requirements, manufacturing standards, inspection controls and order-specific certification guidance." 9.4 $muted $false 0 6 14
Add-PageBreak

# Contents
Add-Label "DOCUMENT MAP"
Add-Heading "Contents" 1
$contents = @(
  "01  Shared flange-page overview and product range",
  "02  Shared material grades, supply options and dimensions",
  "03  Shared standards, inspection and packaging",
  "04  Applications, industries and Why NESCO",
  "05  Shared FAQs and request-for-quotation content",
  "06  Weld Neck Flanges page-specific content",
  "07  Slip-On Flanges page-specific content",
  "08  Blind Flanges page-specific content",
  "09  Socket Weld Flanges page-specific content",
  "10  Threaded Flanges page-specific content"
)
Add-NumberedItems $contents
Add-Paragraph "How to review: Part A contains content repeated across all five flange pages. Part B contains the positioning, features, references, manufacturing route, FAQs and CTA that change for each flange type." 10 $muted $false 0 10 15

# Shared content
Add-PageBreak
Add-Label "PART A  |  SHARED CONTENT"
Add-Heading "Shared content used across all flange pages" 1
Add-Heading "Flanges category summary" 2
Add-Paragraph "Material-grade flanges and standard flange types for pressure piping, process lines and export projects."

Add-Heading "Opening overview" 2
Add-Paragraph "Flanges create detachable, bolted connections between pipe, valves, vessels and equipment. Correct selection requires the material grade, standard, nominal size, pressure class, facing, bore, wall schedule, dimensions and testing requirements to be defined together."
Add-Paragraph "Whether the requirement is for standard maintenance quantities or a project package, our team reviews each flanges enquiry against the requested material, dimensions, specification, service conditions, inspection and delivery plan. Availability may include ex-stock, mill production or made-to-order supply depending on the combination."

Add-Heading "Product range" 2
$rangeRows = @(
  @("Weld Neck Flanges", "Tapered-hub, butt-weld flanges for high-pressure, cyclic, elevated-temperature and critical process service."),
  @("Slip-On Flanges", "Economical flanges that slide over pipe for alignment flexibility in suitable utility and process lines."),
  @("Blind Flanges", "Solid flanges for positive closure of piping ends, nozzles and access points."),
  @("Socket Weld Flanges", "Compact small-bore flanges with an internal socket for controlled pipe fit-up and fillet welding."),
  @("Threaded Flanges", "Mechanically threaded flange connections for selected services where flange-to-pipe welding is restricted.")
)
Add-Table @("Product page", "Website positioning") $rangeRows @(29, 71)

Add-Heading "Common material range" 2
$gradeRows = @(
  @("Forged stainless", "F304/304L, F316/316L, F321, F347", "General pressure piping and elevated-temperature service"),
  @("Forged duplex", "F51, F53, F55, F60", "Higher strength and chloride service"),
  @("Nickel alloys", "N04400, N06600, N06625, N08825, N10276", "Severe corrosion and temperature duties"),
  @("Titanium", "Grade-specific forged material", "Seawater and selected chemical systems")
)
Add-Table @("Material family", "Common grades", "Typical selection context") $gradeRows @(22, 40, 38)

Add-Heading "Supply and customisation" 2
$supplyRows = @(
  @("Standards", "ASME B16.5, ASME B16.47 or project drawings"),
  @("Sizes", "NPS and bore/schedule as specified"),
  @("Pressure classes", "Class 150, 300, 600, 900, 1500 and 2500 where applicable"),
  @("Facings", "RF, FF, RTJ and special facings"),
  @("Finish", "Serrated or smooth facing finish as specified"),
  @("Marking", "Grade, heat number, size, class, standard and manufacturer identification"),
  @("Testing", "PMI, hardness, UT, dimensional and other approved inspections")
)
Add-Table @("Parameter", "Typical information to specify") $supplyRows @(28, 72)

Add-Heading "Dimensions and ordering framework" 2
Add-Paragraph "Flange size alone is insufficient. The dimensional standard, pressure class or PN, facing and bore must be specified together." 9.8 $muted
$dimensionRows = @(
  @("Nominal size", "NPS / DN", "Matching pipe or nozzle size", "Controls flange envelope and drilling"),
  @("Rating", "Class 150-2500 or applicable PN", "Standard plus class / PN", "Controls pressure-temperature basis"),
  @("Facing", "RF, FF, RTJ or special", "Facing and finish", "Must match gasket and mating flange"),
  @("Bore", "Standard bore or pipe-schedule bore", "Matching wall / schedule", "Supports alignment and weld transition")
)
Add-Table @("Design input", "Typical options", "Required RFQ detail", "Why it matters") $dimensionRows @(20, 29, 24, 27)

Add-Heading "Manufacturing standards" 2
$standardRows = @(
  @("ASME B16.5", "Pipe flanges and flanged fittings, generally NPS 1/2 through NPS 24", "Dimensions / ratings"),
  @("ASME B16.47", "Large-diameter steel flanges", "Large-bore dimensions"),
  @("ASTM A182/A182M", "Forged or rolled alloy and stainless piping components", "Material specification"),
  @("ASTM B564 / B381", "Nickel-alloy / titanium forgings and flanges as applicable", "Special-alloy material"),
  @("EN 1092-1", "Circular steel flanges under European PN designation", "European dimensions"),
  @("Project drawing", "Non-standard bore, facing, drilling and tolerance", "Custom requirement")
)
Add-Table @("Reference", "What it covers", "Role") $standardRows @(24, 54, 22)

Add-Heading "Inspection and testing" 2
$inspection = @(
  "MTC and forging heat traceability",
  "NPS, class, OD, thickness and bolt-circle checks",
  "Bore and hub dimensions",
  "Facing type and surface-finish verification",
  "PMI and hardness when specified",
  "UT or liquid-penetrant examination where ordered",
  "Marking and face-protection verification"
)
Add-NumberedItems $inspection

Add-Heading "Applications" 2
$applications = @(
  "Process piping connections",
  "Pressure vessels and nozzles",
  "Valves, pumps and compressors",
  "Refineries and petrochemical plants",
  "Power and steam systems",
  "Marine and water systems",
  "Chemical processing equipment",
  "Maintenance and shutdown projects"
)
Add-Bullets $applications

Add-Heading "Industries served" 2
$industries = @("Refineries", "Petrochemicals", "Oil & gas", "Power generation", "Chemical processing", "Marine", "Water & desalination", "Pressure equipment")
Add-Bullets $industries

Add-Heading "Packaging and marking" 2
$packaging = @(
  "Machined faces protected with covers or non-abrasive separators",
  "Small flanges boxed; larger flanges secured on pallets",
  "Threads, RTJ grooves and bores protected from impact",
  "Heat and piece traceability retained after machining",
  "Export packages labelled with type, grade, NPS, class and PO"
)
Add-NumberedItems $packaging

Add-Heading "Why choose NESCO Pipe & Tubes" 2
$whyRows = @(
  @("Specification control", "NESCO reviews the grade, product standard, dimensions, condition and acceptance criteria as one coordinated requirement."),
  @("Multi-material sourcing", "Stainless steel, duplex, nickel alloy, copper-nickel and titanium requirements can be combined within one project enquiry."),
  @("Traceable documentation", "Heat numbers, MTCs and agreed inspection records are aligned with the purchase order before dispatch."),
  @("Inspection coordination", "PMI, dimensional checks, NDT and third-party witnessing can be arranged against an approved inspection plan."),
  @("Value-added processing", "Cutting, machining, end preparation, polishing or protective finishing can be reviewed with the base material supply."),
  @("Export-ready packing", "Identification, surface protection and packing are planned around product geometry and the final transport route."),
  @("Responsive RFQ review", "Technical and commercial inputs are consolidated early so queries are resolved before quotation and production."),
  @("One accountable supply desk", "NESCO provides a single contact for material, processing, documentation, packing and delivery coordination.")
)
Add-Table @("NESCO advantage", "Website copy") $whyRows @(30, 70)

Add-Heading "Shared FAQ content used on flange pages" 2
$sharedFaqs = @(
  @("Which flange details are essential for quotation?", "State type, material grade, dimensional standard, NPS, pressure class, bore or schedule, facing, finish, quantity and inspection."),
  @("What is the difference between Class and PN ratings?", "Class and PN belong to different flange standard systems and are not direct dimensional substitutes. Use the complete selected standard and rating."),
  @("Why must facing finish be specified?", "Gasket performance depends on facing type, groove geometry and surface finish. The piping specification should define the required gasket seating surface."),
  @("Can custom flanges be manufactured to drawings?", "Yes, subject to approved material, design responsibility, machining drawing, tolerances, testing and quantity.")
)
for ($index = 0; $index -lt $sharedFaqs.Count; $index++) { Add-QuestionAnswer $sharedFaqs[$index][0] $sharedFaqs[$index][1] ($index + 1) }

Add-Heading "Request-for-quotation content" 2
Add-Paragraph "Turn your specification into a supply-ready enquiry." 14 $navy $true
Add-Paragraph "Ready to source? Start with the details you already have. Our team will review the grade, dimensions, testing and delivery requirements together." 10 $muted
Add-Bullets @("Flange type", "Material grade", "Standard and pressure class", "Nominal size", "Bore / matching pipe schedule", "Facing and surface finish", "Quantity", "Testing, marking and certification")
Add-Paragraph "The website enquiry form also collects name, company, work email, phone, delivery destination, additional testing/inspection requirements and an optional drawing or BOQ upload." 9.8 $text

Add-Heading "Technical publishing note" 2
Add-Paragraph "Standards listed are common market references, not a promise that every grade, size and product form is covered by every standard. Confirm the exact material specification, dimensional standard and supplementary requirements at quotation stage." 9.7 $muted

# Page-specific content data
$flangePages = @(
  [PSCustomObject]@{
    Title = "Weld Neck Flanges"
    Positioning = "Weld neck flanges use a tapered hub and butt-weld connection to transfer stress gradually from the flange to the pipe. They are commonly chosen for high-pressure, cyclic, high-temperature and critical process service."
    Features = @("Strong, fatigue-resistant connection", "Bore can be matched to pipe schedule", "Suitable for radiographic examination of butt weld", "Available in raised face, flat face and ring-type joint forms")
    References = @("ASME B16.5 for standard-size flanges", "ASME B16.47 for large-diameter flanges", "ASTM A182 for forged stainless/duplex material", "ASTM B564/B381 and other material-specific standards")
    Manufacturing = @("Traceable billet or bar stock is cut and heated for forging.", "The flange and tapered hub are forged to develop a continuous grain flow around the pressure boundary.", "Heat treatment is completed to the ordered material specification.", "CNC machining establishes the bore, hub profile, facing, bolt circle and gasket seating surface.", "Dimensions, facing finish, material identity and required NDT are verified before marking and protection.")
    Faqs = @(@("Why is the matching pipe schedule required?", "The flange bore and hub transition should match the connected pipe wall to support alignment, welding and stress transfer."), @("When is a weld neck flange preferred?", "It is commonly selected for higher-pressure, cyclic, elevated-temperature or critical service where a butt-welded connection is appropriate."))
    Cta = "Send your weld neck flanges specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Slip-On Flanges"
    Positioning = "Slip-on flanges slide over the pipe and are generally attached with internal and external fillet welds. They are widely used in lower to moderate pressure systems where installation economy and alignment flexibility are priorities."
    Features = @("Easy fit-up and alignment", "Cost-effective for many utility and process lines", "Available in multiple pressure classes and facings", "Bore and hub dimensions must suit the pipe OD")
    References = @("ASME B16.5 dimensional standard", "Applicable forged-material specification", "Project welding and inspection requirements")
    Manufacturing = @("Certified forging stock is formed and heat treated to the selected material specification.", "The centre bore is machined to slide over the matching pipe OD with the required fit-up clearance.", "Facing, outside diameter, thickness and bolt-hole pattern are machined to the flange standard.", "Raised-face serrations or the specified gasket finish are produced and checked.", "Final dimensional, PMI, marking and documentation checks precede dispatch.")
    Faqs = @(@("Does a slip-on flange need two fillet welds?", "Typical installation uses internal and external fillet welds, but the approved piping specification and welding procedure govern the final joint."), @("Can a slip-on flange be used for every service?", "No. Pressure, temperature, fatigue, corrosion allowance and piping-code restrictions should be checked by the responsible engineer."))
    Cta = "Send your slip-on flanges specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Blind Flanges"
    Positioning = "Blind flanges close the end of a piping system, nozzle or valve connection. They permit future access for inspection or extension and must be selected for the full design pressure, temperature and bolting load."
    Features = @("Positive line closure", "No centre bore", "Useful for inspection openings and future expansion", "Thickness and facing depend on size, class and standard")
    References = @("ASME B16.5 / B16.47 as applicable", "Material specification matched to piping class", "Facing and bolt-hole requirements per project")
    Manufacturing = @("Forged, cast or permitted plate material is selected to the specified class and material standard.", "The solid blank is heat treated where required and rough machined to the flange profile.", "Facing, thickness, outside diameter and bolt-hole geometry are finish machined without a centre bore.", "Gasket seating finish and pressure-class dimensions are inspected carefully.", "Material traceability, NDT where ordered, marking and face protection complete the supply.")
    Faqs = @(@("How is blind-flange thickness selected?", "Thickness depends on nominal size, pressure class, material group, design temperature and the governing dimensional standard."), @("Can a blind flange be supplied with tapped holes?", "Custom drilling or tapping may be possible against an approved drawing and engineering review."))
    Cta = "Send your blind flanges specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Socket Weld Flanges"
    Positioning = "Socket weld flanges contain a recessed socket into which the pipe is inserted before fillet welding. They are commonly used on small-bore, high-pressure piping where compact connections are desired."
    Features = @("Compact connection for small-bore piping", "Good alignment during installation", "Common in high-pressure utility and process services", "Requires specified expansion gap and qualified welding practice")
    References = @("ASME B16.5", "ASME B16.11 relevance for associated socket-weld fittings", "Material specification per piping class")
    Manufacturing = @("Forged raw material is heat treated to the applicable piping material specification.", "The bore and internal socket are machined to support accurate small-bore pipe fit-up.", "Facing, hub, thickness and bolt-hole dimensions are completed to the ordered class.", "Socket depth, bore transition and gasket finish are verified dimensionally.", "PMI, visual inspection, marking and documentation are completed before packing.")
    Faqs = @(@("Where are socket weld flanges normally used?", "They are commonly used in compact small-bore pressure piping, subject to the project piping class and service restrictions."), @("Why is an insertion gap specified?", "The approved welding procedure may require a gap between the pipe end and socket shoulder to manage weld shrinkage and stress."))
    Cta = "Send your socket weld flanges specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Threaded Flanges"
    Positioning = "Threaded flanges connect to externally threaded pipe without a circumferential weld. They can be useful where welding is restricted, but suitability must be checked carefully for pressure, temperature, vibration, cyclic loading and hazardous service."
    Features = @("No flange-to-pipe welding required", "Useful for selected low-pressure or special services", "Available with standard thread forms", "Service limitations should be approved by the piping engineer")
    References = @("ASME B16.5", "Thread form per specified piping standard", "Material and pressure-temperature rating per design")
    Manufacturing = @("Traceable flange stock is forged and heat treated for the specified material grade.", "The centre bore is machined and threaded to the required thread form and engagement.", "Facing, pressure-class geometry and bolt-hole pattern are finish machined.", "Threads are gauged while the facing finish and critical dimensions are inspected.", "Threads and gasket faces are protected after material verification and marking.")
    Faqs = @(@("When is a threaded flange appropriate?", "It may suit selected services where welding is restricted, but pressure, temperature, vibration, cyclic duty and leakage risk require engineering review."), @("Which thread information should be provided?", "State the thread standard, nominal size, pitch or series, engagement and any gauging requirement."))
    Cta = "Send your threaded flanges specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  }
)

$pageNumber = 6
foreach ($page in $flangePages) {
  Add-PageBreak
  Add-Label ("PART B  |  PAGE-SPECIFIC CONTENT  |  {0:D2}" -f $pageNumber)
  Add-Heading $page.Title 1
  Add-Heading "Product positioning" 2
  Add-Paragraph $page.Positioning
  Add-Paragraph "Website opening: this page uses the shared Flanges overview in Part A, followed by the page-specific technical content below." 9.4 $muted

  Add-Heading "Key features" 2
  Add-Bullets $page.Features

  Add-Heading "Common specification references" 2
  Add-Bullets $page.References

  Add-Heading "How it is made" 2
  Add-NumberedItems $page.Manufacturing

  Add-Heading "Page-specific FAQs" 2
  for ($index = 0; $index -lt $page.Faqs.Count; $index++) {
    Add-QuestionAnswer $page.Faqs[$index][0] $page.Faqs[$index][1] ($index + 1)
  }
  Add-Paragraph "The four shared flange FAQs in Part A follow these two page-specific questions on the live website." 9.3 $muted

  Add-Heading "Request-for-quotation CTA" 2
  Add-Paragraph $page.Cta 10.5 $navy $true

  Add-Heading "Related products shown" 2
  $related = @($flangePages | Where-Object { $_.Title -ne $page.Title } | ForEach-Object { $_.Title })
  Add-Bullets $related
  $pageNumber++
}

# Final approval page
Add-PageBreak
Add-Label "CLIENT CONFIRMATION"
Add-Heading "Review and approval notes" 1
Add-Paragraph "Please mark any changes required in product terminology, grades, standards, testing, applications or NESCO positioning. Approved corrections can then be applied consistently across all five flange pages." 10.5 $text
$approvalRows = @(
  @("Shared technical content", "Approved / Changes required", ""),
  @("Weld Neck Flanges", "Approved / Changes required", ""),
  @("Slip-On Flanges", "Approved / Changes required", ""),
  @("Blind Flanges", "Approved / Changes required", ""),
  @("Socket Weld Flanges", "Approved / Changes required", ""),
  @("Threaded Flanges", "Approved / Changes required", "")
)
Add-Table @("Review area", "Status", "Comments") $approvalRows @(34, 28, 38)
Add-Paragraph "Client name / company: ______________________________________________" 10 $text $false 0 14 14
Add-Paragraph "Approved by: ____________________________    Date: __________________" 10 $text $false 0 14 14

# Apply flange-specific package metadata and use the tested package writer.
$saveSource = $baseSource.Substring($saveMarker)
$saveSource = $saveSource.Replace("BARS CONTENT REVIEW", "FLANGES CONTENT REVIEW")
$saveSource = $saveSource.Replace("NESCO Bars Website Content - Client Review", "NESCO Flanges Website Content - Client Review")
$saveSource = $saveSource.Replace("Content used across NESCO bar product pages", "Content used across NESCO flange product pages")
Invoke-Expression $saveSource
