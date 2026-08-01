// Direct ElevenLabs narration. All six segments share the same voice_id and deterministic seed;
// per-line speed is tuned only to fit the edit's authored slot.
import { generative, type GenRecipeData } from "framediff";
import data from "./voOrigin.gen.json";

export const voOrigin = generative({
  id: "voOrigin",
  file: "src/gen/voOrigin.gen.ts",
  dataFile: "src/gen/voOrigin.gen.json",
  ...(data as GenRecipeData),
});
