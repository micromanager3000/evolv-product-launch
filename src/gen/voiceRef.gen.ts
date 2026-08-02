import { generative, type GenRecipeData } from "framediff";
import data from "./voiceRef.gen.json";

/** The direct ElevenLabs narrator anchor. Every VO segment references this comp via
 *  `comp://voiceRef` and inherits its voice_id, so casting lives in exactly one place. */
export const voiceRef = generative({
  id: "voiceRef",
  file: "src/gen/voiceRef.gen.ts",
  dataFile: "src/gen/voiceRef.gen.json",
  ...(data as GenRecipeData),
});
