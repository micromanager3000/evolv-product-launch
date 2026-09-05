# Studio responsiveness and Hyperframes review

This review branch pins public FrameDiff to
`2526b39c27c5e6126f88bc3e09b4cbde9fe38835`.
The existing LaunchEdit film is unchanged. Two independent compositions provide
a small place to try the candidate.

1. Open **StudioTimelineLab** in Comps. Scrub the ruler, move the rectangle's
   timeline clip, trim its edges, and use Undo. At an active frame, select and
   drag the rectangle in the canvas. The nested title is a Hyperframes composition.
2. Open **StudioMotionLab**. Select its `title` element in the Inspector or via
   MCP. Edit text, position, color, or timing; blur a field to commit. Use Undo
   to restore the verified source. Bake and Play exercise the provider export.
3. Turn on **Stats** in the top bar (under project actions on a narrow screen).
   UI FPS and UI P95 describe browser frame cadence; Comp FPS is the authored
   rate. Stalls count animation-frame gaps over 50 ms, rather than browser Long
   Tasks. The last 120 intervals form the window. Reset clears the counters.
4. Open **Add composition** to review the native editing, 3D, generation,
   processing, and planning choices. Hyperframes appears under installed plugins.

Stats is off by default and stays session-local. The HUD updates at most four
times a second; sampling stops when disabled or when the preview is hidden.

## MCP

The running Vite server exposes `/mcp` and
`/.well-known/framediff-agent.json`. Call `framediff_query` with:

```json
{"query":{"type":"performance.stats"}}
```

Call `framediff_command` with either command:

```json
{"command":{"type":"performance.stats.set","enabled":true}}
{"command":{"type":"performance.stats.reset"}}
```

Discover Hyperframes operations with `operations.describe` for
`studio-motion-lab`. `composition.invoke` exposes `hyperframes.setText`,
`hyperframes.setStyle`, `hyperframes.setTiming`, and `hyperframes.selectElement`.
The Inspector uses these same source-backed operations. A bake is started with
`cache.bake`; query `application.state` for completion and the resulting cache.

## Review limits

Hyperframes title edits are available through Inspector and MCP. Direct canvas
dragging of elements inside the Hyperframes iframe needs a provider geometry
bridge and is not enabled in this candidate. Native canvas and timeline dragging
remain available in StudioTimelineLab.

The checked-in Hyperframes bake was independently decoded: 1920×1080 VP9,
30 fps, 150 frames, 5 seconds, transparent background, and changing entrance
frames. This sample has no authored audio. LaunchEdit is the audiovisual playback
check.

## Run

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 4188 --strictPort --force
npm run check
npm run build
npm run check:bundles
```

The engine and consumer pull requests remain unmerged for prototype review.
