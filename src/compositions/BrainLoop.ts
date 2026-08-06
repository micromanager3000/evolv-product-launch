import { defineComposition } from "framediff";
import source from "./BrainLoop.html?raw";
import document from "./BrainLoop.comp.json";

export const brainLoopComp = defineComposition(source, { document, meta: { document: { file: "src/compositions/BrainLoop.comp.json", hotUpdate: "remount" } } });
