import { inferGuideCourse } from "./mistakeNotebook";
export function latestNotes(events) {
  const notes = new Map();
  events.filter((e) => e.kind === "note").slice()
    .sort((a,b) => Date.parse(a.data.occurredAt)-Date.parse(b.data.occurredAt) || a.eventId.localeCompare(b.eventId, "en", { numeric: true }))
    .forEach((e) => notes.set(e.data.noteId, e.data));
  return [...notes.values()].filter((n) => !n.deleted).sort((a,b) => Date.parse(b.occurredAt)-Date.parse(a.occurredAt));
}
export function validSectionPath(path) {
  return typeof path === "string" && path.startsWith("/") && !path.startsWith("//") && !path.includes("\\") && ![...path].some((char) => char.charCodeAt(0) < 32);
}
export function sectionMetadata(pathname, section) {
  const title = section.querySelector("h1,h2,h3")?.textContent?.trim() || section.id || "Guide section";
  const anchor = section.id;
  return {sectionId: `${pathname}#${anchor}`, path: `${pathname}#${encodeURIComponent(anchor)}`,
    title: title.slice(0,500), courseId: inferGuideCourse("", pathname) || "other-guides"};
}
export function selectedQuote(section, selection = window.getSelection()) {
  if (!selection?.rangeCount || !section.contains(selection.anchorNode) || !section.contains(selection.focusNode)) return "";
  const node = selection.anchorNode?.parentElement;
  if (node?.closest(".notes-panel")) return "";
  return selection.toString().trim().slice(0,2000);
}
