// Final worn-device I2V from the approved lifestyle photograph. The fresh id keeps the
// shot independent of the older deskFocus experiments and their pinned outputs.
import { generative, type GenRecipeData } from "framediff";
import data from "./deviceWornI2V.gen.json";

export const deviceWornI2V = generative({
  id: "deviceWornI2V",
  file: "src/gen/deviceWornI2V.gen.ts",
  dataFile: "src/gen/deviceWornI2V.gen.json",
  ...(data as GenRecipeData),
});
