import { defineComposition, defineTimelineDocument } from "framediff";
import source from "./FredrikEightHoursAfterFourWeeks.html?raw";
import timeline from "./FredrikEightHoursAfterFourWeeks.timeline.json";

export const fredrikEightHoursAfterFourWeeksComp = defineComposition(source, {
  timeline: defineTimelineDocument(timeline),
  meta: {
    timelineFile: "src/generated-clips/FredrikEightHoursAfterFourWeeks.timeline.json",
    origin: {"role":"generated-clip","compositionKey":"fredrik","itemId":"clip-eight-hours-after-four-weeks","placementId":"source","sourceDurationSeconds":2921.76},
  },
});
