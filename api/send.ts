import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  message: string;
  pageUrl?: string;
};

const getEnv = (key: string) => (process.env[key] ?? "").trim();

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const isEmailLike = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const parseBody = (req: VercelRequest): ContactPayload => {
  const raw = req.body;
  const body =
    typeof raw === "string" ? (JSON.parse(raw) as unknown) : (raw as unknown);

  if (!body || typeof body !== "object") {
    throw new Error("Invalid JSON body");
  }

  const obj = body as Record<string, unknown>;
  return {
    name: String(obj.name ?? "").trim(),
    email: String(obj.email ?? "").trim(),
    projectType: String(obj.projectType ?? obj.type ?? "").trim(),
    message: String(obj.message ?? "").trim(),
    pageUrl:
      obj.pageUrl != null
        ? String(obj.pageUrl).trim()
        : obj.page_url != null
          ? String(obj.page_url).trim()
          : undefined,
  };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ ok: false, error: "Method not allowed" });
    return;
  }

  const apiKey = getEnv("RESEND_API_KEY");
  if (!apiKey) {
    res.status(500).json({
      ok: false,
      error:
        "Server email is not configured. Missing RESEND_API_KEY environment variable.",
    });
    return;
  }

  let payload: ContactPayload;
  try {
    payload = parseBody(req);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid request body" });
    return;
  }

  const { name, email, projectType, message, pageUrl } = payload;

  if (!name || !email || !projectType || !message) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  if (!isEmailLike(email)) {
    res.status(400).json({ ok: false, error: "Invalid email" });
    return;
  }

  const resend = new Resend(apiKey);

  const toEmail = getEnv("CONTACT_TO_EMAIL") || "info@devitytechnologies.com";
  const fromEmail =
    getEnv("CONTACT_FROM_EMAIL") ||
    "Devity Technologies <info@devitytechnologies.com>";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const safePageUrl = pageUrl ? escapeHtml(pageUrl) : "";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6">
          <h2 style="margin: 0 0 12px">New Message from Devity Website</h2>
          <p style="margin: 0 0 6px"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 6px"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 0 0 6px"><strong>Project Type:</strong> ${safeProjectType}</p>
          ${safePageUrl ? `<p style=\"margin: 0 0 6px\"><strong>Page:</strong> ${safePageUrl}</p>` : ""}
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0" />
          <p style="margin: 0"><strong>Message:</strong></p>
          <p style="margin: 8px 0 0">${safeMessage}</p>
        </div>
      `,
    });
  } catch (error: unknown) {
    const message =
      typeof error === "object" && error !== null
        ? String((error as { message?: unknown }).message ?? "")
        : "";
    res.status(500).json({
      ok: false,
      error: "Failed to send message",
      details: message || undefined,
    });
    return;
  }

  let confirmationSent = true;
  let confirmationError: string | undefined;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We received your message — Devity Technologies",
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6">
          <p style="margin: 0 0 10px">Hi ${safeName || "there"},</p>
          <p style="margin: 0 0 10px">Thanks for reaching out to Devity Technologies. We’ve received your message and our technical lead will reply within 24 hours (Mon–Fri).</p>
          <p style="margin: 0">— Devity Technologies</p>
        </div>
      `,
    });
  } catch (error: unknown) {
    confirmationSent = false;
    confirmationError =
      typeof error === "object" && error !== null
        ? String((error as { message?: unknown }).message ?? "")
        : undefined;
  }

  res.status(200).json({
    ok: true,
    confirmationSent,
    confirmationError: confirmationSent ? undefined : confirmationError,
  });
}
