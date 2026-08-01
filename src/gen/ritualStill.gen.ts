// Scene 5's future key-frame recipe is anchored to the exact fitting photograph plus current
// product renders. The final edit uses that reference photograph directly.
import { generative, type GenRecipeData } from "framediff";
import data from "./ritualStill.gen.json";

export const ritualStill = generative({
  id: "ritualStill",
  file: "src/gen/ritualStill.gen.ts",
  dataFile: "src/gen/ritualStill.gen.json",
  ...(data as GenRecipeData),
});
