// Scene 5's second shot, from the site's own lifestyle photography (asset://lifestyle-desk):
// the brief's "guy at his desk, over the shoulder, device visible." i2v from the real
// marketing still keeps wardrobe, room, and device placement exactly on-brand.
import { generative, type GenRecipeData } from "framediff";
import data from "./deskFocus.gen.json";

export const deskFocus = generative({
  id: "deskFocus",
  file: "src/gen/deskFocus.gen.ts",
  dataFile: "src/gen/deskFocus.gen.json",
  ...(data as GenRecipeData),
});
