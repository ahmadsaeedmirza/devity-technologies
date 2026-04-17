import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;
    setSubmitting(true);

    const serviceId = (
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
    )?.trim();
    const publicKey = (
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
    )?.trim();
    const ownerTemplateId = (
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER as string | undefined
    )?.trim();
    const replyTemplateId = (
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY as string | undefined
    )?.trim();

    if (!serviceId || !publicKey || !ownerTemplateId || !replyTemplateId) {
      setSubmitting(false);
      toast.error("Email is not configured.", {
        description:
          "Missing EmailJS env vars. Configure VITE_EMAILJS_* (local: .env.local, Vercel: Project Settings → Environment Variables).",
      });
      return;
    }

    emailjs.init({ publicKey });

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      await emailjs.send(
        serviceId,
        ownerTemplateId,
        {
          name,
          email,
          from_name: name,
          from_email: email,
          project_type: projectType,
          message,
          page_url: typeof window !== "undefined" ? window.location.href : "",
        },
        { publicKey },
      );

      try {
        await emailjs.send(
          serviceId,
          replyTemplateId,
          {
            name,
            email,
            to_name: name || "there",
            to_email: email,
            project_type: projectType,
          },
          { publicKey },
        );

        toast.success("Message received.", {
          description: "Our technical lead will reply within 24 hours.",
        });
      } catch (error: unknown) {
        const details =
          typeof error === "object" && error !== null
            ? (error as { status?: number; text?: string }).text
            : undefined;
        toast.success("Message received.", {
          description: details
            ? `Our technical lead will reply within 24 hours. (Confirmation email failed: ${details})`
            : "Our technical lead will reply within 24 hours. (Confirmation email could not be sent.)",
        });
      }

      form.reset();
    } catch (error: unknown) {
      const status =
        typeof error === "object" && error !== null
          ? (error as { status?: number; text?: string }).status
          : undefined;
      const text =
        typeof error === "object" && error !== null
          ? (error as { status?: number; text?: string }).text
          : undefined;
      toast.error("Could not send message.", {
        description:
          status || text
            ? `EmailJS error${status ? ` (${status})` : ""}${text ? `: ${text}` : ""}`
            : "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field
          label="Company Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div>
        <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
          Project Type
        </label>
        <select
          name="type"
          required
          className="w-full bg-background border border-border focus:border-teal outline-none px-4 py-3.5 text-foreground font-body transition-colors"
        >
          <option>Web Platform / SaaS</option>
          <option>Mobile Application</option>
          <option>AI & Automation</option>
          <option>Audit / Consulting</option>
        </select>
      </div>

      <Field
        label="Tell us about your vision"
        name="message"
        as="textarea"
        placeholder="The problem you're solving, the outcome you want…"
        required
      />

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center gap-3 bg-ink text-background font-mono text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-teal-deep transition-colors duration-500 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get a Free Technical Audit"}
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
      </button>
    </form>
  );
};

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
}
const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  as = "input",
}: FieldProps) => (
  <div>
    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
      {label}
    </label>
    {as === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={6}
        className="w-full bg-background border border-border focus:border-teal outline-none px-4 py-3.5 text-foreground font-body transition-colors resize-none"
      />
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-background border border-border focus:border-teal outline-none px-4 py-3.5 text-foreground font-body transition-colors"
      />
    )}
  </div>
);

export default ContactForm;
