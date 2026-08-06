import { defineThreeSceneComposition } from "framediff/three";
import { deviceRevealBlockoutScene } from "./deviceRevealBlockoutScene";
import data from "./DeviceRevealBlockout.scene.json";

export const deviceRevealBlockoutComp = defineThreeSceneComposition({
  scene: deviceRevealBlockoutScene,
  id: "DeviceRevealBlockout",
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 450,
  data,
  dataFile: "src/compositions/DeviceRevealBlockout.scene.json",
  meta: {
    file: "src/compositions/DeviceRevealBlockout.ts",
    module: "src/compositions/DeviceRevealBlockout.ts",
    exportName: "deviceRevealBlockoutComp",
    deps: ["src/compositions/deviceRevealBlockoutScene.ts"],
  },
});
