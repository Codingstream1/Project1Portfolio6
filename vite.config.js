import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",  // Fix asset loading
  build: {
    outDir: "dist",
    assetsInlineLimit: 0, // Prevents embedding large files
  },
});
