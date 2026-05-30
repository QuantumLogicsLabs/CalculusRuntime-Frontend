import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import "./AISolver.css";

const STREAMLIT_URL = "https://dapeaqzot5jtellyuyxjrf.streamlit.app/";

function AISolver() {
  const { user } = useAuth();
  const { addSolverHistory, recordVisit } = useProgress();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    recordVisit("ai-solver");
  }, [recordVisit]);

  const handleLoad = () => {
    setLoaded(true);
    if (user) {
      addSolverHistory({ page: "ai-solver", url: STREAMLIT_URL });
    }
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <main className="ai-solver-page">
      <div className="ai-solver-header">
        <div className="ai-solver-title-row">
          <span className="ai-solver-icon">🤖</span>
          <div>
            <h1 className="ai-solver-title">AI Calculus Solver</h1>
            <p className="ai-solver-sub">
              Powered by CalculusSolver — a neural tree-to-tree transformer trained on 5.5M calculus problems.
              Solves derivatives, integrals, gradients, Lagrange multipliers, and more with step-by-step explanations.
            </p>
          </div>
        </div>

        <div className="ai-solver-badges">
          <span className="ai-badge">Partial Derivatives</span>
          <span className="ai-badge">Integration</span>
          <span className="ai-badge">Gradients</span>
          <span className="ai-badge">Chain Rule</span>
          <span className="ai-badge">Lagrange Multipliers</span>
          <span className="ai-badge">Taylor Series</span>
        </div>

        {!user && (
          <div className="ai-solver-notice">
            <span>💡</span>
            <span>
              <a href="/signup">Create a free account</a> to save your solver history and track usage.
            </span>
          </div>
        )}
      </div>

      <div className="ai-solver-frame-wrap">
        {!loaded && (
          <div className="ai-solver-loading">
            <div className="ai-solver-spinner" aria-hidden="true" />
            <p>Loading CalculusSolver…</p>
          </div>
        )}

        {error ? (
          <div className="ai-solver-error">
            <p>Could not load the solver. It may be temporarily unavailable.</p>
            <a
              href={STREAMLIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ai-solver-open-btn"
            >
              Open in new tab ↗
            </a>
          </div>
        ) : (
          <iframe
            src={STREAMLIT_URL}
            title="CalculusSolver AI"
            className={`ai-solver-iframe${loaded ? " ai-solver-iframe--loaded" : ""}`}
            onLoad={handleLoad}
            onError={handleError}
            allow="clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        )}
      </div>

      <div className="ai-solver-info">
        <div className="ai-info-card">
          <div className="ai-info-icon">🧠</div>
          <div>
            <div className="ai-info-title">Neural Architecture</div>
            <div className="ai-info-desc">Tree-to-tree transformer with 8 layers, 512 hidden dims, specialized rule head for calculus operations.</div>
          </div>
        </div>
        <div className="ai-info-card">
          <div className="ai-info-icon">📊</div>
          <div>
            <div className="ai-info-title">Training Data</div>
            <div className="ai-info-desc">5.5M synthetic + real calculus problems including AP Calculus, MIT OCW, and multivariable problems.</div>
          </div>
        </div>
        <div className="ai-info-card">
          <div className="ai-info-icon">✅</div>
          <div>
            <div className="ai-info-title">Verified Answers</div>
            <div className="ai-info-desc">Solutions are numerically verified at 50 random test points using the SLaNg math library.</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AISolver;
