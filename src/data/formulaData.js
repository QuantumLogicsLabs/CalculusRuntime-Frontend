// src/data/formulaData.js
// Add or extend topics/formulas freely

const formulaData = {
  "partial-derivatives": {
    title: "Partial Derivatives",
    color: "#667eea",
    formulas: [
      {
        name: "First Partial Derivative (x)",
        formula: "∂f/∂x = lim(h→0) [f(x+h,y) - f(x,y)] / h",
        note: "Treat y as constant",
      },
      {
        name: "First Partial Derivative (y)",
        formula: "∂f/∂y = lim(h→0) [f(x,y+h) - f(x,y)] / h",
        note: "Treat x as constant",
      },
      {
        name: "Second Order Mixed Partial",
        formula: "∂²f/∂x∂y = ∂/∂x (∂f/∂y)",
        note: "Clairaut's theorem: ∂²f/∂x∂y = ∂²f/∂y∂x (if continuous)",
      },
      {
        name: "Chain Rule (one parameter)",
        formula: "dz/dt = (∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)",
        note: "z = f(x,y), x=x(t), y=y(t)",
      },
      {
        name: "Gradient Vector",
        formula: "∇f = (∂f/∂x)î + (∂f/∂y)ĵ + (∂f/∂z)k̂",
        note: "Points in direction of steepest ascent",
      },
      {
        name: "Directional Derivative",
        formula: "D_u f = ∇f · û",
        note: "û must be a unit vector",
      },
      {
        name: "Tangent Plane",
        formula: "z - z₀ = fₓ(x₀,y₀)(x-x₀) + f_y(x₀,y₀)(y-y₀)",
        note: "At point (x₀, y₀, z₀)",
      },
    ],
  },

  "vector-calculus": {
    title: "Vector Calculus",
    color: "#f093fb",
    formulas: [
      {
        name: "Line Integral (scalar)",
        formula: "∫_C f ds = ∫_a^b f(r(t))|r'(t)| dt",
        note: "ds = arc length element",
      },
      {
        name: "Line Integral (vector field)",
        formula: "∫_C F·dr = ∫_a^b F(r(t))·r'(t) dt",
        note: "Work done by F along C",
      },
      {
        name: "Green's Theorem",
        formula: "∮_C (P dx + Q dy) = ∬_D (∂Q/∂x - ∂P/∂y) dA",
        note: "C is positively oriented, simple, closed",
      },
      {
        name: "Divergence",
        formula: "div F = ∇·F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
        note: "Measures outward flux per unit volume",
      },
      {
        name: "Curl",
        formula: "curl F = ∇×F = (Ry-Qz)î - (Rx-Pz)ĵ + (Qx-Py)k̂",
        note: "Measures rotation of the field",
      },
      {
        name: "Stokes' Theorem",
        formula: "∬_S (∇×F)·dS = ∮_C F·dr",
        note: "S is surface bounded by curve C",
      },
      {
        name: "Divergence Theorem",
        formula: "∬_S F·dS = ∭_E (∇·F) dV",
        note: "Flux through closed surface = volume integral of divergence",
      },
    ],
  },

  "limits-continuity": {
    title: "Limits & Continuity",
    color: "#4facfe",
    formulas: [
      {
        name: "Limit Definition",
        formula: "lim_(x,y)→(a,b) f(x,y) = L",
        note: "Same limit along ALL paths required",
      },
      {
        name: "Squeeze Theorem",
        formula: "g(x,y) ≤ f(x,y) ≤ h(x,y) and lim g = lim h = L ⟹ lim f = L",
        note: "Useful to prove limits equal 0",
      },
      {
        name: "Continuity Condition",
        formula: "f is continuous at (a,b) if lim_(x,y)→(a,b) f(x,y) = f(a,b)",
        note: "Limit must exist and equal function value",
      },
      {
        name: "Two-Path Test (Discontinuity)",
        formula: "If lim along path 1 ≠ lim along path 2 → limit DNE",
        note: "Use y=mx or y=x² to find different limits",
      },
      {
        name: "L'Hôpital's Rule (single var)",
        formula: "lim f(x)/g(x) = lim f'(x)/g'(x)  [0/0 or ∞/∞ form]",
        note: "Apply only to indeterminate forms",
      },
    ],
  },

  "multiple-integrals": {
    title: "Multiple Integrals",
    color: "#43e97b",
    formulas: [
      {
        name: "Double Integral (rectangular)",
        formula: "∬_R f(x,y) dA = ∫_a^b ∫_c^d f(x,y) dy dx",
        note: "Fubini's theorem — order can be swapped",
      },
      {
        name: "Double Integral (polar)",
        formula: "∬_R f(x,y) dA = ∫_α^β ∫_a^b f(r cosθ, r sinθ) r dr dθ",
        note: "dA = r dr dθ in polar coords",
      },
      {
        name: "Triple Integral",
        formula: "∭_E f(x,y,z) dV = ∫∫∫ f dx dy dz",
        note: "6 possible orders of integration",
      },
      {
        name: "Change of Variables",
        formula: "∬_R f(x,y) dA = ∬_S f(g,h) |∂(x,y)/∂(u,v)| du dv",
        note: "Jacobian |∂(x,y)/∂(u,v)| must be computed",
      },
      {
        name: "Area of Region",
        formula: "A = ∬_D 1 dA",
        note: "Integrate the constant 1 over the region",
      },
      {
        name: "Volume Under Surface",
        formula: "V = ∬_D f(x,y) dA",
        note: "f(x,y) ≥ 0 over region D",
      },
      {
        name: "Cylindrical Coordinates",
        formula: "x=r cosθ, y=r sinθ, z=z  |  dV = r dz dr dθ",
        note: "Good for cylindrical/circular shapes",
      },
      {
        name: "Spherical Coordinates",
        formula: "x=ρsinφcosθ, y=ρsinφsinθ, z=ρcosφ  |  dV = ρ²sinφ dρ dφ dθ",
        note: "Good for spheres and cones",
      },
    ],
  },

  extrema: {
    title: "Extreme Values",
    color: "#fa709a",
    formulas: [
      {
        name: "Critical Point Condition",
        formula: "fₓ(x,y) = 0  AND  f_y(x,y) = 0",
        note: "Necessary condition for local extrema",
      },
      {
        name: "Second Derivative Test (D)",
        formula: "D = fₓₓ f_yy - (fₓ_y)²",
        note: "Evaluate D at each critical point",
      },
      {
        name: "D > 0, fₓₓ > 0",
        formula: "→ Local Minimum",
        note: "",
      },
      {
        name: "D > 0, fₓₓ < 0",
        formula: "→ Local Maximum",
        note: "",
      },
      {
        name: "D < 0",
        formula: "→ Saddle Point",
        note: "Neither max nor min",
      },
      {
        name: "D = 0",
        formula: "→ Test Inconclusive",
        note: "Need higher-order analysis",
      },
      {
        name: "Lagrange Multipliers",
        formula: "∇f = λ∇g  and  g(x,y) = k",
        note: "Optimize f subject to constraint g=k",
      },
    ],
  },
};

export default formulaData;
