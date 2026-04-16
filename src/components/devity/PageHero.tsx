interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

const PageHero = ({ eyebrow, title, description }: Props) => (
  <section className="relative pt-40 pb-24 overflow-hidden">
    <div className="absolute inset-0 grid-bg-light pointer-events-none" />
    {/* floating blob */}
    <div
      className="absolute -top-20 -right-32 w-[520px] h-[520px] opacity-50 blur-2xl animate-blob"
      style={{ background: "var(--gradient-brand)" }}
    />
    <div className="container relative z-10">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <span className="w-10 h-px bg-teal" />
          <span className="label-mono">{eyebrow}</span>
        </div>
        <h1
          className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-foreground-soft text-lg md:text-xl leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
