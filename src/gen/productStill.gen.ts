// The product hero frame. Seedream's edit mode receives the site's exact device render
// (asset://device-render) so the generated beauty shot keeps the real industrial design —
// re-rolls restage the light, never the product. Downstream, productReveal animates this
// comp's pinned take via a comp:// reference, and end-card nests it as the closing pack shot.
import { generative, type GenRecipeData } from "framediff";
import data from "./productStill.gen.json";

export const productStill = generative({
  id: "productStill",
  file: "src/gen/productStill.gen.ts",
  dataFile: "src/gen/productStill.gen.json",
  ...(data as GenRecipeData),
});
