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
  console.log(`Composition registry valid (${entries.length} compositions).`);
} finally {
  await server.close();
}
