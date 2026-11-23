import { NextResponse } from "next/server";

export const runtime = "nodejs";

type EnquiryPayload = {
  source?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  grade?: string;
  specification?: string;
  standard?: string;
  quantity?: string;
  destination?: string;
  certificates?: string;
  message?: string;
  website?: string;
};

const fieldLimit = 4000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedAttachmentExtensions = new Set(["pdf", "doc", "docx", "xls", "xlsx", "csv", "dwg", "dxf", "jpg", "jpeg", "png"]);

function clean(value: unknown, limit = fieldLimit) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}

async function sendWithFormSubmit(
  details: Array<[string, string]>,
  replyTo: string,
  recipients: string[],
  drawing: File | null,
) {
  const [primaryRecipient, ...copyRecipients] = recipients;
  if (!primaryRecipient) return false;

  const providerForm = new FormData();
  details.forEach(([label, value]) => providerForm.append(label, value));
  providerForm.set("_subject", `NESCO website enquiry: ${details.find(([label]) => label === "Product / material")?.[1] ?? "New requirement"}`);
  providerForm.set("_replyto", replyTo);
  providerForm.set("_template", "table");
  providerForm.set("_captcha", "false");
  providerForm.set("_url", "https://www.nescopipes.com");
  if (copyRecipients.length) providerForm.set("_cc", copyRecipients.join(","));
  if (drawing) providerForm.set("attachment", drawing, drawing.name.slice(0, 180));

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(primaryRecipient)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Origin: "https://www.nescopipes.com",
      Referer: "https://www.nescopipes.com/",
    },
    body: providerForm,
  });

  if (!response.ok) {
    console.error("FormSubmit rejected an enquiry:", response.status, await response.text());
    return false;
  }

  const result = await response.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
  const activationPending = /needs activation/i.test(result?.message ?? "");
  if (activationPending) console.warn("FormSubmit activation is pending for the NESCO sales inbox.");
  return result?.success === true || result?.success === "true" || activationPending;
}

export async function POST(request: Request) {
  let raw: EnquiryPayload;
  let drawing: File | null = null;
  try {
    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      const formData = await request.formData();
      raw = Object.fromEntries(
        Array.from(formData.entries()).filter(([, value]) => typeof value === "string"),
      ) as EnquiryPayload;
      const uploadedFile = formData.get("drawing");
      drawing = uploadedFile instanceof File && uploadedFile.size > 0 ? uploadedFile : null;
    } else {
      raw = await request.json() as EnquiryPayload;
    }
  } catch {
    return NextResponse.json({ message: "Invalid enquiry data." }, { status: 400 });
  }

  if (clean(raw.website)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    source: clean(raw.source, 100) || "Website enquiry",
    name: clean(raw.name, 120),
    company: clean(raw.company, 160),
    email: clean(raw.email, 200).toLowerCase(),
    phone: clean(raw.phone, 80),
    product: clean(raw.product, 240),
    grade: clean(raw.grade, 240),
    specification: clean(raw.specification),
    standard: clean(raw.standard, 500),
    quantity: clean(raw.quantity, 160),
    destination: clean(raw.destination, 240),
    certificates: clean(raw.certificates, 1000),
    message: clean(raw.message),
  };

  if (!enquiry.name || !emailPattern.test(enquiry.email) || !enquiry.product || (!enquiry.message && !enquiry.specification)) {
    return NextResponse.json({ message: "Please complete the required enquiry details." }, { status: 400 });
  }

  if (drawing && drawing.size > 5 * 1024 * 1024) {
    return NextResponse.json({ message: "The drawing or BOQ must be 5 MB or smaller." }, { status: 413 });
  }
  if (drawing && !allowedAttachmentExtensions.has(drawing.name.split(".").pop()?.toLowerCase() ?? "")) {
    return NextResponse.json({ message: "This drawing or BOQ file type is not supported." }, { status: 415 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const recipients = (process.env.CONTACT_TO_EMAILS || "sales@nescopipes.com,exports@nescopipes.com")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  const details: Array<[string, string]> = [
    ["Name", enquiry.name],
    ["Company", enquiry.company],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone],
    ["Product / material", enquiry.product],
    ["Material grade", enquiry.grade],
    ["Standard", enquiry.standard],
    ["Dimensions / standard", enquiry.specification],
    ["Quantity", enquiry.quantity],
    ["Delivery destination", enquiry.destination],
    ["Required certificates", enquiry.certificates],
    ["Attached drawing / BOQ", drawing?.name ?? ""],
    ["Requirement", enquiry.message],
    ["Submitted from", enquiry.source],
  ].filter(([, value]) => Boolean(value)) as Array<[string, string]>;

  const text = details.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const rows = details.map(([label, value]) => `<tr><th style="padding:10px 14px;text-align:left;vertical-align:top;border-bottom:1px solid #dbe5ee;color:#153b5d;width:190px">${escapeHtml(label)}</th><td style="padding:10px 14px;border-bottom:1px solid #dbe5ee;color:#435f77;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("");

  if (!apiKey || !from) {
    const delivered = await sendWithFormSubmit(details, enquiry.email, recipients, drawing);
    if (!delivered) {
      return NextResponse.json({ message: "We could not send the enquiry right now. Please try again or contact sales directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  const attachment = drawing ? [{
    filename: drawing.name.slice(0, 180),
    content: Buffer.from(await drawing.arrayBuffer()).toString("base64"),
  }] : undefined;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: enquiry.email,
      subject: `NESCO website enquiry: ${enquiry.product.replace(/[\r\n]+/g, " ")}`,
      text,
      html: `<div style="font-family:Arial,sans-serif;max-width:760px;margin:auto"><div style="padding:24px;background:#062b52;color:#fff"><p style="margin:0 0 7px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#85c9ff">NESCO Pipe &amp; Tubes</p><h1 style="margin:0;font-size:24px">New website enquiry</h1></div><table style="width:100%;border-collapse:collapse;background:#fff">${rows}</table></div>`,
      attachments: attachment,
    }),
  });

  if (!response.ok) {
    const providerError = await response.text();
    console.error("Resend rejected an enquiry email:", response.status, providerError);
    return NextResponse.json({ message: "We could not send the enquiry right now. Please try again or contact sales directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
