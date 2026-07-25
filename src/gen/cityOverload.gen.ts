// Scene 2: the modern-life overload montage. Like the harbor example's r2v prompt, the edit
// structure is dictated with explicit hard-cut times — Seedance authors one clip, but the
// prompt owns the rhythm. The NotificationStorm overlay comp layers UI chaos on top in the
// edit, so this clip stays clean footage.
import { generative, type GenRecipeData } from "framediff";
import data from "./cityOverload.gen.json";

export const cityOverload = generative({
  id: "cityOverload",
  file: "src/gen/cityOverload.gen.ts",
  dataFile: "src/gen/cityOverload.gen.json",
  ...(data as GenRecipeData),
});
