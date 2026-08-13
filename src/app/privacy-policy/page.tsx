import type { Metadata } from "next";
import { LegalDocumentPage, type LegalSection } from "@/components/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Privacy Policy | NESCO Pipe & Tubes",
  description: "Learn how NESCO Pipe & Tubes handles website enquiries, technical attachments, contact information and related business data.",
};

const sections: readonly LegalSection[] = [
  {
    id: "scope",
    title: "Scope and who we are",
    paragraphs: [
      "This Privacy Policy explains how NESCO Pipe & Tubes (\"NESCO\", \"we\", \"our\" or \"us\") handles personal data connected with this website, product enquiries and related business communications.",
      "The website is intended primarily for business customers, purchasing teams, EPC contractors, fabricators, consultants, distributors and other industrial users. This policy applies to information received through the website or generated when you contact us about our products and services. Separate contractual or employment notices may apply to information collected in other contexts.",
    ],
  },
  {
    id: "information-collected",
    title: "Information we may collect",
    paragraphs: ["We collect only information reasonably connected with operating the website, responding to an enquiry and managing a potential or existing business relationship."],
    bullets: [
      "Identity and contact details, including your name, company, job or purchasing role, work email address, telephone number and delivery location.",
      "Enquiry details, including product type, grade or UNS, standard, dimensions, quantity, application, inspection scope, certification requirements and requested delivery schedule.",
      "Documents and communications you choose to provide, such as drawings, bills of materials, specifications, purchase documents and email correspondence.",
      "Technical website information that may be produced by hosting or security systems, such as IP address, browser type, device information, access time, referring page and diagnostic logs.",
      "Commercial and transaction records created if an enquiry proceeds, including quotations, order correspondence, inspection instructions, dispatch details and invoicing information.",
    ],
  },
  {
    id: "collection-methods",
    title: "How information is collected",
    paragraphs: [
      "Information is collected when you send an email, use a product-enquiry interface, call our team, share a drawing or specification, request a quotation, place an order or otherwise communicate with NESCO.",
      "The current website enquiry interfaces prepare an email using the information entered by the user. Your email provider may process that message under its own privacy terms. Basic technical information may also be generated automatically by the website host, network and security infrastructure.",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    bullets: [
      "To understand, acknowledge and respond to product, technical and commercial enquiries.",
      "To prepare quotations and review grades, standards, dimensions, testing, documentation, packing and delivery requirements.",
      "To communicate about availability, clarifications, inspection, order status, dispatch and after-sales matters.",
      "To coordinate, where necessary, with mills, stockists, processors, laboratories, inspection agencies, logistics providers and professional advisers.",
      "To maintain commercial, quality, tax, accounting, warranty, dispute-resolution and compliance records.",
      "To protect the website, detect misuse, diagnose technical issues and improve website content and usability.",
      "To comply with applicable law, lawful requests and regulatory or judicial requirements.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and website technologies",
    paragraphs: [
      "NESCO does not currently operate third-party advertising networks or use the website to sell visitor data. The website or its hosting infrastructure may use essential technologies needed for security, reliable delivery, performance and session functionality.",
      "If optional analytics, advertising or similar non-essential technologies are introduced, this policy and any required consent controls should be updated before those technologies are used. You can also manage browser storage through your browser settings, although blocking essential technologies may affect site operation.",
    ],
  },
  {
    id: "sharing",
    title: "When information may be shared",
    paragraphs: ["We do not sell or rent personal data. Information may be shared only where reasonably necessary for the enquiry, supply process, website operation or legal compliance."],
    bullets: [
      "With website hosting, email, IT, security and business-service providers acting for NESCO.",
      "With relevant mills, suppliers, processors or testing laboratories when technical review, availability or quotation support requires it.",
      "With approved inspection agencies, freight forwarders, carriers, customs agents or other project participants when requested or needed for an order.",
      "With accountants, auditors, insurers, legal advisers, regulators, courts or authorities where appropriate or legally required.",
      "In connection with a genuine corporate restructuring, subject to appropriate confidentiality and legal safeguards.",
    ],
  },
  {
    id: "retention-security",
    title: "Retention and security",
    paragraphs: [
      "We retain information for only as long as reasonably necessary for the purpose for which it was collected, including enquiry follow-up, repeat requirements, contractual performance, product traceability, warranty, accounting, tax, legal and dispute-resolution needs. Retention periods may vary with the type of record and applicable obligation.",
      "NESCO uses reasonable organisational and technical measures intended to protect information against unauthorised access, alteration, loss, misuse or disclosure. No email, website or electronic storage method is completely secure, so absolute security cannot be guaranteed.",
    ],
  },
  {
    id: "international",
    title: "International processing",
    paragraphs: [
      "NESCO serves Indian and international markets. Depending on the enquiry, destination and service providers involved, information may be processed or accessed outside your state or country. Where applicable, we take reasonable steps to use the information for the stated business purpose and in accordance with applicable data-protection requirements.",
    ],
  },
  {
    id: "rights",
    title: "Your choices and privacy rights",
    paragraphs: ["Subject to applicable law and verification of the request, you may ask NESCO to provide information about relevant personal data, correct inaccurate or incomplete data, erase data that is no longer required, withdraw consent where processing depends on consent, or address a privacy grievance. Applicable law may also provide rights relating to nomination or other remedies."],
    bullets: [
      "Send requests to sales@shreeimpexalloys.com with the subject line \"Privacy Request\".",
      "Describe the information or communication concerned and the action requested.",
      "We may request reasonable information to verify identity, authority and the scope of the request.",
      "Certain records may need to be retained where required for legal, contractual, tax, traceability, security or dispute purposes.",
    ],
  },
  {
    id: "children-links",
    title: "Children and third-party websites",
    paragraphs: [
      "This B2B website is not directed to children. NESCO does not knowingly seek personal data from anyone under 18 through this website. If you believe a child has provided personal data, contact us so the matter can be reviewed and appropriate action taken.",
      "The website may link to maps, email providers, standards bodies or other third-party services. Their privacy practices are controlled by those organisations, and NESCO is not responsible for their independent websites or policies.",
    ],
  },
  {
    id: "updates-contact",
    title: "Policy updates and contact",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in the website, business practices, service providers or applicable requirements. The revised version will be published on this page with an updated date.",
      "For privacy questions or requests, email sales@shreeimpexalloys.com, call +91 91679 63226, or write to NESCO Pipe & Tubes, Shop No. 4/124, T. P. Street, 6th Kumbharwada, Mumbai 400004, Maharashtra, India.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage
    documentCode="PRIVACY-01"
    eyebrow="Website governance / Data handling"
    title="Privacy Policy"
    introduction="A clear explanation of the information connected with NESCO website visits, technical enquiries and business communications—and how that information is handled."
    effectiveDate="13 August 2026"
    highlights={[["B2B scope", "Website visitors, product enquiries and related commercial communication."], ["No data sales", "NESCO does not sell or rent personal data."], ["Direct contact", "Privacy questions can be sent directly to the Mumbai supply desk."]]}
    sections={sections}
    notice="This policy is written for NESCO’s current B2B website and enquiry process. It should be reviewed periodically as the website, service providers, business practices and applicable legal requirements evolve."
  />;
}
