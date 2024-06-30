import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(root, "components"),
      assets: resolve(root, "assets"),
      pages: resolve(root, "pages"),
      services: resolve(root, "services"),
    },
  },
});
