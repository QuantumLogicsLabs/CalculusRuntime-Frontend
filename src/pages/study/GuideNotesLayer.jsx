import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import useLearningHistory from "../../hooks/useLearningHistory";
import { sectionMetadata } from "../../utils/studyNotes";
import NotesPanel from "./NotesPanel";

export default function GuideNotesLayer() {
  const { pathname, hash } = useLocation();
  const history = useLearningHistory();
  const [panels, setPanels] = useState([]);
  useEffect(() => {
    const hosts = new Map();
    let active=true, scrolled=false;
    const scan = () => {
      if (!active) return;
      const sections = [...document.querySelectorAll(".study-guide-page section[id], .study-guide-page .section[id], .guide-part-wrapper section[id]")]
        .filter((section) => !section.closest(".notes-panel") && !section.classList.contains("la-quiz-container"));
      const unique = [...new Set(sections)];
      let changed=false;
      for (const [section, host] of hosts) if (!section.isConnected || !unique.includes(section)) {host.remove();hosts.delete(section);changed=true;}
      for (const section of unique) if (!hosts.has(section)) {
        const host=document.createElement("div");host.className="guide-notes-host";section.appendChild(host);hosts.set(section,host);changed=true;
      }
      if (changed) setPanels([...hosts].map(([section,host]) => ({section,host,metadata:sectionMetadata(pathname,section)})));
      if (hash && !scrolled) {
        try { const target=document.getElementById(decodeURIComponent(hash.slice(1)));if(target){target.scrollIntoView?.();scrolled=true;} } catch { /* Ignore malformed URL fragments. */ }
      }
    };
    scan();
    const observer=new MutationObserver(scan);observer.observe(document.body,{childList:true,subtree:true});
    return () => {active=false;observer.disconnect();for(const host of hosts.values())host.remove();};
  }, [pathname,hash]);
  return panels.filter((p)=>p.host.isConnected).map(({host,section,metadata}) => createPortal(
    <NotesPanel key={`${metadata.sectionId}:${history.user?.username || "guest"}`} metadata={metadata} section={section} history={history}/>,host,metadata.sectionId));
}
