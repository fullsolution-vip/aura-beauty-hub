const stockists = [
  "Woolworths",
  "Clicks",
  "Dis-Chem",
  "Foschini",
  "Edgars",
  "Truworths",
  "Pick n Pay",
  "Takealot",
];

export function StockistMarquee() {
  return (
    <div className="border-y border-border/60 py-8 overflow-hidden bg-card">
      <div className="container-page mb-6 text-center">
        <p className="eyebrow">Trusted by leading retailers</p>
      </div>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
          {[...stockists, ...stockists].map((name, i) => (
            <span
              key={i}
              className="font-serif text-2xl md:text-3xl text-muted-foreground/70 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
