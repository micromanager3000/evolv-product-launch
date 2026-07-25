import { defineMoodboardComposition, type MoodboardData } from "framediff";
import board from "../data/moodboard.json";

// The board's content lives in src/data/moodboard.json — read live by the stock moodboard
// surface (canvas, pan, zoom, minimap, drag, in-place text editing) and written back on
// every edit, so board changes review as data diffs. The seed below only covers
// contexts where the dev filesystem is unavailable.
const seed: MoodboardData = board as MoodboardData;

export const moodboardComp = defineMoodboardComposition(seed, {
  id: "Moodboard",
  name: "Evolv28 — moodboard",
  title: "Evolv28 — moodboard",
  width: 1280,
  height: 720,
  fps: 30,
  durationInFrames: 300,
  boardWidth: 2400,
  boardHeight: 1400,
  dataFile: "src/data/moodboard.json",
  file: "src/compositions/Moodboard.ts",
  module: "src/compositions/Moodboard.ts",
  exportName: "moodboardComp",
  library: true,
});
