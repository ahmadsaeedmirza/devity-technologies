interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({ eyebrow, title, description, align = "left", className = "" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-16 ${className}`}>
    <div className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : ""}`}>
      <span className="w-8 h-px bg-teal" />
      <span className="label-mono">{eyebrow}</span>
    </div>
    <h2 className="font-display font-medium text-4xl md:text-6xl leading-[0.98] tracking-tight mb-6">
      {title}
    </h2>
    {description && (
      <p className="text-foreground-soft text-lg leading-relaxed max-w-2xl">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
