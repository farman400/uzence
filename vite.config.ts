// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Split react and react-dom into a separate chunk
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-vendors";
          }

          // Split Storybook core libraries
          if (id.includes("@storybook")) {
            return "storybook-vendors";
          }

          // Split other large node_modules packages (optional)
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit if necessary
  },
});
