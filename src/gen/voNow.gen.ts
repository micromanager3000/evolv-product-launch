import { generative, type GenRecipeData } from "framediff";
import data from "./voNow.gen.json";

export const voNow = generative({
  id: "voNow",
  file: "src/gen/voNow.gen.ts",
  dataFile: "src/gen/voNow.gen.json",
  ...(data as GenRecipeData),
});
