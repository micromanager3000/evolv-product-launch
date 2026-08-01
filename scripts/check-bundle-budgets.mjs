import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const MAX_CHUNK_BYTES = 800_000;
const MAX_EAGER_CHUNK_BYTES = 500_000;
const clientRoot = path.resolve(".svelte-kit/output/client");
const manifest = JSON.parse(await readFile(path.join(clientRoot, ".vite/manifest.json"), "utf8"));

const findRecord = (reference) => manifest[reference] ??
  Object.values(manifest).find((record) => record.file === reference);
const routeEntry = Object.keys(manifest).find((key) => key.endsWith("/nodes/2.js"));
if (!routeEntry) throw new Error("Could not find the main route entry in the production manifest");

const eagerRecords = new Map();
const visit = (reference) => {
  const record = findRecord(reference);
  if (!record || eagerRecords.has(record.file)) return;
  eagerRecords.set(record.file, record);
  for (const imported of record.imports ?? []) visit(imported);
};
visit(routeEntry);

const chunksOf = async (records) => Promise.all(
  [...new Set(records.map((record) => record.file))]
    .filter((file) => file?.endsWith(".js"))
    .map(async (file) => ({ file, bytes: (await stat(path.join(clientRoot, file))).size })),
);
const allChunks = await chunksOf(Object.values(manifest));
const eagerChunks = await chunksOf([...eagerRecords.values()]);
const failures = [
  ...allChunks.filter((chunk) => chunk.bytes > MAX_CHUNK_BYTES)
    .map((chunk) => `${chunk.file} is ${chunk.bytes} bytes (max ${MAX_CHUNK_BYTES})`),
  ...eagerChunks.filter((chunk) => chunk.bytes > MAX_EAGER_CHUNK_BYTES)
    .map((chunk) => `eager ${chunk.file} is ${chunk.bytes} bytes (max ${MAX_EAGER_CHUNK_BYTES})`),
];
const threeBoundary = Object.entries(manifest)
  .find(([key]) => key.endsWith("node_modules/three/build/three.module.js"))?.[1];
if (!threeBoundary?.isDynamicEntry || eagerRecords.has(threeBoundary.file)) {
  failures.push("Three.js must remain isolated behind a dynamic entry");
}

const largest = allChunks.sort((a, b) => b.bytes - a.bytes)[0];
const largestEager = eagerChunks.sort((a, b) => b.bytes - a.bytes)[0];
console.log(`Bundle budgets: max ${(largest.bytes / 1000).toFixed(1)} kB, max eager ${(largestEager.bytes / 1000).toFixed(1)} kB`);
if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exitCode = 1;
}
