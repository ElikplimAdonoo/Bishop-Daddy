import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This removes the overlay that keeps popping up
  server: {
    hmr: {
      overlay: false 
    }
  }
});