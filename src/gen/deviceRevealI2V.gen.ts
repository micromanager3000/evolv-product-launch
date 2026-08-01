// Final device-reveal generation. The exact photo owns appearance; the comp:// Three.js
// blockout bakes automatically on Generate and owns only camera motion, framing, and timing.
// This fresh id also keeps older geometry-inaccurate productReveal takes out of the output.
import { generative, type GenRecipeData } from "framediff";
import data from "./deviceRevealI2V.gen.json";

export const deviceRevealI2V = generative({
  id: "deviceRevealI2V",
  file: "src/gen/deviceRevealI2V.gen.ts",
  dataFile: "src/gen/deviceRevealI2V.gen.json",
  ...(data as GenRecipeData),
});
