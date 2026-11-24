export type EnquiryStatus = "idle" | "sending" | "success" | "error";

const web3FormsAccessKey = "656f6e4d-efc3-425b-89e2-482e277939f2";

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

export async function submitEnquiry(form: HTMLFormElement, source: string) {
  const formData = new FormData(form);
  if (String(formData.get("website") || "").trim()) return;

  const submission = new FormData();
  submission.set("access_key", web3FormsAccessKey);
  submission.set("from_name", "NESCO Pipe & Tubes Website");
  submission.set("subject", `NESCO website enquiry: ${String(formData.get("product") || "New requirement").trim()}`);
  submission.set("Submitted from", source);

  formData.forEach((value, key) => {
    if (key === "website" || value instanceof File) return;
    const cleaned = value.trim();
    if (!cleaned) return;
    submission.set(key === "email" ? "email" : (fieldLabels[key] || key), cleaned);
  });

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submission,
      signal: controller.signal,
    });
    const result = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;
    if (!response.ok || !result?.success) {
      throw new Error(result?.message || "We could not send your enquiry. Please try again.");
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("The enquiry took too long to send. Please check your connection and try again.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
