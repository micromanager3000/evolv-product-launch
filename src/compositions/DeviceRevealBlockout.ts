import { defineThreeSceneComposition } from "framediff/three";
import { deviceRevealBlockoutScene } from "./deviceRevealBlockoutScene";

export const deviceRevealBlockoutComp = defineThreeSceneComposition({
  scene: deviceRevealBlockoutScene,
  id: "DeviceRevealBlockout",
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 450,
  background: "#d8dee6",
  cameras: [
    {
      id: "device-reveal-camera",
      name: "15s camera-only product push",
      camera: "reveal",
      from: 0,
      durationInFrames: 450,
    },
  ],
  defaultCamera: "reveal",
  meta: {
    file: "src/compositions/DeviceRevealBlockout.ts",
    module: "src/compositions/DeviceRevealBlockout.ts",
    exportName: "deviceRevealBlockoutComp",
    deps: ["src/compositions/deviceRevealBlockoutScene.ts"],
  },
});
