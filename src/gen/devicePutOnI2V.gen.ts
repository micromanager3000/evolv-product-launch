// Final fitting I2V. A fresh id prevents any of the older button/LED or flexible-device
// attempts from being treated as a usable take for this shot.
import { generative, type GenRecipeData } from "framediff";
import data from "./devicePutOnI2V.gen.json";

export const devicePutOnI2V = generative({
  id: "devicePutOnI2V",
  file: "src/gen/devicePutOnI2V.gen.ts",
  dataFile: "src/gen/devicePutOnI2V.gen.json",
  ...(data as GenRecipeData),
});
