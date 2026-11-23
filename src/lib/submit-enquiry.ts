export type EnquiryStatus = "idle" | "sending" | "success" | "error";

const fallbackRecipient = "sales@nescopipes.com";

async function submitDirectly(formData: FormData, source: string) {
  formData.set("_subject", `NESCO website enquiry: ${String(formData.get("product") || "New requirement")}`);
  formData.set("_replyto", String(formData.get("email") || ""));
  formData.set("_template", "table");
  formData.set("_captcha", "false");
  formData.set("_cc", "exports@nescopipes.com");
  formData.set("Submitted from", source);

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(fallbackRecipient)}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });
  const result = await response.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
  const activationPending = /needs activation/i.test(result?.message ?? "");

  if (!response.ok || (!activationPending && result?.success !== true && result?.success !== "true")) {
    throw new Error("We could not send your enquiry. Please email sales@nescopipes.com or call +91 79773 43455.");
  }
}

export async function submitEnquiry(form: HTMLFormElement, source: string) {
  const formData = new FormData(form);
  formData.set("source", source);

  const response = await fetch("/api/enquiry", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    await submitDirectly(formData, source);
  }
}
