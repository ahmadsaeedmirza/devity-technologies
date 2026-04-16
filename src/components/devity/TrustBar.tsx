const logos = [
  "FINDSVET",
  "ACME SECURE",
  "TECHNO INSTRUMENTS",
  "E&R SALONS",
  "SGT CANADA",
  "SPECS WEAR",
];

const TrustBar = () => (
  <section className="border-y border-border py-10 bg-background">
    <div className="container">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-8">
        Trusted by ambitious teams
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
        {logos.map((l) => (
          <div
            key={l}
            className="font-display text-xl text-foreground/40 hover:text-foreground/80 transition-colors text-center tracking-widest"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
