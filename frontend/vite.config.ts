import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": `https://product-backlog-in-action-ts-production.up.railway.app/`,
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    coverage: {
      provider: "c8",
      reporter: ["text", "html"],
      all: true,
      exclude: [
        "src/App.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/pages/Register/constants.ts",
        "src/pages/Register/helper.tsx",
        "src/pages/Home/organisms/Home/interface.ts",
        "src/api",
        "src/pages/AlphaItem/organisms/Error",
        "src/pages/Home/organisms/Error",
        "*constants*",
        "node_modules/**",
        "src/utilities/**",
        ".storybook/**",
        "storybook-static/**",
        "_helpers/**",
        "dist/**",
        "public/**",
        "styleDictionary/**",
        "*.config.*",
        "*-utils.*",
      ],
    },
  },
});
