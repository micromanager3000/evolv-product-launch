import { defineComposition, defineTimelineDocument } from "framediff";
import source from "./SelectsIfPeopleHadHalfThe.html?raw";
import timeline from "./SelectsIfPeopleHadHalfThe.timeline.json";

export const selectsIfPeopleHadHalfTheComp = defineComposition(source, {
  timeline: defineTimelineDocument(timeline),
  meta: {
    timelineFile: "src/generated-clips/SelectsIfPeopleHadHalfThe.timeline.json",
    origin: {"role":"generated-clip","compositionKey":"selects","itemId":"clip-if-people-had-half-the","placementId":"source","sourceDurationSeconds":2101.930667},
  },
});
