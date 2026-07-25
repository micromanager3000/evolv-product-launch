import { generative, type GenRecipeData } from "framediff";
import data from "./voClose.gen.json";

export const voClose = generative({
  id: "voClose",
  file: "src/gen/voClose.gen.ts",
  dataFile: "src/gen/voClose.gen.json",
  ...(data as GenRecipeData),
});
