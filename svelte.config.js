import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ fallback: "index.html" }),
    alias: {
      "framediff/three": "node_modules/framediff-monorepo/packages/framediff/src/three/index.ts",
      "framediff/studio-runtime": "node_modules/framediff-monorepo/packages/framediff/src/studio-runtime/runtime.ts",
      "@framediff/studio-model": "node_modules/framediff-monorepo/packages/studio-model/src/index.ts",
      "@framediff/studio-ui": "node_modules/framediff-monorepo/packages/studio-ui/src/index.ts",
      framediff: "node_modules/framediff-monorepo/packages/framediff/src/index.ts",
    },
    files: { assets: "public" },
  },
};
