import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://elli2022.github.io",
  base: "/fe22-html-mp2-eleonora-nocentini-skoldebrink",
  outDir: "./docs",
  output: "static",
  build: {
    format: "file",
  },
});
