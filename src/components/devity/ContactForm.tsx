import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const json = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        details?: string;
        confirmationSent?: boolean;
        confirmationError?: string;
      } | null;

      if (!response.ok) {
        toast.error("Could not send message.", {
          description: json?.error || "Please try again in a moment.",
        });
        return;
      }

      if (json?.confirmationSent === false) {
        toast.success("Message received.", {
          description: json?.confirmationError
            ? `Our technical lead will reply within 24 hours. (Confirmation email failed: ${json.confirmationError})`
            : "Our technical lead will reply within 24 hours. (Confirmation email could not be sent.)",
        });
      } else {
        toast.success("Message received.", {
          description: "Our technical lead will reply within 24 hours.",
        });
      }

      form.reset();
    } catch (error: unknown) {
      toast.error("Could not send message.", {
        description:
          error instanceof Error
            ? error.message
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
