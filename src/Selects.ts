import { defineComposition } from "framediff";
import source from "./Selects.html?raw";

export const selectsComp = defineComposition(source, { meta: { document: { file: "src/Selects.comp.json", schema: "src/Selects.schema.json", bindings: {} } }, });
