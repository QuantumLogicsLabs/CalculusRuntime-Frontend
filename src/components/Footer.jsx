import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Footer() {
  const year = new Date().getFullYear();
  const { user } = useAuth();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-logo">∂</span>
        <div>
          <p>CalcVoyager</p>
          <span>Study guides, practice, AI solver, and interactive tools.</span>
        </div>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses/calculus-analytical-geometry">Calc & Geometry</NavLink>
        <NavLink to="/courses/multivariable-calculus">Multivariable</NavLink>
        <NavLink to="/courses/linear-algebra">Linear Algebra</NavLink>
        <NavLink to="/courses/probability-statistics">Probability & Stats</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/ai-solver">AI Solver</NavLink>
        {user ? (
          <NavLink to="/dashboard">Dashboard</NavLink>
        ) : (
          <Link to="/signup">Sign up free</Link>
        )}
      </nav>

      <p className="footer-copy">© {year} CalcVoyager</p>
    </footer>
  );
}

export default Footer;
