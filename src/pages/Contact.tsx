import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import ContactForm from "@/components/devity/ContactForm";
import { Clock, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const socialLinks = [
  {
    href: "mailto:info@devitytechnologies.com",
    label: "Email",
    Icon: Mail,
    placeholder: false,
  },
  {
    href: "https://www.linkedin.com/company/devity-technologies/",
    label: "LinkedIn",
    Icon: Linkedin,
    placeholder: true,
  },
  {
    href: "https://www.instagram.com/devity_technologies?utm_source=qr&igsh=czN5MXRqdHc0OWF3",
    label: "Instagram",
    Icon: Instagram,
    placeholder: true,
  },
] as const;

const Contact = () => {
  useSEO({
    title: "Contact",
    description:
      "Drop us a message and our technical lead will reply within 24 hours (Mon–Fri). Remote-first across IST / GMT.",
    path: "/contact",
  });

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build something{" "}
            <span className="display-italic text-gradient-brand">
              exceptional.
            </span>
          </>
        }
        description="Ready to scale? Drop us a message and our technical lead will reply within 24 hours. No sales loops, no discovery calls before there's substance."
      />

      <section className="pb-32">
        <div className="container grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start">
            <div className="bg-mint-soft/40 border border-border p-8">
              <p className="label-mono mb-4">Direct lines</p>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@devitytechnologies.com"
                      className="text-foreground hover:text-teal transition-colors"
                    >
                      info@devitytechnologies.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      Response
                    </div>
                    <div className="text-foreground">Within 24h, Mon–Fri</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      Where
                    </div>
                    <div className="text-foreground">
                      Remote-first · IST / GMT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border p-8">
              <p className="label-mono mb-4">Typical timelines</p>
              <ul className="space-y-3 font-mono text-sm text-foreground-soft">
                <li className="flex justify-between">
                  <span>Audit / sprint</span>
                  <span className="text-foreground">1–2 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>MVP build</span>
                  <span className="text-foreground">4–8 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>Platform / SaaS</span>
                  <span className="text-foreground">8–16+ weeks</span>
                </li>
              </ul>
            </div>

            <div className="border border-border p-8">
              <p className="label-mono mb-4">Social</p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, label, Icon, placeholder }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={placeholder ? `${label} (set URL)` : label}
                    onClick={
                      placeholder ? (e) => e.preventDefault() : undefined
                    }
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:bg-mint-soft/40 hover:text-teal hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 bg-background border border-border p-8 md:p-12 shadow-card">
            <p className="label-mono mb-10">Contact us</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
