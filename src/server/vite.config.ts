import { defineConfig } from "vite";
import { builtinModules } from "node:module";
import { loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  // Load environment variables from project root
  const rootDir = resolve(__dirname, "../../");
  const env = loadEnv(mode, rootDir, "");

  console.log(`[VITE] Loading env from: ${rootDir}`);
  console.log(
    `[VITE] API_NINJAS_KEY: ${
      env.API_NINJAS_KEY
        ? "FOUND (" + env.API_NINJAS_KEY.substring(0, 8) + "...)"
        : "NOT FOUND"
    }`,
  );

  return {
    define: {
      "process.env.API_NINJAS_KEY": JSON.stringify(env.API_NINJAS_KEY || ""),
    },
    ssr: {
      noExternal: true,
    },
    logLevel: "warn",
    build: {
      ssr: "index.ts",
      outDir: "../../dist/server",
      emptyOutDir: true,
      target: "node22",
      sourcemap: true,
      rollupOptions: {
        external: [...builtinModules],
        output: {
          format: "cjs",
          entryFileNames: "index.cjs",
          inlineDynamicImports: true,
        },
      },
    },
  };
});
