import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import DivergenceAndCurlGuide from "./DivergenceAndCurlGuide";
import "./GuidePart.css";

function DivergencePart1() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("divergence-1");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Section 1</span>
          <span className="guide-part-title">
            Divergence & Curl — Vector Fields, Divergence & Curl Operators
          </span>
        </div>
        <BookmarkButton
          id="divergence-1"
          title="Divergence & Curl — Section 1"
          path="/divergence-curl/1"
        />
      </div>
      <DivergenceAndCurlGuide section={1} />
      <SectionCompleteBar
        sectionId="divergence-1"
        nextPath="/divergence-curl/2"
        nextLabel="Identities & Integral Theorems"
      />
    </div>
  );
}

export default DivergencePart1;
