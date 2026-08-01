// Every narration segment uses voiceRef as its comp:// audio anchor. FrameDiff resolves that
// reference to the anchor's Sarah voice setting when the segment is generated.
import { generative, type GenRecipeData } from "framediff";
import data from "./voOrigin.gen.json";

export const voOrigin = generative({
  id: "voOrigin",
  file: "src/gen/voOrigin.gen.ts",
  dataFile: "src/gen/voOrigin.gen.json",
  ...(data as GenRecipeData),
});
