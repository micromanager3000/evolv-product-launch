# Evolv28 product launch — plan → generate → edit

## Quick start (fresh machine)

Every pinned take ships in this repo via Git LFS, so **watching, scrubbing, and rendering the
film needs no API keys**. The FrameDiff engine is pulled automatically by npm from the public
[micromanager3000/framediff](https://github.com/micromanager3000/framediff) repo — no sibling
checkout needed.

```sh
# 0. Prerequisites: Node 20+, git, git-lfs
brew install git-lfs        # macOS (Linux: apt-get install git-lfs)
git lfs install             # one-time, per machine

# 1. Clone (LFS pulls the pinned takes automatically; repo is private — use a
#    GitHub login that's been granted access)
git clone https://github.com/micromanager3000/evolv-product-launch.git
cd evolv-product-launch
#    cloned before installing LFS? fix it with:  git lfs pull

# 2. Install and run — the engine installs from GitHub as a git dependency
GIT_LFS_SKIP_SMUDGE=1 npm install
npm run dev                 # open the printed URL — you land on launch-edit
```

`GIT_LFS_SKIP_SMUDGE=1` matters: the engine repo carries LFS media of its own (example
projects) that npm's shallow clone must not try to smudge — the engine's source needs none
of it. To pull a newer engine later: `GIT_LFS_SKIP_SMUDGE=1 npm update framediff-monorepo`.

**First 60 seconds in the Studio:**

1. You land on **launch-edit** — press play to watch the full 70s film with sound.
2. Open **Script** or **Storyboard** in the left rail and scrub — the plan documents share
   the edit's timing, so they highlight in sync with the cut.
3. Click any generative comp (say `devicePutOnI2V`) to see its exact source image,
   rigid-device prompt contract, takes, and pin.
4. **Render LaunchEdit** in the topbar exports the MP4 (keep the render window visible
   until it finishes; the file lands in your downloads).

If a generative comp shows a "not in cache" slate instead of media, your clone is missing
LFS objects — run `git lfs pull`.

### API keys (only for regenerating takes)

| key | where to get it | what it unlocks | where to put it |
| --- | --- | --- | --- |
| `FAL_KEY` | [fal.ai](https://fal.ai) dashboard | Seedance video, Seedream stills, and media relay for generated inputs | ⚿ **SERVICES** in the Studio topbar, or `FAL_KEY` in the env before `npm run dev` |
| `ELEVENLABS_API_KEY` | [ElevenLabs](https://elevenlabs.io) | direct Eleven v3 narration using the anchored account voice ID | ⚿ **SERVICES** in the Studio topbar, or `ELEVENLABS_API_KEY` in the env before `npm run dev` |

Nothing regenerates implicitly — takes
only change when you press Generate — and a full re-roll of every recipe costs roughly $3–5 at
the default fast/720p tier. Keys are stored in the gitignored `.framediff/` folder and must
never be committed.

---

A full launch-film pipeline in one FrameDiff project: a **moodboard**, a timed **script**, and a
**storyboard** plan the piece; **17 generative comps** (Seedream stills, Seedance clips, and direct
ElevenLabs narration behind one voice-ID anchor comp) realize each scene; and a root **edit** cuts the pinned takes together under authored overlay
comps — a notification storm, a beta→alpha wave morph, testimonial cards, and the end card.

The subject is [Evolv28](https://evolv28.com) ("the insomnia intelligence company"): a daytime
neckband wearable that uses patented ultra-low variable magnetic fields (VCMF™) to calm cortical
hyperarousal — HRV up, stress down, +45 min sleep in a placebo-controlled RCT. Brand palette,
current manufacturer device renders and photography, two
full Vimeo interviews, and the wordmark are imported into the Git LFS-backed `assets/` store.

```
moodboard · script · storyboard          (the plan — comps in the same graph)
        │
        ├─ savannah-stock (Envato drone; savannahDrift = backup) ─┐   savannahThreat · cityOverload
        ├─ exact product refs ─▶ productStill ─▶ deviceRevealI2V ─┤
        ├─ exact fitting photo ──▶ devicePutOnI2V ──────────────┤   brain-loop (hyenaChase retired to backup)
        ├─ exact worn photo ─────▶ deviceWornI2V ───────────────┤   alpha-waves · notification-storm
        ├─ Valerie + Fredrik full Vimeo interviews ──────────────┤
        └─ voiceRef (direct voice ID) ─▶ voOrigin…voClose (Eleven v3 direct) ─┤   end-card ◀── exact hero photo
                                                                ▼
                                                          launch-edit (70s · 1920×1080)
```

## The story (70s · 2100f @ 30)

| # | scene | time | picture |
| --- | --- | --- | --- |
| 1 | Where you evolved | 0:00–0:10 | real stock drone savannah; the burst snaps in on “real danger.” and out 1.3s later — “Then... back to calm.” narrates over 3s of restored drift; Serengeti bed cut dead at the city |
| 2 | Where you live now | 0:10–0:22 | 7-hard-cut overload montage (no faces; ends over-the-shoulder at a drowning desk) + notification storm + ding SFX |
| 3 | Same alarm | 0:22–0:33 | authored brain scene — messy notification pile, one agitated brain radiating alarm; slack pings per card |
| 4 | Calm, engineered | 0:33–0:49 | the exact device floats in a cinematic navy-and-cyan ring environment; `deviceRevealI2V` uses explicit product/start-frame references and a Three.js camera/ring previz with SeedDance 2.5; a large claim card and vertical clinical-stat rail organize the overlays |
| 5 | The whole routine | 0:49–0:57 | back-view woman putting it on → direct cut to a back-view man wearing it at his desk; both SeedDance 2.5, no face, no app insert, exact rigid-device locks |
| 6 | Real people | 0:57–1:05 | **real Vimeo interview video and audio** — smaller correctly cropped video left, quote-free transcript-grounded insomnia history and sleep progress right; Valerie then Fredrik, never synthesized |
| 7 | Get yours | 1:05–1:10 | cinematic device hero on a clean full-frame end card; the real wordmark lands as an image item |

VO lines live verbatim in `src/gen/vo*.gen.json`; the Script comp is the human-readable run of
show, and its rows nest the comp that realizes each scene, so the plan scrubs in sync with the cut.

## Run it

See **Quick start** at the top. Until takes are pinned, generative comps render honest
slates — the edit, overlays, script, storyboard, and moodboard all work immediately.

## Generate and pin, in order

Add the relevant provider key (⚿ SERVICES in the topbar). Generation is the only paid
action; nothing regenerates implicitly.

1. **VO** — generate and pin `voiceRef` first. Every edit segment runs Eleven v3 directly and
   references `comp://voiceRef`, so FrameDiff inherits the anchor's account voice ID before it
   constructs the provider request. The input is a voice-setting anchor, not speech-to-speech
   cloning. Each line exposes `speed` (0.7–1.2) for approximate slot fitting and accepts Eleven
   v3 inline delivery tags such as `[whispers]`, `[excited]`, and `[pause]`. `duration` is the
   composition bound, not an exact provider target: measure each take and adjust `speed` before
   pinning. Then re-check the complete narration against the edit before export.
2. **Stills** — `productStill`, `ritualStill`, and `deskStill` now reference the current
   manufacturer Drive photography and renders. Their prompts explicitly preserve every rigid
   product proportion and forbid bending, flexing, splaying, or morphing.
3. **Final device clips** — generate and pin `deviceRevealI2V`, `devicePutOnI2V`, and
   `deviceWornI2V`. Each is a first-class composition wired directly into `launch-edit` and
   has a strict rigid-body prompt contract forbidding bending, flexing, splaying, morphing,
   added controls, and invented LEDs. `deviceRevealI2V` explicitly receives both the approved
   cinematic opening frame and the exact manufacturer photograph, then uses the Three.js blockout
   only for the slow camera push and cyan-ring rhythm. The fitting and worn shots use approved
   photoreal first frames plus the manufacturer hardware reference, both from behind with no face
   visible. The new ids deliberately cannot reuse the older inaccurate
   `productReveal`, `ritualOn`, or `deskFocus` takes; the app insert has been removed from the cut.
4. Export `launch-edit` from the Studio like any comp.

Most recipes default to Seedance `fast` @ 720p for cheap iteration. The three final device I2V
comps are intentionally checked in at `standard` @ 1080p; Studio shows the provider estimate
before a paid run (roughly $16 total for those three at the pricing encoded by this FrameDiff
version). Set them to `fast` @ 720p first if you want inexpensive motion tests.

## House rules baked into the project

- **Testimonials stay real.** Valerie and Fredrik's full Vimeo source videos are stored locally;
  the final edit uses their real picture, real voice, and exact soundbites. No generative model
  touches their faces or voices.
- **Claims discipline.** Trial numbers are copied verbatim from the site (+45 min, −7.2 ISI,
  PMC10307909); wellness framing, no medical promises.
- **Faces stay out of generated lifestyle shots.** The woman and man are shown from behind with
  neck and back-of-head visibility only; prompts forbid visible or reflected faces and lock the
  exact device geometry. The testimonials remain untouched real video and audio; montage crowds
  remain backs and silhouettes.
- **Type** — the site uses Fraunces + Inter; comps approximate with Georgia + the system sans
  stack until licensed woff2s land in `public/fonts/`.
- **Sound** — Serengeti bed under scene 1 (cut dead by the city smash), city ambience under
  scene 2 with ding/pop/soft/buzz SFX gridded to the VO's measured word onsets, a slack ping
  per notification card in scene 3, and The Violins carrying the reveal (f1000) through the
  end card. Every VO take is measured against its slot — no read clips.

## Files

| file | role |
| --- | --- |
| `src/data/moodboard.json` | the board — palette, refs, voice, claims discipline (`kind: "moodboard"`) |
| `src/compositions/Script.html` | timed run of show; rows nest their realizing comps (`kind: "script"`) |
| `src/compositions/Storyboard.html` | nine sketch panels sharing script timing (`kind: "storyboard"`) |
| `src/compositions/BrainLoop.html` | the agitated-brain scene — messy notification pile, alarm spokes (`kind: "scene"`) |
| `src/compositions/AlphaWaves.html` | beta→alpha wave morph overlay (`kind: "custom"`, alpha) |
| `src/compositions/NotificationStorm.html` | toast storm overlay (`kind: "custom"`, alpha) |
| `src/compositions/DeviceRevealBlockout.ts` | deterministic 15s Three.js camera-motion previz baked into `deviceRevealI2V` (`kind: "3d"`) |
| `src/compositions/EndCard.html` | the closer; uses the exact current product photograph (`kind: "scene"`) |
| `src/compositions/LaunchEdit.html` + `.timeline.json` | the film — v2 timeline owns every placement (`kind: "edit"`) |
| `src/gen/*.gen.ts` + `.gen.json` | 17 recipes: voiceRef + 6 VO, 4 stills, 6 clips — takes pin in the manifest |
| `framediff.assets.json` | asset manifest — site imports + generated takes with full provenance |
| `framediff.config.json` | selects the project-local, Git LFS-backed `assets/` store |
