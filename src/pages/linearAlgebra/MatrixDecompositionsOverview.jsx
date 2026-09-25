import { Link } from "react-router-dom";
import "./LinearAlgebraOverview.css";

export default function MatrixDecompositionsOverview() {
  return (
    <main className="home-page la-overview">
      <section className="guide-section">
        <div className="section-kicker">Linear Algebra · Module A</div>
        <h1>Matrix Decompositions &amp; Factorizations</h1>
        <p className="la-overview-lead">Learn how matrix structure turns a difficult calculation into simpler ones. Start with reusable elimination, specialize to positive-definite systems, study defective eigenvalues, and finish by measuring numerical sensitivity.</p>
        <p>Each topic has two reading parts, four worked examples, and a 20-question checkpoint at the end of Part 2. Answer every question and score at least 80% to unlock that part’s completion.</p>
        <p><Link to="/courses/linear-algebra">← All Linear Algebra modules</Link></p>
        <ol className="la-roadmap">
          <li>
            <Link className="la-roadmap-row" to="/linear-algebra/lu-decomposition/1">
              <span className="la-roadmap-num">1</span>
              <span className="la-roadmap-copy">
                <span className="la-roadmap-title">LU Decomposition</span>
                <small>Elimination as a reusable factorization: from A = LU to pivoted solves</small>
              </span>
              <span className="la-roadmap-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link className="la-roadmap-row" to="/linear-algebra/cholesky-decomposition/1">
              <span className="la-roadmap-num">2</span>
              <span className="la-roadmap-copy">
                <span className="la-roadmap-title">Cholesky Decomposition</span>
                <small>Positive-definite structure, square-root factors, and efficient symmetric solves</small>
              </span>
              <span className="la-roadmap-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link className="la-roadmap-row" to="/linear-algebra/jordan-normal-form/1">
              <span className="la-roadmap-num">3</span>
              <span className="la-roadmap-copy">
                <span className="la-roadmap-title">Jordan Normal Form</span>
                <small>Generalized eigenvectors, chain structure, matrix powers, and exact canonical form</small>
              </span>
              <span className="la-roadmap-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link className="la-roadmap-row" to="/linear-algebra/matrix-norms-conditioning/1">
              <span className="la-roadmap-num">4</span>
              <span className="la-roadmap-copy">
                <span className="la-roadmap-title">Vector &amp; Matrix Norms, Condition Number</span>
                <small>Measuring size, maximum stretch, and the sensitivity of a linear solve</small>
              </span>
              <span className="la-roadmap-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        </ol>
      </section>
      <section className="guide-section">
        <h2>Before you begin</h2>
        <p>Review elimination and triangular matrices for LU, symmetric matrices for Cholesky, eigenspaces for Jordan form, and singular values for conditioning.</p>
        <p><Link to="/linear-algebra/systems/1">Linear systems</Link> · <Link to="/linear-algebra/eigen/2">Diagonalization</Link> · <Link to="/linear-algebra/svd/1">Singular values</Link></p>
      </section>
    </main>
  );
}
