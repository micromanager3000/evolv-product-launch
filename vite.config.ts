import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { fileURLToPath, URL } from "node:url";
// Relative import: vite.config.ts is bundled by esbuild before the app's alias config
// exists, so "framediff/vite" would not resolve here. The engine arrives as a git
// dependency on the public monorepo (package.json → framediff-monorepo), so the plugin
// and every alias below reach into node_modules/framediff-monorepo.
import { framediffDev } from "./node_modules/framediff-monorepo/packages/framediff/vite-plugin";

const pkg = (path: string) => fileURLToPath(new URL(`./node_modules/framediff-monorepo/packages/${path}`, import.meta.url));

// Resolve the framediff packages to their TypeScript source so Vite processes them as part
// of this app's module graph. Exact-match aliases (regex) so subpaths like "framediff/three"
// resolve independently instead of being prefix-rewritten under src/index.ts.
export default defineConfig({
  plugins: [sveltekit(), framediffDev()],
  server: { watch: { ignored: ["**/.svelte-kit/**", "**/build/**"] } },
  resolve: {
    dedupe: ["svelte"],
    alias: [
      { find: /^framediff$/, replacement: pkg("framediff/src/index.ts") },
      { find: /^framediff\/three$/, replacement: pkg("framediff/src/three/index.ts") },
      { find: /^framediff\/studio-runtime$/, replacement: pkg("framediff/src/studio-runtime/runtime.ts") },
      { find: /^@framediff\/studio-model$/, replacement: pkg("studio-model/src/index.ts") },
      { find: /^@framediff\/studio-ui$/, replacement: pkg("studio-ui/src/index.ts") },
    ],
  },
});
