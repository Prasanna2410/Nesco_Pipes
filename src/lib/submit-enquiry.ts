export type EnquiryStatus = "idle" | "sending" | "success" | "error";

const fieldLabels: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  product: "Product / material",
  grade: "Material grade",
  standard: "Standard",
  specification: "Dimensions / specification",
  quantity: "Quantity",
  destination: "Delivery destination",
  certificates: "Required certificates",
  message: "Requirement",
};

export function submitEnquiry(form: HTMLFormElement, source: string) {
  const formData = new FormData(form);
  if (String(formData.get("website") || "").trim()) return;

  const details: string[] = [];
  formData.forEach((value, key) => {
    if (key === "website") return;
    if (value instanceof File) {
      if (value.size > 0) details.push(`Selected drawing / BOQ: ${value.name} (please attach this file before sending)`);
      return;
    }
    const cleaned = value.trim();
    if (cleaned) details.push(`${fieldLabels[key] || key}: ${cleaned}`);
  });

  const product = String(formData.get("product") || "New requirement").trim();
  const subject = `NESCO website enquiry: ${product}`;
  const body = [
    "Hello NESCO Sales Team,",
    "",
    "Please review the following enquiry:",
    "",
    ...details,
    "",
    `Submitted from: ${source}`,
    "",
    "Regards,",
    String(formData.get("name") || "").trim(),
  ].join("\n");

  const mailto = `mailto:sales@nescopipes.com?cc=${encodeURIComponent("exports@nescopipes.com")}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.assign(mailto);
}
