import { defineComposition } from "framediff";
import source from "./Selects.html?raw";
import document from "./Selects.comp.json";

export const selectsComp = defineComposition(source, { document, meta: { document: { file: "src/Selects.comp.json", schema: "src/Selects.schema.json", bindings: {} } }, });
