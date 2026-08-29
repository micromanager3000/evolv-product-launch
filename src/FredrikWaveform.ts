import { createAudioWaveformSetup, defineComposition } from "framediff";
import source from "./FredrikWaveform.html?raw";
import document from "./FredrikWaveform.comp.json";
export const fredrikWaveformComp = defineComposition(source, {
  document,
  setup: createAudioWaveformSetup(),
  meta: { document: { file: "src/FredrikWaveform.comp.json", schema: "src/FredrikWaveform.schema.json", bindings: {} } },
});
