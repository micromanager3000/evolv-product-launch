import { defineComposition } from "framediff";
import source from "./StudioTimelineLab.html?raw";
import document from "./StudioTimelineLab.comp.json";

export const studioTimelineLabComp = defineComposition(source, { document, meta: { document: { file: "src/StudioTimelineLab.comp.json", schema: "src/StudioTimelineLab.schema.json", bindings: {"title-text":"/title"} }, timelineFile: "src/StudioTimelineLab.timeline.json" }, });
