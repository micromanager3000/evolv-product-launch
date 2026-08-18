import { defineComposition } from "framediff";
import source from "./Fredrik.html?raw";
import document from "./Fredrik.comp.json";

export const fredrikComp = defineComposition(source, { document, meta: { document: { file: "src/Fredrik.comp.json", schema: "src/Fredrik.schema.json", bindings: {} } }, });
