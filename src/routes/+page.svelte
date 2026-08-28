<script lang="ts">
  import { StudioApplication } from "@framediff/studio-model";
  import { StudioShell, browserAnimationClock } from "@framediff/studio-ui";
  import { projectRoot, studioRuntime } from "$lib/studio-runtime";

  const application = new StudioApplication(studioRuntime, browserAnimationClock, projectRoot);

  // Adaptive large-media UX prototype (2026-08-adaptive-media-ux): user-facing surfaces only,
  // driven by the simulated policy in AdaptiveMediaManager — no real transfers or media work.
  if (!new URLSearchParams(window.location.search).has("no-adaptive")) application.adaptiveMedia.configureSimulation({
    cacheBytesBudget: 8_000_000_000,
    importAsset: {
      name: "EVOLV_CAM_A_0417.mov",
      sizeBytes: 3_400_000_000,
      width: 3840,
      height: 2160,
      durationSeconds: 6442,
      posterUrl: "/adaptive-demo/poster.jpg",
    },
  });
</script>
<svelte:head><title>FrameDiff — Evolv28 Product Launch</title></svelte:head>
<StudioShell {application} />
