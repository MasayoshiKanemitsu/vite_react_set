import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://ja.vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "public",
  build: {
    outDir: "../public_html",
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
