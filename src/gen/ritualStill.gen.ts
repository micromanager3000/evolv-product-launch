// Scene 5's key frame: the brief's "closeup without face of a woman putting it on, focus on
// the neck area." Seedream stages it from the exact device render; ritualOn then animates the
// pinned frame. Keeping the face out of frame is a content rule, restated in both prompts.
import { generative, type GenRecipeData } from "framediff";
import data from "./ritualStill.gen.json";

export const ritualStill = generative({
  id: "ritualStill",
  file: "src/gen/ritualStill.gen.ts",
  dataFile: "src/gen/ritualStill.gen.json",
  ...(data as GenRecipeData),
});
