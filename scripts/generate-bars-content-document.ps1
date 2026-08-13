$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $projectRoot "NESCO_Bars_Website_Content_Updated.docx"
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
Add-Label "UPDATED WEBSITE CONTENT"
Add-Paragraph "Bars Product Pages" 32 $navy $true 0 5 34
Add-Paragraph "Updated content for Round, Bright, Hex, Square and Flat Bars" 16 $blue $false 0 18 22
Add-Paragraph "Prepared for review and approval" 10 $muted $false 0 4 14
Add-Paragraph "NESCO Pipe & Tubes  |  11 August 2026" 10 $text $true 0 20 14

$coverTableRows = @(
  @("Document purpose", "Client verification of live website content"),
  @("Pages covered", "5 bar product pages"),
  @("Content structure", "Shared technical sections plus page-specific content"),
  @("Revision status", "Updated following technical content review")
)
Add-Table @("Review item", "Details") $coverTableRows @(28, 72)
Add-Paragraph "Scope note: chemical composition and mechanical properties follow the applicable material standard, grade, product form and supply condition. These values can be provided through the applicable Mill Test Certificate; large generic composition tables are intentionally not repeated on every bar page." 9.4 $muted $false 0 6 14
Add-PageBreak

# Contents
Add-Label "DOCUMENT MAP"
Add-Heading "Contents" 1
$contents = @(
  "01  Shared bar-page overview and product range",
  "02  Shared material grades, supply options and dimensions",
  "03  Shared standards, inspection and packaging",
  "04  Applications, industries and Why NESCO",
  "05  Shared FAQs and request-for-quotation content",
  "06  Round Bars page-specific content",
  "07  Bright Bars page-specific content",
  "08  Hex Bars page-specific content",
  "09  Square Bars page-specific content",
  "10  Flat Bars page-specific content"
)
Add-NumberedItems $contents
Add-Paragraph "How to review: Part A contains content repeated across all five bar pages. Part B contains the positioning, features, references, manufacturing route, FAQs and CTA that change for each bar type." 10 $muted $false 0 10 15

# Shared content
Add-PageBreak
Add-Label "PART A  |  SHARED CONTENT"
Add-Heading "Shared content used across all bar pages" 1
Add-Heading "Bars category summary" 2
Add-Paragraph "Hot-finished and precision bars for machining, shafts, supports, components and general fabrication."

Add-Heading "Opening overview" 2
Add-Paragraph "Bars provide feedstock for machining, shafts, valves, fasteners, structural components, supports, tooling and fabricated assemblies. NESCO supplies round, bright, hexagonal, square and flat bars in stainless steel and special alloys, subject to grade, size, condition and specification."
Add-Paragraph "Whether the requirement is for standard maintenance quantities or a project package, our team reviews each bar requirement against the requested material, dimensions, specification, service conditions, inspection and delivery plan. Availability may include ex-stock, mill production or made-to-order supply depending on the combination."

Add-Heading "Product range" 2
$rangeRows = @(
  @("Round Bars", "Versatile feedstock for shafts, pins, rings, machined components, fasteners and general fabrication."),
  @("Bright Bars", "Precision-finished bars offering improved dimensional accuracy and surface condition for machining."),
  @("Hex Bars", "Six-flat profiles for nuts, fittings, valve parts, connectors and wrenchable machined components."),
  @("Square Bars", "Four-sided profiles for machine components, supports, frames and general engineering."),
  @("Flat Bars", "Rectangular sections for supports, brackets, frames, base plates, wear strips and machined parts.")
)
Add-Table @("Product page", "Website positioning") $rangeRows @(27, 73)

Add-Heading "Available Material Grades" 2
$gradeRows = @(
  @("Stainless steel", "304/304L, 316/316L, 321, 347, 410, 420, 431", "Machining, shafts, food, chemical and general engineering"),
  @("Duplex / super duplex", "UNS S31803 / S32205, UNS S32750 / S32760", "High-strength, chloride-resistant machined components"),
  @("Nickel alloys", "UNS N08020, UNS N08028, UNS N04400, UNS N06600, UNS N06625, UNS N07718, UNS N08825, UNS N06022, UNS N10276", "Corrosion, temperature and high-performance components"),
  @("Copper-nickel", "UNS C70600 (90/10 Cu-Ni), UNS C71500 (70/30 Cu-Ni)", "Marine, seawater and condenser components"),
  @("Titanium", "Grades 2, 5 and 7", "Lightweight, corrosion-resistant and high-strength components")
)
Add-Table @("Material family", "Common grades", "Typical selection context") $gradeRows @(22, 40, 38)

Add-Heading "Supply and customisation" 2
$supplyRows = @(
  @("Dimensions", "Diameter, across flats, side or width × thickness"),
  @("Condition", "Hot rolled, forged, solution annealed, cold drawn, peeled, ground or polished"),
  @("Length", "Random, fixed or cut pieces"),
  @("Tolerance", "Commercial, precision or agreed tolerance class"),
  @("Surface", "Black, pickled, bright, ground, polished or machined"),
  @("Testing", "PMI, hardness, mechanical, UT or other agreed tests"),
  @("Identification", "Heat-wise tagging, stamping or colour coding as agreed")
)
Add-Table @("Parameter", "Typical information to specify") $supplyRows @(28, 72)

Add-Heading "Dimensions and ordering framework" 2
Add-Paragraph "Bar dimensions are ordered by profile-specific size and tolerance. Confirm machining allowance, straightness, corner geometry and cut-length tolerance where critical." 9.8 $muted
$dimensionRows = @(
  @("Round", "Diameter", "Hot rolled, peeled, ground or polished", "Diameter tolerance and straightness"),
  @("Hexagon", "Across flats", "Hot finished or cold drawn", "Corner condition and twist"),
  @("Square", "Side dimension", "Hot rolled or cold finished", "Squareness and corner radius"),
  @("Flat", "Width x thickness", "Hot/cold rolled or plate/strip-derived where permitted", "Manufacturing route, edge condition and flatness")
)
Add-Table @("Profile", "Size basis", "Common conditions", "Critical order detail") $dimensionRows @(18, 20, 34, 28)

Add-Heading "Manufacturing standards" 2
$standardRows = @(
  @("ASTM A276/A276M", "Stainless steel bars and shapes", "General bar material"),
  @("ASTM A479/A479M", "Stainless steel bars and shapes for use in boilers and other pressure vessels", "Pressure equipment"),
  @("ASTM A484/A484M", "General requirements for stainless bars, billets, shapes and forgings", "Tolerance / quality"),
  @("Applicable ASTM B-series specifications", "Nickel alloys, titanium alloys and copper-nickel/copper alloys, depending on grade and product form", "Special alloys"),
  @("EN 10088-3", "Technical delivery conditions for stainless semi-finished products, bars, rods, wire, sections and bright products for general purposes", "European reference"),
  @("Drawing / tolerance class", "Profile dimensions, straightness, finish and cut length", "Order-specific")
)
Add-Table @("Reference", "What it covers", "Role") $standardRows @(24, 54, 22)

Add-Heading "Inspection and testing" 2
$inspection = @(
  "Heat-number and MTC review",
  "Profile size and dimensional tolerance",
  "Straightness, twist and length inspection",
  "Surface examination and finish comparison",
  "PMI and hardness when specified",
  "Ultrasonic testing for critical bar",
  "Cut-list and piece-mark verification"
)
Add-NumberedItems $inspection

Add-Heading "Applications" 2
$applications = @(
  "Shafts and pump components",
  "Valves and fittings",
  "Fasteners and threaded parts",
  "Machined components",
  "Chemical and marine equipment",
  "Industrial machinery and OEM components",
  "Food/pharma equipment",
  "General engineering and fabrication"
)
Add-Bullets $applications

Add-Heading "Industries served" 2
$industries = @("Machining", "Valves & pumps", "Oil & gas", "Chemical processing", "Marine", "Industrial machinery & OEMs", "Food equipment", "General engineering")
Add-Bullets $industries

Add-Heading "Packaging and marking" 2
$packaging = @(
  "Heat-wise bundles with separators between grades",
  "Oiled or wrapped surfaces where appropriate",
  "Threaded or machined ends protected",
  "Wooden cases or crates for precision cut pieces where required",
  "Grade, heat, size, condition and PO tags on each bundle"
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

Add-Heading "Shared FAQ content used on bar pages" 2
$sharedFaqs = @(
  @("What information is needed to quote bar?", "State profile, grade, material standard, size, tolerance, condition, finish, length, quantity and testing."),
  @("Can bars be supplied in fixed cut lengths?", "Yes, subject to cutting tolerance, minimum order quantity and the selected grade and diameter."),
  @("Which finish is best for machining?", "Peeled, turned, ground or bright-drawn conditions may reduce machining allowance; the final component tolerance and surface requirement should guide selection."),
  @("Can heat-wise traceability be maintained after cutting?", "Piece marking or heat-wise segregation can be arranged when specified before processing.")
)
for ($index = 0; $index -lt $sharedFaqs.Count; $index++) { Add-QuestionAnswer $sharedFaqs[$index][0] $sharedFaqs[$index][1] ($index + 1) }

Add-Heading "Request-for-quotation content" 2
Add-Paragraph "Turn your specification into a supply-ready enquiry." 14 $navy $true
Add-Paragraph "Ready to source? Start with the details you already have. Our team will review the grade, dimensions, testing and delivery requirements together." 10 $muted
Add-Bullets @("Bar profile", "Material grade", "Standard", "Size and tolerance", "Condition and surface", "Length / cut list", "Quantity", "Testing and certification")
Add-Paragraph "The website enquiry form also collects name, company, work email, phone, delivery destination, additional testing/inspection requirements and an optional drawing or BOQ upload." 9.8 $text

Add-Heading "Technical publishing note" 2
Add-Paragraph "Chemical composition and mechanical properties follow the applicable material standard, grade, product form and supply condition, and can be provided through the applicable Mill Test Certificate. Standards shown are common references; confirm the exact specification, dimensions and supplementary requirements at quotation stage." 9.7 $muted

# Page-specific content data
$barPages = @(
  [PSCustomObject]@{
    Title = "Round Bars"
    Positioning = "Round bars are the most versatile bar form for shafts, pins, rings, machined components, fasteners and general fabrication. They are available in a wide range of diameters and sizes, subject to grade, manufacturing route, standard and availability."
    Features = @("Hot-rolled, forged, peeled, turned or cold-finished conditions", "Straight lengths or cut pieces", "Centreless ground or polished finishes", "UT and mechanical testing for critical applications")
    References = @("ASTM A276 / A479 for common stainless bar applications", "ASTM A484 general requirements", "Material-specific nickel, duplex, copper-nickel and titanium standards")
    Manufacturing = @("Round bar may be produced by hot rolling, forging or extrusion depending on the alloy, size and specified product route.", "Heat treatment develops the specified grade condition and mechanical properties.", "Straightening and optional peeling or turning remove scale and surface decarburisation.", "Cold drawing, centreless grinding or polishing achieves tighter size and finish where ordered.", "Diameter, straightness, surface, hardness and required ultrasonic inspection are verified heat-wise.")
    Faqs = @(@("What is the difference between hot-rolled, peeled and ground bar?", "Each route provides a different surface and dimensional accuracy. Machining allowance, tolerance and final component requirements should drive the selection."), @("Can round bars be ultrasonically tested?", "UT can be arranged for critical bar requirements when the test method, quality class and acceptance criteria are stated."))
    Cta = "Send your round bars specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Bright Bars"
    Positioning = "Bright bars are precision-finished bars that may be cold drawn, peeled, turned, ground or polished to achieve improved dimensional accuracy and surface finish."
    Features = @("Tighter dimensional tolerance", "Improved surface quality", "Reduced initial machining allowance", "Round, hexagonal, square and special profiles")
    References = @("Material grade standard plus agreed tolerance class", "Surface and straightness requirements stated on PO", "Condition/hardness matched to machining")
    Manufacturing = @("Hot-finished bar is inspected and prepared for cold finishing.", "Cold drawing, peeling or precision turning improves dimensional accuracy and surface quality.", "Stress relief or grade-specific heat treatment is completed when required.", "Straightening, centreless grinding and polishing produce the ordered tolerance and finish.", "Size, straightness, surface defects, hardness and identification are checked before sleeved packing.")
    Faqs = @(@("Why choose bright bar for machining?", "Cold drawing, peeling, grinding or polishing can provide closer dimensions and cleaner surfaces, reducing initial machining allowance."), @("Does bright bar always mean cold drawn?", "No. Bright finish may result from drawing, peeling, turning, grinding or polishing; the required route and condition should be specified."))
    Cta = "Send your bright bars specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Hex Bars"
    Positioning = "Hexagonal bars support the efficient production of nuts, fittings, valve parts, connectors and machined components that require wrenching flats."
    Features = @("Six-flat geometry for machining efficiency", "Cold-drawn or hot-finished forms", "Across-flat dimension and tolerance specified", "Cut lengths and chamfering available where confirmed")
    References = @("Applicable bar material standard", "Dimensional tolerance agreed by across-flats size")
    Manufacturing = @("Billet or round feedstock is hot rolled, extruded or cold drawn through hexagonal tooling.", "Heat treatment establishes the ordered grade and machining condition.", "Drawing or finishing controls the across-flats dimension, corner geometry and straightness.", "Bars are cut to random or fixed length and ends are prepared as specified.", "Across-flats size, twist, straightness, surface and heat identity are verified.")
    Faqs = @(@("How is hex bar size ordered?", "Hex bar is normally specified by the across-flats dimension, tolerance, length, grade and finish."), @("Can hex bars be cut and chamfered?", "Cut lengths and chamfered ends can be reviewed for repeat machining packages."))
    Cta = "Send your hex bars specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Square Bars"
    Positioning = "Square bars are used in machine components, frames, supports, grills, architectural fabrication and general engineering."
    Features = @("Uniform four-sided profile", "Hot-rolled or cold-finished conditions", "Straight or cut-length supply", "Machining and fabrication friendly")
    References = @("Applicable bar material standard", "Side dimension, corner radius and tolerance specified")
    Manufacturing = @("Billet is hot rolled, forged or cold drawn to a four-sided section.", "Heat treatment is completed to the ordered grade and condition.", "Straightening and finishing control side dimension, corner radius and twist.", "Bars are cut to the required length and may be ground or polished.", "Side size, squareness, straightness, surface quality and material identity are inspected.")
    Faqs = @(@("Which dimensions control square bar acceptance?", "Side dimension, corner radius, squareness, twist, straightness and length should be defined where tighter control is needed."), @("Are cold-finished square bars available?", "Cold-drawn or other finished conditions may be available depending on grade and size."))
    Cta = "Send your square bars specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  },
  [PSCustomObject]@{
    Title = "Flat Bars"
    Positioning = "Flat bars offer a rectangular section for supports, brackets, frames, base plates, wear strips and machined components. They may be hot or cold rolled, or supplied by cutting or shearing from plate or strip where permitted by the specified product standard and dimensional requirements."
    Features = @("Rolled or plate/strip-derived routes where permitted", "Wide range of width-to-thickness combinations", "Straight lengths or cut pieces", "Edge and surface condition selected for fabrication")
    References = @("Applicable bar or plate-derived standard", "Width, thickness, edge and straightness requirements")
    Manufacturing = @("Flat bars may be produced by hot or cold rolling, or supplied by cutting or shearing from plate or strip where permitted by the specified product standard and dimensional requirements.", "Heat treatment and descaling establish the required material condition.", "Width, thickness and edge condition are controlled by rolling, machining or grinding.", "Straight lengths or cut pieces are finished for fabrication or machining.", "Dimensions, straightness, edge quality, surface and traceability are verified.")
    Faqs = @(@("Is flat bar rolled or cut from plate?", "Both routes are used. The supply route affects edge condition, grain direction, tolerance and certification, so state any restriction in the order."), @("Which dimensions are required?", "Provide thickness, width, length, edge condition, straightness, grade and surface finish."))
    Cta = "Send your flat bars specification, drawing or bill of materials for a grade-and-dimension-matched quotation."
  }
)

$pageNumber = 6
foreach ($page in $barPages) {
  Add-PageBreak
  Add-Label ("PART B  |  PAGE-SPECIFIC CONTENT  |  {0:D2}" -f $pageNumber)
  Add-Heading $page.Title 1
  Add-Heading "Product positioning" 2
  Add-Paragraph $page.Positioning
  Add-Paragraph "Website opening: this page uses the shared Bars overview in Part A, followed by the page-specific technical content below." 9.4 $muted

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
  Add-Paragraph "The four shared Bars FAQs in Part A follow these two page-specific questions on the live website." 9.3 $muted

  Add-Heading "Request-for-quotation CTA" 2
  Add-Paragraph $page.Cta 10.5 $navy $true

  Add-Heading "Related products shown" 2
  $related = @($barPages | Where-Object { $_.Title -ne $page.Title } | ForEach-Object { $_.Title })
  Add-Bullets $related
  $pageNumber++
}

# Final approval page
Add-PageBreak
Add-Label "CLIENT CONFIRMATION"
Add-Heading "Review and approval notes" 1
Add-Paragraph "Please mark any changes required in product terminology, grades, standards, testing, applications or NESCO positioning. Approved corrections can then be applied consistently across all five bar pages." 10.5 $text
$approvalRows = @(
  @("Shared technical content", "Approved / Changes required", ""),
  @("Round Bars", "Approved / Changes required", ""),
  @("Bright Bars", "Approved / Changes required", ""),
  @("Hex Bars", "Approved / Changes required", ""),
  @("Square Bars", "Approved / Changes required", ""),
  @("Flat Bars", "Approved / Changes required", "")
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
<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="right"/><w:pBdr><w:bottom w:val="single" w:sz="8" w:space="6" w:color="$lightBlue"/></w:pBdr></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Aptos"/><w:b/><w:color w:val="$blue"/><w:sz w:val="15"/><w:spacing w:val="18"/></w:rPr><w:t>NESCO PIPE &amp; TUBES  |  UPDATED BARS CONTENT</w:t></w:r></w:p></w:hdr>
"@

$footerXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Aptos"/><w:color w:val="$muted"/><w:sz w:val="15"/></w:rPr><w:t xml:space="preserve">UPDATED CONTENT COPY  |  PAGE </w:t></w:r><w:fldSimple w:instr="PAGE"><w:r><w:rPr><w:color w:val="$muted"/><w:sz w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple></w:p></w:ftr>
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
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>NESCO Bars Website Content - Updated</dc:title><dc:subject>Updated content used across NESCO bar product pages</dc:subject><dc:creator>NESCO Pipe &amp; Tubes</dc:creator><cp:lastModifiedBy>NESCO Pipe &amp; Tubes</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">2026-08-11T00:00:00Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2026-08-11T00:00:00Z</dcterms:modified></cp:coreProperties>
"@

$appXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Office Word</Application><AppVersion>16.0000</AppVersion><Company>NESCO Pipe &amp; Tubes</Company></Properties>
"@

Add-Type -AssemblyName System.IO.Compression

function Add-ZipTextEntry {
  param($Archive, [string]$EntryName, [string]$Content)
  $entry = $Archive.CreateEntry($EntryName, [System.IO.Compression.CompressionLevel]::Optimal)
  $stream = $entry.Open()
  $writer = New-Object System.IO.StreamWriter($stream, (New-Object System.Text.UTF8Encoding($false)))
  $writer.Write($Content.TrimStart())
  $writer.Dispose()
  $stream.Dispose()
}

if (Test-Path -LiteralPath $outputPath) { [System.IO.File]::Delete($outputPath) }
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
