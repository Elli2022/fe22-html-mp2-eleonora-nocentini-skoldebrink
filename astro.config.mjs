import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://elli2022.github.io",
  base: "/html-css-restaurant-mini-project",
  outDir: "./docs",
  output: "static",
  build: {
    format: "file",
  },
});
