import { generative, type GenRecipeData } from "framediff";
import data from "./deskStill.gen.json";

export const deskStill = generative({
  id: "deskStill",
  file: "src/gen/deskStill.gen.ts",
  dataFile: "src/gen/deskStill.gen.json",
  ...(data as GenRecipeData),
});
