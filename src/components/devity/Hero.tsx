import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Cog } from "lucide-react";

const Hero = () => (
  <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
    <div className="absolute inset-0 grid-bg-light pointer-events-none" />

    {/* Floating gear cluster */}
    <div
      className="absolute top-20 right-10 md:right-24 w-[360px] md:w-[520px] aspect-square animate-float-slow pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {/* soft glow (no panel background) */}
        <div className="absolute inset-0 rounded-full bg-mint-soft/50 blur-3xl opacity-60" />

        {/* gears */}
        <Cog
          className="absolute left-[62%] top-[60%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[320px] md:h-[320px] text-ink/20 mix-blend-multiply animate-spin-slow"
          strokeWidth={1.1}
          style={{ animationDuration: "28s" }}
        />
        <Cog
          className="absolute left-[38%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[230px] md:h-[230px] text-teal/24 mix-blend-multiply animate-spin-slow"
          strokeWidth={1.1}
          style={{ animationDuration: "22s", animationDirection: "reverse" }}
        />
        <Cog
          className="absolute left-[74%] top-[34%] -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[200px] md:h-[200px] text-teal-deep/30 mix-blend-multiply animate-spin-slow"
          strokeWidth={1.15}
          style={{ animationDuration: "18s", animationDirection: "reverse" }}
        />
        <Cog
          className="absolute left-[54%] top-[34%] -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[150px] md:h-[150px] text-ink/16 mix-blend-multiply animate-spin-slow"
          strokeWidth={1.2}
          style={{ animationDuration: "14s" }}
        />
      </div>
    </div>

    <div className="container relative z-10">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-10 border border-teal/30 bg-mint-soft/40 backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-3 h-3 text-teal" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-teal">
            Now booking Q3 engagements
          </span>
        </div>

        <h1
          className="font-display font-medium text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-tight mb-10 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Engineering
          <br />
          <span className="display-italic text-gradient-brand">
            digital
          </span>{" "}
          evolution.
        </h1>

        <p
          className="max-w-xl text-lg md:text-xl text-foreground-soft leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          Devity Technologies builds scalable web applications, mobile
          ecosystems, and AI-driven automation that turn complex challenges into
          seamless growth.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-ink text-background font-mono text-xs tracking-[0.25em] uppercase px-8 py-5 hover:bg-teal-deep transition-colors duration-500"
          >
            Start your project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 font-mono text-xs tracking-[0.25em] uppercase text-foreground border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-500"
          >
            View our work
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl border-t border-border pt-10">
          {[
            { v: "99.9%", l: "Uptime SLA" },
            { v: "40+", l: "Systems shipped" },
            { v: "24h", l: "Response time" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-6xl font-medium text-gradient-brand">
                {s.v}
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
