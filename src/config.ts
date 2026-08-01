// The composition registry — wires composition components to their dimensions, fps, and length.
// This file is the example's orchestration entry point; the pipeline it registers:
//
//   moodboard → script → storyboard          (pre-production, ordinary comps in the graph)
//        ↓
//   exact Drive images ──▶ seedance I2V clips (src/gen/*.gen.ts — takes pinned in
//   seed-audio VO segments                     framediff.assets.json)
//        ↓
//   launch-edit                               (the 70s film: clips + overlay comps + VO)

import type { CompRegistry } from "framediff";
import { launchEditComp } from "./compositions/LaunchEdit";
import { moodboardComp } from "./compositions/Moodboard";
import { scriptComp } from "./compositions/Script";
import { storyboardComp } from "./compositions/Storyboard";
import { brainLoopComp } from "./compositions/BrainLoop";
import { alphaWavesComp } from "./compositions/AlphaWaves";
import { notificationStormComp } from "./compositions/NotificationStorm";
import { endCardComp } from "./compositions/EndCard";
import { savannahDrift } from "./gen/savannahDrift.gen";
import { savannahThreat } from "./gen/savannahThreat.gen";
import { cityOverload } from "./gen/cityOverload.gen";
import { hyenaChase } from "./gen/hyenaChase.gen";
import { productStill } from "./gen/productStill.gen";
import { deviceRevealI2V } from "./gen/deviceRevealI2V.gen";
import { ritualStill } from "./gen/ritualStill.gen";
import { devicePutOnI2V } from "./gen/devicePutOnI2V.gen";
import { deskStill } from "./gen/deskStill.gen";
import { deviceWornI2V } from "./gen/deviceWornI2V.gen";
import { voiceRef } from "./gen/voiceRef.gen";
import { voOrigin } from "./gen/voOrigin.gen";
import { voNow } from "./gen/voNow.gen";
import { voBrain } from "./gen/voBrain.gen";
import { voSolution } from "./gen/voSolution.gen";
import { voRitual } from "./gen/voRitual.gen";
import { voClose } from "./gen/voClose.gen";

/** The Studio registry. The first entry is also the runtime fallback; every other composition
 *  stays reachable from the project rail. */
export const COMPOSITIONS = {
  "launch-edit": launchEditComp,
  // pre-production comps — the plan is part of the same graph: script rows nest the gen
  // comps that realize each scene, storyboard panels share the script's timing.
  moodboard: moodboardComp,
  script: scriptComp,
  storyboard: storyboardComp,
  // authored scene + overlay comps — deterministic HTML animation, nested by the edit
  "brain-loop": brainLoopComp,
  "alpha-waves": alphaWavesComp,
  "notification-storm": notificationStormComp,
  "end-card": endCardComp,
  // generative comps — recipes in src/gen/*.gen.ts, takes pinned in framediff.assets.json
  savannahDrift,
  savannahThreat,
  cityOverload,
  hyenaChase,
  productStill,
  deviceRevealI2V,
  ritualStill,
  devicePutOnI2V,
  deskStill,
  deviceWornI2V,
  voiceRef,
  voOrigin,
  voNow,
  voBrain,
  voSolution,
  voRitual,
  voClose,
} satisfies CompRegistry;

/** The composition served at the project URL. */
export const PROJECT_ROOT: keyof typeof COMPOSITIONS = "launch-edit";
