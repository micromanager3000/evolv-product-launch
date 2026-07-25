import { generative, type GenRecipeData } from "framediff";
import data from "./voBrain.gen.json";

export const voBrain = generative({
  id: "voBrain",
  file: "src/gen/voBrain.gen.ts",
  dataFile: "src/gen/voBrain.gen.json",
  ...(data as GenRecipeData),
});
