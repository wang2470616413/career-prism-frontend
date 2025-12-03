import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",

  server: {
    host: true,
    port: 6173,
  },

  build: {
    sourcemap: true,
    emptyOutDir: true,
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@/artboard": path.resolve(__dirname, "./src"),
      "@reactive-resume/schema": path.resolve(__dirname, "./libs/schema"),
      "@reactive-resume/utils": path.resolve(__dirname, "./libs/utils"),
      "@reactive-resume/hooks": path.resolve(__dirname, "./libs/hooks"),
    },
  },
});

