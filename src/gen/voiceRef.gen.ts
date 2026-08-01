import { generative, type GenRecipeData } from "framediff";
import data from "./voiceRef.gen.json";

/** Casting reference for the direct ElevenLabs narrator used by every VO segment. */
export const voiceRef = generative({
  id: "voiceRef",
  file: "src/gen/voiceRef.gen.ts",
  dataFile: "src/gen/voiceRef.gen.json",
  ...(data as GenRecipeData),
});
