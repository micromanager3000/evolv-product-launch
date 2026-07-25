// Scene 4's picture: animates the approved hero frame. The `comp://productStill` ref resolves
// to that comp's pinned take byte-for-byte (the same chain the lighthouse example uses), so
// this comp is deliberately blocked until productStill has an approved, pinned image.
import { generative, type GenRecipeData } from "framediff";
import data from "./productReveal.gen.json";

export const productReveal = generative({
  id: "productReveal",
  file: "src/gen/productReveal.gen.ts",
  dataFile: "src/gen/productReveal.gen.json",
  ...(data as GenRecipeData),
});
