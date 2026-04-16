import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoSrc from "@/assets/devity-monogram.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="Devity Technologies home"
        >
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="shrink-0 h-[34px] w-auto"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold tracking-tight text-lg text-foreground">
              Devity
            </span>
            <span className="font-mono text-[8.5px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
              Technologies
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={Boolean(l.end)}
              className={({ isActive }) =>
                `font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative group ${
                  isActive
                    ? "text-teal"
                    : "text-foreground-soft hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gradient-brand transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-background hover:bg-teal-deep text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 group"
        >
          Get in touch
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
        </Link>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={Boolean(l.end)}
                className="font-display text-2xl text-foreground hover:text-teal"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink text-background text-xs font-mono tracking-[0.2em] uppercase"
            >
              Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
