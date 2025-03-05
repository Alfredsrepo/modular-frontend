import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  define: {
    "process.env": {}
  },
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"] //, 'cjs']
      // fileName: (format) => `lib.${format}.js` // 'index'
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
