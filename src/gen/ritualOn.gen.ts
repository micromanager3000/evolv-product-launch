import { generative, type GenRecipeData } from "framediff";
import data from "./ritualOn.gen.json";

export const ritualOn = generative({
  id: "ritualOn",
  file: "src/gen/ritualOn.gen.ts",
  dataFile: "src/gen/ritualOn.gen.json",
  ...(data as GenRecipeData),
});
