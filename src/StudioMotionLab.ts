import { defineHyperframesComposition } from "@framediff/hyperframes";
import source from "./StudioMotionLab.hyperframes.html?raw";

export const studioMotionLabComp = defineHyperframesComposition(source, {
  id: "StudioMotionLab",
  file: "src/StudioMotionLab.hyperframes.html",
  module: "src/StudioMotionLab.ts",
  exportName: "studioMotionLabComp",
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 150,
  alpha: true,
});
