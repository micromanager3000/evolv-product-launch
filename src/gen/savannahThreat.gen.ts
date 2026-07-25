// Scene 1's puncture: the two-beat danger moment that interrupts the drift. Text-to-video on
// purpose — a different framing (ground level, long lens) than the aerial, with the same world
// described in words so the cut reads as the same morning.
import { generative, type GenRecipeData } from "framediff";
import data from "./savannahThreat.gen.json";

export const savannahThreat = generative({
  id: "savannahThreat",
  file: "src/gen/savannahThreat.gen.ts",
  dataFile: "src/gen/savannahThreat.gen.json",
  ...(data as GenRecipeData),
});
