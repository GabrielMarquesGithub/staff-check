import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // Plugin para importação de SVG

export default defineConfig({
  plugins: [svgr(), react()],
});
