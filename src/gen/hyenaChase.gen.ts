// The BrainLoop scene's right panel: one frozen frame of ancient threat. A still on purpose —
// the brain diagram animates around it, and a moving clip inside the split would fight the
// diagram for attention. Nested by brain-loop as an ordinary comp reference.
import { generative, type GenRecipeData } from "framediff";
import data from "./hyenaChase.gen.json";

export const hyenaChase = generative({
  id: "hyenaChase",
  file: "src/gen/hyenaChase.gen.ts",
  dataFile: "src/gen/hyenaChase.gen.json",
  ...(data as GenRecipeData),
});
