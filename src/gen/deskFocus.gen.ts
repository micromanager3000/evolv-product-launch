// Future worn-device image-to-video recipe starts from the exact current photography and locks
// the product geometry. The final edit uses deterministic motion from that photo directly.
import { generative, type GenRecipeData } from "framediff";
import data from "./deskFocus.gen.json";

export const deskFocus = generative({
  id: "deskFocus",
  file: "src/gen/deskFocus.gen.ts",
  dataFile: "src/gen/deskFocus.gen.json",
  ...(data as GenRecipeData),
});
