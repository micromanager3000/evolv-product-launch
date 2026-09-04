import { createServer } from "vite";

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
});

try {
  const { COMPOSITIONS } = await server.ssrLoadModule("/src/config.ts");
  const entries = Object.entries(COMPOSITIONS ?? {});
  if (!entries.length) throw new Error("src/config.ts exports no compositions");
  for (const [key, composition] of entries) {
    if (composition.definition?.version !== 5) throw new Error(`${key} does not use composition definition v5`);
    for (const contract of ["source", "runtime", "output"]) {
      if (!composition.definition[contract]) throw new Error(`${key} has no ${contract} contract`);
    }
    const manifest = composition.definition.authoring;
    if (!manifest || !Array.isArray(manifest.documents) || !Array.isArray(manifest.operations)) {
      throw new Error(`${key} does not expose a v5 authoring manifest`);
    }
    for (const operation of manifest.operations) {
      if (!operation.id || !operation.inputSchema) throw new Error(`${key} has an invalid operation descriptor`);
    }
  }
  console.log(`Composition registry v5 valid (${entries.length} compositions).`);
} finally {
  await server.close();
}
