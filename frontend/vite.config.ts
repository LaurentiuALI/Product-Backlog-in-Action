import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './setupTests.js',
    coverage: {
      provider: "c8",
      reporter: ['text', 'html'],
      all: true,
      exclude: [
          'node_modules/**',
          'src/utilities/**',
          '.storybook/**',
          'storybook-static/**',
          '_helpers/**',
          'dist/**',
          'public/**',
          'styleDictionary/**',
          '*.config.*',
          '*-utils.*',
      ],
  }
  }
});