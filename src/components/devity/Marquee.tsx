const items = ["Web Platforms", "Mobile Ecosystems", "AI Automation", "SaaS Architecture", "Edge Computing", "Design Systems"];

const Marquee = () => (
  <section className="border-y border-border bg-background-alt py-8 overflow-hidden">
    <div className="marquee whitespace-nowrap">
      {[...items, ...items, ...items].map((it, i) => (
        <div key={i} className="flex items-center gap-16">
          <span className="font-display text-3xl md:text-5xl font-light tracking-tight text-foreground/80">
            {it}
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-teal">
            <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  </section>
);

export default Marquee;
