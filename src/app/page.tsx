import Image from "next/image";

const roadmap = [
  {
    step: "01",
    title: "Sleep (Sonito)",
    outcome: "Help families sleep better with clearer daily decisions.",
    image: "/assets/4.webp",
  },
  {
    step: "02",
    title: "Feeding & Solids",
    outcome: "Bring structure to mealtimes and reduce parent guesswork.",
    image: "/assets/5.webp",
  },
  {
    step: "03",
    title: "Development",
    outcome: "Support milestones with practical, personalized guidance.",
    image: "/assets/7.webp",
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
        <a
          href="https://sonito.app/"
          className="btn btn-primary nav-cta"
          target="_blank"
          rel="noreferrer"
        >
          Visit Sonito
        </a>
      </header>

      <main className="site-main">
        <section className="hero reveal" style={{ animationDelay: "120ms" }}>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Parent Products, Rebuilt</p>
              <h1>
                Our app Sonito improves baby sleep now.
              </h1>
              <p className="hero-subhead">
                Next: feeding/solids and development for{" "}
                <span className="age-highlight">ages 0-6</span>.
              </p>
              <div className="hero-actions">
                <a href="#sonito" className="btn btn-secondary">
                  See Sonito
                </a>
                <a href="#vision" className="btn btn-ghost">
                  See Roadmap
                </a>
              </div>
            </div>
            <div className="hero-art-wrap">
              <Image
                src="/assets/hero-parent-baby.webp"
                alt="Parent holding sleeping baby"
                width={1000}
                height={1000}
                className="hero-art"
              />
            </div>
          </div>
        </section>

        <section
          id="sonito"
          className="section section-split reveal"
          style={{ animationDelay: "220ms" }}
        >
          <div className="preview-card">
            <Image
              src="/sonito/ss_1.webp"
              alt="Sonito app preview"
              width={1000}
              height={750}
              className="preview-image"
            />
          </div>
          <div>
            <p className="eyebrow">Current Product</p>
            <h2>What Sonito is, in one line.</h2>
            <p className="sonito-tldr">
              Sonito is a baby sleep tracker and guidance app that helps parents
              reduce guesswork, improve sleep routines, and get more rest.
            </p>
            <ul className="impact-points">
              <li>Sleep outcomes first</li>
              <li>Clear, fast daily decisions</li>
              <li>Foundation for the full 0-6 stack</li>
            </ul>
            <a
              href="https://sonito.app/"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Open sonito.app
            </a>
          </div>
        </section>

        <section
          id="vision"
          className="section roadmap-section reveal"
          style={{ animationDelay: "300ms" }}
        >
          <p className="eyebrow">Roadmap</p>
          <h2>How Artly Labs grows from one product to a full 0-6 platform.</h2>
          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <article key={`${item.step}-${item.title}`} className="roadmap-card">
                <div className="roadmap-art-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="roadmap-art"
                  />
                </div>
                <div className="roadmap-step-wrap">
                  <p className="roadmap-step">Step {item.step}</p>
                </div>
                <h3>{item.title}</h3>
                <p className="roadmap-outcome">{item.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section callout reveal" style={{ animationDelay: "380ms" }}>
          <div className="founder-grid">
            <div className="founder-art-wrap">
              <Image
                src="/assets/founder-story-family.webp"
                alt="Family founder story illustration"
                width={1000}
                height={1000}
                className="founder-art"
              />
            </div>
            <div>
              <p className="eyebrow">About Us</p>
              <h2>Built by two parents who needed better tools.</h2>
              <p>
                Two parents, Andriy and Selene, built Artly Labs after struggling
                with outdated baby apps that were hard to trust. We are building
                simpler, more useful products that help families make better daily
                decisions with less stress.
              </p>
              <div className="hero-actions callout-actions">
                <a
                  href="https://sonito.app/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Sonito
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
