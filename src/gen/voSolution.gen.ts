import { generative, type GenRecipeData } from "framediff";
import data from "./voSolution.gen.json";

export const voSolution = generative({
  id: "voSolution",
  file: "src/gen/voSolution.gen.ts",
  dataFile: "src/gen/voSolution.gen.json",
  ...(data as GenRecipeData),
});
