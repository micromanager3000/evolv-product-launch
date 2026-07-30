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
3. Click any generative comp (say `ritualOn`) to see its recipe, takes, and pin.
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
device renders, lifestyle photos, testimonial stills, and the wordmark are imported from the
product site into the Git LFS-backed `assets/` store.

```
moodboard · script · storyboard          (the plan — comps in the same graph)
        │
        ├─ savannah-stock (Envato drone; savannahDrift = backup) ─┐   savannahThreat · cityOverload
        ├─ device-render ──▶ productStill ──▶ productReveal ────┤
        ├─ device-render ──▶ ritualStill ──▶ ritualOn ──────────┤   brain-loop (hyenaChase retired to backup)
        ├─ device-render + lifestyle-desk ──▶ deskStill ──▶ deskFocus ─┤   alpha-waves · notification-storm
        └─ voiceRef ─▶ voOrigin…voClose (ElevenLabs · v3 + v2) ────┤   end-card ◀── productStill
                                                                ▼
                                                          launch-edit (70s · 1920×1080)
```

## The story (70s · 2100f @ 30)

| # | scene | time | picture |
| --- | --- | --- | --- |
| 1 | Where you evolved | 0:00–0:10 | real stock drone savannah; the burst snaps in on “real danger.” and out 1.3s later — “Then... back to calm.” narrates over 3s of restored drift; Serengeti bed cut dead at the city |
| 2 | Where you live now | 0:10–0:22 | 7-hard-cut overload montage (no faces; ends over-the-shoulder at a drowning desk) + notification storm + ding SFX |
| 3 | Same alarm | 0:22–0:33 | authored brain scene — messy notification pile, one agitated brain radiating alarm; slack pings per card |
| 4 | Calm, engineered | 0:33–0:49 | hero float + beta→alpha wave overlay + trial stat chips |
| 5 | The whole routine | 0:49–0:57 | nape close-up (no face) → locked over-shoulder desk push; step chips pop word-synced |
| 6 | Real people | 0:57–1:05 | **real** webcam stills + verbatim quotes — never synthesized |
| 7 | Get yours | 1:05–1:10 | end card; the real wordmark lands as an image item |

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
2. **Stills** — `productStill`, `ritualStill`, and `deskStill` stage the exact
   `asset://device-render` (the worn shots also reference the site's own worn photos for
   placement). Pin one take each. (`hyenaChase` is retired to backup with the old
   two-panel brain scene.)
3. **Clips** — `savannahThreat` and `cityOverload` are text-to-video; `productReveal`,
   `ritualOn`, and `deskFocus` stay deliberately blocked until their upstream stills are
   pinned — the `comp://` ref resolves to the approved bytes, which is what keeps the
   device's industrial design exact in every worn shot. (Scene 1's aerial is licensed
   stock — `savannahDrift` remains registered as the generative backup.)
4. Export `launch-edit` from the Studio like any comp.

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
| `src/compositions/EndCard.html` | the closer; nests the pinned hero still (`kind: "scene"`) |
| `src/compositions/LaunchEdit.html` + `.timeline.json` | the film — v2 timeline owns every placement (`kind: "edit"`) |
| `src/gen/*.gen.ts` + `.gen.json` | 17 recipes: voiceRef + 6 VO, 4 stills, 6 clips — takes pin in the manifest |
| `framediff.assets.json` | asset manifest — site imports + generated takes with full provenance |
| `framediff.config.json` | selects the project-local, Git LFS-backed `assets/` store |
