import { Link } from "react-router-dom";

const guides = {
  partial: {
    title: "Partial Derivatives",
    subtitle:
      "Functions of several variables, gradients, tangent planes, and optimization.",
    src: "/pages/partial-derivatives.html",
  },
  vector: {
    title: "Vector Calculus",
    subtitle:
      "Vector functions, line integrals, conservative fields, Green's theorem, and surfaces.",
    src: "/pages/vector-calculus.html",
  },
};

function StudyGuidePage({ guide }) {
  const page = guides[guide];

  return (
    <main className="study-page">
      <section className="study-heading">
        <div>
          <Link className="back-link" to="/">
            Home
          </Link>
          <h1>{page.title}</h1>
          <p>{page.subtitle}</p>
        </div>
        <div className="study-switcher">
          <Link to="/partial-derivatives">Partial Derivatives</Link>
          <Link to="/vector-calculus">Vector Calculus</Link>
        </div>
      </section>

      <section className="study-frame-shell">
        <iframe
          title={`${page.title} study guide`}
          src={page.src}
          className="study-frame"
        />
      </section>
    </main>
  );
}

export default StudyGuidePage;
