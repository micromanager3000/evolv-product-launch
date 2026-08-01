// Direct image-to-video recipe from the exact current product photograph. Motion is restricted
// to a camera push so the rigid device cannot bend, flex, or morph.
import { generative, type GenRecipeData } from "framediff";
import data from "./productReveal.gen.json";

export const productReveal = generative({
  id: "productReveal",
  file: "src/gen/productReveal.gen.ts",
  dataFile: "src/gen/productReveal.gen.json",
  ...(data as GenRecipeData),
});
