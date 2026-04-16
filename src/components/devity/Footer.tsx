import { Link } from "react-router-dom";
import logoSrc from "@/assets/devity-mono-w.png";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "mailto:hello@devity.tech",
    label: "Email",
    Icon: Mail,
    placeholder: false,
  },
  { href: "#", label: "LinkedIn", Icon: Linkedin, placeholder: true },
  { href: "#", label: "Instagram", Icon: Instagram, placeholder: true },
] as const;

const Footer = () => (
  <footer className="relative bg-ink text-background mt-32 overflow-hidden">
    <div className="container py-24">
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-7">
          <p className="label-mono mb-6" style={{ color: "hsl(var(--mint))" }}>
            Let's talk
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-2xl">
            Have a project in mind?{" "}
            <span className="display-italic text-mint">Let's build it.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 px-8 py-5 bg-mint text-ink font-mono text-xs tracking-[0.25em] uppercase hover:bg-background transition-colors group"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/50 mb-4">
              Studio
            </p>
            <ul className="space-y-2 text-background/85">
              <li>
                <Link to="/about" className="hover:text-mint transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="hover:text-mint transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-mint transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/50 mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-background/85">
              <li>
                <a
                  href="mailto:hello@devity.tech"
                  className="hover:text-mint transition-colors"
                >
                  hello@devity.tech
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-mint transition-colors"
                >
                  Get a quote
                </Link>
              </li>
              <li className="text-background/60">Mon – Fri, 9–6 IST</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive logotype */}
      <div className="border-t border-background/15 pt-12">
        <div className="font-display text-[clamp(4rem,18vw,16rem)] leading-[0.85] tracking-tighter font-light text-background/10 select-none -mb-6">
          devity<span className="display-italic text-mint/30">.</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex gap-3">
            <img
              src={logoSrc}
              alt=""
              aria-hidden="true"
              className="shrink-0 h-[34px] w-auto"
            />
            <div className="flex flex-col leading-none text-background/50">
              <span className="font-display font-semibold tracking-tight text-lg text-background/50">
                Devity
              </span>
              <span className="font-mono text-[8.5px] tracking-[0.3em] uppercase mt-0.5">
                Technologies
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, Icon, placeholder }) => (
              <a
                key={label}
                href={href}
                onClick={placeholder ? (e) => e.preventDefault() : undefined}
                aria-label={label}
                title={placeholder ? `${label} (set URL)` : label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background/70 transition-all duration-300 hover:bg-mint hover:text-ink hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-background/50">
          © {new Date().getFullYear()} Devity Technologies — All rights reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
