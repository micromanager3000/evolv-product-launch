// Scene 1's world: the imported Midjourney savannah key frame (asset://savannah-dawn) is the
// exact first frame, and the prompt only asks Seedance to breathe life into it. i2v keeps the
// composition locked to the approved reference, so re-rolls change the wind, not the world.
import { generative, type GenRecipeData } from "framediff";
import data from "./savannahDrift.gen.json";

export const savannahDrift = generative({
  id: "savannahDrift",
  file: "src/gen/savannahDrift.gen.ts",
  dataFile: "src/gen/savannahDrift.gen.json",
  ...(data as GenRecipeData),
});
