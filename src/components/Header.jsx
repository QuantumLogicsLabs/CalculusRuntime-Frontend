import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-brand" to="/">
        Calculus Studio
      </NavLink>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/partial-derivatives">Partial Derivatives</NavLink>
        <NavLink to="/vector-calculus">Vector Calculus</NavLink>
        <NavLink to="/test">Continuity</NavLink>
        <NavLink to="/extreme">Extrema</NavLink>
        <NavLink to="/volumecalculator">Volume</NavLink>
      </nav>
    </header>
  );
}

export default Header;
