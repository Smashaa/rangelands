import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so CSS/JS assets load correctly on Render (and any subpath)
  base: "./",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Avoid manualChunks: splitting React into a separate chunk can cause
    // "Cannot read properties of undefined (reading 'forwardRef')" when
    // other chunks (e.g. Radix UI) load and expect a single React instance.
    chunkSizeWarningLimit: 600,
  },
});
