export type EnquiryStatus = "idle" | "sending" | "success" | "error";

export async function submitEnquiry(form: HTMLFormElement, source: string) {
  const formData = new FormData(form);
  formData.set("source", source);

  const response = await fetch("/api/enquiry", {
    method: "POST",
    body: formData,
  });
  const result = await response.json().catch(() => ({})) as { message?: string };

  if (!response.ok) {
    throw new Error(result.message || "We could not send your enquiry. Please try again.");
  }
}
