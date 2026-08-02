// Every narration segment uses direct ElevenLabs with voiceRef as its comp:// voice-id anchor.
// Per-line speed targets the edit slot; prompts remain free to use Eleven v3 delivery tags.
import { generative, type GenRecipeData } from "framediff";
import data from "./voOrigin.gen.json";

export const voOrigin = generative({
  id: "voOrigin",
  file: "src/gen/voOrigin.gen.ts",
  dataFile: "src/gen/voOrigin.gen.json",
  ...(data as GenRecipeData),
});
