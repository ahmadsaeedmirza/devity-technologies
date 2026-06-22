import { NextResponse } from "next/server";
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

export async function POST(request: Request) {
  const apiKey = getEnv("RESEND_API_KEY");
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Server email is not configured. Missing RESEND_API_KEY environment variable.",
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    const raw = await request.json();
    payload = {
      name: String(raw.name ?? "").trim(),
      email: String(raw.email ?? "").trim(),
      projectType: String(raw.projectType ?? raw.type ?? "").trim(),
      message: String(raw.message ?? "").trim(),
      pageUrl: raw.pageUrl != null ? String(raw.pageUrl).trim() : undefined,
    };
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { name, email, projectType, message, pageUrl } = payload;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isEmailLike(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const toEmail = getEnv("CONTACT_TO_EMAIL") || "info@devitytechnologies.com";
  const fromEmail =
    getEnv("CONTACT_FROM_EMAIL") ||
    "Devity Technologies <info@devitytechnologies.com>";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message);
  const safePageUrl = pageUrl ? escapeHtml(pageUrl) : "";
  const safePageUrlDisplay = safePageUrl || "—";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F4EC;padding:24px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:92%;border:1px solid #D6DEE2;background:#FFFFFF;">
                <tr>
                  <td style="background:#0B1217;padding:18px 22px;">
                    <img src="https://devitytechnologies.com/devity-logo-white.png" alt="Devity Technologies" height="28" style="display:block;border:0;outline:none;text-decoration:none;">
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 22px 10px 22px;font-family:Inter,Arial,sans-serif;color:#0B1217;">
                    <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#006064;font-family:'JetBrains Mono',Consolas,monospace;">
                      New Contact Submission
                    </div>
                    <h1 style="margin:12px 0 0 0;font-size:22px;line-height:1.25;font-weight:600;">
                      ${safeName}
                    </h1>
                    <p style="margin:8px 0 0 0;color:#2E3A3F;font-size:14px;">
                      <strong>Email:</strong> ${safeEmail}<br>
                      <strong>Project type:</strong> ${safeProjectType}<br>
                      <strong>Page:</strong> ${safePageUrlDisplay}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 22px 22px 22px;font-family:Inter,Arial,sans-serif;color:#0B1217;">
                    <div style="margin-top:14px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#006064;font-family:'JetBrains Mono',Consolas,monospace;">
                      Message
                    </div>
                    <div style="margin-top:10px;padding:14px;border:1px solid #D6DEE2;background:#F7F4EC;color:#2E3A3F;font-size:14px;line-height:1.6;white-space:pre-wrap;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 22px;font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#5A6A70;border-top:1px solid #D6DEE2;">
                    Devity Technologies
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });
  } catch (error: unknown) {
    const errorMessage =
      typeof error === "object" && error !== null
        ? String((error as { message?: unknown }).message ?? "")
        : "";
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send message",
        details: errorMessage || undefined,
      },
      { status: 500 }
    );
  }

  let confirmationSent = true;
  let confirmationError: string | undefined;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We received your message — Devity Technologies",
      html: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F4EC;padding:24px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:92%;border:1px solid #D6DEE2;background:#FFFFFF;">
                <tr>
                  <td style="background:#0B1217;padding:18px 22px;">
                    <img src="https://devitytechnologies.com/devity-logo-white.png" alt="Devity Technologies" height="28" style="display:block;border:0;outline:none;text-decoration:none;">
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px;font-family:Inter,Arial,sans-serif;color:#0B1217;">
                    <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#006064;font-family:'JetBrains Mono',Consolas,monospace;">
                      Message received
                    </div>
                    <h1 style="margin:12px 0 0 0;font-size:22px;line-height:1.25;font-weight:600;">
                      Thanks, ${safeName || "there"}.
                    </h1>
                    <p style="margin:10px 0 0 0;color:#2E3A3F;font-size:14px;line-height:1.7;">
                      We’ve received your note about <strong>${safeProjectType}</strong>.
                      Our technical lead will reply within 24 hours (Mon–Fri).
                    </p>
                    <div style="margin-top:16px;padding:14px;border:1px solid #D6DEE2;background:#F7F4EC;">
                      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#006064;">
                        What happens next
                      </div>
                      <div style="margin-top:8px;color:#2E3A3F;font-size:14px;line-height:1.7;">
                        1) We review your requirements<br>
                        2) We respond with questions / a clear next step<br>
                        3) If it’s a fit, we’ll propose scope + timeline
                      </div>
                    </div>
                    <p style="margin:16px 0 0 0;color:#2E3A3F;font-size:14px;">
                      — Devity Technologies
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 22px;font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#5A6A70;border-top:1px solid #D6DEE2;">
                    If you didn’t submit this, ignore this email.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });
  } catch (error: unknown) {
    confirmationSent = false;
    confirmationError =
      typeof error === "object" && error !== null
        ? String((error as { message?: unknown }).message ?? "")
        : undefined;
  }

  return NextResponse.json({
    ok: true,
    confirmationSent,
    confirmationError: confirmationSent ? undefined : confirmationError,
  });
}
