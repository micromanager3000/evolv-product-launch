import { defineComposition } from "framediff";
import source from "./AlphaWaves.html?raw";
import document from "./AlphaWaves.comp.json";

export const alphaWavesComp = defineComposition(source, { document, meta: { document: { file: "src/compositions/AlphaWaves.comp.json", hotUpdate: "patch" } } });
