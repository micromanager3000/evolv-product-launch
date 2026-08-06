import { defineComposition } from "framediff";
import source from "./EndCard.html?raw";
import document from "./EndCard.comp.json";

export const endCardComp = defineComposition(source, { document, meta: { document: { file: "src/compositions/EndCard.comp.json", hotUpdate: "patch" } } });
