import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

// PAGES:
import Home from './pages/Home';

// UTILS:
import ScrollToTop from './utils/ScrollToTop';
import ContinuityFinder from "./pages/ContinuityFinder";
import ExtremeValueFunction from "./pages/ExtremeValueFinder";
import VolumeCalculator from "./pages/VolumeCalculator";
import StudyGuidePage from "./pages/StudyGuidePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout body={<Home />} />} />
          <Route path="/partial-derivatives" element={<Layout body={<StudyGuidePage guide="partial" />} />} />
          <Route path="/vector-calculus" element={<Layout body={<StudyGuidePage guide="vector" />} />} />
          <Route path="/test" element={<Layout body={<ContinuityFinder />} />} />
          <Route path="/extreme" element={<Layout body={<ExtremeValueFunction />} />} />
          <Route path="/volumecalculator" element={<Layout body={<VolumeCalculator />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
