# Evolv28 product launch — plan → generate → edit

A full launch-film pipeline in one FrameDiff project: a **moodboard**, a timed **script**, and a
**storyboard** plan the piece; **15 generative comps** (Seedream stills, Seedance clips, Seed Audio
VO) realize each scene; and a root **edit** cuts the pinned takes together under authored overlay
comps — a notification storm, a beta→alpha wave morph, testimonial cards, and the end card.

The subject is [Evolv28](https://evolv28.com) ("the insomnia intelligence company"): a daytime
neckband wearable that uses patented ultra-low variable magnetic fields (VCMF™) to calm cortical
hyperarousal — HRV up, stress down, +45 min sleep in a placebo-controlled RCT. Brand palette,
device renders, lifestyle photos, testimonial stills, and the wordmark are imported from the
product site into the Git LFS-backed `assets/` store.

```
moodboard · script · storyboard          (the plan — comps in the same graph)
        │
        ├─ savannah-dawn (imported MJ frame) ──▶ savannahDrift ─┐   savannahThreat · cityOverload
        ├─ device-render ──▶ productStill ──▶ productReveal ────┤
        ├─ device-render ──▶ ritualStill ──▶ ritualOn ──────────┤   brain-loop ◀── hyenaChase
        ├─ lifestyle-desk ──▶ deskFocus ────────────────────────┤   alpha-waves · notification-storm
        └─ voOrigin (voice anchor) ──▶ voNow…voClose ───────────┤   end-card ◀── productStill
                                                                ▼
                                                          launch-edit (70s · 1920×1080)
```

## The story (70s · 2100f @ 30)

| # | scene | time | picture |
| --- | --- | --- | --- |
| 1 | Where you evolved | 0:00–0:10 | savannah drift + 2.8s lioness punch-in |
| 2 | Where you live now | 0:10–0:22 | 7-hard-cut overload montage + notification storm overlay |
| 3 | Same alarm | 0:22–0:34 | authored brain scene — inbox vs. hyena, one agitated brain |
| 4 | Calm, engineered | 0:34–0:49 | hero float + beta→alpha wave overlay + trial stat chips |
| 5 | The whole routine | 0:49–0:57 | nape close-up (no face) → over-shoulder desk arc |
| 6 | Real people | 0:57–1:05 | **real** webcam stills + verbatim quotes — never synthesized |
| 7 | Get yours | 1:05–1:10 | end card; the real wordmark lands as an image item |

VO lines live verbatim in `src/gen/vo*.gen.json`; the Script comp is the human-readable run of
show, and its rows nest the comp that realizes each scene, so the plan scrubs in sync with the cut.

## Run it

```sh
npm install        # links framediff from the sibling checkout at ../framediff
npm run dev
```

Open the printed URL to land on `launch-edit`. Until takes are pinned, generative comps render
honest slates — the edit, overlays, script, storyboard, and moodboard all work immediately.

## Generate and pin, in order

Add a fal key (⚿ SERVICES in the topbar, or `FAL_KEY` in the env). Generation is the only paid
action; nothing regenerates implicitly.

1. **`voOrigin`** — the voice anchor. Listen, re-roll until the narrator is right, pin. Every
   other VO segment clones this voice via a `comp://voOrigin` audio ref, so approve it first.
2. **`voNow` → `voClose`** — the remaining five segments, each ≤15s (Seed Audio's ceiling), each
   a few cents.
3. **Stills** — `productStill` and `ritualStill` stage the exact `asset://device-render`;
   `hyenaChase` feeds the brain scene. Pin one take each.
4. **Clips** — `savannahDrift` (i2v from the imported key frame), `savannahThreat`,
   `cityOverload`, `deskFocus` (i2v from the site's own desk photo). `productReveal` and
   `ritualOn` stay deliberately blocked until their upstream stills are pinned — the `comp://`
   ref resolves to the approved bytes.
5. Export `launch-edit` from the Studio like any comp.

Recipes default to Seedance `fast` @ 720p for cheap iteration; flip `tier`/`resolution` in the
`.gen.json` for a 1080p standard-tier final pass. Full-price rerun of every recipe ≈ $3–5.

## House rules baked into the project

- **Testimonials stay real.** Valerie and Fredrik are real customers from the site: their stills
  and verbatim quotes appear as image + text items. No generative model ever touches a real
  person's face or voice here.
- **Claims discipline.** Trial numbers are copied verbatim from the site (+45 min, −7.2 ISI,
  PMC10307909); wellness framing, no medical promises.
- **The ritual shot shows no face** — a content rule restated inside both `ritualStill` and
  `ritualOn` prompts.
- **Type** — the site uses Fraunces + Inter; comps approximate with Georgia + the system sans
  stack until licensed woff2s land in `public/fonts/`.
- **Music bed** — TODO: drop a track as `asset://music-bed` and add an audio item to
  `LaunchEdit.timeline.json` (see the moodboard's SOUND note for the intended shape).

## Files

| file | role |
| --- | --- |
| `src/data/moodboard.json` | the board — palette, refs, voice, claims discipline (`kind: "moodboard"`) |
| `src/compositions/Script.html` | timed run of show; rows nest their realizing comps (`kind: "script"`) |
| `src/compositions/Storyboard.html` | nine sketch panels sharing script timing (`kind: "storyboard"`) |
| `src/compositions/BrainLoop.html` | the inbox-vs-hyena brain scene, frame-driven (`kind: "scene"`) |
| `src/compositions/AlphaWaves.html` | beta→alpha wave morph overlay (`kind: "custom"`, alpha) |
| `src/compositions/NotificationStorm.html` | toast storm overlay (`kind: "custom"`, alpha) |
| `src/compositions/EndCard.html` | the closer; nests the pinned hero still (`kind: "scene"`) |
| `src/compositions/LaunchEdit.html` + `.timeline.json` | the film — v2 timeline owns every placement (`kind: "edit"`) |
| `src/gen/*.gen.ts` + `.gen.json` | 15 recipes: 6 VO, 3 stills, 6 clips — takes pin in the manifest |
| `framediff.assets.json` | asset manifest — site imports + generated takes with full provenance |
| `framediff.config.json` | selects the project-local, Git LFS-backed `assets/` store |
