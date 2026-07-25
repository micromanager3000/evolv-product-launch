import { defineComposition, defineTimelineDocument } from "framediff";
import source from "./LaunchEdit.html?raw";
import timeline from "./LaunchEdit.timeline.json";

export const launchEditComp = defineComposition(source, {
  timeline: defineTimelineDocument(timeline),
  meta: { timelineFile: "src/compositions/LaunchEdit.timeline.json" },
});
