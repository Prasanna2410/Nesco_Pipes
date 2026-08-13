$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $projectRoot "NESCO_Tubes_Website_Content_Client_Review.docx"
$navy = "05234B"
$blue = "0868E8"
$lightBlue = "E8F4FF"
$paleBlue = "F6FAFF"
$text = "17314E"
$muted = "4F6982"
$white = "FFFFFF"
$line = "D2E1EF"
$body = New-Object System.Text.StringBuilder

function Escape-Xml([string]$Value) {
  if ($null -eq $Value) { return "" }
  return [System.Security.SecurityElement]::Escape($Value)
}

function Add-BodyXml([string]$Value) {
  [void]$body.Append($Value)
}

function Add-Paragraph {
  param(
    [string]$Value,
    [double]$Size = 10.5,
    [string]$Color = $text,
    [bool]$Bold = $false,
    [int]$Alignment = 0,
    [double]$SpaceAfter = 8,
    [double]$LineSpacing = 15
  )
  $alignValue = if ($Alignment -eq 1) { "center" } elseif ($Alignment -eq 2) { "right" } else { "left" }
  $sizeValue = [int]($Size * 2)
  $afterValue = [int]($SpaceAfter * 20)
  $lineValue = [int]($LineSpacing * 20)
  $boldXml = if ($Bold) { "<w:b/>" } else { "" }
  $escaped = Escape-Xml $Value
  Add-BodyXml "<w:p><w:pPr><w:jc w:val=`"$alignValue`"/><w:spacing w:after=`"$afterValue`" w:line=`"$lineValue`" w:lineRule=`"auto`"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii=`"Aptos`" w:hAnsi=`"Aptos`"/>$boldXml<w:color w:val=`"$Color`"/><w:sz w:val=`"$sizeValue`"/><w:szCs w:val=`"$sizeValue`"/></w:rPr><w:t xml:space=`"preserve`">$escaped</w:t></w:r></w:p>"
}

function Add-Heading {
  param([string]$Value, [int]$Level = 1)
  $size = switch ($Level) { 1 { 23 } 2 { 17 } 3 { 12.5 } default { 11 } }
  $color = if ($Level -eq 1) { $navy } elseif ($Level -eq 2) { $blue } else { $navy }
  $before = if ($Level -eq 1) { 14 } elseif ($Level -eq 2) { 12 } else { 8 }
  $sizeValue = [int]($size * 2)
  $beforeValue = [int]($before * 20)
  $escaped = Escape-Xml $Value
  Add-BodyXml "<w:p><w:pPr><w:keepNext/><w:spacing w:before=`"$beforeValue`" w:after=`"140`"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii=`"Aptos Display`" w:hAnsi=`"Aptos Display`"/><w:b/><w:color w:val=`"$color`"/><w:sz w:val=`"$sizeValue`"/><w:szCs w:val=`"$sizeValue`"/></w:rPr><w:t>$escaped</w:t></w:r></w:p>"
}

function Add-Label {
  param([string]$Value)
  $escaped = Escape-Xml $Value.ToUpperInvariant()
  Add-BodyXml "<w:p><w:pPr><w:keepNext/><w:spacing w:before=`"80`" w:after=`"80`"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii=`"Aptos`" w:hAnsi=`"Aptos`"/><w:b/><w:color w:val=`"$blue`"/><w:sz w:val=`"16`"/><w:spacing w:val=`"18`"/></w:rPr><w:t>$escaped</w:t></w:r></w:p>"
}

function Add-Bullets {
  param([string[]]$Items)
  foreach ($item in $Items) {
    $escaped = Escape-Xml (([char]0x2022) + "  " + $item)
    Add-BodyXml "<w:p><w:pPr><w:ind w:left=`"360`" w:hanging=`"180`"/><w:spacing w:after=`"80`"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii=`"Aptos`" w:hAnsi=`"Aptos`"/><w:color w:val=`"$text`"/><w:sz w:val=`"20`"/></w:rPr><w:t xml:space=`"preserve`">$escaped</w:t></w:r></w:p>"
  }
}

function Add-NumberedItems {
  param([string[]]$Items)
  for ($index = 0; $index -lt $Items.Count; $index++) {
    Add-Paragraph (("{0:D2}  " -f ($index + 1)) + $Items[$index]) 10.2 $text $false 0 5 14
  }
}

function Add-Table {
  param([string[]]$Headers, [object[]]$Rows, [double[]]$Widths = @())
  $totalWidth = 9000
  $columnWidths = @()
  if ($Widths.Count -eq $Headers.Count) {
    foreach ($width in $Widths) { $columnWidths += [int]($totalWidth * $width / 100) }
  } else {
    for ($column = 0; $column -lt $Headers.Count; $column++) { $columnWidths += [int]($totalWidth / $Headers.Count) }
  }
  $xml = New-Object System.Text.StringBuilder
  [void]$xml.Append("<w:tbl><w:tblPr><w:tblW w:w=`"$totalWidth`" w:type=`"dxa`"/><w:tblLayout w:type=`"fixed`"/><w:tblBorders><w:top w:val=`"single`" w:sz=`"4`" w:color=`"$line`"/><w:left w:val=`"single`" w:sz=`"4`" w:color=`"$line`"/><w:bottom w:val=`"single`" w:sz=`"4`" w:color=`"$line`"/><w:right w:val=`"single`" w:sz=`"4`" w:color=`"$line`"/><w:insideH w:val=`"single`" w:sz=`"4`" w:color=`"$line`"/><w:insideV w:val=`"single`" w:sz=`"4`" w:color=`"$line`"/></w:tblBorders><w:tblCellMar><w:top w:w=`"110`" w:type=`"dxa`"/><w:left w:w=`"120`" w:type=`"dxa`"/><w:bottom w:w=`"110`" w:type=`"dxa`"/><w:right w:w=`"120`" w:type=`"dxa`"/></w:tblCellMar></w:tblPr><w:tblGrid>")
  foreach ($width in $columnWidths) { [void]$xml.Append("<w:gridCol w:w=`"$width`"/>") }
  [void]$xml.Append("</w:tblGrid><w:tr><w:trPr><w:tblHeader/></w:trPr>")
  for ($column = 0; $column -lt $Headers.Count; $column++) {
    $escaped = Escape-Xml $Headers[$column]
    $width = $columnWidths[$column]
    [void]$xml.Append("<w:tc><w:tcPr><w:tcW w:w=`"$width`" w:type=`"dxa`"/><w:shd w:val=`"clear`" w:fill=`"$navy`"/></w:tcPr><w:p><w:r><w:rPr><w:rFonts w:ascii=`"Aptos`"/><w:b/><w:color w:val=`"$white`"/><w:sz w:val=`"17`"/></w:rPr><w:t>$escaped</w:t></w:r></w:p></w:tc>")
  }
  [void]$xml.Append("</w:tr>")
  for ($row = 0; $row -lt $Rows.Count; $row++) {
    $fill = if (($row % 2) -eq 1) { $paleBlue } else { $white }
    [void]$xml.Append("<w:tr><w:trPr><w:cantSplit/></w:trPr>")
    for ($column = 0; $column -lt $Headers.Count; $column++) {
      $escaped = Escape-Xml ([string]$Rows[$row][$column])
      $boldXml = if ($column -eq 0) { "<w:b/>" } else { "" }
      $width = $columnWidths[$column]
      [void]$xml.Append("<w:tc><w:tcPr><w:tcW w:w=`"$width`" w:type=`"dxa`"/><w:shd w:val=`"clear`" w:fill=`"$fill`"/></w:tcPr><w:p><w:pPr><w:spacing w:after=`"30`"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii=`"Aptos`"/>$boldXml<w:color w:val=`"$text`"/><w:sz w:val=`"17`"/></w:rPr><w:t xml:space=`"preserve`">$escaped</w:t></w:r></w:p></w:tc>")
    }
    [void]$xml.Append("</w:tr>")
  }
  [void]$xml.Append("</w:tbl><w:p><w:pPr><w:spacing w:after=`"120`"/></w:pPr></w:p>")
  Add-BodyXml $xml.ToString()
}

function Add-QuestionAnswer {
  param([string]$Question, [string]$Answer, [int]$Index)
  $questionText = Escape-Xml (("{0:D2}  " -f $Index) + $Question)
  Add-BodyXml "<w:p><w:pPr><w:keepNext/><w:spacing w:before=`"100`" w:after=`"60`"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii=`"Aptos`"/><w:b/><w:color w:val=`"$navy`"/><w:sz w:val=`"21`"/></w:rPr><w:t>$questionText</w:t></w:r></w:p>"
  Add-Paragraph $Answer 9.8 $muted $false 0 7 14
}

function Add-PageBreak {
  Add-BodyXml "<w:p><w:r><w:br w:type=`"page`"/></w:r></w:p>"
}

# Cover page
Add-Paragraph "NESCO PIPE & TUBES" 15 $blue $true 0 20 18
Add-Label "CLIENT CONTENT REVIEW"
Add-Paragraph "Tubes Product Pages" 32 $navy $true 0 5 34
Add-Paragraph "Website content currently used for Seamless, Welded, Heat Exchanger, Boiler and Instrumentation Tubes" 16 $blue $false 0 18 22
Add-Paragraph "Prepared for review and approval" 10 $muted $false 0 4 14
Add-Paragraph "NESCO Pipe & Tubes  |  06 August 2026" 10 $text $true 0 20 14

$coverTableRows = @(
  @("Document purpose", "Client verification of live website content"),
  @("Pages covered", "5 tube product pages"),
  @("Content structure", "Shared technical sections plus page-specific content"),
  @("Review status", "For confirmation / correction before final approval")
)
Add-Table @("Review item", "Details") $coverTableRows @(28, 72)
Add-Paragraph "Review note: Standards and material values are presented as website procurement guidance. The exact ordered standard, edition, product form, size, condition and certified MTC remain the governing supply basis." 9.4 $muted $false 0 6 14
Add-PageBreak

# Contents
Add-Label "DOCUMENT MAP"
Add-Heading "Contents" 1
$contents = @(
  "01  Shared tube-page introduction and page flow",
  "02  Shared material grades, supply options and dimensions",
  "03  Shared standards and reference material data",
  "04  Shared inspection, applications, industries and packaging",
  "05  Why choose NESCO and RFQ messaging",
  "06  Seamless Tubes page-specific content",
  "07  Welded Tubes page-specific content",
  "08  Heat Exchanger Tubes page-specific content",
  "09  Boiler Tubes page-specific content",
  "10  Instrumentation Tubes page-specific content"
)
Add-NumberedItems $contents
Add-Paragraph "How to review: shared sections appear across all tube pages. The five page-specific sections show the content that changes for each tube type." 10 $muted $false 0 10 15

# Shared content
Add-PageBreak
Add-Label "PART A  |  SHARED CONTENT"
Add-Heading "Shared content used across all tube pages" 1
Add-Heading "Opening overview" 2
Add-Paragraph "Tubes are specified by outside diameter and wall thickness and are used where dimensional control, heat transfer, mechanical performance, clean internal surfaces or precision routing are important. NESCO supplies seamless and welded tubing together with application-specific heat exchanger, boiler and instrumentation tubes."
Add-Paragraph "Whether the requirement is for standard maintenance quantities or a project package, our team reviews each tubes enquiry against the requested material, dimensions, specification, service conditions, inspection and delivery plan. Availability may include ex-stock, mill production or made-to-order supply depending on the combination."

Add-Heading "Common material range" 2
$gradeRows = @(
  @("Austenitic stainless", "TP304/304L, TP316/316L, TP321, TP347/347H", "General corrosion, process and elevated-temperature duties"),
  @("Duplex stainless", "S31803/S32205, S32750/S32760", "Higher strength and chloride-bearing environments"),
  @("High-alloy stainless", "904L, S31254", "Selected acid and high-chloride services"),
  @("Nickel alloys", "N06625, N08825, N10276 and others", "Severe corrosion and high-temperature projects"),
  @("Titanium / Cu-Ni", "Grade 2, C70600, C71500", "Seawater, condenser and selected chemical systems")
)
Add-Table @("Material family", "Common grades", "Typical selection context") $gradeRows @(22, 42, 36)

Add-Heading "Supply and customisation" 2
$supplyRows = @(
  @("Dimensions", "OD x wall thickness"),
  @("Forms", "Straight length, coil, capillary or U-bend"),
  @("Condition", "Annealed, solution annealed, cold drawn or as specified"),
  @("Surface", "Bright annealed, pickled, polished or mill finish"),
  @("Ends", "Square cut, deburred, capped or special preparation"),
  @("Testing", "Hydro, air-under-water, eddy current, ultrasonic or project-specific"),
  @("Packing", "Sleeved/bundled, capped, boxed or export packed")
)
Add-Table @("Parameter", "Typical information to specify") $supplyRows @(28, 72)

Add-Heading "Dimensions and ordering framework" 2
Add-Paragraph "Tube is normally ordered by actual outside diameter and wall thickness. State whether wall is nominal or minimum and include the required tolerance." 9.8 $muted
$dimensionRows = @(
  @("Outside diameter", "Precision OD in metric or inch", "Exact OD and tolerance", "Fitting, tube-sheet or fabrication fit"),
  @("Wall thickness", "Nominal or minimum wall", "Wall and permitted variation", "Pressure, heat transfer and forming"),
  @("Length / form", "Straight, fixed length, coil or U-bend", "Length, radius and developed geometry", "Equipment fit-up"),
  @("Surface / ends", "BA, AP, polished; cut/deburred/capped", "Internal and external finish", "Cleanliness and sealing")
)
Add-Table @("Tube requirement", "Typical options", "What to specify", "Control point") $dimensionRows @(20, 27, 28, 25)

Add-Heading "Manufacturing standards" 2
$standardRows = @(
  @("ASTM A213/A213M", "Seamless ferritic and austenitic alloy-steel boiler, superheater and heat-exchanger tubes", "Heat-transfer service"),
  @("ASTM A249/A249M", "Welded austenitic steel boiler, superheater, heat-exchanger and condenser tubes", "Heat-transfer service"),
  @("ASTM A269/A269M", "Seamless and welded austenitic stainless tubing for general service", "General service"),
  @("ASTM A789/A789M", "Seamless and welded duplex stainless tubing for general service", "Duplex material"),
  @("EN 10216-5 / EN 10217-7", "Seamless / welded stainless tubes for pressure purposes", "European standards"),
  @("Project drawing", "OD, wall, length, tolerances, finish and special test requirements", "Order-specific")
)
Add-Table @("Reference", "What it covers", "Role") $standardRows @(24, 54, 22)

Add-Heading "Reference chemical composition" 2
Add-Paragraph "Selected principal elements. Values are percent by mass and are shown as website reference data only; verify the ordered material standard and edition." 9.6 $muted
$chemistryRows = @(
  @("TP304L", "<=0.035", "18.0-20.0", "8.0-13.0", "-"),
  @("TP316L", "<=0.035", "16.0-18.0", "10.0-15.0", "Mo 2.0-3.0"),
  @("TP321", "<=0.080", "17.0-19.0", "9.0-12.0", "Ti: 5 x C min-0.70"),
  @("TP347", "<=0.080", "17.0-20.0", "9.0-13.0", "Nb+Ta: 10 x C min-1.00")
)
Add-Table @("Grade", "C", "Cr", "Ni", "Other") $chemistryRows @(18, 14, 20, 20, 28)

Add-Heading "Reference mechanical properties" 2
Add-Paragraph "Room-temperature minimums shown on the website. Final values depend on the ordered product standard, condition and edition." 9.6 $muted
$mechanicalRows = @(
  @("TP304L", "485", "170", "35"),
  @("TP316L", "485", "170", "35"),
  @("TP321", "515", "205", "35"),
  @("TP347", "515", "205", "35")
)
Add-Table @("Grade", "Tensile MPa", "Yield MPa", "Elongation %") $mechanicalRows @(22, 26, 26, 26)

Add-Heading "Inspection and testing" 2
$inspection = @(
  "Material test certificate review and heat-number traceability",
  "Visual, dimensional, OD, wall-thickness and length checks",
  "Hydrostatic test or permitted nondestructive electric test, as specified",
  "Positive Material Identification (PMI) when requested",
  "Ultrasonic, eddy-current or other NDT to the purchase specification",
  "Intergranular corrosion, hardness, flattening or supplementary tests where applicable",
  "Third-party inspection coordination against an approved inspection plan"
)
Add-NumberedItems $inspection

Add-Heading "Applications" 2
$applications = @(
  "Shell-and-tube heat exchangers",
  "Boilers and steam generators",
  "Condensers and coolers",
  "Instrumentation and control systems",
  "Chemical dosing and sampling",
  "Hydraulic and pneumatic lines",
  "Food and pharmaceutical process systems",
  "Automotive and general engineering"
)
Add-Bullets $applications

Add-Heading "Industries served" 2
$industries = @("Oil & gas", "Petrochemicals", "Chemical processing", "Power generation", "Marine & offshore", "Water & desalination", "Food & pharmaceuticals", "General engineering")
Add-Bullets $industries

Add-Heading "Packaging and marking" 2
$packaging = @(
  "Heat-wise bundling with durable identification tags",
  "Plain or prepared ends protected with plastic end caps",
  "Protective wrapping, wooden cases or crates as size and route require",
  "Moisture-barrier and export packing available by agreement",
  "Marking can include grade, OD, wall, length, standard, heat number and purchase-order reference"
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

Add-Heading "Shared FAQ content used on tube pages" 2
$sharedFaqs = @(
  @("How is tube sizing different from pipe sizing?", "Tube is normally ordered by actual outside diameter and wall thickness; pipe commonly uses NPS and schedule."),
  @("When should I choose seamless tube?", "It is commonly selected for demanding pressure, heat-transfer, instrumentation or mechanical duties where the project specification calls for a seamless route."),
  @("Can NESCO supply heat-exchanger or U-bend tubes?", "Straight and U-bend requirements can be reviewed against the grade, standard, OD, wall, developed length, bend radius and inspection scope."),
  @("Which surface finishes are available?", "Annealed and pickled, bright annealed, polished and project-specific finishes may be available depending on the manufacturing standard and size.")
)
for ($index = 0; $index -lt $sharedFaqs.Count; $index++) { Add-QuestionAnswer $sharedFaqs[$index][0] $sharedFaqs[$index][1] ($index + 1) }

Add-Heading "Shared request-for-quotation messaging" 2
Add-Paragraph "Turn your specification into a supply-ready enquiry." 14 $navy $true
Add-Bullets @("Technical review", "Documentation support", "Email-ready submission")
Add-Paragraph "Ready to source? Start with the details you already have. Our team will review the grade, dimensions, testing and delivery requirements together." 10 $muted
Add-Paragraph "Form fields used: name, company, work email, phone, product, material grade, standard, quantity, dimensions, delivery destination, required test certificates, testing/inspection/additional requirements and optional drawing or BOQ upload." 9.8 $text

# Page-specific content data
$tubePages = @(
  [PSCustomObject]@{
    Title = "Seamless Tubes"
    Positioning = "Seamless tubing offers a continuous wall and is selected for pressure, heat-transfer, mechanical and critical service. It may be cold drawn or finished to achieve tighter dimensional control and surface quality."
    Features = @("Suitable for pressure and mechanical duties", "Good dimensional consistency when cold finished", "Wide material and heat-treatment choices", "Straight, cut-length or U-bent forms where applicable")
    References = @("ASTM A269 for general-service stainless tubing", "ASTM A213 for seamless boiler, superheater and heat-exchanger tubing", "ASTM A789 for duplex stainless tubing", "Material-specific ASTM B-series standards")
    Manufacturing = @("A verified billet or hollow is heated and pierced or extruded without creating a longitudinal weld.", "Cold drawing or pilgering reduces the outside diameter and wall to the required dimensional range.", "Intermediate and final solution heat treatment establish the ordered metallurgical condition.", "Straightening, sizing, cutting, deburring and surface conditioning prepare the tube for inspection.", "Hydrostatic or nondestructive electric testing, dimensional checks and heat-wise marking complete the supply route.")
    Faqs = @(@("Why choose seamless instead of welded tube?", "Seamless construction removes the longitudinal weld and is often selected for critical pressure, thermal or mechanical duties when required by the equipment specification."), @("Can seamless tubes be supplied cold drawn?", "Yes, subject to grade and size. Cold drawing or pilgering is commonly used where tighter OD, wall, surface or mechanical-property control is required."))
    Cta = "Send your seamless tubes specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Welded Tubes"
    Positioning = "Welded tubing provides a versatile and economical format for heat-transfer, process, structural and hygienic duties. Weld condition, bead treatment, heat treatment and inspection should be selected for the intended application."
    Features = @("Broad production range", "Consistent OD and surface finish", "Weld bead worked or removed where specified", "Eddy-current, hydrostatic or pneumatic testing as required")
    References = @("ASTM A269 for general-service stainless tubing", "ASTM A249 for welded boiler and heat-exchanger tubes", "ASTM A789 for duplex tubing", "Applicable material-specific standards")
    Manufacturing = @("Qualified strip or coil is slit to width and continuously formed into a tubular profile.", "The longitudinal seam is welded under a controlled procedure and the bead is worked or removed when specified.", "Cold working and solution heat treatment are applied where the ordered standard or service requires them.", "The tube is sized, straightened, cut and finished to the agreed OD, wall, length and surface condition.", "The weld, dimensions and pressure boundary are verified by the specified visual, eddy-current, hydrostatic or pneumatic tests.")
    Faqs = @(@("Can the internal weld bead be removed?", "Bead working or removal may be specified depending on the standard, size and end use; state the required internal surface condition in the enquiry."), @("How is the weld seam inspected?", "Eddy-current, hydrostatic, pneumatic, ultrasonic or other methods may be used according to the product standard and purchase order."))
    Cta = "Send your welded tubes specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Heat Exchanger Tubes"
    Positioning = "Heat exchanger tubes transfer heat between fluids in shell-and-tube condensers, coolers, evaporators and process exchangers. Material selection should consider fluid chemistry, chloride exposure, velocity, temperature, fouling and cleaning method."
    Features = @("Straight or U-bend configurations", "Tight OD, wall and ovality control", "Cleanliness and surface condition suited to heat transfer", "Eddy current, hydrostatic, pneumatic or other inspection options")
    References = @("ASTM A213 / A249 for stainless applications", "ASTM A789 for duplex applications", "ASTM B-series standards for nickel and copper-nickel alloys", "Project-specific U-bend and heat-treatment requirements")
    Manufacturing = @("Material is selected against fluid chemistry, design temperature, tube-sheet arrangement and exchanger duty.", "Seamless or welded hollows are cold finished to achieve controlled OD, wall thickness, ovality and surface quality.", "Solution heat treatment and cleaning establish the specified corrosion-resistant condition.", "Straight tubes are cut and deburred, or U-bends are formed to the approved radius and developed length.", "Eddy-current or other specified NDT, dimensional inspection, cleanliness checks and end protection complete the package.")
    Faqs = @(@("What data is needed for U-bend tubes?", "State OD, wall, straight-leg lengths, bend radius, tangent lengths, developed length, heat treatment, cleanliness and inspection requirements."), @("Which test is normally used for exchanger tubing?", "Eddy-current testing is widely specified, but hydrostatic, pneumatic, ultrasonic or project-specific examination may also be required."))
    Cta = "Send your heat exchanger tubes specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Boiler Tubes"
    Positioning = "Boiler tubes are used in water walls, economisers, superheaters, reheaters and steam-generating equipment. They require careful control of material condition, dimensions, heat treatment and test documentation."
    Features = @("Designed for temperature and pressure service", "Seamless or welded routes depending on specification", "Cut lengths and end preparation for fabrication", "Mechanical, flattening, flaring and NDT requirements as specified")
    References = @("ASTM A213 for seamless ferritic/austenitic alloy-steel boiler tubes", "ASTM A249 for welded austenitic boiler tubes", "ASME Section II material references where contractually required", "Project or OEM-specific supplementary requirements")
    Manufacturing = @("Tube material and manufacturing route are selected to the boiler, superheater or heat-exchanger specification.", "Hot working and cold finishing establish the ordered OD, minimum or nominal wall and length.", "Heat treatment is controlled for the grade and elevated-temperature service condition.", "Straightening, cut-length preparation and end finishing support subsequent expansion or welding.", "Mechanical, flattening, flaring, hardness and pressure/NDT requirements are completed to the governing standard.")
    Faqs = @(@("Are boiler tubes ordered by nominal or minimum wall?", "The governing material specification and equipment design determine the wall basis. The purchase order should state nominal or minimum wall explicitly."), @("Can tube ends be prepared for expansion or welding?", "Yes. Cut length, squareness, deburring, cleaning and special end preparation can be reviewed against the fabrication method."))
    Cta = "Send your boiler tubes specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Instrumentation Tubes"
    Positioning = "Instrumentation tubing is used for impulse lines, analyser systems, hydraulic and pneumatic control, sampling, dosing and small-bore process connections. Reliable sealing depends on accurate OD, controlled hardness, smooth surfaces and compatible tube fittings."
    Features = @("Precision outside diameter and wall thickness", "Bright annealed or solution-annealed finishes where required", "Straight lengths or coils", "High-cleanliness, capped-end and special packing options")
    References = @("ASTM A269 and related material standards", "Seamless or welded/cold-worked condition as specified", "Hardness and surface requirements matched to fitting system", "Hydrostatic or pneumatic leak testing as agreed")
    Manufacturing = @("Seamless or welded hollows are cold drawn to precision outside diameter, wall and hardness requirements.", "Solution or bright annealing establishes the ordered corrosion resistance and fitting-compatible condition.", "Straight lengths or coils are cleaned and finished to control surface defects and internal contamination.", "Ends are square cut, deburred and capped to protect the sealing surfaces and bore.", "Dimensional, hardness, surface and leak/pressure checks are completed before clean, protective packing.")
    Faqs = @(@("Why are hardness and surface finish important?", "Compression fittings depend on controlled tube hardness, roundness and a smooth defect-free OD to create a reliable seal."), @("Can instrumentation tubing be supplied in coils?", "Straight lengths and coils may be available depending on material, OD, wall, annealed condition and cleanliness requirement."))
    Cta = "Send your instrumentation tubes specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  }
)

$pageNumber = 6
foreach ($page in $tubePages) {
  Add-PageBreak
  Add-Label ("PART B  |  PAGE-SPECIFIC CONTENT  |  {0:D2}" -f $pageNumber)
  Add-Heading $page.Title 1
  Add-Heading "Product positioning" 2
  Add-Paragraph $page.Positioning
  Add-Paragraph "Website opening: this page uses the shared tube overview shown in Part A, followed by the page-specific manufacturing route below." 9.4 $muted

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
  Add-Paragraph "The four shared tube FAQs from Part A follow these two page-specific questions on the live website." 9.3 $muted

  Add-Heading "Request-for-quotation CTA" 2
  Add-Paragraph $page.Cta 10.5 $navy $true
  $pageNumber++
}

# Final approval page
Add-PageBreak
Add-Label "CLIENT CONFIRMATION"
Add-Heading "Review and approval notes" 1
Add-Paragraph "Please mark any changes required in product terminology, grades, standards, testing, applications or NESCO positioning. Approved corrections can then be applied consistently across the five tube pages." 10.5 $text
$approvalRows = @(
  @("Shared technical content", "Approved / Changes required", ""),
  @("Seamless Tubes", "Approved / Changes required", ""),
  @("Welded Tubes", "Approved / Changes required", ""),
  @("Heat Exchanger Tubes", "Approved / Changes required", ""),
  @("Boiler Tubes", "Approved / Changes required", ""),
  @("Instrumentation Tubes", "Approved / Changes required", "")
)
Add-Table @("Review area", "Status", "Comments") $approvalRows @(34, 28, 38)
Add-Paragraph "Client name / company: ______________________________________________" 10 $text $false 0 14 14
Add-Paragraph "Approved by: ____________________________    Date: __________________" 10 $text $false 0 14 14

# Save the client-review document as an Open XML package.
$documentXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>$($body.ToString())<w:sectPr><w:headerReference w:type="default" r:id="rId2"/><w:footerReference w:type="default" r:id="rId3"/><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="760" w:right="840" w:bottom="720" w:left="840" w:header="360" w:footer="360"/><w:cols w:space="720"/><w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>
"@

$stylesXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Aptos" w:hAnsi="Aptos" w:eastAsia="Aptos"/><w:color w:val="$text"/><w:sz w:val="21"/><w:szCs w:val="21"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="300" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style></w:styles>
"@

$headerXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="right"/><w:pBdr><w:bottom w:val="single" w:sz="8" w:space="6" w:color="$lightBlue"/></w:pBdr></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Aptos"/><w:b/><w:color w:val="$blue"/><w:sz w:val="15"/><w:spacing w:val="18"/></w:rPr><w:t>NESCO PIPE &amp; TUBES  |  TUBE CONTENT REVIEW</w:t></w:r></w:p></w:hdr>
"@

$footerXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Aptos"/><w:color w:val="$muted"/><w:sz w:val="15"/></w:rPr><w:t xml:space="preserve">CLIENT REVIEW COPY  |  PAGE </w:t></w:r><w:fldSimple w:instr="PAGE"><w:r><w:rPr><w:color w:val="$muted"/><w:sz w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple></w:p></w:ftr>
"@

$contentTypesXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>
"@

$rootRelsXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>
"@

$documentRelsXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>
"@

$coreXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>NESCO Tubes Website Content - Client Review</dc:title><dc:subject>Content used across NESCO tube product pages</dc:subject><dc:creator>NESCO Pipe &amp; Tubes</dc:creator><cp:lastModifiedBy>NESCO Pipe &amp; Tubes</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">2026-08-06T00:00:00Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2026-08-06T00:00:00Z</dcterms:modified></cp:coreProperties>
"@

$appXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Office Word</Application><AppVersion>16.0000</AppVersion><Company>NESCO Pipe &amp; Tubes</Company></Properties>
"@

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Add-ZipTextEntry {
  param($Archive, [string]$EntryName, [string]$Content)
  $entry = $Archive.CreateEntry($EntryName, [System.IO.Compression.CompressionLevel]::Optimal)
  $stream = $entry.Open()
  $writer = New-Object System.IO.StreamWriter($stream, (New-Object System.Text.UTF8Encoding($false)))
  $writer.Write($Content.TrimStart())
  $writer.Dispose()
  $stream.Dispose()
}

if (Test-Path $outputPath) { Remove-Item -LiteralPath $outputPath -Force }
$fileStream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::CreateNew)
$archive = New-Object System.IO.Compression.ZipArchive($fileStream, [System.IO.Compression.ZipArchiveMode]::Create, $false)
Add-ZipTextEntry $archive "[Content_Types].xml" $contentTypesXml
Add-ZipTextEntry $archive "_rels/.rels" $rootRelsXml
Add-ZipTextEntry $archive "word/document.xml" $documentXml
Add-ZipTextEntry $archive "word/styles.xml" $stylesXml
Add-ZipTextEntry $archive "word/header1.xml" $headerXml
Add-ZipTextEntry $archive "word/footer1.xml" $footerXml
Add-ZipTextEntry $archive "word/_rels/document.xml.rels" $documentRelsXml
Add-ZipTextEntry $archive "docProps/core.xml" $coreXml
Add-ZipTextEntry $archive "docProps/app.xml" $appXml
$archive.Dispose()
$fileStream.Dispose()

Write-Output $outputPath
