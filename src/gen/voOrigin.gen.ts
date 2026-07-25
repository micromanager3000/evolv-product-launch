// The narrator anchor: this comp defines the campaign voice. Approve and pin this take FIRST —
// every other VO segment references `comp://voOrigin` as a voice clone, so the whole narration
// stays one performer. Seed Audio takes its performance length from the prompt, not a param;
// the duration field only sets the comp's timeline bounds (and the cost preview).
import { generative, type GenRecipeData } from "framediff";
import data from "./voOrigin.gen.json";

export const voOrigin = generative({
  id: "voOrigin",
  file: "src/gen/voOrigin.gen.ts",
  dataFile: "src/gen/voOrigin.gen.json",
  ...(data as GenRecipeData),
});
