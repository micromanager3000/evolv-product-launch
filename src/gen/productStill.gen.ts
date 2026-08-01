// Future hero generations use three current manufacturer references from the Drive folder.
// The final edit and end card use the exact source photography directly.
import { generative, type GenRecipeData } from "framediff";
import data from "./productStill.gen.json";

export const productStill = generative({
  id: "productStill",
  file: "src/gen/productStill.gen.ts",
  dataFile: "src/gen/productStill.gen.json",
  ...(data as GenRecipeData),
});
