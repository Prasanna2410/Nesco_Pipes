$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$baseGeneratorPath = Join-Path $PSScriptRoot "generate-bars-content-document.ps1"
$baseSource = Get-Content -LiteralPath $baseGeneratorPath -Encoding UTF8 -Raw
$helperMarker = $baseSource.IndexOf('$navy =')
$coverMarker = $baseSource.IndexOf("# Cover page")
$saveMarker = $baseSource.IndexOf("# Save the client-review document as an Open XML package.")
if ($helperMarker -lt 0 -or $coverMarker -lt 0 -or $saveMarker -lt 0) { throw "Unable to load the shared document generator sections." }
Invoke-Expression $baseSource.Substring($helperMarker, $coverMarker - $helperMarker)

function Add-WhyNescoSection {
  param([switch]$Fasteners, [switch]$Fittings)

  Add-Heading "Why choose NESCO Pipe & Tubes" 2

  $multiMaterialCopy = if ($Fasteners) {
    "Stainless steel, duplex and nickel-alloy fastener requirements can be combined within one project enquiry."
  } else {
    "Stainless steel, duplex, nickel alloy, copper-nickel and titanium requirements can be combined within one project enquiry."
  }

  $processingCopy = if ($Fasteners) {
    "Cutting, machining, thread-related requirements, coating, lubrication or protective finishing can be reviewed with the fastener specification."
  } elseif ($Fittings) {
    "Machining, end preparation, special dimensions, surface finishing or protective treatment can be reviewed against the applicable fitting specification and project requirements."
  } else {
    "Cutting, machining, end preparation, polishing or protective finishing can be reviewed with the base material supply."
  }

  $whyRows = @(
    @("Specification control", "NESCO reviews the grade, product standard, dimensions, condition and acceptance criteria as one coordinated requirement."),
    @("Multi-material sourcing", $multiMaterialCopy),
    @("Traceable documentation", "Heat numbers, MTCs and agreed inspection records are aligned with the purchase order before dispatch."),
    @("Inspection coordination", "PMI, dimensional checks, NDT and third-party witnessing can be arranged against an approved inspection plan."),
    @("Value-added processing", $processingCopy),
    @("Export-ready packing", "Identification, surface protection and packing are planned around product geometry and the final transport route."),
    @("Responsive RFQ review", "Technical and commercial inputs are consolidated early so queries are resolved before quotation and production."),
    @("One accountable supply desk", "NESCO provides a single contact for material, processing, documentation, packing and delivery coordination.")
  )
  Add-Table @("NESCO advantage", "Website copy") $whyRows @(30, 70)
}

function Add-PageSpecificContent {
  param(
    [object[]]$Pages,
    [string]$FamilyName,
    [int]$StartNumber
  )
  $pageNumber = $StartNumber
  foreach ($page in $Pages) {
    Add-PageBreak
    Add-Label ("PART B  |  PAGE-SPECIFIC CONTENT  |  {0:D2}" -f $pageNumber)
    Add-Heading $page.Title 1
    Add-Heading "Product positioning" 2
    Add-Paragraph $page.Positioning
    Add-Paragraph "Website opening: this page uses the shared $FamilyName overview in Part A, followed by the page-specific technical content below." 9.4 $muted

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
    Add-Paragraph "The four shared $FamilyName FAQs in Part A follow these two page-specific questions on the live website." 9.3 $muted

    Add-Heading "Request-for-quotation CTA" 2
    Add-Paragraph $page.Cta 10.5 $navy $true

    Add-Heading "Related products shown" 2
    $related = @($Pages | Where-Object { $_.Title -ne $page.Title } | ForEach-Object { $_.Title })
    Add-Bullets $related
    $pageNumber++
  }
}

function Save-ReviewDocument {
  param(
    [string]$Path,
    [string]$HeaderLabel,
    [string]$DocumentTitle,
    [string]$DocumentSubject
  )
  $script:outputPath = $Path
  $saveSource = $baseSource.Substring($saveMarker)
  $saveSource = $saveSource.Replace("UPDATED BARS CONTENT", $HeaderLabel)
  $saveSource = $saveSource.Replace("NESCO Bars Website Content - Updated", $DocumentTitle)
  $saveSource = $saveSource.Replace("Updated content used across NESCO bar product pages", $DocumentSubject)
  Invoke-Expression $saveSource
}

# -----------------------------------------------------------------------------
# Butt Weld Fittings document
# -----------------------------------------------------------------------------
$body = New-Object System.Text.StringBuilder
$fittingsOutputPath = Join-Path $projectRoot "NESCO_Butt_Weld_Fittings_Website_Content_Client_Review.docx"

Add-Paragraph "NESCO PIPE & TUBES" 15 $blue $true 0 20 18
Add-Label "CLIENT CONTENT REVIEW"
Add-Paragraph "Butt Weld Fittings Product Pages" 30 $navy $true 0 5 33
Add-Paragraph "Website content used for Elbows, Tees, Reducers, Stub Ends and End Caps" 16 $blue $false 0 18 22
Add-Paragraph "Prepared for client verification and approval" 10 $muted $false 0 4 14
Add-Paragraph "NESCO Pipe & Tubes  |  12 August 2026" 10 $text $true 0 20 14

Add-Table @("Review item", "Details") @(
  @("Document purpose", "Client verification of the content currently implemented on the website"),
  @("Pages covered", "5 butt weld fitting product pages"),
  @("Content structure", "Shared technical sections plus page-specific product content"),
  @("Review status", "For confirmation or correction before final approval")
) @(28, 72)
Add-Paragraph "Scope note: material availability is subject to the exact fitting type, grade, class, size, wall thickness, construction route and applicable product standard. Chemical composition and mechanical properties follow the ordered material specification and are confirmed through the applicable Mill Test Certificate." 9.4 $muted $false 0 6 14

Add-PageBreak
Add-Label "DOCUMENT MAP"
Add-Heading "Contents" 1
Add-NumberedItems @(
  "Shared fitting-page overview and product range",
  "Available material grades, supply options and dimensions",
  "Manufacturing standards, inspection and packaging",
  "Applications, industries and Why NESCO",
  "Shared FAQs and request-for-quotation content",
  "Elbows page-specific content",
  "Tees page-specific content",
  "Reducers page-specific content",
  "Stub Ends page-specific content",
  "End Caps page-specific content"
)
Add-Paragraph "How to review: Part A contains content repeated across all five Butt Weld Fittings pages. Part B contains the positioning, features, references, manufacturing route, FAQs and CTA that change for each fitting type." 10 $muted $false 0 10 15

Add-PageBreak
Add-Label "PART A  |  SHARED CONTENT"
Add-Heading "Shared content used across all Butt Weld Fittings pages" 1
Add-Heading "Butt Weld Fittings category summary" 2
Add-Paragraph "Formed fittings engineered for smooth flow transitions and permanent, leak-resistant piping assemblies."

Add-Heading "Opening overview" 2
Add-Paragraph "Butt weld fittings create permanent welded transitions for changes in direction, branch connections, pipe-size reduction and line closure. Correct selection requires the fitting type, material grade, manufacturing class, dimensional standard, nominal size, wall or schedule, end preparation and inspection scope to be defined together."
Add-Paragraph "NESCO Pipe & Tubes supplies elbows, tees, reducers, stub ends and end caps for process piping, pressure systems, fabrication packages and maintenance requirements. Each fitting requirement is reviewed against the connecting pipe, service conditions, approved piping class and welding procedure."
Add-Paragraph "The NESCO range includes stainless steel, duplex, super duplex, nickel-alloy, titanium and copper-nickel fittings, subject to the applicable grade, product standard, size, wall and manufacturing route."
Add-Paragraph "Seamless, welded or qualified fabricated construction can be coordinated where permitted by the governing specification. Heat-wise traceability, Mill Test Certificates, dimensional inspection, NDT coordination and export-ready packing are available as specified."

Add-Heading "Product range" 2
Add-Table @("Product page", "Website positioning") @(
  @("Elbows", "Change pipeline direction in common 45°, 90° and 180° configurations, including long-radius and short-radius patterns."),
  @("Tees", "Create equal or reducing 90-degree branch connections from the main pipeline."),
  @("Reducers", "Connect different pipe sizes through concentric or eccentric transitions."),
  @("Stub Ends", "Pair with lap-joint backing flanges for rotatable, demountable piping connections."),
  @("End Caps", "Provide a permanent welded closure at the end of a piping run.")
) @(27, 73)

Add-Heading "Available Material Grades" 2
Add-Paragraph "NESCO supplies the material families shown below in butt weld fitting form, subject to fitting type, grade, class, size, wall, manufacturing route and availability." 9.8 $muted
Add-Table @("Material family", "Available materials and grades", "Typical selection context") @(
  @("Austenitic stainless steel", "ASTM A403 WP304/WP304L, WP316/WP316L, WP321 and WP347", "General corrosion-resistant process and pressure piping"),
  @("Duplex / super duplex stainless steel", "ASTM A815 WP grades, including applicable duplex/super duplex grades based on UNS S31803/S32205 and S32750/S32760, with class/subclass as specified", "Higher-strength chloride-bearing, seawater, offshore and severe-service piping"),
  @("Nickel alloys", "ASTM B366 grades including UNS N04400, N06600, N06625, N08825 and N10276", "Severe corrosion and elevated-temperature piping"),
  @("Titanium", "ASTM B363 Grades 2, 5 and 7 where applicable", "Marine, heat-exchanger and selected chemical systems"),
  @("Copper-nickel", "UNS C70600 (90/10 Cu-Ni) and UNS C71500 (70/30 Cu-Ni) under the applicable fitting or project specification", "Marine, condenser and seawater piping")
) @(22, 43, 35)

Add-Heading "Supply and customisation" 2
Add-Table @("Parameter", "Typical information to specify") @(
  @("Construction", "Seamless, welded or fabricated construction, as permitted by the applicable product specification and project requirements"),
  @("Dimensions", "NPS, schedule and dimensional standard"),
  @("End preparation", "Bevelled to the specified weld preparation"),
  @("Heat treatment", "Solution annealed or as required by the material standard"),
  @("Surface", "Pickled/passivated, blasted, polished or mill finish"),
  @("Testing", "PMI, dye penetrant, radiography/UT, dimensions and other specified tests"),
  @("Documentation", "MTC, NDT reports, heat-treatment charts and inspection release")
) @(28, 72)

Add-Heading "Dimensions and ordering framework" 2
Add-Paragraph "Butt-weld fitting dimensions must be coordinated with both connected pipe ends. State every run, branch or reducer end size and wall." 9.8 $muted
Add-Table @("Parameter", "Typical definition", "Required RFQ input", "Inspection focus") @(
  @("Configuration", "Elbow angle, tee type, reducer type or closure", "Exact type or drawing", "Geometry and orientation"),
  @("End size", "NPS or OD at each connection", "Run, branch, large and small ends", "Fit with connecting pipe"),
  @("Wall", "Schedule or nominal/minimum wall", "Each end wall requirement", "Forming thinning and weld preparation"),
  @("End preparation", "Standard bevel or special weld detail", "Angle, land and root detail", "Field fit-up")
) @(20, 29, 24, 27)

Add-Heading "Fitting selection guide" 2
Add-Paragraph "Start with the required direction, branch, transition or closure, then coordinate every end with the connected pipe. The approved piping class and design specification govern final selection." 9.8 $muted
Add-Table @("Fitting type", "Typical use") @(
  @("Elbows", "Change line direction using the specified angle and long- or short-radius pattern"),
  @("Tees", "Create equal or reducing 90-degree branch connections"),
  @("Reducers", "Connect different pipe sizes using concentric or eccentric transitions"),
  @("Stub Ends", "Pair with lap-joint backing flanges for rotatable, demountable connections"),
  @("End Caps", "Provide permanent welded closure at a pipe end")
) @(30, 70)

Add-Heading "Manufacturing standards" 2
Add-Table @("Reference", "What it covers", "Role") @(
  @("ASME B16.9", "Overall dimensions, tolerances, ratings, testing and marking for factory-made wrought butt-welding fittings", "Dimensions and ratings"),
  @("ASME B16.25", "Preparation of butt-welding ends for joining into piping systems", "Weld ends"),
  @("MSS SP-43", "Wrought and fabricated butt-welding fittings for low-pressure, corrosion-resistant applications, including applicable light-wall fittings", "Low-pressure / light-wall fitting reference"),
  @("ASTM A403/A403M", "Wrought austenitic stainless steel piping fittings", "Stainless material and class"),
  @("ASTM A815/A815M", "Wrought ferritic, ferritic/austenitic and martensitic stainless steel piping fittings", "Duplex material and class"),
  @("ASTM B366/B366M", "Factory-made wrought nickel and nickel-alloy fittings", "Nickel-alloy material"),
  @("ASTM B363", "Seamless and welded unalloyed titanium and titanium-alloy welding fittings", "Titanium material"),
  @("ASME B36.19M", "Stainless steel pipe dimensions and schedules, where applicable", "Pipe dimensional compatibility"),
  @("ASME B36.10M", "Welded and seamless wrought steel pipe dimensions and schedules, where applicable", "Pipe dimensional compatibility"),
  @("Project specification or drawing", "Special geometry, wall transitions, tangents, barred branches and supplementary examination", "Order-specific")
) @(24, 54, 22)

Add-Heading "Inspection and testing" 2
Add-NumberedItems @(
  "MTC, heat number and fitting class verification",
  "NPS, schedule, centre-to-end and end-diameter checks",
  "Wall-thickness distribution after forming",
  "Bevel angle, land and squareness inspection",
  "PMI and liquid-penetrant examination when specified",
  "Radiographic or ultrasonic examination of welds by class or purchase order",
  "Heat-treatment and NDT report review",
  "Marking, bevel protection and packing verification before dispatch"
)

Add-Heading "Applications" 2
Add-Bullets @("Process piping", "Oil and gas facilities", "Chemical and fertiliser plants", "Power generation", "Desalination and water treatment", "Marine piping", "Food and pharmaceutical utilities", "Fabrication and maintenance")

Add-Heading "Industries served" 2
Add-Bullets @("Process piping", "Oil & gas", "Refineries", "Chemical & fertiliser", "Power generation", "Marine & offshore", "Water treatment", "Food & pharmaceutical")

Add-Heading "Packaging and marking" 2
Add-NumberedItems @(
  "Ends capped to protect bevels and internal cleanliness",
  "Fittings nested or individually wrapped without metal-to-metal damage",
  "Small items boxed; heavy fittings palletised or crated",
  "Heat-wise tags and durable product marking",
  "Export packing and lifting points planned for large fittings"
)

Add-WhyNescoSection -Fittings

Add-Heading "Shared FAQ content used on fitting pages" 2
$fittingFaqs = @(
  @("What information is required to quote a butt-weld fitting?", "Provide fitting type, angle or configuration, material grade, material class, dimensional standard, NPS, schedule or wall, quantity and NDT."),
  @("Must the fitting schedule match the pipe?", "The weld-end outside diameter and wall should be compatible with the connecting pipe and approved welding procedure."),
  @("What do WP-S, WP-W, WP-WX or WP-WU indicate?", "These class markings identify manufacture and examination routes under the applicable fitting specification; specify the class required by the piping design."),
  @("Can special dimensions be supplied?", "Drawing-specific radii, tangents, end walls or fabricated configurations can be reviewed with design and inspection requirements.")
)
for ($index = 0; $index -lt $fittingFaqs.Count; $index++) { Add-QuestionAnswer $fittingFaqs[$index][0] $fittingFaqs[$index][1] ($index + 1) }

Add-Heading "Request-for-quotation content" 2
Add-Paragraph "Turn your specification into a supply-ready enquiry." 14 $navy $true
Add-Paragraph "Ready to source? Start with the details you already have. Our team will review the grade, dimensions, testing and delivery requirements together." 10 $muted
Add-Bullets @("Fitting type and angle/configuration", "Material grade", "Standard", "NPS and schedule/wall", "Seamless or welded preference", "Quantity", "Special dimensions or drawing", "Testing and documentation")
Add-Paragraph "The website enquiry form also collects name, company, work email, phone, delivery destination, additional testing or inspection requirements and an optional drawing or BOQ upload." 9.8 $text

Add-Heading "Technical publishing note" 2
Add-Paragraph "Butt weld fitting standards must be applied together: the material specification, manufacturing class, dimensional standard, wall requirement and weld-end preparation are separate order inputs. Confirm the exact fitting type, grade, class, size, wall, construction route and supplementary examination at quotation stage." 9.7 $muted

$fittingPages = @(
  [PSCustomObject]@{
    Title = "Elbows"
    Positioning = "Elbows change pipeline direction while maintaining a continuous flow path. Common configurations include 45°, 90° and 180° returns in long-radius or short-radius patterns."
    Features = @("45°, 90° and 180° configurations", "Long-radius and short-radius options", "Seamless or welded construction", "Tangents, special angles and heavy-wall designs subject to drawing")
    References = @("ASME B16.9 for factory-made butt-welding fittings", "MSS SP-43 for applicable low-pressure, corrosion-resistant light-wall fittings", "ASTM A403, A815 or material-specific ASTM B366 specifications")
    Manufacturing = @("Pipe or plate feedstock is verified for grade, wall and construction class.", "The component is hot formed, cold formed, mandrel bent or fabricated to the specified angle and radius.", "Forming strains are relieved by the heat treatment required for the selected material.", "Ends are calibrated and bevelled to match the connected pipe wall and welding procedure.", "Angle, centre-to-end dimensions, ovality, wall and ordered NDT are checked before marking.")
    Faqs = @(@("What is the difference between long- and short-radius elbows?", "A long-radius elbow has a larger centreline radius and generally creates a smoother flow transition; the project layout and pressure-drop criteria determine the type."), @("Can NESCO supply special-angle elbows?", "Special angles, tangents and drawing-specific dimensions can be reviewed against material, wall, radius and quantity."))
    Cta = "Send your elbows specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Tees"
    Positioning = "Tees create a 90-degree branch from the main pipeline. Equal tees retain the run diameter, while reducing tees connect a smaller branch."
    Features = @("Equal and reducing configurations", "Smooth branch transition", "Seamless or welded manufacture", "Special outlet sizes and barred tees subject to project specification")
    References = @("ASME B16.9", "Applicable material specification", "Project-specific branch reinforcement or flow requirements")
    Manufacturing = @("Suitable pipe, tube, plate or other qualified feedstock is selected according to the applicable fitting specification and manufacturing route.", "The branch is formed by extrusion, hydraulic forming, hot drawing or qualified fabrication.", "Heat treatment restores the specified material condition after forming or welding.", "Run and outlet ends are sized and bevelled to the ordered schedules.", "Branch geometry, wall distribution, weld quality and material identity are inspected before release.")
    Faqs = @(@("What is an equal tee versus a reducing tee?", "An equal tee uses the same nominal size on run and branch; a reducing tee connects a smaller branch to the main run."), @("Should run and branch schedules both be stated?", "Yes. Provide the run size and wall plus the branch size and wall so the ends match the piping specification."))
    Cta = "Send your tees specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Reducers"
    Positioning = "Reducers connect pipe of different diameters. Concentric reducers maintain a common centreline, while eccentric reducers offset the centreline to manage drainage, vapour pockets or pump-suction requirements."
    Features = @("Concentric and eccentric types", "Smooth diameter transition", "Schedule and end thickness matched to piping system", "Flat-side orientation defined for eccentric reducers")
    References = @("ASME B16.9", "Material specification compatible with piping class", "Dimensional and wall-thickness checks")
    Manufacturing = @("Suitable feedstock is selected according to the fitting specification, size, wall and manufacturing route.", "Progressive pressing, rolling or forming creates the required diameter transition without abrupt flow changes.", "Heat treatment is completed to the material specification and manufacturing class.", "Large and small ends are calibrated, trimmed and bevelled to the connecting walls.", "End diameters, length, wall, eccentric orientation and required NDT are verified.")
    Faqs = @(@("When should an eccentric reducer be used?", "Eccentric reducers are used when maintaining a flat side helps manage drainage, vapour pockets or equipment-nozzle alignment; orientation must be stated."), @("How should reducer wall be specified?", "State both end sizes, schedule or wall at each end, construction class, length and concentric/eccentric configuration."))
    Cta = "Send your reducers specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Stub Ends"
    Positioning = "Stub ends are used with lap-joint flanges to create a rotatable, demountable connection. They are valuable where frequent dismantling or alignment flexibility is needed, or where an economical backing flange can be used."
    Features = @("Type A, B or C patterns as specified", "Short or long pattern", "Lapped face mates with loose backing flange", "Useful in corrosion-resistant piping systems")
    References = @("ASME B16.9 / MSS SP-43 as applicable", "Material and lap dimensions per project", "Facing and radius matched to backing flange")
    Manufacturing = @("Corrosion-resistant tube or plate is selected for the required wall and lap-joint pattern.", "The lap is formed by flaring, pressing or qualified fabrication to Type A, B or C geometry.", "Heat treatment and surface conditioning are completed as required by the material standard.", "The weld end, lap diameter, radius and face are finish formed or machined.", "Fit with the specified backing flange, dimensions and traceability are confirmed before packing.")
    Faqs = @(@("What must match the backing flange?", "The lap diameter, face, radius and stub-end pattern must suit the selected lap-joint backing flange."), @("Are short- and long-pattern stub ends available?", "Both may be available depending on the dimensional standard, material, size and wall."))
    Cta = "Send your stub ends specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "End Caps"
    Positioning = "End caps permanently close the end of a butt-weld piping run. Their geometry provides a smooth pressure boundary and they are used during construction, isolation, maintenance or final line termination."
    Features = @("Permanent welded closure", "Formed closure profile according to the applicable standard and design requirement", "Seamless or welded construction", "Wall thickness matched to connected pipe")
    References = @("ASME B16.9", "Applicable material specification", "Project pressure and examination requirements")
    Manufacturing = @("Plate, sheet or tubular feedstock is verified against the required grade and wall.", "Deep drawing, pressing or qualified fabrication produces the specified formed closure profile.", "Heat treatment restores the specified corrosion-resistant and mechanical condition.", "The open end is sized, trimmed and bevelled for field welding.", "Shape, end diameter, minimum wall, surface and ordered examination are checked before release.")
    Faqs = @(@("How is a cap wall selected?", "The cap wall should be specified to match the connected pipe schedule and design requirement, allowing for forming tolerance under the applicable standard."), @("Are caps supplied bevelled?", "Butt-weld caps are normally supplied with weld-end preparation appropriate to the size and wall; special bevels should be stated."))
    Cta = "Send your end caps specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  }
)

Add-PageSpecificContent $fittingPages "fitting" 6

Add-PageBreak
Add-Label "CLIENT CONFIRMATION"
Add-Heading "Review and approval notes" 1
Add-Paragraph "Please mark any changes required in product terminology, grades, standards, testing, applications or NESCO positioning. Approved corrections can then be applied consistently across all five Butt Weld Fittings pages." 10.5 $text
Add-Table @("Review area", "Status", "Comments") @(
  @("Shared technical content", "Approved / Changes required", ""),
  @("Elbows", "Approved / Changes required", ""),
  @("Tees", "Approved / Changes required", ""),
  @("Reducers", "Approved / Changes required", ""),
  @("Stub Ends", "Approved / Changes required", ""),
  @("End Caps", "Approved / Changes required", "")
) @(34, 28, 38)
Add-Paragraph "Client name / company: ______________________________________________" 10 $text $false 0 14 14
Add-Paragraph "Approved by: ____________________________    Date: __________________" 10 $text $false 0 14 14

Save-ReviewDocument $fittingsOutputPath "BUTT WELD FITTINGS CONTENT REVIEW" "NESCO Butt Weld Fittings Website Content - Client Review" "Content used across NESCO butt weld fitting product pages"

# -----------------------------------------------------------------------------
# Fasteners document
# -----------------------------------------------------------------------------
$body = New-Object System.Text.StringBuilder
$fastenersOutputPath = Join-Path $projectRoot "NESCO_Fasteners_Website_Content_Client_Review.docx"

Add-Paragraph "NESCO PIPE & TUBES" 15 $blue $true 0 20 18
Add-Label "CLIENT CONTENT REVIEW"
Add-Paragraph "Fasteners Product Pages" 32 $navy $true 0 5 34
Add-Paragraph "Website content used for Bolts, Nuts and Stud Bolts" 16 $blue $false 0 18 22
Add-Paragraph "Prepared for client verification and approval" 10 $muted $false 0 4 14
Add-Paragraph "NESCO Pipe & Tubes  |  12 August 2026" 10 $text $true 0 20 14

Add-Table @("Review item", "Details") @(
  @("Document purpose", "Client verification of the content currently implemented on the website"),
  @("Pages covered", "3 fastener product pages"),
  @("Content structure", "Shared technical sections plus page-specific product content"),
  @("Review status", "For confirmation or correction before final approval")
) @(28, 72)
Add-Paragraph "Scope note: a material grade alone does not define a complete fastener. Product type, material or strength grade, dimensional standard, thread designation, length convention, compatible nuts or washers, finish, testing and marking must be confirmed together." 9.4 $muted $false 0 6 14

Add-PageBreak
Add-Label "DOCUMENT MAP"
Add-Heading "Contents" 1
Add-NumberedItems @(
  "Shared fastener-page overview and product range",
  "Available material grades, supply options and dimensions",
  "Manufacturing standards, inspection and packaging",
  "Applications, industries and Why NESCO",
  "Shared FAQs and request-for-quotation content",
  "Bolts page-specific content",
  "Nuts page-specific content",
  "Stud Bolts page-specific content"
)
Add-Paragraph "How to review: Part A contains content repeated across all three Fasteners pages. Part B contains the positioning, features, references, manufacturing route, FAQs and CTA that change for each fastener type." 10 $muted $false 0 10 15

Add-PageBreak
Add-Label "PART A  |  SHARED CONTENT"
Add-Heading "Shared content used across all Fasteners pages" 1
Add-Heading "Fasteners category summary" 2
Add-Paragraph "Industrial fasteners in stainless steel, alloy steel and high nickel alloys for structural and piping assemblies."

Add-Heading "Opening overview" 2
Add-Paragraph "Industrial fasteners secure flanged joints, valves, equipment, structures and fabricated assemblies. A complete fastener specification must combine the product type, material or strength grade, dimensional standard, thread form, diameter, pitch, length, heat-treatment condition, finish and compatible nut or washer requirement."
Add-Paragraph "NESCO Pipe & Tubes supplies bolts, nuts and stud bolts for pressure piping, petrochemical, power, marine, heat-exchanger, structural and maintenance applications. Requirements can be supplied as individual items or coordinated bolting sets, subject to grade, size, quantity and specification."
Add-Paragraph "The NESCO range includes stainless steel, pressure-service alloy and stainless bolting, low-temperature bolting and selected nickel-alloy grades. Material selection must account for design temperature, corrosion environment, mechanical loading and compatibility between every component in the joint."
Add-Paragraph "Heat or lot traceability, Mill Test Certificates, mechanical and hardness testing, PMI, thread gauging, coating verification, matched-set packing and export documentation can be coordinated where specified in the purchase order."

Add-Heading "Product range" 2
Add-Table @("Product page", "Website positioning") @(
  @("Bolts", "Headed fasteners for equipment, structural assemblies and installations requiring a defined grip length."),
  @("Nuts", "Internally threaded components selected to match the bolt or stud material, strength, thread and service."),
  @("Stud Bolts", "Fully threaded or double-ended bolting commonly supplied with compatible nuts for flanged pressure joints.")
) @(27, 73)

Add-Heading "Available Material Grades" 2
Add-Paragraph "NESCO supplies the material and bolting families shown below, subject to fastener type, grade, dimensions, thread, condition, finish and availability." 9.8 $muted
Add-Table @("Material family", "Available materials and grades", "Typical selection context") @(
  @("General stainless fasteners", "ASTM F593 bolts, hex cap screws and studs with ASTM F594 compatible nuts; commonly requested 304 and 316 families", "Corrosion-resistant general and equipment assemblies"),
  @("Pressure-service alloy and stainless bolting", "ASTM A193 Grades B8, B8M and B16, with ASTM A194 nuts selected for the specified bolting combination", "Flanges, valves and pressure equipment"),
  @("Low-temperature bolting", "ASTM A320 material grades with ASTM A194 or other specification-matched nuts", "Specified low-temperature pressure joints"),
  @("Nickel-alloy bolting", "UNS N06625, UNS N07718, UNS N08825, UNS N10276 and project-specific grades", "Corrosive, high-strength and elevated-temperature service"),
  @("Project-specific bolting", "Material, strength class, coating and dimensions to the approved bolting specification or drawing", "OEM, structural and specialised assemblies")
) @(24, 43, 33)

Add-Heading "Supply and customisation" 2
Add-Table @("Parameter", "Typical information to specify") @(
  @("Thread system", "Metric, UNC, UNF, 8UN or specified form"),
  @("Dimensions", "Diameter, pitch, length and thread engagement"),
  @("Condition", "Solution annealed, heat treated or cold worked as specified"),
  @("Finish", "Plain, passivated, coated, plated or lubricated subject to compatibility"),
  @("Sets", "Bolt/nut/washer or stud with two nuts"),
  @("Testing", "Chemical, mechanical, hardness, PMI and coating tests as required"),
  @("Marking", "Grade, manufacturer and heat/lot identification")
) @(28, 72)

Add-Heading "Dimensions and ordering framework" 2
Add-Paragraph "A complete fastener description combines material grade with a separate dimensional standard and thread designation." 9.8 $muted
Add-Table @("Ordering item", "Examples", "Required detail", "Acceptance control") @(
  @("Thread", "Metric, UNC, UNF, 8UN or special", "Diameter, pitch/series and class", "GO/NO-GO gauging"),
  @("Length", "Under-head or overall by product type", "Measurement convention and tolerance", "Assembly grip or engagement"),
  @("Head or nut", "Hex, heavy hex, socket or drawing-specific", "Dimensional standard", "Across-flats and bearing face"),
  @("Finish", "Plain, passivated, coated or lubricated", "Coating system and thickness", "Friction and corrosion compatibility")
) @(20, 29, 24, 27)

Add-Heading "Fastener selection guide" 2
Add-Paragraph "Select the product form together with its material grade, thread, dimensions, compatible nuts or washers, finish and service conditions. The approved joint design governs final selection." 9.8 $muted
Add-Table @("Fastener type", "Typical use") @(
  @("Bolts", "Headed fasteners for equipment, structures and assemblies requiring a defined grip length"),
  @("Nuts", "Internally threaded components selected to match bolt or stud material, strength, thread and service"),
  @("Stud Bolts", "Fully threaded or double-ended bolting commonly supplied with compatible nuts for flanged pressure joints")
) @(30, 70)

Add-Heading "Manufacturing standards" 2
Add-Table @("Reference", "What it covers", "Role") @(
  @("ASTM A193/A193M", "Alloy-steel and stainless-steel bolting for high-temperature or high-pressure service and other special-purpose applications", "Pressure bolting"),
  @("ASTM A194/A194M", "Carbon, alloy and stainless steel nuts for high-pressure or high-temperature service", "Compatible nuts"),
  @("ASTM A320/A320M", "Alloy-steel and stainless-steel bolting for low-temperature service", "Low-temperature bolting"),
  @("ASTM F593 / F594", "Stainless steel bolts, hex cap screws and studs, with compatible stainless steel nuts", "General stainless fasteners"),
  @("ASTM A453/A453M", "High-temperature bolting with expansion coefficients comparable to austenitic stainless steel", "Special high-temperature service"),
  @("ASME B18 / ISO / DIN", "Product geometry, thread form and dimensions under the selected standard", "Dimensions"),
  @("Project bolting specification", "Coating, lubrication, tightening, lot testing, marking and supplementary requirements", "Joint-specific")
) @(24, 54, 22)

Add-Heading "Inspection and testing" 2
Add-NumberedItems @(
  "Heat or lot traceability and MTC review",
  "Diameter, pitch, length and GO/NO-GO thread-gauge inspection",
  "Head, nut, bearing-face and chamfer dimensions",
  "Hardness, tensile, yield, proof-load or impact testing as required by the specification",
  "PMI for stainless and alloy verification when specified",
  "Coating thickness and lubricant verification where ordered",
  "Grade marking, nut compatibility and matched-set checks",
  "Quantity, segregation and protective packing verification before dispatch"
)

Add-Heading "Applications" 2
Add-Bullets @("Flanged piping joints", "Pressure vessels", "Valves and pumps", "Chemical and marine equipment", "Structural assemblies", "Heat exchangers", "Power plants", "Maintenance and shutdowns")

Add-Heading "Industries served" 2
Add-Bullets @("Pressure piping", "Oil & gas", "Petrochemicals", "Power generation", "Marine", "Structural fabrication", "Heat exchangers", "Maintenance shutdowns")

Add-Heading "Packaging and marking" 2
Add-NumberedItems @(
  "Bolting segregated by grade, heat/lot, size and finish",
  "Matched stud-and-nut sets bagged or boxed when ordered",
  "Threads protected from impact and contamination",
  "Moisture-resistant export cartons and timber cases",
  "Labels show standard, grade, thread, length, quantity and PO"
)

Add-WhyNescoSection -Fasteners

Add-Heading "Shared FAQ content used on fastener pages" 2
$fastenerFaqs = @(
  @("What information is essential for fastener quotation?", "Provide fastener type, material/strength grade, dimensional standard, diameter, pitch, length, finish, nut/washer requirement, quantity and certificates."),
  @("Can stainless and alloy bolting grades be interchanged?", "No. Strength, temperature capability, corrosion behaviour and matching nut requirements differ; substitutions require approval from the responsible engineer."),
  @("Why must coating and lubricant be stated?", "Surface condition influences corrosion protection, friction and tightening load. It must be compatible with the service and assembly procedure."),
  @("Can fasteners be supplied as matched sets?", "Bolts, studs, nuts and washers can be packaged as coordinated sets when grades, quantities and marking requirements are specified.")
)
for ($index = 0; $index -lt $fastenerFaqs.Count; $index++) { Add-QuestionAnswer $fastenerFaqs[$index][0] $fastenerFaqs[$index][1] ($index + 1) }

Add-Heading "Request-for-quotation content" 2
Add-Paragraph "Turn your specification into a supply-ready enquiry." 14 $navy $true
Add-Paragraph "Ready to source? Start with the details you already have. Our team will review the grade, dimensions, testing and delivery requirements together." 10 $muted
Add-Bullets @("Fastener type", "Material or bolting grade", "Dimensional standard", "Thread diameter and pitch", "Length", "Nut or washer requirement", "Coating or lubrication", "Quantity and test documents")
Add-Paragraph "The website enquiry form also collects name, company, work email, phone, delivery destination, additional testing or inspection requirements and an optional drawing or BOQ upload." 9.8 $text

Add-Heading "Technical publishing note" 2
Add-Paragraph "A material grade does not define a complete fastener. Confirm the product type, material or strength grade, dimensional standard, thread designation, length convention, compatible nuts or washers, finish, testing and marking requirements at quotation stage." 9.7 $muted

$fastenerPages = @(
  [PSCustomObject]@{
    Title = "Bolts"
    Positioning = "Industrial bolts may be supplied in hex-head, socket-head, eye, U-bolt or drawing-specific forms. For steel and alloy applications, material compatibility and mechanical properties are as important as the dimensional standard."
    Features = @("Metric or inch thread systems", "Coarse, fine or project-specific pitch", "Full or partial thread", "Machined, forged or cold-formed supply routes")
    References = @("ASTM F593 for selected stainless bolts", "ASTM A193 / A320 / A453 for temperature- or pressure-service bolting where applicable", "ASME, ISO, DIN or drawing dimensions")
    Manufacturing = @("Wire, bar or forging stock is verified for the required bolting grade and heat condition.", "Cold heading, hot forging or machining forms the head and shank geometry.", "Threads are rolled or cut, followed by required heat treatment and surface finishing.", "Dimensions, thread gauges, hardness, mechanical properties and grade marking are checked by lot.")
    Faqs = @(@("Which information identifies a bolt completely?", "State bolt type, material grade, dimensional standard, thread diameter and pitch, length, head style, finish and required nuts or washers."), @("Can bolts be supplied with coatings?", "Coatings and lubricants can be reviewed, but their compatibility with temperature, corrosion environment and tightening method must be confirmed."))
    Cta = "Send your bolts specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Nuts"
    Positioning = "Nuts are selected to match bolt or stud material, thread, proof load, temperature and corrosion environment. Hex, heavy hex, lock and special nuts may be supplied subject to the approved bill of materials."
    Features = @("Standard and heavy-hex patterns", "Matched thread fit and strength", "Plain, coated or lubricated condition", "Grade marking and heat traceability")
    References = @("ASTM F594 for selected stainless nuts", "ASTM A194 for pressure-service nuts where applicable", "ASME, ISO or DIN dimensional standards")
    Manufacturing = @("Compatible bar, wire or forged blanks are selected to match the bolt grade and service.", "Cold forming, hot forging or machining produces the nut profile and bearing faces.", "Internal threads are tapped and the grade-specific heat treatment or finishing is completed.", "Thread fit, proof load or hardness, dimensions and grade marking are verified by lot.")
    Faqs = @(@("How should nut grade be matched to a bolt?", "Nut material, strength, temperature rating, thread fit and coating should be selected as a compatible bolting system under the project specification."), @("What is a heavy-hex nut?", "A heavy-hex pattern has larger across-flats and thickness dimensions than a regular hex nut and is common in pressure-service bolting."))
    Cta = "Send your nuts specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Stud Bolts"
    Positioning = "Stud bolts are widely used for flanged joints in piping, valves, pressure vessels and equipment. They may be fully threaded or double-ended and are commonly supplied with two compatible heavy-hex nuts."
    Features = @("Full-thread or double-ended forms", "Cut to specified overall length", "Matched nut sets", "Coating and lubricant options subject to service")
    References = @("ASTM A193, A320 or A453 as applicable", "ASTM A194 or compatible nut specifications", "ASME B16.5 – Applicable flange dimensions and bolting requirements for flanged joints.")
    Manufacturing = @("Certified bar is straightened and cut to the specified overall stud length.", "Threads are rolled or cut to the required form, pitch and engagement.", "Heat treatment, coating or lubrication is applied according to the bolting specification.", "Thread gauges, length, hardness, mechanical properties, nut compatibility and marking are inspected.")
    Faqs = @(@("How is stud-bolt length measured?", "Measurement depends on the specified configuration and dimensional convention. State the required overall length and reference standard explicitly."), @("Are two nuts included with each stud?", "Studs can be supplied alone or as sets with two compatible nuts and washers where specified."))
    Cta = "Send your stud bolts specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  }
)

Add-PageSpecificContent $fastenerPages "fastener" 6

Add-PageBreak
Add-Label "CLIENT CONFIRMATION"
Add-Heading "Review and approval notes" 1
Add-Paragraph "Please mark any changes required in product terminology, grades, standards, testing, applications or NESCO positioning. Approved corrections can then be applied consistently across all three Fasteners pages." 10.5 $text
Add-Table @("Review area", "Status", "Comments") @(
  @("Shared technical content", "Approved / Changes required", ""),
  @("Bolts", "Approved / Changes required", ""),
  @("Nuts", "Approved / Changes required", ""),
  @("Stud Bolts", "Approved / Changes required", "")
) @(34, 28, 38)
Add-Paragraph "Client name / company: ______________________________________________" 10 $text $false 0 14 14
Add-Paragraph "Approved by: ____________________________    Date: __________________" 10 $text $false 0 14 14

Save-ReviewDocument $fastenersOutputPath "FASTENERS CONTENT REVIEW" "NESCO Fasteners Website Content - Client Review" "Content used across NESCO fastener product pages"

Write-Output $fittingsOutputPath
Write-Output $fastenersOutputPath
