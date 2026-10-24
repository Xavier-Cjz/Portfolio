// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Example plugin for React
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // 1. Plugins
  plugins: [react(), tailwindcss()],

  // 2. Development Server Options
  server: {
    port: 3000,
    open: true, // Automatically opens the app in the browser
    proxy: {
      "/api": "http://localhost:5000", // Redirects API calls to a backend server
    },
    watch: {
      usePolling: true, // Enables polling for file changes (useful in some environments)
    },
  },

  // 3. Build/Production Options
  build: {
    outDir: "dist", // The output folder for the production build
    sourcemap: true, // Generates source maps for debugging
  },

  // 4. Path Aliases
  resolve: {
    alias: {
      "@": "/src", // Allows you to import files using '@/' instead of relative paths
    },
  },
});
