import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { COURSES } from "../data/courses";

// StudyGuideShell owns lesson titles; these titles cover the surrounding pages.
const PAGE_TITLES = {
    "/": "Calculus, Linear Algebra & Statistics",
    "/practice": "Practice Arena",
    "/notes": "Notes & Highlights",
    "/flashcards": "Flashcards",
    "/mistakes": "Mistake Notebook",
    "/dashboard": "Dashboard",
    "/saved": "Saved Examples",
    "/login": "Sign in",
    "/signup": "Create an account",
    "/leaderboard": "Leaderboard",
    "/certificates": "My Certificates",
    "/ai-solver": "AI Calculus Solver",
    "/cheatsheet": "Formula Cheat Sheet",
    "/study-plan": "Personalized Study Plan",
    "/simple-concepts": "Simple Concepts",
    "/test": "Continuity Finder",
    "/extreme": "Extreme Value Finder",
    "/volumecalculator": "Volume Calculator",
    "/surface-explorer": "3D Surface Explorer",
    "/vectorfield": "Vector Field Visualizer",
    "/analytic-vector-lab": "Analytic Vector Lab",
    "/derivative-visualizer": "Derivative Visualizer",
    "/taylorx": "Derivative Visualizer",
    "/linear-algebra/overview": "Linear Algebra Overview",
    "/calculus/overview": "Calculus & Analytical Geometry Overview",
    "/multivariable-calculus/overview": "Multivariable Calculus Overview",
    "/probability-statistics/overview": "Probability & Statistics Overview",
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const path = pathname.replace(/\/$/, "") || "/";
        const course = COURSES.find((item) => item.path === path);
        const title = PAGE_TITLES[path] || course?.title;
        if (title) document.title = `${title} · CalcVoyager`;
    }, [pathname]);

    return null;
};

export default ScrollToTop;