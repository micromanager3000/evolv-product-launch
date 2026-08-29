import { defineComposition } from "framediff";
import source from "./Fredrik.html?raw";

export const fredrikComp = defineComposition(source, { meta: { document: { file: "src/Fredrik.comp.json", schema: "src/Fredrik.schema.json", bindings: {} } }, });
