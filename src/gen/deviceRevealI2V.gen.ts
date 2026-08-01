// Final device-reveal I2V. This comp intentionally has a fresh id so the older,
// geometry-inaccurate productReveal takes can never be selected as its output.
import { generative, type GenRecipeData } from "framediff";
import data from "./deviceRevealI2V.gen.json";

export const deviceRevealI2V = generative({
  id: "deviceRevealI2V",
  file: "src/gen/deviceRevealI2V.gen.ts",
  dataFile: "src/gen/deviceRevealI2V.gen.json",
  ...(data as GenRecipeData),
});
