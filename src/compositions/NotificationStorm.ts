import { defineComposition } from "framediff";
import source from "./NotificationStorm.html?raw";
import document from "./NotificationStorm.comp.json";

export const notificationStormComp = defineComposition(source, { document, meta: { document: { file: "src/compositions/NotificationStorm.comp.json", hotUpdate: "remount" } } });
