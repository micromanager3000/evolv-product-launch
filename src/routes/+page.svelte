<script lang="ts">
  import { StudioApplication } from "@framediff/studio-model";
  import { StudioShell, browserAnimationClock } from "@framediff/studio-ui";
  import { projectRoot, studioRuntime } from "$lib/studio-runtime";

  const application = new StudioApplication(studioRuntime, browserAnimationClock, projectRoot);

  // Adaptive media is a standard Studio capability now: the policy activates itself from
  // real representation facts, so no opt-in or simulation configuration exists.
</script>
<svelte:head><title>FrameDiff — Evolv28 Product Launch</title></svelte:head>
<StudioShell {application} />
