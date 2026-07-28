# Evolv28 product launch — plan → generate → edit

A full launch-film pipeline in one FrameDiff project: a **moodboard**, a timed **script**, and a
**storyboard** plan the piece; **16 generative comps** (Seedream stills, Seedance clips, Seed Audio
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
        ├─ savannah-stock (Envato drone; savannahDrift = backup) ─┐   savannahThreat · cityOverload
        ├─ device-render ──▶ productStill ──▶ productReveal ────┤
        ├─ device-render ──▶ ritualStill ──▶ ritualOn ──────────┤   brain-loop (hyenaChase retired to backup)
        ├─ device-render + lifestyle-desk ──▶ deskStill ──▶ deskFocus ─┤   alpha-waves · notification-storm
        └─ voiceRef ─▶ voOrigin…voClose (ElevenLabs v3 anchor) ────┤   end-card ◀── productStill
                                                                ▼
                                                          launch-edit (70s · 1920×1080)
```

## The story (70s · 2100f @ 30)

| # | scene | time | picture |
| --- | --- | --- | --- |
| 1 | Where you evolved | 0:00–0:10 | real stock drone savannah + 2s lioness punch-in — the calm drift returns on “Then gone.”; Serengeti music bed cut dead at the city |
| 2 | Where you live now | 0:10–0:22 | 7-hard-cut overload montage (no faces; ends over-the-shoulder at a drowning desk) + notification storm + ding SFX |
| 3 | Same alarm | 0:22–0:34 | authored brain scene — messy notification pile, one agitated brain radiating alarm; slack pings per card |
| 4 | Calm, engineered | 0:34–0:47 | hero float + beta→alpha wave overlay + trial stat chips |
| 5 | The whole routine | 0:47–0:55 | nape close-up (no face) → locked over-shoulder desk push; step chips pop word-synced |
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

1. **VO** — generate and pin `voiceRef` (the narrator anchor), then the six segments: each
   references `comp://voiceRef` as an audio ref and borrows its voice settings at submit —
   one comp defines the narrator. All on ElevenLabs v3 via fal (inline audio tags like
   [pause]/[whispers] supported; fal offers preset voices, so the anchor is reference-level
   consistency, not audio cloning). The recipe prompt IS the spoken line,
   written to land ~1.5s short of its slot so no read ever clips. Cents for the whole set.
   (`elevenlabs-v3` is also wired if a segment wants a more theatrical read — its dramatic
   pause style runs ~40% longer than v2 for the same text, so re-check slot fit.)
3. **Stills** — `productStill`, `ritualStill`, and `deskStill` stage the exact
   `asset://device-render` (the worn shots also reference the site's own worn photos for
   placement); `hyenaChase` feeds the brain scene. Pin one take each.
4. **Clips** — `savannahDrift` (i2v from the imported key frame), `savannahThreat`,
   `cityOverload`. `productReveal`, `ritualOn`, and `deskFocus` stay deliberately blocked
   until their upstream stills are pinned — the `comp://` ref resolves to the approved bytes,
   which is what keeps the device's industrial design exact in every worn shot.
5. Export `launch-edit` from the Studio like any comp.

Recipes default to Seedance `fast` @ 720p for cheap iteration; flip `tier`/`resolution` in the
`.gen.json` for a 1080p standard-tier final pass. Full-price rerun of every recipe ≈ $3–5.

## House rules baked into the project

- **Testimonials stay real.** Valerie and Fredrik are real customers from the site: their stills
  and verbatim quotes appear as image + text items. No generative model ever touches a real
  person's face or voice here.
- **Claims discipline.** Trial numbers are copied verbatim from the site (+45 min, −7.2 ISI,
  PMC10307909); wellness framing, no medical promises.
- **No generated shot shows a face.** A content rule restated inside every prompt that
  contains a person: the ritual shots are framed nape-only, the desk shots strictly from
  behind, montage crowds appear as backs and silhouettes — and no faces in reflections.
- **Type** — the site uses Fraunces + Inter; comps approximate with Georgia + the system sans
  stack until licensed woff2s land in `public/fonts/`.
- **Sound** — the Serengeti bed (`asset://music-serengeti`, licensed) plays under scene 1 at
  0.28 and is cut dead by the city smash; a licensed city-ambience bed runs under scene 2, and notification SFX land with the storm overlay and
  the VO list in scene 2. Remaining from the moodboard's SOUND arc: The Violins carry the reveal (f1020) through the end card; city ambience under scene 2; slack pings in scene 3.

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
| `src/gen/*.gen.ts` + `.gen.json` | 16 recipes: 6 VO, 4 stills, 6 clips — takes pin in the manifest |
| `framediff.assets.json` | asset manifest — site imports + generated takes with full provenance |
| `framediff.config.json` | selects the project-local, Git LFS-backed `assets/` store |
