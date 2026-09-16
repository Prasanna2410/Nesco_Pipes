import type { Metadata } from "next";
import { LegalDocumentPage, type LegalSection } from "@/components/LegalDocumentPage";
import { companyContact } from "@/lib/company-contact";

export const metadata: Metadata = {
  title: "Terms & Conditions | NESCO Pipe & Tubes",
  description: "Terms governing access to the NESCO Pipe & Tubes website, product information, enquiries and quotations.",
};

const sections: readonly LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance and scope",
    paragraphs: [
      "These Terms & Conditions govern access to and use of the NESCO Pipe & Tubes website. By using the website, you agree to these terms. If you do not agree, please discontinue use of the website.",
      "These are website terms. A quotation, order acknowledgement, invoice, purchase order acceptance or separately signed agreement may contain additional or different commercial terms governing an actual supply. Where there is a conflict concerning a confirmed transaction, the mutually accepted transaction document takes priority for that transaction.",
    ],
  },
  {
    id: "website-purpose",
    title: "Website purpose and information",
    paragraphs: [
      "The website provides general information about NESCO, its product forms, material families, standards, capabilities and enquiry process. Content is intended to support preliminary commercial and technical discussion; it is not engineering design advice, a product warranty, a certificate of conformity or an offer capable of acceptance without further confirmation.",
      "Standards, grades, dimensions, properties, images, applications and availability shown on the website are general references. Applicable editions, product-form coverage, tolerances, service suitability and supplementary requirements must be confirmed for each enquiry and order.",
    ],
  },
  {
    id: "enquiries-quotations",
    title: "Enquiries, quotations and order formation",
    bullets: [
      "A website submission or email is an enquiry and does not create a contract or reserve material.",
      "Quotations are subject to their stated validity, availability, quantity, technical scope, commercial assumptions, taxes, freight, payment terms and delivery conditions.",
      "An order is binding on NESCO only after written acceptance or issue of an order acknowledgement by an authorised representative.",
      "Changes to an accepted requirement, including grade, dimensions, quantity, testing, documentation or delivery, require written review and may affect price and schedule.",
      "Verbal discussions do not amend confirmed terms unless recorded and accepted in writing.",
    ],
  },
  {
    id: "buyer-responsibility",
    title: "Customer specifications and responsibility",
    paragraphs: [
      "The customer is responsible for providing a complete and accurate requirement, including product form, exact grade or UNS, material and dimensional standards, edition where relevant, dimensions, tolerances, quantity, end or surface condition, inspection, documentation, packing, delivery destination and intended service information needed for review.",
      "Final material selection, engineering design, code compliance and suitability for a particular pressure, temperature, fluid, corrosion environment, fabrication method or end use remain the responsibility of the customer and its qualified engineer unless NESCO expressly accepts a separate design responsibility in writing.",
    ],
  },
  {
    id: "product-supply",
    title: "Product availability, substitutions and tolerances",
    paragraphs: [
      "Availability may be ex-stock, mill production, sourced supply or made to order. Product appearance, marking, packaging and manufacturing route may vary within the ordered specification and accepted commercial terms.",
      "No material grade, standard, manufacturing route, origin, dimension, quantity or other technical requirement will be treated as substituted merely because an alternative appears similar. Any proposed deviation or substitution requiring customer approval must be recorded in writing before supply.",
    ],
  },
  {
    id: "inspection-documents",
    title: "Inspection, testing and documentation",
    paragraphs: [
      "Material test certificates, PMI, NDT, dimensional reports, heat-treatment records, third-party witnessing or other documents are supplied only when included in the accepted requirement. The inspection agency, scope, hold points, acceptance criteria and document format should be agreed before order placement.",
      "Website references to testing or certification indicate potential support, not automatic inclusion with every product. Costs and delivery impact associated with additional testing, witnessing or documentation may be quoted separately.",
    ],
  },
  {
    id: "price-delivery",
    title: "Price, payment, delivery and risk",
    paragraphs: [
      "Prices, currency, taxes, duties, freight, insurance, payment milestones, Incoterms where applicable, delivery basis and banking details are governed by the accepted commercial documents. Website content does not fix a price.",
      "Delivery dates are estimates unless expressly accepted as firm in writing. NESCO is not responsible for delay caused by events reasonably outside its control, including mill disruption, raw-material shortage, transport interruption, port or customs delay, government action, natural event, labour disruption, utility failure, conflict, epidemic or similar force-majeure circumstance. The parties should cooperate in good faith regarding the affected schedule.",
    ],
  },
  {
    id: "drawings-ip",
    title: "Customer documents and intellectual property",
    paragraphs: [
      "You confirm that you are authorised to provide drawings, specifications, trademarks and other material submitted to NESCO. You permit NESCO to use and share them only as reasonably needed to review, quote, source, manufacture, inspect, pack or deliver the requirement, subject to applicable confidentiality obligations.",
      "Unless otherwise stated, the website design, text, graphics, logos, images, data arrangement and other content are owned by or licensed to NESCO and are protected by applicable intellectual-property law. You may view or print reasonable extracts for legitimate internal purchasing and evaluation purposes, but may not republish, sell, license, scrape, systematically copy or commercially exploit website content without written permission.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable website use",
    bullets: [
      "Do not use the website for unlawful, fraudulent, misleading, abusive or harmful activity.",
      "Do not attempt to gain unauthorised access, disrupt operation, introduce malicious code, probe security or overload the website.",
      "Do not misrepresent an affiliation with NESCO or use NESCO branding in a way that implies unauthorised sponsorship or endorsement.",
      "Do not frame or reproduce the website in a way that changes its presentation or misleads users about the source of content.",
      "Automated indexing by legitimate search engines is permitted; other systematic extraction requires prior written permission.",
    ],
  },
  {
    id: "external-links",
    title: "External links",
    paragraphs: [
      "The website may contain links to maps, email services, standards organisations or other third-party resources. Links are provided for convenience and do not necessarily constitute endorsement. NESCO does not control and is not responsible for the availability, security, accuracy, content or policies of independent third-party websites.",
      "You may link fairly to public NESCO pages provided the link is not deceptive, does not imply unauthorised endorsement and does not misuse NESCO trademarks or artwork. NESCO may request removal of a link that creates confusion, legal risk or reputational harm.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers and limitation of liability",
    paragraphs: [
      "NESCO takes reasonable care in preparing website content but does not warrant that every page is complete, current, error-free or continuously available. Website information is provided on an \"as available\" basis and should be verified through an official quotation, approved technical document or certificate before reliance for procurement or engineering decisions.",
      "To the maximum extent permitted by applicable law, NESCO is not liable for indirect, incidental, special or consequential loss arising solely from website use, inability to access the website, reliance on unconfirmed website information, or third-party links. Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for fraud or fraudulent misrepresentation.",
    ],
  },
  {
    id: "privacy-changes",
    title: "Privacy, changes and severability",
    paragraphs: [
      "Use of personal data connected with the website is described in the NESCO Privacy Policy. We may update these Terms & Conditions to reflect changes in the website, business practices or applicable requirements. Revised terms take effect when published on this page unless a later date is stated.",
      "If a provision is found invalid or unenforceable, the remaining provisions continue to apply. A failure to enforce a provision immediately does not waive the right to enforce it later.",
    ],
  },
  {
    id: "law-contact",
    title: "Governing law and contact",
    paragraphs: [
      "These website terms are governed by the laws of India. Subject to any mandatory legal requirement and any different dispute clause in an accepted transaction document, courts with jurisdiction in Mumbai, Maharashtra will have jurisdiction over disputes concerning website use.",
      `Questions about these terms may be sent to ${companyContact.salesEmail} or ${companyContact.exportsEmail}, or addressed to NESCO Pipe & Tubes, ${companyContact.address}.`,
    ],
  },
];

export default function TermsPage() {
  return <LegalDocumentPage
    documentCode="TERMS-01"
    eyebrow="Website governance / Conditions of use"
    title="Terms & Conditions"
    introduction="The rules governing use of this website and the distinction between general website information, an enquiry, a quotation and an accepted product order."
    effectiveDate="13 August 2026"
    highlights={[["Website scope", "These terms govern website use and preliminary product information."], ["Order control", "Accepted quotations and transaction documents govern confirmed supply."], ["Technical review", "Product suitability and complete specifications must be confirmed for each order."]]}
    sections={sections}
    notice="These terms are written for NESCO’s current informational website and specification-led B2B enquiry process. Confirmed product supply remains governed by the mutually accepted commercial and technical documents for that transaction."
  />;
}
