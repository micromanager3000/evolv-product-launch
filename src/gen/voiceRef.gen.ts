import { generative, type GenRecipeData } from "framediff";
import data from "./voiceRef.gen.json";

/** The narrator anchor: every VO segment references this comp's Sarah voice setting via
 *  `comp://voiceRef`, so the film's voice is defined in exactly one place. */
export const voiceRef = generative({
  id: "voiceRef",
  file: "src/gen/voiceRef.gen.ts",
  dataFile: "src/gen/voiceRef.gen.json",
  ...(data as GenRecipeData),
});
