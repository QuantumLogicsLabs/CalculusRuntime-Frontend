import { Link } from "react-router-dom";

const guideCards = [
  {
    title: "Partial Derivatives",
    description:
      "Limits, continuity, gradients, tangent planes, differentials, and optimization for functions of several variables.",
    path: "/partial-derivatives",
    meta: "7 sections · MCQ practice · Formula review",
  },
  {
    title: "Vector Calculus",
    description:
      "Vector-valued functions, line integrals, conservative fields, Green's theorem, surfaces, and surface area.",
    path: "/vector-calculus",
    meta: "5 modules · Worked examples · Quick reference",
  },
];

const toolLinks = [
  { label: "Continuity Finder", path: "/test" },
  { label: "Extreme Value Finder", path: "/extreme" },
  { label: "Volume Calculator", path: "/volumecalculator" },
];

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Multivariable Calculus Studio</p>
          <h1>Study guides, practice, and calculators in one place.</h1>
          <p>
            A focused home for the calculus pages in this site: clean topic
            navigation, readable notes, interactive checks, and companion tools
            when you need to compute instead of scroll.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/partial-derivatives">
              Start studying
            </Link>
            <Link className="secondary-action" to="/vector-calculus">
              Open vector calculus
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Calculus topic map">
          <div className="orbit-grid">
            <span>f(x,y)</span>
            <span>grad f</span>
            <span>int C</span>
            <span>curl</span>
            <span>dA</span>
            <span>flux</span>
          </div>
        </div>
      </section>

      <section className="guide-section" aria-labelledby="guide-heading">
        <div className="section-kicker">Study Guides</div>
        <h2 id="guide-heading">Choose a path</h2>
        <div className="guide-grid">
          {guideCards.map((guide) => (
            <Link className="guide-card" key={guide.path} to={guide.path}>
              <span>{guide.meta}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="tool-strip" aria-labelledby="tools-heading">
        <div>
          <div className="section-kicker">Companion Tools</div>
          <h2 id="tools-heading">Calculate while you learn</h2>
        </div>
        <div className="tool-links">
          {toolLinks.map((tool) => (
            <Link key={tool.path} to={tool.path}>
              {tool.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
