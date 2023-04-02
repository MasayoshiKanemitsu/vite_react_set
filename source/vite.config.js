import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";

// https://ja.vitejs.dev/config/
export default defineConfig({
  // root: "src",
  publicDir: "src/public",
  build: {
    outDir: "public_html",
  },
  server: {
    port: 3000,
  },
  plugins: [react(), generouted()],
});
