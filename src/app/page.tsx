import Image from "next/image";

const roadmap = [
  {
    stage: "Now",
    title: "Sleep (Sonito)",
    detail:
      "Prove daily value with a modern sleep product that helps parents make better decisions quickly.",
  },
  {
    stage: "Next",
    title: "Feeding & Solids",
    detail:
      "Expand into the next high-frequency workflow with the same speed, clarity, and personalization.",
  },
  {
    stage: "Then",
    title: "Routines & Development",
    detail:
      "Build a connected product stack for the full 0-6 journey under one trusted brand.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar reveal" style={{ animationDelay: "40ms" }}>
        <a href="/" className="brand" aria-label="Artly Labs">
          <Image
            src="/artly-labs-log.webp"
            alt="Artly Labs"
            width={340}
            height={78}
            priority
          />
        </a>
        <a href="https://sonito.app/" className="btn btn-primary" target="_blank" rel="noreferrer">
          Visit Sonito
        </a>
      </header>

      <main className="site-main">
        <section className="hero reveal" style={{ animationDelay: "120ms" }}>
          <p className="eyebrow">Parent Products, Rebuilt</p>
          <h1>A modern software company for parents with kids ages 0-6.</h1>
          <p className="hero-subhead">
            Artly Labs starts with Sonito in baby sleep, then expands into
            feeding/solids, routines, and development. The thesis is simple:
            legacy parent tools are outdated, and families deserve products that
            are faster, clearer, and truly personalized.
          </p>
          <div className="hero-actions">
            <a href="#sonito" className="btn btn-secondary">
              See Current Product
            </a>
            <a href="#vision" className="btn btn-ghost">
              See 0-6 Vision
            </a>
          </div>
        </section>

        <section id="sonito" className="section section-split reveal" style={{ animationDelay: "220ms" }}>
          <div>
            <p className="eyebrow">Current Product</p>
            <h2>Sonito is the wedge: sleep outcomes first.</h2>
            <p>
              Sonito proves demand in a painful, daily workflow. It gives
              parents an easier way to track patterns and make better sleep
              decisions, while creating the foundation for broader 0-6 products.
            </p>
            <div className="inline-brand">
              <Image src="/sonito/icon.png" alt="Sonito icon" width={34} height={34} />
              <span>Sonito by Artly Labs</span>
            </div>
            <a href="https://sonito.app/" className="text-link" target="_blank" rel="noreferrer">
              Open sonito.app
            </a>
          </div>
          <div className="preview-card">
            <Image
              src="/sonito/ss_1.png"
              alt="Sonito app preview"
              width={1000}
              height={750}
              className="preview-image"
            />
          </div>
        </section>

        <section id="vision" className="section reveal" style={{ animationDelay: "300ms" }}>
          <p className="eyebrow">Bigger Vision</p>
          <h2>From one focused product to a connected parent operating stack.</h2>
          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <article key={item.title} className="roadmap-card">
                <p className="stage">{item.stage}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section callout reveal" style={{ animationDelay: "380ms" }}>
          <p className="eyebrow">Founder-Market Fit</p>
          <h2>This started from firsthand pain, not abstract market research.</h2>
          <p>
            I am a new parent and experienced the problem directly. The existing
            tools felt 5-8 years behind. Artly Labs exists to build the products
            families should already have: simple, trustworthy, and genuinely
            useful every day.
          </p>
          <div className="hero-actions callout-actions">
            <a href="https://sonito.app/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Try Sonito
            </a>
            <a href="#vision" className="btn btn-ghost">
              View Roadmap
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
