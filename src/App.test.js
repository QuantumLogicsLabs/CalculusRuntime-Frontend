import React from "react";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { MemoryRouter, createRoutesFromChildren, matchRoutes, Navigate, Routes } from "react-router-dom";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import App from "./App";
import { COURSES } from "./data/courses";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { getRequiredSections, getQuizId } from "./data/courseCompletion";

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, "", "/");
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  window.history.replaceState({}, "", "/");
});

describe("shared interface regressions", () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  });

  test("theme toggles update the document and survive navigation and remount", async () => {
    localStorage.setItem('calculus-dark', 'false');
    let view = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(document.documentElement).toHaveClass('dark');
    expect(document.body).toHaveClass('dark');
    expect(localStorage.getItem('calculus-dark')).toBe('true');
    fireEvent.click(screen.getByRole('link', { name: /^Linear Algebra$/ }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Linear Algebra' })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    view.unmount();
    view = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    expect(document.documentElement).not.toHaveClass('dark');
    expect(document.body).not.toHaveClass('dark');
    expect(localStorage.getItem('calculus-dark')).toBe('false');
  });

  test("mobile navigation exposes its state and closes on Escape, outside click and route selection", async () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
    const menu = document.getElementById(toggle.getAttribute('aria-controls'));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(menu).toHaveAttribute('aria-hidden', 'true');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(menu).toHaveAttribute('aria-hidden', 'false');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    fireEvent.mouseDown(document.body);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    fireEvent.click(within(menu).getByRole('link', { name: 'Linear Algebra' }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Linear Algebra' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById('mobile-nav')).toHaveAttribute('aria-hidden', 'true');
  });

  test("render failures show error details and recovery actions instead of a blank page", () => {
    function BrokenPage() { throw new Error('Intentional test render failure'); }
    const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
    try {
      render(<MemoryRouter><ErrorBoundary><BrokenPage /></ErrorBoundary></MemoryRouter>);
      expect(screen.getByRole('heading', { name: 'Oops — something went wrong' })).toBeInTheDocument();
      expect(screen.getByText('Error: Intentional test render failure')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Reload page' })).toBeEnabled();
      expect(screen.getByRole('link', { name: 'Go home' })).toHaveAttribute('href', '/');
      expect(errors).toHaveBeenCalled();
    } finally {
      errors.mockRestore();
    }
  });
});

test('renders the main app shell', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /CalcVoyager/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Linear Algebra$/i })).toHaveAttribute('href', '/courses/linear-algebra');
});


test.each(COURSES)("$title opens from home and exposes its module links", async (course) => {
  const view = render(<App />);
  const homeCard = view.container.querySelector(`main a[href="${course.path}"]`);
  expect(homeCard).not.toBeNull();
  fireEvent.click(homeCard);
  expect(await screen.findByRole("heading", { level: 1, name: course.title })).toBeInTheDocument();
  expect(window.location.pathname).toBe(course.path);
  const main = screen.getByRole("main");
  const quizPath = `/quiz/${course.id}`;
  for (const module of course.modules) {
    const heading = within(main).getByRole("heading", { level: 3, name: module.title });
    if (module.path === quizPath) {
      expect(heading.closest('[aria-disabled="true"]')).not.toBeNull();
      expect(heading.closest("a")).toBeNull();
    } else {
      expect(heading.closest("a")).toHaveAttribute("href", module.path);
    }
  }
  expect(within(main).getByRole("link", { name: "Start first module →" }))
    .toHaveAttribute("href", course.modules[0].path);
  // A direct visit must render the same hub, independently of the home click.
  view.unmount();
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: course.title })).toBeInTheDocument();
});


// JSDOM has no viewport observer. Keep this browser API shim local to this suite.
const originalObserver = global.IntersectionObserver;
const originalMatchMedia = window.matchMedia;
beforeEach(() => {
  window.matchMedia = jest.fn((query) => ({
    matches: false, media: query, onchange: null,
    addListener: jest.fn(), removeListener: jest.fn(),
    addEventListener: jest.fn(), removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
afterAll(() => {
  if (originalObserver === undefined) delete global.IntersectionObserver;
  else global.IntersectionObserver = originalObserver;
  if (originalMatchMedia === undefined) delete window.matchMedia;
  else window.matchMedia = originalMatchMedia;
});

// App currently returns its provider/router tree without hooks. Read the real
// route elements, including mapped routes, rather than duplicate their paths.
function appRoutes() {
  function findRoutes(node) {
    if (!React.isValidElement(node)) return null;
    if (node.type === Routes) return node;
    for (const child of React.Children.toArray(node.props.children)) {
      const found = findRoutes(child);
      if (found) return found;
    }
    return null;
  }
  const tree = findRoutes(App());
  expect(tree).not.toBeNull();
  return createRoutesFromChildren(tree.props.children);
}

function resolveDestination(routes, path) {
  const visited = new Set();
  while (!visited.has(path)) {
    visited.add(path);
    const matches = matchRoutes(routes, new URL(path, "http://localhost").pathname);
    const route = matches?.[matches.length - 1]?.route;
    if (!route || route.path === "*") return `Missing route: ${path}`;
    if (route.element?.type !== Navigate) return null;
    path = route.element.props.to;
  }
  return `Redirect cycle: ${path}`;
}

test("all course cards and module destinations resolve without falling through to 404", () => {
  const routes = appRoutes();
  const failures = [];
  for (const course of COURSES) {
    for (const path of [course.path, ...course.modules.map((module) => module.path)]) {
      const error = resolveDestination(routes, path);
      if (error) failures.push(`${course.title}: ${error}`);
    }
  }
  expect(failures).toEqual([]);
});

test("every declared static redirect terminates at an existing non-redirect route", () => {
  const routes = appRoutes();
  const redirects = routes.filter((route) => route.element?.type === Navigate);
  expect(redirects.length).toBeGreaterThan(0);
  const failures = redirects.map((route) => resolveDestination(routes, route.path)).filter(Boolean);
  expect(failures).toEqual([]);
});

test("representative guide redirects navigate and render across all four courses", async () => {
  const cases = [
    ["/differentiation", "/differentiation/1", "Differentiation & Rules"],
    ["/partial-derivatives", "/partial-derivatives/1", "Partial Derivatives"],
    ["/linear-algebra/vectors", "/linear-algebra/vectors/1", "Vectors & Vector Spaces"],
    ["/linear-algebra/numerical-linear-algebra", "/linear-algebra/numerical-linear-algebra/1", "Numerical Linear Algebra"],
    ["/probability-statistics/stochastic-processes", "/probability-statistics/stochastic-processes/1", "Stochastic Processes"],
  ];
  for (const [from, to, title] of cases) {
    window.history.replaceState({}, "", from);
    const view = render(<App />);
    await waitFor(() => expect(window.location.pathname).toBe(to));
    expect(await screen.findByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /something went wrong/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /404/ })).not.toBeInTheDocument();
    view.unmount();
  }
});

test("unknown URLs show a recoverable 404 and unknown course IDs return home", async () => {
  window.history.replaceState({}, "", "/this-route-does-not-exist");
  const view = render(<App />);
  expect(screen.getByRole("heading", { name: "404 — Page not found" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: "Return to home" }));
  await waitFor(() => expect(window.location.pathname).toBe("/"));
  expect(screen.queryByRole("heading", { name: /404/ })).not.toBeInTheDocument();
  expect(view.container.querySelector(`main a[href="${COURSES[0].path}"]`)).not.toBeNull();
  view.unmount();
  window.history.replaceState({}, "", "/courses/nonexistent-course");
  render(<App />);
  await waitFor(() => expect(window.location.pathname).toBe("/"));
  expect(screen.queryByRole("heading", { name: /404/ })).not.toBeInTheDocument();
});


describe("authentication and certificate quiz integration", () => {
  const originalFetch = global.fetch;
  const session = { id: 73, username: "test-learner", accessToken: "test-token" };
  const response = (body, status = 200) => Promise.resolve({
    ok: status >= 200 && status < 300, status, json: async () => body,
  });
  afterEach(() => { global.fetch = originalFetch; });

  function SessionProbe() {
    const { user, isHydrated, logout } = useAuth();
    return <><output data-testid="session">{isHydrated ? user?.username || "guest" : "loading"}</output>
      <button onClick={logout}>End session</button></>;
  }

  test("session hydration rejects malformed and expired storage but retains an offline session", async () => {
    for (const raw of ['{invalid', JSON.stringify({ username: 'no-token' })]) {
      localStorage.setItem("calcvoyager_user", raw);
      const view = render(<AuthProvider><SessionProbe /></AuthProvider>);
      expect(screen.getByTestId("session")).toHaveTextContent("guest");
      view.unmount();
    }
    for (const status of [401, 404]) {
      localStorage.setItem("calcvoyager_user", JSON.stringify(session));
      global.fetch = jest.fn(() => response({}, status));
      const view = render(<AuthProvider><SessionProbe /></AuthProvider>);
      await waitFor(() => expect(screen.getByTestId("session")).toHaveTextContent("guest"));
      expect(localStorage.getItem("calcvoyager_user")).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/auth/me'),
        expect.objectContaining({ headers: { Authorization: 'Bearer test-token' } }));
      view.unmount();
    }
    localStorage.setItem("calcvoyager_user", JSON.stringify(session));
    global.fetch = jest.fn(() => Promise.reject(new Error("offline")));
    render(<AuthProvider><SessionProbe /></AuthProvider>);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByTestId("session")).toHaveTextContent(session.username);
    fireEvent.click(screen.getByRole('button', { name: 'End session' }));
    expect(screen.getByTestId("session")).toHaveTextContent("guest");
    expect(localStorage.getItem("calcvoyager_user")).toBeNull();
  });

  test("login validates empty fields, reports rejection and persists a successful session until sign-out", async () => {
    let accept = false;
    global.fetch = jest.fn((url) => {
      if (url.endsWith('/api/auth/login')) return accept
        ? response({ user: { id: session.id, username: session.username }, access_token: session.accessToken, token_type: 'bearer' })
        : response({ detail: 'Invalid credentials' }, 401);
      if (url.endsWith('/api/auth/me') || url.endsWith('/api/progress/')) return response({});
      throw new Error(`Unexpected request: ${url}`);
    });
    window.history.replaceState({}, '', '/login');
    const { container } = render(<App />);
    fireEvent.submit(container.querySelector('.auth-form'));
    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all fields.');
    expect(global.fetch).not.toHaveBeenCalled();
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: `  ${session.username}  ` } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'test-password' } });
    fireEvent.submit(container.querySelector('.auth-form'));
    expect(await screen.findByRole('alert')).toHaveTextContent('Invalid credentials');
    expect(localStorage.getItem('calcvoyager_user')).toBeNull();
    expect(JSON.parse(global.fetch.mock.calls[0][1].body)).toEqual({ username: session.username, password: 'test-password' });
    accept = true;
    fireEvent.submit(container.querySelector('.auth-form'));
    await waitFor(() => expect(window.location.pathname).toBe('/dashboard'));
    expect(JSON.parse(localStorage.getItem('calcvoyager_user'))).toMatchObject(session);
    fireEvent.click(await screen.findByRole('button', { name: 'Toggle navigation' }));
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('button', { name: 'Sign out' }));
    await waitFor(() => expect(localStorage.getItem('calcvoyager_user')).toBeNull());
    expect(await screen.findByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/login');
  });

  test("all four certificate quizzes block guests and signed-in learners missing required sections", async () => {
    for (const course of COURSES) {
      localStorage.clear();
      global.fetch = jest.fn((url) => {
        if (url.endsWith('/api/auth/me') || url.endsWith('/api/progress/')) return response({});
        throw new Error(`Unexpected request: ${url}`);
      });
      window.history.replaceState({}, '', `/quiz/${course.id}`);
      let view = render(<App />);
      expect(await screen.findByRole('heading', { name: 'Sign in required' })).toBeInTheDocument();
      expect(global.fetch).not.toHaveBeenCalled();
      view.unmount();
      localStorage.setItem('calcvoyager_user', JSON.stringify(session));
      view = render(<App />);
      expect(await screen.findByRole('heading', { name: 'Finish the course first' })).toBeInTheDocument();
      await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/progress/'), expect.anything()));
      expect(global.fetch.mock.calls.some(([url]) => url.endsWith('/start'))).toBe(false);
      view.unmount();
    }
  });

  test("all courses retry failed starts and submit positional answers using server results", async () => {
    for (const course of COURSES) {
      localStorage.clear();
      localStorage.setItem('calcvoyager_user', JSON.stringify(session));
      const completedSections = Object.fromEntries(getRequiredSections(course.id).map((id) => [id, true]));
      const quizId = getQuizId(course.id);
      let starts = 0;
      let submissions = 0;
      global.fetch = jest.fn((url, options = {}) => {
        if (url.endsWith('/api/auth/me')) return response({});
        if (url.endsWith('/api/progress/')) return response({ completedSections });
        if (url.endsWith(`/api/quiz/${quizId}/start`)) {
          starts += 1;
          if (starts === 1) return response({ detail: 'Please retry the quiz' }, 503);
          return response({ attempt_token: `attempt-${starts}`, seconds_per_question: 90,
            questions: [{ q: 'Server question one', options: ['One', 'Two'] }, { q: 'Server question two', options: ['Three', 'Four'] }] });
        }
        if (url.endsWith(`/api/quiz/${quizId}/submit`)) {
          submissions += 1;
          expect(options.headers.Authorization).toBe('Bearer test-token');
          expect(JSON.parse(options.body)).toEqual({ attempt_token: `attempt-${starts}`,
            answers: submissions === 1 ? [null, 1] : [1, 1] });
          return response({ score: submissions === 1 ? 1 : 2, total: 2,
            pct: submissions === 1 ? 50 : 100, passed: submissions > 1, min_pass_percent: 80 });
        }
        if (url.endsWith('/api/quiz/')) return response({});
        throw new Error(`Unexpected request: ${url}`);
      });
      window.history.replaceState({}, '', `/quiz/${course.id}`);
      const view = render(<App />);
      expect(await screen.findByRole('heading', { name: "Couldn't start the quiz" })).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
      await screen.findByText('Server question one');
      fireEvent.click(screen.getByRole('button', { name: /Skip →/ }));
      fireEvent.click(screen.getByRole('button', { name: /Four/ }));
      fireEvent.click(screen.getByRole('button', { name: /Submit Quiz/ }));
      expect(await screen.findByRole('heading', { name: 'Not quite there yet' })).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /Get your certificate/ })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Retry quiz' }));
      await screen.findByText('Server question one');
      fireEvent.click(screen.getByRole('button', { name: /Two/ }));
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/ }));
      fireEvent.click(screen.getByRole('button', { name: /Four/ }));
      fireEvent.click(screen.getByRole('button', { name: /Submit Quiz/ }));
      expect(await screen.findByRole('heading', { name: /You passed!/ })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Get your certificate/ })).toHaveAttribute('href', `/certificate/${course.id}`);
      expect(submissions).toBe(2);
      view.unmount();
    }
  });
});


test("Numerical Linear Algebra Part 2 loads directly and links back to Part 1", async () => {
  window.history.replaceState({}, "", "/linear-algebra/numerical-linear-algebra/2");
  const view = render(<App />);
  expect(await screen.findByRole("heading", { level: 2, name: "Eigenvalue Algorithms (Power Iteration & QR)" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Open Part 1" })).toHaveAttribute("href", "/linear-algebra/numerical-linear-algebra/1");
  expect(view.container.querySelector(".katex-error")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Open Part 1" }));
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/numerical-linear-algebra/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Iterative Solvers (Jacobi, Gauss–Seidel, SOR)" })).toBeInTheDocument();
});


test("Abstract Linear Algebra redirects to the dual-spaces guide", async () => {
  window.history.replaceState({}, "", "/linear-algebra/abstract-linear-algebra");
  const view = render(<App />);
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/abstract-linear-algebra/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Dual Spaces & Linear Functionals" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
});


test("Abstract Linear Algebra Part 2 loads directly and returns to dual spaces", async () => {
  window.history.replaceState({}, "", "/linear-algebra/abstract-linear-algebra/2");
  const view = render(<App />);
  expect(await screen.findByRole("heading", { level: 2, name: "Tensor Products & Kronecker Products" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Open Part 1" }));
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/abstract-linear-algebra/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Dual Spaces & Linear Functionals" })).toBeInTheDocument();
});


test("Modern Applications opens the spectral graph guide", async () => {
  window.history.replaceState({}, "", "/linear-algebra/modern-applications");
  const view = render(<App />);
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/modern-applications/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Spectral Graph Theory" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
});


test("Modern Applications Part 2 loads Matrix Calculus and returns to spectral graphs", async () => {
  window.history.replaceState({}, "", "/linear-algebra/modern-applications/2");
  const view = render(<App />);
  expect(await screen.findByRole("heading", { level: 2, name: "Matrix Calculus" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Open Part 1" }));
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/modern-applications/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Spectral Graph Theory" })).toBeInTheDocument();
});
