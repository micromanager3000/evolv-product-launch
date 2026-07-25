import { generative, type GenRecipeData } from "framediff";
import data from "./voRitual.gen.json";

export const voRitual = generative({
  id: "voRitual",
  file: "src/gen/voRitual.gen.ts",
  dataFile: "src/gen/voRitual.gen.json",
  ...(data as GenRecipeData),
});
