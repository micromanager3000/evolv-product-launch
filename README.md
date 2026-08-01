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
| `FAL_KEY` | [fal.ai](https://fal.ai) dashboard | **all** generation — Seedance video, Seedream stills, and the ElevenLabs VO endpoints run through fal | ⚿ **SERVICES** in the Studio topbar, or `FAL_KEY` in the env before `npm run dev` |

That single key is the only secret the project uses. Nothing regenerates implicitly — takes
only change when you press Generate — and a full re-roll of every recipe costs roughly $3–5 at
the default fast/720p tier. Keys are stored in the gitignored `.framediff/` folder and must
never be committed.

---

A full launch-film pipeline in one FrameDiff project: a **moodboard**, a timed **script**, and a
**storyboard** plan the piece; **17 generative comps** (Seedream stills, Seedance clips, ElevenLabs
VO behind a single voice-anchor comp) realize each scene; and a root **edit** cuts the pinned takes together under authored overlay
comps — a notification storm, a beta→alpha wave morph, testimonial cards, and the end card.

The subject is [Evolv28](https://evolv28.com) ("the insomnia intelligence company"): a daytime
neckband wearable that uses patented ultra-low variable magnetic fields (VCMF™) to calm cortical
hyperarousal — HRV up, stress down, +45 min sleep in a placebo-controlled RCT. Brand palette,
current manufacturer device renders and photography, the actual app Session Setup screen, two
full Vimeo interviews, and the wordmark are imported into the Git LFS-backed `assets/` store.

```
moodboard · script · storyboard          (the plan — comps in the same graph)
        │
        ├─ savannah-stock (Envato drone; savannahDrift = backup) ─┐   savannahThreat · cityOverload
        ├─ exact hero photo + Three.js blockout ─▶ deviceRevealI2V ─┤
        ├─ exact fitting photo ──▶ devicePutOnI2V ──────────────┤   brain-loop (hyenaChase retired to backup)
        ├─ actual app Start Session ─▶ deviceWornI2V ───────────┤   alpha-waves · notification-storm
        ├─ Valerie + Fredrik full Vimeo interviews ──────────────┤
        └─ voiceRef ─▶ voOrigin…voClose (ElevenLabs · v3 + v2) ─┤   end-card ◀── exact hero photo
                                                                ▼
                                                          launch-edit (70s · 1920×1080)
```

## The story (70s · 2100f @ 30)

| # | scene | time | picture |
| --- | --- | --- | --- |
| 1 | Where you evolved | 0:00–0:10 | real stock drone savannah; the burst snaps in on “real danger.” and out 1.3s later — “Then... back to calm.” narrates over 3s of restored drift; Serengeti bed cut dead at the city |
| 2 | Where you live now | 0:10–0:22 | 7-hard-cut overload montage (no faces; ends over-the-shoulder at a drowning desk) + notification storm + ding SFX |
| 3 | Same alarm | 0:22–0:33 | authored brain scene — messy notification pile, one agitated brain radiating alarm; slack pings per card |
| 4 | Calm, engineered | 0:33–0:49 | `deviceRevealI2V`: 1080p generation from the exact Drive hero photo plus the baked `device-reveal-blockout` Three.js motion guide; camera-only push with rigid-device locks + beta→alpha overlay; “This is impacting people's sleep and causing hyperarousal” lands at exactly 0:35; trial stat chips follow |
| 5 | The whole routine | 0:49–0:57 | `devicePutOnI2V` from the exact fitting photo → actual app Start Session control → `deviceWornI2V` from the exact worn-device photo; picture-synced steps say put it on, start it in the app, go about your day |
| 6 | Real people | 0:57–1:05 | **real Vimeo interview video and audio** — Valerie then Fredrik; never synthesized |
| 7 | Get yours | 1:05–1:10 | exact product photograph on the end card; the real wordmark lands as an image item |

VO lines live verbatim in `src/gen/vo*.gen.json`; the Script comp is the human-readable run of
show, and its rows nest the comp that realizes each scene, so the plan scrubs in sync with the cut.

## Run it

See **Quick start** at the top. Until takes are pinned, generative comps render honest
slates — the edit, overlays, script, storyboard, and moodboard all work immediately.

## Generate and pin, in order

Add a fal key (⚿ SERVICES in the topbar, or `FAL_KEY` in the env). Generation is the only paid
action; nothing regenerates implicitly.

1. **VO** — generate and pin `voiceRef` (the narrator anchor), then the six segments: each
   references `comp://voiceRef` as an audio ref and borrows its voice settings at submit —
   one comp defines the narrator. Cents for the whole set. Most segments run ElevenLabs v3
   (inline audio tags like [pause] supported); `voNow`/`voBrain` run Multilingual v2, whose
   `speed` param gives deterministic length where v3's expressive variance blew the slot.
   fal offers preset voices only, so the anchor is reference-level consistency, not audio
   cloning. Always re-measure a fresh take against its slot before pinning.
2. **Stills** — `productStill`, `ritualStill`, and `deskStill` now reference the current
   manufacturer Drive photography and renders. Their prompts explicitly preserve every rigid
   product proportion and forbid bending, flexing, splaying, or morphing.
3. **Final device clips** — generate and pin `deviceRevealI2V`, `devicePutOnI2V`, and
   `deviceWornI2V`. Each is a first-class composition wired directly into `launch-edit` and
   has a strict rigid-body prompt contract forbidding bending, flexing, splaying, morphing,
   added controls, and invented LEDs. `deviceRevealI2V` combines the exact approved hero photo
   with `comp://device-reveal-blockout`: FrameDiff automatically bakes the 15-second Three.js
   previz when you click Generate, and the prompt limits it to camera motion, framing, floor
   contact, and timing while the photo remains the sole appearance authority. The fitting and
   worn shots remain true single-image I2V. The new ids deliberately cannot reuse the older inaccurate
   `productReveal`, `ritualOn`, or `deskFocus` takes. The factual app-start beat remains the
   imported app UI footage.
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
- **No synthetic people.** The lifestyle I2V shots animate only the exact approved Drive
  photographs and explicitly lock each photographed person's identity, face, expression, hands,
  and clothing. The testimonials remain untouched real video and audio; montage crowds remain
  backs and silhouettes.
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
