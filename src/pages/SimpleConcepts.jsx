import "./SimpleConcepts.css";

const conceptGroups = [
  {
    kicker: "Before multivariable calculus",
    title: "Functions, dimensions, continuity, and derivatives",
    items: [
      {
        title: "Dimension theory of real-valued functions",
        body:
          "A real-valued function gives one real number as its answer. The number of inputs tells you the dimension of the input space: f(x) uses a line, f(x, y) uses a plane, and f(x, y, z) uses space. The output is still one number, so you can think of the function as assigning a height, temperature, cost, or density to every allowed input point.",
      },
      {
        title: "Continuity using the epsilon-delta idea",
        body:
          "Continuity means small changes in the input create small changes in the output. In epsilon-delta language, epsilon is the output error you are willing to allow, and delta is the input distance you must stay within to keep the output error below epsilon.",
      },
      {
        title: "Differentiability in one variable",
        body:
          "A differentiable function has a reliable local slope. Near a point, its curve can be closely replaced by a tangent line. If a graph has a sharp corner, jump, cusp, or vertical tangent, differentiability may fail there.",
      },
      {
        title: "Tangent lines and extreme values",
        body:
          "A tangent line is the best straight-line picture of a curve near one point. Extreme values are highs and lows. In one variable, candidates often occur where f'(x) = 0, where f'(x) does not exist, or at endpoints of the interval.",
        selfStudy: true,
      },
    ],
  },
  {
    kicker: "Geometry in space",
    title: "Quadric surfaces",
    items: [
      {
        title: "What a quadric surface is",
        body:
          "A quadric surface is a 3D shape described by an equation with squared terms such as x^2, y^2, and z^2. The signs and missing variables in the equation tell you the surface type.",
      },
      {
        title: "Ellipsoids",
        body:
          "An ellipsoid is like a stretched sphere. A typical form is x^2/a^2 + y^2/b^2 + z^2/c^2 = 1. All squared terms are positive, so the surface is closed and bounded.",
      },
      {
        title: "Hyperboloids",
        body:
          "A hyperboloid opens outward. If two squared terms are positive and one is negative, you usually get one connected sheet. If one term is positive and two are negative, you usually get two separate sheets.",
      },
      {
        title: "Cylinders",
        body:
          "A cylinder appears when one variable is missing. For example, x^2 + y^2 = 9 says nothing about z, so the circle is extended upward and downward forever.",
      },
      {
        title: "Paraboloids",
        body:
          "A paraboloid uses squared terms in some variables and a first-power term in another. z = x^2 + y^2 is a bowl. z = x^2 - y^2 is a saddle-shaped hyperbolic paraboloid.",
      },
    ],
  },
  {
    kicker: "Core multivariable ideas",
    title: "Functions, limits, derivatives, and approximation",
    items: [
      {
        title: "Functions of several variables",
        body:
          "These functions depend on more than one input. For example, f(x, y) might describe the height of land at a map location, while f(x, y, z) might describe temperature at a point in a room.",
      },
      {
        title: "Limits in higher dimensions",
        body:
          "A multivariable limit exists only if the function approaches the same value from every path. Checking one path is not enough; different paths can reach the same point with different answers.",
      },
      {
        title: "Continuity in higher dimensions",
        body:
          "A function is continuous at a point when its value there matches the value it approaches nearby. Informally, the surface has no hole, jump, or tear at that point.",
      },
      {
        title: "Linearization and differentials",
        body:
          "Linearization replaces a complicated function near a point with a simple linear formula. Differentials estimate small changes: if x and y change a little, the differential estimates how much f changes.",
        selfStudy: true,
      },
      {
        title: "Taylor series in one and two variables",
        body:
          "A Taylor series builds a function from its value, slopes, curvatures, and higher derivative information near a point. In two variables, it uses partial derivatives to create a local polynomial model of a surface.",
        selfStudy: true,
      },
    ],
  },
  {
    kicker: "How surfaces change",
    title: "Partial derivatives, chain rule, gradients, and planes",
    items: [
      {
        title: "Partial derivatives",
        body:
          "A partial derivative measures change in one direction while temporarily holding the other variables fixed. For f(x, y), f_x looks left-right and f_y looks front-back.",
      },
      {
        title: "Chain rule",
        body:
          "The chain rule tracks how a function changes when its inputs also depend on something else. It is bookkeeping for connected rates of change.",
      },
      {
        title: "Directional derivative",
        body:
          "A directional derivative tells how fast the function changes if you move from a point in a chosen direction, not just parallel to the x-axis or y-axis.",
      },
      {
        title: "Gradient vector",
        body:
          "The gradient collects all first partial derivatives into one vector. It points in the direction of fastest increase, and its length tells how strong that increase is.",
      },
      {
        title: "Tangent planes and differentials",
        body:
          "A tangent plane is the best flat approximation to a surface near a point. Differentials use that plane to estimate small changes in the function value.",
      },
      {
        title: "Extreme values and saddle points",
        body:
          "For f(x, y), local maxima and minima are high and low spots on a surface. A saddle point rises in one direction and falls in another, so it is not a true maximum or minimum.",
      },
    ],
  },
  {
    kicker: "Accumulation and volume",
    title: "Double and triple integrals",
    items: [
      {
        title: "Riemann sums",
        body:
          "A Riemann sum breaks a region into many small pieces, samples the function on each piece, and adds the results. Integrals are what these sums approach as the pieces become tiny.",
        selfStudy: true,
      },
      {
        title: "Double integrals over rectangles",
        body:
          "A double integral over a rectangle adds up values across a flat rectangular region. If f(x, y) is height, the integral gives volume under the surface above that rectangle.",
      },
      {
        title: "Iterated integrals",
        body:
          "An iterated integral computes a double integral one variable at a time. You integrate with respect to one variable first, then the other.",
      },
      {
        title: "Double integrals over general regions",
        body:
          "General regions are not always rectangles, so the bounds may depend on x or y. The main skill is describing the region correctly before integrating.",
      },
      {
        title: "Area by double integration",
        body:
          "If you integrate 1 over a region, every tiny piece contributes only its area. Adding all those pieces gives the total area of the region.",
      },
      {
        title: "Double integrals in polar form",
        body:
          "Polar coordinates use radius r and angle theta. They are useful for circles and circular sectors. The area piece becomes r dr dtheta, so the extra r must be included.",
      },
      {
        title: "Triple integrals in rectangular coordinates",
        body:
          "A triple integral adds values throughout a 3D solid using x, y, and z. If the function is density, the triple integral can give total mass; if the function is 1, it gives volume.",
      },
    ],
  },
];

const selfReadingTopics = [
  "Quadric surfaces and their classification, Thomas Calculus article 12.6.",
  "Linearization and differentials, Thomas Calculus pages 167-169.",
  "Taylor series expansion in one and two variables, Thomas Calculus page 871.",
  "Tangent lines and extreme values of single-variable functions.",
  "Riemann sums from the previous course.",
];

function SimpleConcepts() {
  return (
    <main className="simple-concepts-page">
      <section className="simple-concepts-hero">
        <div>
          <p className="simple-concepts-kicker">Simple terms guide</p>
          <h1>Multivariable calculus concepts, explained plainly.</h1>
          <p>
            A separate overview for the listed syllabus topics: what each idea
            means, why it matters, and how to recognize it before working
            through formal exercises.
          </p>
        </div>
      </section>

      <section className="concept-map" aria-labelledby="concept-map-title">
        <div>
          <p className="simple-concepts-kicker">Reading order</p>
          <h2 id="concept-map-title">Start with change, then move to surfaces and accumulation</h2>
        </div>
        <div className="concept-map-steps">
          <span>Single-variable review</span>
          <span>Surfaces and dimensions</span>
          <span>Partial derivatives</span>
          <span>Integrals in 2D and 3D</span>
        </div>
      </section>

      {conceptGroups.map((group) => (
        <section className="concept-section" key={group.title}>
          <div className="concept-section-head">
            <p className="simple-concepts-kicker">{group.kicker}</p>
            <h2>{group.title}</h2>
          </div>
          <div className="concept-grid">
            {group.items.map((item) => (
              <article
                className={`concept-card${item.selfStudy ? " concept-card--self" : ""}`}
                key={item.title}
              >
                {item.selfStudy && <span className="self-study-tag">Self-reading</span>}
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="self-reading-panel" aria-labelledby="self-reading-title">
        <div>
          <p className="simple-concepts-kicker">Homework and self-reading</p>
          <h2 id="self-reading-title">Topics best revised independently</h2>
        </div>
        <ul>
          {selfReadingTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default SimpleConcepts;
